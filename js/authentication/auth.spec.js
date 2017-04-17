describe('AuthModel factory', function() {

    var AuthModel;
    var $httpBackend, authRequestHandler;

    beforeEach(function(){
        angular.mock.module('homologme.ajax');
        angular.mock.module('homologme.authentication');

        // AuthModel = $injector.get('AuthModel');
    });

    beforeEach(inject(function($injector) {
        AuthModel = $injector.get('AuthModel');
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
        signUpMocks($httpBackend);
        // backend definition common for all tests
        // authRequestHandler = $httpBackend.when('GET', '/')
        //     .respond({message: 'success mock'});

    }));

    it('should exist', function() {
        expect(AuthModel).toBeDefined();
    });

    it('Sign up default case.', function() {
        AuthModel.signUp();
        $httpBackend.flush();
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});