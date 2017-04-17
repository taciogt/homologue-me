function signUpMocks($httpBackend) {

    var phones = [{name: 'phone1'}, {name: 'phone2'}];

    // returns the current list of phones
    $httpBackend.whenGET('/').respond(phones);
    $httpBackend.whenPOST('/signup').respond(phones);

    // $httpBackend.whenGET(/template\.html/).passThrough();
}