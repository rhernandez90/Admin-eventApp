


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

function segmentoFactory($http,$q,loginService){
    'use strict';
    let url   = loginService.getGlobalInfo().url;
    let route = "segmentos";
    var model = $q.defer();

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
            headers:{'Content-Type':undefined}
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
    return model;
}

function empresaFactory($http,$q,loginService){
    'use strict';
    let url   = loginService.getGlobalInfo().url;
    let route = "empresas";
    var model = $q.defer();

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
            headers:{'Content-Type': undefined}
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
    return model;
}

function eventosFactory($http,$q,loginService){
    'use strict';
    let url   = loginService.getGlobalInfo().url;
    let route = "eventos";
    var model = $q.defer();

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
            headers:{'Content-Type': undefined}
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
    return model;
}

function categoriaFactory($http,$q,loginService){
    'use strict';
    let url   = loginService.getGlobalInfo().url;
    let route = "Categoria_Evento";
    var model = $q.defer();

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
            headers:{'Content-Type': undefined}
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
    return model;
}

angular
    .module('inspinia')
    .factory('loginFactory', loginFactory)
    .factory('usersFactory', usersFactory)
    .factory('segmentoFactory', segmentoFactory)
    .factory('empresaFactory', empresaFactory)
    .factory('eventosFactory', eventosFactory)
    .factory('categoriaFactory',categoriaFactory)