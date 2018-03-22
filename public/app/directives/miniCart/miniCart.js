angular.module('myApp')
    .directive('miniCart', function (shoppingCart, $location) {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: 'app/directives/miniCart/miniCart.html',
            controller: ['$scope', function ($scope) {

                $scope.shopCart = shoppingCart;

                $scope.getBuy = function () {
                    return ($location.$$path === '/cart');
                };

                $scope.checkout = function () {
                    $location.url('cart');
                };
            }]
        }
    });