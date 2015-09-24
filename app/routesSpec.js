describe("routesSpec", function() {
    beforeEach(module("app"));

    describe("/ route", function() {
        it('should load the template and controller',
        inject(function($location, $rootScope, $httpBackend, $route) {
            $httpBackend.whenGET('./templates/home.html').respond('...');

            $rootScope.$apply(function() {
                $location.path('/');
            });

            $httpBackend.flush();

            expect($route.current.controller).toBe("HomeController");
            expect($route.current.loadedTemplateUrl).toBe("./templates/home.html");

            $httpBackend.verifyNoOutstandingRequest();
            $httpBackend.verifyNoOutstandingExpectation();
        }));
    });

    describe("/countries route", function() {
        it('should load the countries template and countries controller',
        inject(function($location, $rootScope, $httpBackend, $route) {
            $httpBackend.whenGET('./templates/countries.html').respond('...');

            $rootScope.$apply(function() {
                $location.path('/countries');
            });

            $httpBackend.flush();

            expect($route.current.controller).toBe("CountriesController");
            expect($route.current.loadedTemplateUrl).toBe("./templates/countries.html");

            $httpBackend.verifyNoOutstandingRequest();
            $httpBackend.verifyNoOutstandingExpectation();
        }));
    });

    describe("/country route", function() {
        it('should load the countries template and country controller',
        inject(function($location, $rootScope, $httpBackend, $route) {
            $httpBackend.whenGET('./templates/country.html').respond('...');

            $rootScope.$apply(function() {
                $location.path('/country/IT');
            });

            $httpBackend.flush();

            expect($route.current.controller).toBe("CountryController");
            expect($route.current.loadedTemplateUrl).toBe("./templates/country.html");

            $httpBackend.verifyNoOutstandingRequest();
            $httpBackend.verifyNoOutstandingExpectation();
        }));
    });

    describe("/error route", function() {
        it('should load the countries template and country controller',
        inject(function($location, $rootScope, $httpBackend, $route) {
            $httpBackend.whenGET('./templates/error.html').respond('...');

            $rootScope.$apply(function() {
                $location.path('/error');
            });

            $httpBackend.flush();

            expect($route.current.loadedTemplateUrl).toBe("./templates/error.html");

            $httpBackend.verifyNoOutstandingRequest();
            $httpBackend.verifyNoOutstandingExpectation();
        }));
    });
});