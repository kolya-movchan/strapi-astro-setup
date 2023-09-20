# Astro Starter Kit: Basics

## Introduction 🚀
The Astro Starter Kit is designed to kickstart your development journey with Astro, an exciting new static site generator (SSG) and dynamic runtime framework. Astro offers the best of both worlds, allowing you to build fast, efficient static sites while providing the flexibility to add dynamic functionality when needed.

With this kit, you'll get up and running quickly with a basic Astro project structure and essential tools. Whether you're new to Astro or looking to explore its capabilities, this kit provides a solid foundation for your project.

## Getting Started 🏁

1. Make sure you are in ./astro directoty.

2. Run `npm install` to install dependencies.

3. Start the development server with `npm run dev`.

4. Open your browser and navigate to `http://localhost:4321`.

## FYI ℹ️

Astro has changed default: port 3000
In Astro v2.x, Astro ran on port 3000 by default.
Astro v3.0 changes the default port to 4321. 🚀

Also, make sure to have the Node version >= 18.14.1

## API 🌐
The base link to fetch data is `http://localhost:1337/api`
`cats` is a current endpoint to fetch all cats data from strapi
`populate=%2A` parameter gives access to receive image object all along with the main request to have access to cats images

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── screenshots/
├── src/
│   ├── api/
│   │   └── fetch.ts
│   ├── components/
│   │   └── Cat.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│   │  └── index.astro
│   └── styles/
│   │   └── global.css
│   └── types/
│       └── Cat.ts
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into [Discord server](https://astro.build/chat).
