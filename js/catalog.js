(function(){

    console.log('mock module setup');

    var mainAppDev = angular.module('homologme-dev', ['homologme', 'ngMockE2E', 'homologme.authentication.mocks']);

    // mainAppDev.controller('appCatalogController', function(){
    //     var ctrl = this;
    //     console.log('Hello, Catalog');
    // });

    mainAppDev.run(function($httpBackend, AuthenticationMock){
        console.log('settings backend mocks');
        AuthenticationMock.setupMocks();

        $httpBackend.whenGET(/template\.html/).passThrough();

    });

})();
