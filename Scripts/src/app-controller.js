angular.module('GMRSapp')
	.controller('AppController', ['$scope', 'AppService',  function ($scope, AppService) {
	    $scope.alerts = [
            { type: 'danger', msg: 'testing alerts!' },
            { type: 'success', msg: 'testing alerts!' }
	    ];
	    $scope.addAlert = function () {
	        $scope.alerts.push({ msg: 'Another alert!' });
	    };
	    $scope.closeAlert = function (index) {
	        $scope.alerts.splice(index, 1);
	    };


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
