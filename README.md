# restylecss.com website

This is the source for [restylecss.com](http://www.restylecss.com), which is a hub for [`eyeglass-restyle`](https://github.com/eoneill/eyeglass-restyle).

## Installation

You know the drill...

```sh
npm install
npm install gulp --global # if you don't already have the gulp cli installed
```

## Deploying locally

```sh
gulp serve # will start the dev server
gulp serve:staging # will start the staging server (similar to prod build)
```

## Building

```sh
gulp build
```

## Deploying to the web

```sh
gulp deploy
```

To perform a dry-run deployment (without pushing)...

```sh
gulp deploy:dry
```

## Tests

Make sure you didn't break anything by running the tests :)

```sh
gulp test
```
