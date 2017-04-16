angular.module('homologme.authentication').factory('AuthModel', function(AjaxModel){

    var m = {
        default: '',
        email: null,
        printModel: printModel
    };

    function printModel(){
        console.log(m);
        console.log('teste');
        AjaxModel.get('/').then(function(result){
            console.log(result);
        });
    }

    return m;
});
