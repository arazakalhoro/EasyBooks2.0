'use strict';

angular.module('myApp.cart', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'app/views/cart/cart.html',
    controller: 'CartCtrl'
  });
}])

.controller('CartCtrl', ['shoppingCart', '$scope', '$location', function(shoppingCart, $scope, $location) {

    $scope.shopCart = shoppingCart;

    $scope.goTo = function (item) {
        var id = item.id;
        var url = 'book/'+id;
        $location.url(url);
    }

}]);

