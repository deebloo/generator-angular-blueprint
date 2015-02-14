# generator-angular-blueprint [![Build Status](https://secure.travis-ci.org/DannyBlueDesign/generator-angular-blueprint.png?branch=master)](https://travis-ci.org/DannyBlueDesign/generator-angular-blueprint)

> [Yeoman](http://yeoman.io) generator

Generator Angular Blueprint introducing the idea of blueprints to an angular scaffolding. It is now very simple to overwrite generator templates in your local project.
Lots of Yeoman generators are out there, but what if you don't agree? You can fork the repo and make changes and install it on your own, OR, you can use generator-angular-blueprints.
Don't like the style of comments we have chosen? Use your own! Simply create a folder in your root project called "blueprints".

The following example will override the global controller template:

* /
  - blueprints
    * controller
      - controller.js
  - client
  - docs

## Generators

### APP

Generates the main application scaffolding

```
yo angular-blueprint
```

### Route

Generates a new route and all of its components

Example:
```
yo angular-blueprint:route home
[?] Where should I generate this? (./client/app/views/home)
```
Produces:
```
client/app/views/home/home.controller.js
client/app/views/home/home.route.js
client/app/views/home/home.spec.js
client/app/views/home/home.view.html
client/app/views/home/home.view.scss
```

### Controller

Generates a new controller

Example:
```
yo angular-blueprint:controller home
[?] Where should I generate this? (./client/app/views/home)
```
Produces:
```
client/app/views/home/home.controller.js
client/app/views/home/home.spec.js
```

### Factory

Generates a new Angular Factory

Example:
```
yo angular-blueprint:factory user
[?] Where should I generate this? (./client/app/services/user)
```
Produces:
```
client/app/services/user/user.factory.js
client/app/services/user/user.spec.js
```

### Directive

Generates a new Angular Directive

Example:
```
yo angular-blueprint:directive nav
[?] Where should I generate this? (./client/app/components/nav)
```
Produces:
```
client/app/components/nav/nav.directive.js
```

### Service

Generates a new Angular Service

Example:
```
yo angular-blueprint:factory user
[?] Where should I generate this? (./client/app/services/user)
```
Produces:
```
client/app/services/user/user.service.js
client/app/services/user/user.spec.js
```

### View

Generates a new Angular View

Example:
```
yo angular-blueprint:view about
[?] Where should I generate this? (./client/app/views/about)
```
Produces:
```
client/app/views/about/user.view.html
client/app/views/about/user.view.scss
```

## To contribute
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
