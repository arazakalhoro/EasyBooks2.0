'use strict';

angular.module('myApp')
    .factory('library', function ($http) {

        return {
            load: function () {
                return $http.get('api/books')
            },
            find: function (id) {
                return $http.get('api/books/'+id);
            }
        };
    });