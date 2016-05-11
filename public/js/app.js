var app = angular.module("lamungu", ['angularSmoothscroll','ui.bootstrap']);
app.controller('HomeController', ['$scope','$window',function($scope, $window) {
    $scope.isCollapsed = true;

    $scope.$watch(function () {
        return $window.scrollY;
    }, function (scrollY) {
        /* logic */
        console.log('working');
        $scope.showTop = (scrollY > 100);
    });
}]);