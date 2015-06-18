#!/bin/bash

APPDIR=".testApp"

generators () {
    echo | yo angular-blueprint:controller foo$1
    echo | yo angular-blueprint:directive bar$1
    echo | yo angular-blueprint:factory baz$1
    echo | yo angular-blueprint:filter fooFoo$1
    echo | yo angular-blueprint:route fooBar$1
    echo | yo angular-blueprint:service fooBaz$1
}

echo "Run unit tests"
npm test

echo "Create the temporary app directory"
mkdir $APPDIR && cd $APPDIR

echo | yo angular-blueprint myApp

generators 1

yo angular-blueprint:blueprint controller
yo angular-blueprint:blueprint controller-spec

yo angular-blueprint:blueprint directive
yo angular-blueprint:blueprint directive-spec

yo angular-blueprint:blueprint factory
yo angular-blueprint:blueprint factory-spec

yo angular-blueprint:blueprint filter
yo angular-blueprint:blueprint filter-spec

yo angular-blueprint:blueprint service
yo angular-blueprint:blueprint service-spec

generators 2

grunt

cd ..

rm -rf $APPDIR