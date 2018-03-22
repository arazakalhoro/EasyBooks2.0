'use strict';

angular.module('myApp.book', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/book/:id', {
            templateUrl: 'app/views/singleBook/singleBook.html',
            controller: 'BookCtrl'
        });
    }])

    .controller('BookCtrl', ['library', 'shoppingCart', '$scope', '$routeParams',
                    function(library, shoppingCart, $scope, $routeParams) {
        var id = parseInt($routeParams.id, 10);

        $scope.shopCart = shoppingCart;

        library.find(id).then(function (book) {
            $scope.book = book.data;
        });
    }]);