describe('Ajax factory', function() {

    var AjaxModel;
    var $httpBackend, $rootScope, createController, authRequestHandler;

    beforeEach(angular.mock.module('homologme.ajax'));

    beforeEach(inject(function(_AjaxModel_) {
        AjaxModel = _AjaxModel_;
    }));

    beforeEach(inject(function($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
        // backend definition common for all tests
        authRequestHandler = $httpBackend.when('GET', '/')
            .respond({message: 'success mock'});

    }));

    it('should exist', function() {
        expect(AjaxModel).toBeDefined();
    });

    it('can make a mocked GET', function() {
        var promise = AjaxModel.get('/');
        promise.then(function(result){
            expect(result.data.message).toBe('success mock');
        });
        $httpBackend.flush();
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});