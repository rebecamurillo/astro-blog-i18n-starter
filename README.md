# Astro Blog I118n Starter Kit: Blog
Features:

- ✅ Same features as Astro Starter Kit Blog
- ✅ i18n integration
- ✅ multilingual configuration defaults to EN, FR and ES 

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
│       ├── [lang]/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name and its language parameter. 

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more. 

Any static assets, like images, can be placed in the `public/` directory.

- Gérer les traductions danssrc/i18n/ui.ts
- Modifier cette page danssrc/pages/index.astro
- Modifier les pages traduites danssrc/pages/[lang]/...
- Modifier les éléments de l'en-tête du site danssrc/components/Header.astro
- Ajouter votre nom au pied de page danssrc/components/Footer.astro
- Découvrez les articles de blog inclus en ES, EN et FR danssrc/pages/blog/
- Personnalisez la mise en page générale du site danssrc/layouts/Layout.astro
- Personnalisez la mise en page de la page des articles de blog danssrc/layouts/BlogPost.astro

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

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of [Astro Starter Kit Blog template](https://github.com/withastro/astro/tree/latest/examples/blog).
