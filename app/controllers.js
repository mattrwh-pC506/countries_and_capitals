app.controller('CountriesController', [
    '$scope', '$location', 'geoNamesDataService',
    function($scope, $location, geoNamesDataService) {
        geoNamesDataService.getCountries()
            .then(function(result) {
                $scope.countries = result.geonames;
            });

        $scope.go = function ( countryCode ) {
		  $location.path( '/country/' + countryCode );
		};
    }
]);

app.controller('CountryController', [
    '$scope', '$route', '$log', 'geoNamesDataService',
    function($scope, $route, $log, geoNamesDataService) {
    	$log.log($route.current.params.countryCode);

        geoNamesDataService.getCountry($route.current.params.countryCode)
	        .then(function(result) {
	            $scope.country = result.geonames[0];
	        });
        geoNamesDataService.getNeighbours($route.current.params.countryCode)
	        .then(function(result) {
	            $scope.neighbours = result.geonames;
	        });
        geoNamesDataService.getCapital($route.current.params.countryCode)
	        .then(function(result) {
	            $scope.capital = result.geonames[0];
	        });
    }
]);

app.controller('HomeController', ["$scope", function($scope) {
	$scope.about = "This is last app you will ever need. All " +
					"the world's knowledge is now at your " +
					"fingertips. You're welcome."
}]);