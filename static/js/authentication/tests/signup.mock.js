(function(){
    "use strict";

    angular.module('homologme.authentication.mocks', []);

    angular.module('homologme.authentication.mocks').factory('AuthenticationMock', authMocks);

    function authMocks($httpBackend) {
        var phones = [{name: 'phone1'}, {name: 'phone2'}];

        function setupMocks(){
            $httpBackend.whenGET('/').respond(phones);
            $httpBackend.whenPOST('/signup').respond(phones);
        }

        return {
            setupMocks: setupMocks
        };
    }
})();
