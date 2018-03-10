(function(){

    console.log('mock module setup');

    var mainAppDev = angular.module('homologme-dev', ['homologme', 'ngMockE2E', 'homologme.authentication.mocks']);

    // mainAppDev.controller('appCatalogController', function(){
    //     var ctrl = this;
    //     console.log('Hello, Catalog');
    // });

    mainAppDev.config(function($stateProvider){
        var signUpState = {
            name: 'sign-up',
            url: '/sign-up',
            template: '<sign-up></sign-up>'
        };

        $stateProvider.state(signUpState);

    });

    mainAppDev.run(function($httpBackend, AuthenticationMock){
        console.log('settings backend mocks');
        AuthenticationMock.setupMocks();

        $httpBackend.whenGET(/template\.html/).passThrough();

    });

})();
