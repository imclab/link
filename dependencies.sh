#!/bin/bash

mkdir -p lib/angular lib/restangular lib/underscore lib/bootstrap
cd lib/angular
wget https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.js
cd ../restangular
wget http://cdn.jsdelivr.net/restangular/latest/restangular.js
cd ../underscore
wget http://underscorejs.org/underscore.js
cd ../bootstrap
wget http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.js

cd ../../
mkdir -p css
cd css
wget http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.css
cd ../

mkdir -p img
cd img
cd ../
