'use strict';

angular.module('homologme', ['ui.router', 'homologme.ajax', 'homologme.authentication'])
    .controller('appController', function() {
        var ctrl = this;
        console.log('Hello World')
    });