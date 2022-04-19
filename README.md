# vCoincheck
## _Product power by vKnightHub

[![vVknightHub](https://i.ibb.co/NyNHBt9/powerby.png)](http://vknight.io/)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/vknighthub/vcoincheck-frontend)

# vKnightHub - Admin Dashboard

## Main Features
- Home - Dashboard
- Manager Project (Project type)
- User Profile
- Manage Market Info
- Manage Library
- Manage Community
- Manage Events
- Manage FAQ (Question)

## Tech

vKnightHub uses a number of open source projects to work properly:

- [Redux](https://redux.js.org/) - Redux
- [Bootstrap](https://getbootstrap.com/) - Bootstrap
- [SASS](https://sass-lang.com/) - Built in SASS
- [node.js] - evented I/O for the backend
- [ReactJS](https://reactjs.org/) - React.js checkout
- Attractive Calendar
- Customizable React Bootstrap Components

## Installation

vKnightHub requires [Node.js](https://nodejs.org/) v16+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd vcoincheck-frontend
npm i
npm start
```

For production environments...

```sh
npm install --production
NODE_ENV=production node app
npm run build
```

## Development

Want to contribute? Great!

vKnightHub uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```sh
node app
```

Second Tab:

```sh
gulp watch
```

(optional) Third:

```sh
karma test
```

#### Building for source

For production release:

```sh
gulp build --prod
```

Generating pre-built zip archives for distribution:

```sh
gulp build dist --prod
```

## Docker

vKnightHub is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd dillinger
docker build -t <youruser>/vknighthub:${package.json.version} .
```

This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of vKnightHub.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=vknighthub <youruser>/vknighthub:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [vknighthub]: <https://github.com/vknighthub>
