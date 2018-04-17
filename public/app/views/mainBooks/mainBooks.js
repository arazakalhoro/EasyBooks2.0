'use strict';

angular.module('myApp.mainBooks', ['ngRoute'])

.controller('MainCtrl', ['library', 'shoppingCart', '$scope', '$location',
                function(library, shoppingCart, $scope, $location) {

    $scope.shopCart = shoppingCart;

    library.load().then(function (listOfBooks) {
        $scope.allBooks = listOfBooks.data;
    });

    $scope.checkOut = function () {
        var url = 'cart';
        $location.url(url);
    };

    $scope.goTo = function (book) {
        var id = book.id;
        var url = 'book/'+id;
        $location.url(url);
    }
}]);
