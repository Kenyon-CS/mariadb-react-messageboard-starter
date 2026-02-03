#!/usr/bin/env bash
set -euo pipefail

SCHEMA_PATH="${1:-}"
if [[ -z "$SCHEMA_PATH" ]]; then
  echo "Usage: ./scripts/db-init.sh path/to/schema.sql"
  exit 1
fi

if [[ ! -f "$SCHEMA_PATH" ]]; then
  echo "Schema file not found: $SCHEMA_PATH"
  exit 1
fi

if [[ -f ".env" ]]; then
  # shellcheck disable=SC1091
  source ".env"
else
  echo "Missing server/.env. Run ../scripts/setup-env.sh first."
  exit 1
fi

echo "Loading schema into DB '$DB_NAME' as user '$DB_USER' on host '$DB_HOST'..."
mariadb -h "$DB_HOST" -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" < "$SCHEMA_PATH"
echo "Done."
