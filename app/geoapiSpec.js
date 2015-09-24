describe("geoNamesDataService", function() {
	beforeEach(module('app'));

	describe("getCountries", function() {
		it('should build a url string that queries geonames for a list of all countries',
		inject(function(geoNamesDataService, $rootScope, $httpBackend) {
			
			$httpBackend.expect('GET', 'http://api.geonames.org/countryInfo?type=JSON&username=mattrwh').respond(200);
			var status = false;

			geoNamesDataService.getCountries().then(function() {
				status = true;
			});
			
	        $rootScope.$digest();
	        $httpBackend.flush();
	        expect(status).toBe(true);
	        $httpBackend.verifyNoOutstandingRequest();
		}));
	});

	describe("getCountry", function() {
		it('should build a url string that queries geonames for data on Italy',
		inject(function(geoNamesDataService, $rootScope, $httpBackend) {
			
			$httpBackend.expect('GET', 'http://api.geonames.org/countryInfo?country=IT&type=JSON&username=mattrwh').respond(200);
			var status = false;

			geoNamesDataService.getCountry('IT').then(function() {
				status = true;
			});
			
	        $rootScope.$digest();
	        $httpBackend.flush();
	        expect(status).toBe(true);
	        $httpBackend.verifyNoOutstandingRequest();
		}));
	});

	describe("getNeighbours", function() {
		it('should build a url string that queries geonames for Italys neighbors.',
		inject(function(geoNamesDataService, $rootScope, $httpBackend) {
			
			$httpBackend.expect('GET', 'http://api.geonames.org/neighbours?country=IT&type=JSON&username=mattrwh').respond(200);
			var status = false;

			geoNamesDataService.getNeighbours('IT').then(function() {
				status = true;
			});
			
	        $rootScope.$digest();
	        $httpBackend.flush();
	        expect(status).toBe(true);
	        $httpBackend.verifyNoOutstandingRequest();
		}));
	});

	describe("getCapital", function() {
		it('should build a url string that queries geonames for data on the capital of Italy',
		inject(function(geoNamesDataService, $rootScope, $httpBackend) {
			
			$httpBackend.expect('GET', 'http://api.geonames.org/search?country=IT&formatted=true&q=capital&style=full&type=JSON&username=mattrwh').respond(200);
			var status = false;

			geoNamesDataService.getCapital('IT').then(function() {
				status = true;
			});
			
	        $rootScope.$digest();
	        $httpBackend.flush();
	        expect(status).toBe(true);
	        $httpBackend.verifyNoOutstandingRequest();
		}));
	});	
});