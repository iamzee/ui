# Opinionated [Remix](https://remix.run/docs) Starter Template

This is an opinionated remix starter template with the following opinions

- 💻 [Express](https://expressjs.com/) adapter
- 🎨 [TailwindCSS](https://tailwindcss.com/)
- 🧑‍💼 Node version manager - [nvm](https://github.com/nvm-sh/nvm)
- 🦋 [Prettier](https://prettier.io/)

To start a remix project with this template, run

```sh
npx create-remix@latest --template iamzee/remix-starter
```

## Prerequisite

This project uses [nvm](https://github.com/nvm-sh/nvm) as a node version manager. Before running any npm command, make sure you are in the correct node environment (specified in `.nvmrc` file)

To install the node with the version specified in `.nvmrc`, run:

```sh
nvm install
```

This will automatically detect the .nvmrc file and install the specified node version.

Now, to use that node version, run:

```sh
nvm use
```

You can verify the node version, by running:

```sh
node --version
```

## Development

Start the Remix development asset server and the Express server by running:

```sh
npm run dev
```

This starts your app in development mode, which will purge the server require cache when Remix rebuilds assets so you don't need a process manager restarting the express server.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying express applications you should be right at home just make sure to deploy the output of `remix build`

- `build/`
- `public/build/`


### Todo

- [ ] Add light/dark mode toggle