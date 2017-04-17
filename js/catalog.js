(function(){

    console.log('mock module setup');

    var mainAppDev = angular.module('homologme-dev', ['homologme', 'ngMockE2E']);

    // mainAppDev.controller('appCatalogController', function(){
    //     var ctrl = this;
    //     console.log('Hello, Catalog');
    // });

    mainAppDev.run(function($httpBackend){
        console.log('settings backend mocks');

        signUpMocks($httpBackend);

        $httpBackend.whenGET(/template\.html/).passThrough();

    });

})();
