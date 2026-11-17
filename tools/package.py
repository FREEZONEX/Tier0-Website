#!/usr/bin/env python3
"""Build a deterministic site ZIP with the existing deployment root layout."""
import argparse
import hashlib
import re
import subprocess
from pathlib import Path
from zipfile import ZipFile, ZipInfo, ZIP_DEFLATED
from validate import ROOT, SITE, validate

parser = argparse.ArgumentParser()
parser.add_argument('--version', required=True, help='Unique release version, e.g. 2026.11.13.2')
args = parser.parse_args()
if not re.fullmatch(r'[A-Za-z0-9][A-Za-z0-9._-]*', args.version):
    parser.error('Version may contain letters, digits, dots, underscores and hyphens only')
validate()
out = ROOT / 'dist' / f'tier0-cn-site-{args.version}.zip'
if out.exists():
    parser.error(f'Release already exists: {out.name}; choose a new version')
out.parent.mkdir(exist_ok=True)
with ZipFile(out, 'w', compression=ZIP_DEFLATED, compresslevel=6) as archive:
    for file in sorted(SITE.rglob('*')):
        if not file.is_file() or file.name == '.DS_Store':
            continue
        info = ZipInfo('t02801-site/' + file.relative_to(SITE).as_posix(), (2020, 1, 1, 0, 0, 0))
        info.compress_type = ZIP_DEFLATED
        info.external_attr = 0o100644 << 16
        archive.writestr(info, file.read_bytes(), compress_type=ZIP_DEFLATED, compresslevel=6)
checksum = hashlib.sha256(out.read_bytes()).hexdigest()
out.with_suffix('.zip.sha256').write_text(f'{checksum}  {out.name}\n')
try:
    commit = subprocess.check_output(['git', 'rev-parse', 'HEAD'], cwd=ROOT, text=True).strip()
    status = subprocess.check_output(['git', 'status', '--porcelain'], cwd=ROOT, text=True).strip()
except subprocess.CalledProcessError:
    commit, status = 'uncommitted', 'uncommitted'
out.with_suffix('.zip.commit.txt').write_text(f'commit={commit}\nworking_tree={"dirty" if status else "clean"}\n')
print(out)
print('SHA256:', checksum)
