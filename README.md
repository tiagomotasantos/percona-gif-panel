## Percona Gif Panel for Grafana

The Percona Gif Panel shows gifs by keyword using the GIPHY API.

When no keyword is present the plugin shows trending gifs.

### Screenshots

- [Screenshot of Percona Gif Panel](https://github.com/tiagomotasantos/percona-gif-panel/blob/master/src/img/screenshot-percona-gif-panel.png?raw=true)

### Installation

Using Docker:

1. Clone the repository and `cd` to it
2. Make sure you have [yarn]( https://yarnpkg.com/) installed
3. Install project dependencies: `yarn install --pure-lockfile`
4. Build the plugin in dev mode: `yarn dev`
5. Run a local Grafana instance with the development version of the plugin: `yarn docker:run` or `docker run -p 3000:3000 -d --name grafana-percona-task --volume $(pwd)/dist:/var/lib/grafana/plugins/percona-gif-panel grafana/grafana` if you want to change the container name or port
6. Open Grafana at http://localhost:3000/
7. Log in with username "admin" and password "admin"
8. Create new dashboard and add the plugin "Percona Gif Panel"
