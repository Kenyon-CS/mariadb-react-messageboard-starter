.PHONY: install build initdb run clean

install:
	cd server && npm install
	cd client && npm install

build:
	cd client && npm run build

initdb:
	cd server && ./scripts/db-init.sh ../docs/schema_v1.sql

run: build
	cd server && npm start

clean:
	rm -rf client/dist
