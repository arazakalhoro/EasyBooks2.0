'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngMaterial',
    'ngMessages',
    'myApp.mainBooks',
    'myApp.cart',
    'myApp.about',
    'myApp.book',
    'myApp.admin',
    'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/mainBooks'});
    $routeProvider.when('/about',{
        templateUrl: 'app/views/about/about.html',
        controller: 'AboutCtrl'
    });

    $routeProvider.when('/admin',{
        templateUrl:'app/views/adminPage/admin.html',
        controller:'AdminCtrl'
    });

    $routeProvider.when('/cart',{
        templateUrl:'app/views/cart/cart.html',
        controller:'CartCtrl'
    });

    $routeProvider.when('/cart',{
        templateUrl: 'app/views/mainBooks/mainBooks.html',
        controller: 'MainCtrl'
    });

    $routeProvider.when('/cart',{
        templateUrl: 'app/views/singleBook/singleBook.html',
        controller: 'BookCtrl'
    });

}]);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
