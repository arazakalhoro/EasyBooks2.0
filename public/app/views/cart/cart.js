'use strict';

angular.module('myApp.cart', ['ngRoute'])
.controller('CartCtrl', ['shoppingCart', '$scope', '$location', function(shoppingCart, $scope, $location) {

    $scope.shopCart = shoppingCart;

    $scope.goTo = function (item) {
        var id = item.id;
        var url = 'book/'+id;
        $location.url(url);
    }

}]);

