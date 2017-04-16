angular.module('homologme.authentication').directive('signUp', signUp);

function signUp() {
    var directive = {
        restrict: 'E',
        templateUrl: 'js/authentication/signup.template.html',
        replace: true,
        scope: {},
        controller: 'SignUpController',
        controllerAs: 'vc',
        bindToController: true
    };

    return directive;
}
