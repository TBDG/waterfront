# Waterfront Fish SLC Store Site


### Getting Started

#### Tech Needed

You will need [Nodejs](https://nodejs.org/en/) and [Docker](https://www.docker.com/products/docker-desktop)

#### Starting Steps for Local Development

Clone this repo

Run `npm install` This will also install subprojects

Setup .env `cp .env.example .env`

(Optional) if you need to have a database live you will need to run these two steps (requires Docker)
* `npm run start:local:postgres`
* `npm run script:seedDb`

Run `npm start` This should start subprojects if they are needed

### Project structure

This has sub projects one for public one for server and we will add more if needed in the future. Each sub-project will have details in those folders

[public readme](./public/readme.md) and [server readme](./server/readme.md) 

each of these should have `npm start` for local development and any scrips related to development / build / deploy running in production should be in the package.json scripts section
