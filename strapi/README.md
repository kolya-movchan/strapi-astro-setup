# Getting started with Strapi

## Introduction 🚀

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

## Getting Started 🏁

1. Make sure you are in ./strapi directoty.

2. Run `npm install` to install dependencies.

3. Start the development server with `npm run develop`.

4. Open your browser and navigate to `http://localhost:1337`.

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build

```

## FYI ℹ️

Before installing Strapi, the following requirements must be installed on your computer:

Node.js: Only Maintenance and LTS versions are supported (v16, v18, and v20).
Node v18.x is recommended for Strapi v4.3.9 and above
Node v16.x is recommended for Strapi v4.0.x to v4.3.8.
Your preferred Node.js package manager:
npm (v6 and above)
yarn

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── .tmp/
│   └── data.db
├── .config/
│   ├── admin.js
│   ├── api.js
│   ├── database.js
│   ├── middlewares.js
│   └── server.js
├── database/
│   └── migrations/
├── public/
│   └── uploads/
├── src/
│   ├── admin/
│   │   └── app.example.js
│   │   └── webpack.config.example.js
│   ├── api/
│   │   └── cat/
│   │        └── content-types
│   │        └── controllers
│   │        └── routes
│   │        └── services
│   └── extensions/
```
