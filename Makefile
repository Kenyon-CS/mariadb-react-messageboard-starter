.PHONY: install build initdb run clean

# Install dependencies for both parts
install:
	cd server && npm install
	cd client && npm install

# Build the React app into client/dist (served by Express)
build:
	cd client && npm run build

# Initialize the database schema (v1 demo or whatever schema you point at)
# Assumes server/.env provides DB_* variables (user=dbname=linux username, pass=student ID)
initdb:
	@echo "Initializing schema in your MariaDB database..."
	cd server && ./scripts/db-init.sh ../docs/schema_v1.sql

# Single-run: build client then start server (which serves client/dist)
run: build
	cd server && npm start

# Optional cleanup
clean:
	rm -rf client/dist
