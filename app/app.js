var app = angular.module("app", ['ngRoute', 'ngAnimate', 'ui.materialize']);

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