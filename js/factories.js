


function loginFactory($http,$q,loginService){
    'use strict';
    //let token = loginService.getUserData().token || '';
    let url   = loginService.getGlobalInfo().url;
    var model = $q.defer();
    model.logIn = function(data){
        var request = $http({
            method: "POST",
            url: `${url}/auth`,
            data:data,
        });

        return request;
    };



    return model;
}

function usersFactory($http,$q,loginService){
    'use strict';
    //let token = loginService.getUserData().token;
    let url   = loginService.getGlobalInfo().url;
    let route = "usuarios";
    var model = $q.defer();

    model.logIn = function(data = {}){
        var request = $http({
            method: "GET",
            url: `${url}/${route}`,
            params:data,
        });
        return request;
    };


    model.get = function(data = {}){
        var request = $http({
            method: "GET",
            url: `${url}/${route}`,
            params:data,
        });
        return request;
    };

    model.getOne = function(id){
        var request = $http({
            method: "GET",
            url: `${url}/${route}/${id}`
        });
        return request;
    };

    model.create = function(data = {}){
        var request = $http({
            method: "POST",
            url: `${url}/${route}`,
            data:data,
            //headers: {'Content-Type': false}
            headers: {'Content-Type': undefined}
            //headers: {'Content-Type': 'multipart/form-data'}
        });
        return request;
    };

    model.delete = function(id = ""){
        var request = $http({
            method: "DELETE",
            url: `${url}/${route}/${id}`
        });
        return request;
    };

    model.update = function(data={}){
        var request = $http({
            method: "PUT",
            url: `${url}/${route}/${data.id}`,
            data:data
        });
        return request;
    };

    model.resetPass = function(email=''){
        var request = $http({
            method: "GET",
            url: `${url}/${route}/reset-pass`,
            params:{email:email},
        });
        return request;
    };

    return model;
}




angular
    .module('inspinia')
    .factory('loginFactory', loginFactory)
    .factory('usersFactory', usersFactory)
