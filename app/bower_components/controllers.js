app.controller('CountriesController', [
    '$scope', 'geoNamesDataService',
    function($scope, countryRepository) {
        countryRepository.getCountryList()
            .then(function(result) {
                $scope.countries = result.geonames;
            });
    }
]);