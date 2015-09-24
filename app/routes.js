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