(() => {
  const china = 'https://tier0.cn';
  const international = 'https://tier0.app';
  const origin = location.origin;
  const scriptUrl = document.currentScript?.src;
  const root = document.documentElement;
  const marker = 'tier0_geo_prompt_seen=1';
  const started = 'data-tier0-geo-started';
  const hasSeen = () => document.cookie.split(';').some((cookie) => cookie.trim() === marker);

  if ((origin !== china && origin !== international) || !scriptUrl || root.hasAttribute(started) || hasSeen()) return;
  root.setAttribute(started, '');

  const cssUrl = new URL('../styles/geo-guidance.v1.css', scriptUrl);
  const lifetime = new AbortController();
  window.addEventListener('pagehide', () => lifetime.abort(), { once: true });

  async function recommend() {
    const request = new AbortController();
    const cancel = () => request.abort();
    lifetime.signal.addEventListener('abort', cancel, { once: true });
    const timeout = window.setTimeout(cancel, 2500);
    try {
      const response = await fetch(`${china}/geo-check.txt`, {
        credentials: 'omit',
        cache: 'no-store',
        signal: request.signal,
      });
      const country = response.headers.get('X-Visitor-Country')?.trim().toUpperCase();
      if (!response.ok || !country || !/^[A-Z]{2}$/.test(country) || country === 'XX' || country === 'ZZ') return;
      if (!new Intl.DisplayNames('en', { type: 'region', fallback: 'none' }).of(country)) return;
      return country === 'CN' ? china : international;
    } catch {
      return undefined;
    } finally {
      window.clearTimeout(timeout);
      lifetime.signal.removeEventListener('abort', cancel);
    }
  }

  function loadStyles() {
    return new Promise((resolve) => {
      const link = document.createElement('link');
      const loaded = () => finish(true);
      const failed = () => finish(false);
      const timeout = window.setTimeout(failed, 2500);

      function finish(ok) {
        window.clearTimeout(timeout);
        lifetime.signal.removeEventListener('abort', failed);
        link.removeEventListener('load', loaded);
        link.removeEventListener('error', failed);
        if (!ok) link.remove();
        resolve(ok);
      }

      link.rel = 'stylesheet';
      link.href = cssUrl.href;
      link.addEventListener('load', loaded);
      link.addEventListener('error', failed);
      lifetime.signal.addEventListener('abort', failed, { once: true });
      document.head.append(link);
    });
  }

  function mountBanner(target) {
    const zh = /^zh(?:-|$)/i.test(root.lang);
    const copy = zh
      ? {
          title: '站点访问提示',
          message: target === china
            ? '检测到你正从中国内地访问。为了提供更适合你所在地区的服务，建议前往 Tier0 中国站。'
            : '检测到你正从中国内地以外地区访问。为了提供更适合你所在地区的服务，建议前往 Tier0 国际站。',
          skip: '跳过', go: '前往', close: '关闭',
        }
      : {
          title: 'Regional site recommendation',
          message: target === china
            ? "You're visiting from mainland China. For a better experience, we recommend visiting the Tier0 China site."
            : "You're visiting from outside mainland China. For a better experience, we recommend visiting the Tier0 international site.",
          skip: 'Skip', go: 'Go', close: 'Close',
        };

    const banner = document.createElement('section');
    banner.className = 'tier0-geo-banner';
    banner.setAttribute('aria-label', copy.title);

    const message = document.createElement('p');
    message.setAttribute('role', 'status');

    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('viewBox', '0 0 24 24');
    icon.setAttribute('aria-hidden', 'true');
    const shape = document.createElementNS(icon.namespaceURI, 'path');
    shape.setAttribute('d', 'M3 9v6h4l3 5h3l-2-5h2l7 4V5l-7 4H3Z');
    icon.append(shape);
    message.append(icon, copy.message);

    const actions = document.createElement('div');
    actions.className = 'tier0-geo-actions';
    const skip = document.createElement('button');
    skip.type = 'button';
    skip.textContent = copy.skip;
    const go = document.createElement('a');
    go.href = `${target}/`;
    go.textContent = copy.go;
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'tier0-geo-close';
    close.setAttribute('aria-label', copy.close);
    actions.append(skip, go, close);
    banner.append(message, actions);

    document.cookie = `${marker}; Domain=${location.hostname}; Path=/; Secure; SameSite=Lax`;
    document.body.prepend(banner);
    const restoreNavigation = alignFixedNavigation(banner);

    function dismiss() {
      restoreNavigation();
      banner.remove();
      lifetime.signal.removeEventListener('abort', dismiss);
    }

    skip.addEventListener('click', dismiss);
    close.addEventListener('click', dismiss);
    lifetime.signal.addEventListener('abort', dismiss, { once: true });
  }

  function alignFixedNavigation(banner) {
    // The exported Chinese site and published Framer site use different navigation classes.
    const selector = '#main :is(.framer-9lMB7, .framer-r3qTJ)';
    const navAttribute = 'data-tier0-geo-offset';
    const heightProperty = '--tier0-geo-banner-height';
    let marked = new Set();
    let frame = 0;

    function updateHeight() {
      root.style.setProperty(heightProperty, `${banner.getBoundingClientRect().height}px`);
    }

    function sync() {
      frame = 0;
      const fixed = new Set();
      for (const nav of document.querySelectorAll(selector)) {
        if (!nav.getClientRects().length) continue;
        let wrapper;
        for (let node = nav; node && node.id !== 'main'; node = node.parentElement) {
          const style = getComputedStyle(node);
          if (style.position === 'fixed' && (marked.has(node) || style.top === '0px')) wrapper = node;
        }
        if (wrapper) fixed.add(wrapper);
      }
      for (const nav of marked) {
        if (!fixed.has(nav)) nav.removeAttribute(navAttribute);
      }
      for (const nav of fixed) {
        if (!marked.has(nav)) nav.setAttribute(navAttribute, '');
      }
      marked = fixed;
      banner.classList.toggle('tier0-geo-pinned', marked.size > 0);
      updateHeight();
    }

    function scheduleSync() {
      if (!frame) frame = window.requestAnimationFrame(sync);
    }

    sync();
    const size = new ResizeObserver(updateHeight);
    size.observe(banner);
    const navigation = new MutationObserver(scheduleSync);
    navigation.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('resize', scheduleSync);

    return () => {
      window.removeEventListener('resize', scheduleSync);
      window.cancelAnimationFrame(frame);
      size.disconnect();
      navigation.disconnect();
      for (const nav of marked) nav.removeAttribute(navAttribute);
      root.style.removeProperty(heightProperty);
    };
  }

  async function init() {
    if (lifetime.signal.aborted) return;
    const target = await recommend();
    if (!target || target === origin || lifetime.signal.aborted || hasSeen()) return;
    if (await loadStyles() && !lifetime.signal.aborted && !hasSeen()) mountBanner(target);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else void init();
})();
