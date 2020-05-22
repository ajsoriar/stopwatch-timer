# Steps to start doing stuff

This example will work in WebKit version: 532.1 - Arora 0.10.1 (Git: 1329 e5385f3) - Lightweight WebKit-based web browser

## 1) Install node modules

`$ yarn install`

will create ./node_modules

## 2) Development

`$ npm start`

`$ npm run dev`

will execute the script available in package.json: webpack --mode development

    ./dist folder will be generated 
    ./dist/index.html will be created, taking as a swebpack-002-basic-ES6-modulesource ./src/index.template.ejs
    ./dist/main.js will be created, taking as a source ./src/index.js

## 3) in the case of: $ npm run build

This will be executed: $ webpack --mode production

    ./dist/main.js will be automatically minified out of the box by webpack 4
