# PEC 1

PEC1 for the course HTML & CSS Tools II, from the Universitat Oberta de Catalunya UOC, steming from a fork of the [UOC Boilerplate](https://github.com/uoc-advanced-html-css/uoc-boilerplate).

## Requirements

[Node.js](http://nodejs.org/) >= 10.15.x

## Features

- Uses [Parcel](https://parceljs.org) module bundler.
- NPM scripts for fast development and production build (see Commands below).

### Stylesheets

- [Sass/SCSS](https://sass-lang.com) to CSS compilation.
- [PostCSS](https://postcss.org/) features:
  - Transpile modern CSS with [`postcss-preset-env`](https://preset-env.cssdb.org/features).
  - Automatically add CSS prefix to unsupported properties with [`autoprefixer`](https://autoprefixer.github.io/).
  - Automatically minify and optimize CSS code on production build with [`postcss-clean`](https://github.com/leodido/postcss-clean).

### Scripts

- Allow for modern JavaScript (ES201x/ES8/ES7/ES6…) which is automatically transpiled to ES5 and minifed in production builds, with [Babel](https://babeljs.io/).

### Images

- Image optimization with [`parcel-plugin-imagemin`](https://github.com/DeMoorJasper/parcel-plugin-imagemin), based on [`imagemin`](https://github.com/imagemin/imagemin), on production builds.

### Development

- Development server launch and live reloading on file changes.
- Friendly error reporting.

## How to use this boilerplate

Only edit files located in the `src/` folder. Always run the following commands during the development stage and for production builds. Please note that it is expected that all projects built with this boilerplate are compiled using `npm run build` before they are published.

### Commands

| Command         | Description                                                                                                                                                                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`   | Runs a local web server for development and opens the browser to display it. Automatically compiles styles and scripts whenever a file in `src/` is changed, and live reloads the browser. This is what _must be run_ on the development stage.                               |
| `npm run build` | Compiles and minifies and optimizes the files in the assets folder. The generated compiled and optimized files are located in the `dist/` folder. This is what _must be run_ before publishing the project. The publishable files are the ones located in the `dist/` folder. |
| `npm run clean` | Deletes the current `/dist` folder.                                                                                                                                                                                                                                           |
| `npm run test`  | Displays a success message if everything is working as expected.                                                                                                                                                                                                              |
