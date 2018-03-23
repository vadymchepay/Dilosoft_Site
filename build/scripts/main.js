var app = angular.module("app", ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        templateUrl: '/templates/pages/home.html'
        , controller: 'homeCtrl'
        , controllerAs: 'home'
    });
    $routeProvider.when('/about', {
        templateUrl: '/templates/pages/about.html'
        , controller: 'aboutCtrl'
        , controllerAs: 'about'
    });
    $routeProvider.when('/products', {
        templateUrl: '/templates/pages/products.html'
        , controller: 'productsCtrl'
        , controllerAs: 'products'
    });
    $routeProvider.when('/price', {
        templateUrl: '/templates/pages/price.html'
        , controller: 'priceCtrl'
        , controllerAs: 'price'
    });
    $routeProvider.when('/contacts', {
        templateUrl: '/templates/pages/contacts.html'
        , controller: 'contactsCtrl'
        , controllerAs: 'contacts'
    });
});