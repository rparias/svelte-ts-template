# svelte typescript app template

This is a project template for [Svelte](https://svelte.dev) apps with Typescript.

This template includes jest, testing library, prettier, eslint, lint-stage and husky.

_Note that you will need to have [Node.js](https://nodejs.org) installed._

## Get started

Install the dependencies...

```bash
cd your-folder
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for _any_ path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Unit Tests and UI Tests

### Unit Tests

To run your unit tests:

```bash
npm run test
```

### UI Tests

To run your unit tests:

```bash
npm run test:ui
```

## Deploying to the web

### With [Netlify](https://www.netlify.com/)

You need to create two secrets on your repository:

- NETLIFY_AUTH_TOKEN (you can create a new one on settings user/applications)
- NETLIFY_SITE_ID (unique identifier your for site)

Then, a github workflow is going to deploy your app when you commit to master.

In adition, there is an aditional workflow file called `build-and-push-docker-image.yml` that allows you to build a docker image and push it to Dockerhub.
