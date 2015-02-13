# generator-angular-blueprint [![Build Status](https://secure.travis-ci.org/DannyBlueDesign/generator-angular-blueprint.png?branch=master)](https://travis-ci.org/DannyBlueDesign/generator-angular-blueprint)

> [Yeoman](http://yeoman.io) generator

Generator Angular Blueprint introducing the idea of blueprints to an angular schaffolding. It is now very simple to overwrite generator templates in your local project.

## Generators

### APP

Generates the application skelleton

```
yo angular-blueprint
```

### Controller

Generates a new controller

Example:
```
yo angular-blueprint:controller home
[?] Where should I generate this? (./client/app/views/home)
```
Produces
```
client/app/views/home/home.controller.js
```

To contribute:
```
git clone https://github.com/DannyBlueDesign/generator-angular-blueprint.git
```

To run tests
```
npm tests
```

To install generator
```
npm link
```

this should allow you to run
```
yo angular-blueprint
```
