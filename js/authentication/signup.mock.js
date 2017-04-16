(function(){

    console.log('mock module setup');

    var mainAppDev = angular.module('homologme-dev', ['homologme', 'ngMockE2E']);

    // mainAppDev.controller('appCatalogController', function(){
    //     var ctrl = this;
    //     console.log('Hello, Catalog');
    // });

    mainAppDev.run(function($httpBackend){
        console.log('settings backend mocks');

        var phones = [{name: 'phone1'}, {name: 'phone2'}];

        // returns the current list of phones
        $httpBackend.whenGET('/').respond(phones);
        $httpBackend.whenGET(/template\.html/).passThrough();
    });

})();
