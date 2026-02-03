.PHONY: install initdb-v1 initdb-v2 run-server run-client

install:
	cd server && npm install
	cd client && npm install

initdb-v1:
	@echo "Initializing v1 schema in your DB..."
	cd server && ./scripts/db-init.sh ../docs/schema_v1.sql

initdb-v2:
	@echo "Initializing v2 schema in your DB..."
	cd server && ./scripts/db-init.sh ../docs/schema_v2.sql

run-server:
	cd server && npm run dev

run-client:
	cd client && npm run dev
