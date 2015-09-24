describe("controllersSpec", function() {
    beforeEach(module('app'));

    describe('CountriesControllerSpec', function() {
        var ctrl, scope;
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('CountriesController', {
                $scope : scope
            });
        }));

        it('should return array of countries, and scope.go should update location path', function() {
            scope.countries = [];
            scope.go("IT");
        });
    });

    describe('CountryControllerSpec', function() {
        var ctrl, scope;
        beforeEach(inject(function($controller, $route, $rootScope) {
            scope = $rootScope.$new();

            ctrl = $controller('CountryController', {
                $scope : scope,
                $route: {current: {params: {countryCode: "IT"}}}
            });
        }));

        it('should return country object, neighbours array, and capital object', function() {
            scope.country = {};
            scope.neighbours = [];
            scope.capital = {};
        });
    });

    describe('HomeControllerSpec', function() {
        var ctrl, scope;
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller('HomeController', {
                $scope : scope
            });
        }));

        it('should return home page about text', function() {
            scope.about = "";
        });
    });
});
