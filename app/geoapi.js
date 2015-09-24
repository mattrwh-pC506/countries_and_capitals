app.constant("GEONAMES_BASE_URL", "http://api.geonames.org");
app.constant("GEONAMES_USER", "mattrwh");
app.constant("COUNTRY_INFO_ENDPOINT", "/countryInfo");
app.constant("NEIGHBORS_ENDPOINT", "/neighbours");
app.constant("SEARCH_ENDPOINT", "/search");

app.factory("responseHandlers", function() {

	function success(response) {
        return (response.data);
    }

    function error(response) {
    	// If return error is in an unexpected format, normalize message
    	if (!angular.isObject(response.data) ||
            !response.data.message) {
            throw("An unknown error occurred.");
        }

        // Otherwise, use expected error message.
        throw(response.data.message);
    }

	var publicAPI = {
		success: success,
		error: error
	};

	return publicAPI;
});

app.factory("geoNamesDataService", 
	["$http", "GEONAMES_BASE_URL", "GEONAMES_USER", "COUNTRY_INFO_ENDPOINT", "NEIGHBORS_ENDPOINT", "SEARCH_ENDPOINT", "responseHandlers",
		function($http, GEONAMES_BASE_URL, GEONAMES_USER, COUNTRY_INFO_ENDPOINT, NEIGHBORS_ENDPOINT, SEARCH_ENDPOINT, responseHandlers) {
	
			function getCountries() {
		        var request = $http.get(GEONAMES_BASE_URL + COUNTRY_INFO_ENDPOINT, { 
		        	params: {
		        		username: GEONAMES_USER,
		        		type: 'JSON'
		        	},
		        	cache: true
		        	
		        });
		        return (request.then(responseHandlers.success, responseHandlers.error));
		    }

		    function getCountry(country_code) {
		        var request = $http.get(GEONAMES_BASE_URL + COUNTRY_INFO_ENDPOINT, {  
		        	params: {
		        		username: GEONAMES_USER, 
			        	type: 'JSON',
			        	country: country_code
			        },
		        	cache: true
		        });;
		        return (request.then(responseHandlers.success, responseHandlers.error));
		    }

		    function getNeighbours(country_code) {
		        var request = $http.get(GEONAMES_BASE_URL + NEIGHBORS_ENDPOINT, {  
		        	params: {
		        		username: GEONAMES_USER, 
		        	type: 'JSON',
		        	country: country_code
		        },
		        	cache: true
		        });
		        return (request.then(responseHandlers.success, responseHandlers.error));
		    }

		    function getCapital(country_code) {		    	
		        var request = $http.get(GEONAMES_BASE_URL + SEARCH_ENDPOINT, {  
		        	params: {
		        		username: GEONAMES_USER, 
			        	type: 'JSON',
			        	country: country_code,
			        	formatted: true,
			        	q: 'capital',
			        	style: 'full'
			        },
		        	cache: true
		        });
		        return (request.then(responseHandlers.success, responseHandlers.error));
		    }


			var publicAPI = {
		        getCountries: getCountries,
		        getCountry: getCountry,
		        getNeighbours: getNeighbours,
		        getCapital: getCapital
		    };


			return publicAPI;

}]);