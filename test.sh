#!/bin/bash

APPDIR=".testApp"

generators () {
    echo | yo angular-blueprint:controller foo$1
    echo | yo angular-blueprint:directive bar$1
    echo | yo angular-blueprint:factory baz$1
    echo | yo angular-blueprint:filter fooFoo$1
    echo | yo angular-blueprint:route fooBar$1
}

echo "Run unit tests"
npm test

echo "Create the temporary app directory"
mkdir $APPDIR && cd $APPDIR

echo | yo angular-blueprint myApp

echo "Run the generators"
generators 1

echo "Creating Blueprints!"
yo angular-blueprint:blueprint controller
yo angular-blueprint:blueprint controller-spec

yo angular-blueprint:blueprint directive
yo angular-blueprint:blueprint directive-spec

yo angular-blueprint:blueprint factory
yo angular-blueprint:blueprint factory-spec

yo angular-blueprint:blueprint filter
yo angular-blueprint:blueprint filter-spec

echo "Run the generators - AGAIN"
generators 2

echo "Create a build"
npm run build-full

cd ..