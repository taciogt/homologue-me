angular.module('homologme.ajax').factory('AjaxModel', function($http){

    function get(url, params){
        if(!params){
            params = {};
        }
        var promise = $http({
            method: 'GET',
            url: url,
            params: params
        });
        return promise;
    }

    return {
        get: get
    };
});