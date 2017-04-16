angular.module('homologme.authentication').controller('SignUpController', SignUpController);

function SignUpController(AuthModel) {
    var vc = this;
    this.model = AuthModel;
}
