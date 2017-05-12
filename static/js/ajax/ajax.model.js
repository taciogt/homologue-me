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

    function post(url, params){
        if(!params){
            params = {};
        }
        var promise = $http({
            method: 'POST',
            url: url,
            data: params
        });
        return promise;
    }

    return {
        get: get,
        post: post
    };
});