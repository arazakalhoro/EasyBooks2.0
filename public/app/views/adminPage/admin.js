'use strict';

angular.module('myApp.admin', ['ngRoute'])


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
        });
    };

    $scope.showConfirm = function(id, ev){
        var confirm = $mdDialog.confirm()
           .title('Are you sure you want to delete this book?')
           .textContent('This will remove the book and all information about it from the database.')
           .targetEvent(ev)
           .ok('Yes, delete it.')
           .cancel('No, cancel');

       $mdDialog.show(confirm).then(function () {
           library.delete(id);
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

            if ($scope.book.id === 0) {
                library.create($scope.book);
            } else {
                library.update($scope.book);
            }

            $mdDialog.hide();
        };
    }


}]);
