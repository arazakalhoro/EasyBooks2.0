'use strict';

angular.module('myApp.admin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/admin', {
        templateUrl: 'app/views/adminPage/admin.html',
        controller: 'AdminCtrl'
    });
}])

.controller('AdminCtrl', ['library', '$scope', '$mdDialog', function(library, $scope, $mdDialog) {

    $scope.customFullscreen = false;

    library.load().then(function (listOfBooks) {
        $scope.allBooks = listOfBooks.data;
    });

    $scope.showForm = function (id, event) {

        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'app/views/adminPage/formTemplate.html',
            parent: angular.element(document.body),
            targetEvent: event,
            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen,
            locals: {id: id}
        })
        .then(function (answer) {

        }, function () {

        });

    };

    function DialogController($scope, $mdDialog, id) {
        if(id === '0') {
            $scope.book = {
                id: 0,
                title: '',
                img: '',
                description: '',
                author: '',
                price: 0
            }
        } else {
            library.find(id).then(function (book) {
                $scope.book = book.data;
                $scope.price = parseFloat($scope.book.price);
            });
        }

        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.answer = function() {
            $scope.book.price = $scope.price;

            console.log($scope.book);

            if ($scope.book.id === 0) {
                library.create($scope.book);
            } else {
                library.update($scope.book);
            }

            $mdDialog.hide();
        };
    }


}]);