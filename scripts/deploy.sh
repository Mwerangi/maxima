#!/usr/bin/env bash
# Build the static site and force-push out/ to the `deploy` branch.
set -euo pipefail
cd "$(dirname "$0")/.."

REMOTE_URL=$(git remote get-url origin)

npm run build

cd out
rm -rf .git
git init -q
git checkout -q -b deploy
git add -A
git commit -qm "deploy: $(date '+%Y-%m-%d %H:%M')"
git push -f "$REMOTE_URL" deploy
rm -rf .git

echo "✓ deploy branch updated on $REMOTE_URL"
