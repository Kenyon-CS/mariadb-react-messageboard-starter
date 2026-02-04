.PHONY: install initdb run-server run-client run

# Install dependencies for both server and client
install:
	cd server && npm install
	cd client && npm install

# Initialize database with v1 demo schema
initdb:
	@echo "Initializing v1 demo schema in your MariaDB database..."
	cd server && ./scripts/db-init.sh ../docs/schema_v1.sql

# Run Express API
run-server:
	cd server && npm run dev

# Run React (Vite) frontend
run-client:
	cd client && npm run dev

# Convenience target: reminder only
run:
	@echo "Run in two terminals:"
	@echo "  make run-server"
	@echo "  make run-client"
