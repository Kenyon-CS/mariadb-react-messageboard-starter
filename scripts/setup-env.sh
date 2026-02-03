#!/usr/bin/env bash
set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$HERE/.." && pwd)"

USER_NAME="$(whoami)"

echo "Detected Linux username: $USER_NAME"
echo "Assuming DB name is also:  $USER_NAME"
echo
read -rp "Enter the last 2 digits of your student ID (xx for port 41xx): " SID2

if [[ ! "$SID2" =~ ^[0-9]{2}$ ]]; then
  echo "Error: must be exactly 2 digits."
  exit 1
fi

PORT="41${SID2}"

cat > "$ROOT/server/.env" <<EOF
DB_HOST=localhost
DB_USER=$USER_NAME
DB_PASSWORD=$SID2
DB_NAME=$USER_NAME

PORT=$PORT
SESSION_SECRET=dev-change-me
CLIENT_ORIGIN=http://localhost:5173
EOF

cat > "$ROOT/client/.env" <<EOF
VITE_API_ORIGIN=http://localhost:$PORT
EOF

echo
echo "Wrote:"
echo "  server/.env  (PORT=$PORT, DB_USER=$USER_NAME, DB_NAME=$USER_NAME, DB_PASSWORD=$SID2)"
echo "  client/.env  (VITE_API_ORIGIN=http://localhost:$PORT)"
