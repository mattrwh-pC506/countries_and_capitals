var app = angular.module("app", ['ngRoute', 'ngAnimate', 'ui.materialize']);

app.config([
'$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "./templates/home.html",
            controller: 'HomeController'
        })
        .when("/countries", {
            templateUrl: "./templates/countries.html",
            controller: "CountriesController"
        })
        .when("/country/:countryCode", {
            templateUrl: "./templates/country.html",
            controller: 'CountryController'
        })
        .when("/error", {
        	templateUrl: "./templates/error.html"
        })
        .otherwise({
            redirectTo: '/'
        });


}]);

app.run(function($rootScope, $location, $timeout, $log) {
    $rootScope.$on('$routeChangeError', function() {
        $location.path("/error");
    });
    $rootScope.$on('$routeChangeStart', function() {
        $rootScope.isLoading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function() {
      $timeout(function() {
        $rootScope.isLoading = false;
        $log.log($rootScope.isLoading, "1 second later");
      }, 1000);
    });
});