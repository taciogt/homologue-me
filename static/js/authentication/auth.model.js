angular.module('homologme.authentication').factory('AuthModel', function(AjaxModel){

    var m = {
        newUsername: null,
        newEmail: null,
        newPassword: null,
        signUp: signUp
    };

    function signUp() {
        console.log('Sign Up Method');
        console.log(m);

        AjaxModel.post('/signup').then(function(result){
            console.log(result);
            console.log(result.data);
        });
    }

    return m;
});
