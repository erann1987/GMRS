angular.module('GMRSapp').factory('AppService', function ($http) {
    var fac = {};

    //get all data service
    fac.GetAllData = function () {
        req = {
            method: 'GET',
            url: '/api/gmrs/data',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        return $http(req);
    }

    fac.GetAllCategories = function () {
        req = {
            method: 'GET',
            url: '/api/gmrs/categories',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        return $http(req);
    }

    fac.GetAllValueType = function () {
        req = {
            method: 'GET',
            url: '/api/gmrs/valuetype',
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