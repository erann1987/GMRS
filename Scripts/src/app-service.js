angular.module('GMRSapp').factory('AppService', function ($http) {
    var fac = {};

    //get all movies service
    fac.GetCategories = function () {
        req = {
            method: 'GET',
            url: '/api/gmrs/',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        return $http(req);
    }

    ////add movie service
    //fac.addMovie = function (movie) {
    //    req = {
    //        method: 'POST',
    //        url: '/api/movies',
    //        headers: {
    //            'Content-Type': 'application/json',
    //            'Accept': 'application/json'
    //        },
    //        data: movie
    //    }
    //    return $http(req);
    //}

    ////edit movie sevice
    //fac.editMovie = function (movie) {
    //    req = {
    //        method: 'PUT',
    //        url: '/api/movies',
    //        headers: {
    //            'Content-Type': 'application/json',
    //            'Accept': 'application/json'
    //        },
    //        data: movie
    //    }
    //    return $http(req);
    //}

    return fac;
});