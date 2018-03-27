'use strict';

angular.module('myApp')
    .factory('library', function ($http) {

        return {
            load: function () {
                return $http.get('api/books')
            },
            find: function (id) {
                return $http.get('api/books/'+id);
            },
            update: function (book) {
                $http({
                    method: 'POST',
                    url: 'api/books/' + book.id,
                    data: $.param(book),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function () {
                    location.reload();
                })
            },
            create: function (book) {
                $http({
                    method: 'POST',
                    url: 'api/books/',
                    data: $.param(book),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(function () {
                    location.reload();
                })
            }
        };
    });