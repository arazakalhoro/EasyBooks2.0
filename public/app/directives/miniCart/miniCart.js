angular.module('myApp')
    .directive('miniCart', function (shoppingCart, $location) {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: 'app/directives/miniCart/miniCart.html',
            controller: ['$scope', '$mdPanel', function ($scope, $mdPanel) {

                $scope.isOpen = false;

                $scope.shopCart = shoppingCart;

                $scope.getBuy = function () {
                    return ($location.$$path === '/cart');
                };

                $scope.checkOut = function () {
                    $location.url('cart');
                };

                $scope.change = function () {
                    $scope.isOpen = !$scope.isOpen;
                }
            }]
        }
    });