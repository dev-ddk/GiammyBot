# GiammyBot

This bot automatizes Giammy. That's it. That's the thing.

## Deployment

Set the `BOT_TOKEN` environment variable in a `.env` file. Then, run:

```sh
$ docker-compose up -d # with --build to reload code changes
```

## Development

Feel free to modify `index.js`, or to add other files. If you want to test this locally, run:

```sh
$ npm install
$ npm run start # or `npm run dev` if you want hot reloading
```
