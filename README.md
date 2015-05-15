# generator-angular-blueprint [![Build Status](https://travis-ci.org/deebloo/generator-angular-blueprint.svg?branch=1.2.2)](https://travis-ci.org/deebloo/generator-angular-blueprint)

> [Yeoman](http://yeoman.io) generator

Angular js Generator for large scale applications. 

Prerequisites
```
npm install -g bower
npm install -g yo
(optional) npm install -g grunt-cli
```
All commands can be run with either grunt {command} or npm start {command}

Based on [John Papa's AngularJS Style Guide](https://github.com/johnpapa/angularjs-styleguide). 
The goal is to have an out of the box scaffolding that will scale well for large complex applications.

To see a sample generated project look [here](https://github.com/deebloo/angular-blueprint).

Generator Angular Blueprint introducing the idea of blueprints to an angular scaffolding. It is now very simple to overwrite generator templates in your local project.
Lots of Yeoman generators are out there, but what if you don't agree? You can fork the repo and make changes and install it on your own, OR, you can use generator-angular-blueprints.
Don't like the style of comments we have chosen? Use your own! Simply run the 'blueprint' generator to customize your own templates.

```
npm install -g generator-angular-blueprint
```

## Generators

### APP

Generates the main application scaffolding

```
yo angular-blueprint
```

### Blueprint

Generates a blueprint to be customized. The template file will be placed into your local project.
From there you can customize the template any way that you like.

Example:
```
yo angular-blueprint:blueprint
[?] Which blueprint would you like to create?
1) controller
2) view
3) style
4) service
5) factory
6) directive
7) route
8) spec
```

Produces:
```
blueprints/templates/controller/template.js
```

The following template values are passed in to each template and are available for you to use:
```
<%= appName %> // myApp
<%= classedName %> // ClassedName
<%= dashedName %> // dashed-name
<%= humanName %> // human name
<%= type %> // {controller|factory|service|directive}
```

### Route

Generates a new route and all of its components

Example:
```
yo angular-blueprint:route home
[?] Where should I generate "home"? (./client/app/views/home)
```
Produces:
```
client/app/views/home/home.controller.js
client/app/views/home/home.controller.spec.js
client/app/views/home/home.route.js
client/app/views/home/home.view.html
client/app/views/home/home.view.scss
```

### Controller

Generates a new controller

Example:
```
yo angular-blueprint:controller home
[?] Where should I generate "home"? (./client/app/views/home)
```
Produces:
```
client/app/views/home/home.controller.js
client/app/views/home/home.controller.spec.js
```

### Factory

Generates a new Angular Factory

Example:
```
yo angular-blueprint:factory user
[?] Where should I generate "user"? (./client/app/services/user)
```
Produces:
```
client/app/services/user/user.service.js
client/app/services/user/user.service.spec.js
```

### Directive

Generates a new Angular Directive

Example:
```
yo angular-blueprint:directive nav
[?] Where should I generate "nav"? (./client/app/components/nav)
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
[?] Where should I generate "user"? (./client/app/services/user)
```
Produces:
```
client/app/services/user/user.service.js
client/app/services/user/user.service.spec.js
```

### View

Generates a new Angular View

Example:
```
yo angular-blueprint:view about
[?] Where should I generate "about"? (./client/app/views/about)
```
Produces:
```
client/app/views/about/user.view.html
client/app/views/about/user.view.scss
```

## To contribute
```
git clone https://github.com/deebloo/generator-angular-blueprint.git
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
