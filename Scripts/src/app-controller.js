angular.module('GMRSapp')
	.controller('AppController', ['$scope', 'AppService', function ($scope, AppService) {
	    $scope.dataList = [];
	    $scope.show_table=false;


	    $scope.getAllCategories = function () {
	        AppService.GetCategories().then(function (results) {
	            $scope.dataList = results.data;
	            $scope.show_table = true;
	        }, function (e) {
	            alert("getting categories failed");
	        });
	    }

 }]);
