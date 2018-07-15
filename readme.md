# React Template

## Getting Started

Install template:
1) create and navigate to folder for new component
2) run `npm init` or create package.json file manually
3) install latest or specific template package version:
```
npm install r-ts-wp-template@latest --no-save
```
4) install automatically added dependencies
```
npm install
```
5) enjoy

## Running development server

Run webpack dev server (for assets):

```
npm start
```

Visit [http://localhost:3000/](http://localhost:3000/).

## Building assets (index.html and bundle) for dev or prod

For development use

```
npm run devpack:server
npm run devpack:client
```

For develompent watch client build

```
npm run devpack:client:watch
```

For production use

```
npm run prodpack:server
npm run prodpack:client
```

### Profiling

For profile file creation use

```
npm run profile
```

Then use created file stats.json for bundle analysis with means of 
https://alexkuz.github.io/webpack-chart/

### Testing


--no-save