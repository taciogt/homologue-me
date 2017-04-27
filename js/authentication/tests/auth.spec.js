describe('AuthModel factory', function() {

    var AuthModel;
    var $httpBackend;

    beforeEach(function(){
        angular.mock.module('homologme.ajax');
        angular.mock.module('homologme.authentication');
        angular.mock.module('homologme.authentication.mocks');
    });

    beforeEach(inject(function($injector) {
        AuthModel = $injector.get('AuthModel');
        $httpBackend = $injector.get('$httpBackend');
        $injector.get('AuthenticationMock').setupMocks();
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