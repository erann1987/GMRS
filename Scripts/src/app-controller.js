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
	    $scope.show_data_table = false;

	    $scope.categoryList = [];
	    $scope.show_category_table = false;

	    $scope.valueTypeList = [];
	    $scope.show_valueType_table = false;

	    $scope.dataCategoryList = [];
	    $scope.show_dataCategory_table = false;



	    $scope.getAllData = function () {
	        AppService.GetAllData().then(function (results) {
	            $scope.dataList = results.data;
	            $scope.show_data_table = true;
	        }, function (e) {
	            alert("getting categories failed");
	        });
	    }

	    $scope.getAllCategories = function () {
	        AppService.GetAllCategories().then(function (results) {
	            $scope.categoryList = results.data;
	            $scope.show_category_table = true;
	        }, function (e) {
	            alert("getting categories failed");
	        });
	    }

	    $scope.getAllValueType = function () {
	        AppService.GetAllValueType().then(function (results) {
	            $scope.valueTypeList = results.data;
	            $scope.show_valueType_table = true;
	        }, function (e) {
	            alert("getting categories failed");
	        });
	    }

	    $scope.getAllDataCategory = function () {
	        AppService.GetAllDataCategory().then(function (results) {
	            $scope.dataCategoryList = results.data;
	            $scope.show_dataCategory_table = true;
	        }, function (e) {
	            alert("getting categories failed");
	        });
	    }

 }]);
