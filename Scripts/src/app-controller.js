﻿angular.module('GMRSapp')
	.controller('AppController', ['$scope', 'AppService',  function ($scope, AppService) {

	    $scope.alerts = [
            { type: 'danger', msg: 'testing alerts!' },
            { type: 'success', msg: 'testing alerts!' }
	    ];
	    $scope.addAlert = function (ty, ms) {
	        $scope.alerts.push({ type: ty, msg: ms });
	    };
	    $scope.closeAlert = function (index) {
	        $scope.alerts.splice(index, 1);
	    };

	    $scope.showIncome_outcomeCart = false;
	    $scope.showIncome_categotyCart = false;
	    $scope.showPieChart = false;

	    $scope.idCatToDel;


	    $scope.dataList = [];
	    $scope.show_data_table = false;

	    $scope.categoryList = [];
	    $scope.show_category_table = false;

	    $scope.valueTypeList = [];
	    $scope.show_valueType_table = false;

	    $scope.delCat = function(id)
	    {
	        $scope.idCatToDel = id;
	    }
	    $scope.deleteCategory = function()
	    {
	        AppService.DeleteCategory($scope.idCatToDel).then(function (results) {
	            for (var i = 0; i < $scope.categoryList.length; i++) {
	                if ($scope.categoryList[i].CategoryID == $scope.idCatToDel) {
	                    $scope.categoryList.splice(i, 1);
	                }
	            }
	            $scope.addAlert('success', 'קטגוריה נמחקה!');
	        }, function (e) {
	            alert("getting categories failed");
	        });
	    }

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


	    $scope.loadIncome_outcomeChart = function ()
	    {
	        $scope.showIncome_outcomeCart = true;

	        var myChart = Highcharts.chart('income_outcomeChart', {
	            chart: {
	                type: 'bar'
	            },
	            title: {
	                text: 'הוצאות הכנסות'
	            },
	            xAxis: {
	                categories: ['נתניה', 'בא שבע', 'חיפה']
	            },
	            yAxis: {
	                title: {
	                    text: 'ש"ח'
	                }
	            },
	            series: [{
	                name: 'הנכסות',
	                data: [10523, 4150, 5524]
	            }, {
	                name: 'הוצאות',
	                data: [5135, 6467, 3653]
	            }]
	        });
	    }

	    $scope.loadIncome_category = function ()
	    {
	        $scope.showIncome_categotyCart = true;
	        Highcharts.chart('income_categoryChart', {
	            chart: {
	                type: 'area'
	            },
	            title: {
	                text: 'גרף הכנסות לפי מרכז רווח '
	            },
	            subtitle: {
	                text: 'מרכז רווח: יבשות לפי שנים'
	            },
	            xAxis: {
	                categories: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
	                tickmarkPlacement: 'on',
	                title: {
	                    enabled: false
	                }
	            },
	            yAxis: {
	                title: {
	                    text: 'באלפי שקלים'
	                },
	                //labels: {
	                //    formatter: function () {
	                //        return this.value / 1000;
	                //    }
	                //}
	            },
	            tooltip: {
	                split: true,
	                valueSuffix: 'ש"ח '
	            },
	            plotOptions: {
	                area: {
	                    stacking: 'normal',
	                    lineColor: '#666666',
	                    lineWidth: 1,
	                    marker: {
	                        lineWidth: 1,
	                        lineColor: '#666666'
	                    }
	                }
	            },
	            series: [{
	                name: 'אסיה',
	                data: [5002, 6305, 8009, 9407, 10402, 3634, 5268]
	            }, {
	                name: 'אפריקה',
	                data: [2106, 1507, 4111, 3133, 1221, 2767, 1766]
	            }, {
	                name: 'אירופה',
	                data: [5163, 2403, 6276, 7408, 6547, 7329, 6228]
	            }, {
	                name: 'אמריקה',
	                data: [1458, 3451, 5334, 1536, 3349, 8418, 1201]
	            }, {
	                name: 'אוסטרליה',
	                data: [2454, 3132, 2121, 4546, 1213, 3012, 4216]
	            }]
	        });
	    }

	    $scope.loadPieChart = function ()
	    {
	        $scope.showPieChart = true
	        Highcharts.chart('pieChart', {
	            chart: {
	                plotBackgroundColor: null,
	                plotBorderWidth: null,
	                plotShadow: false,
	                type: 'pie'
	            },
	            title: {
	                text: 'פילוג הכנסות לפי קטגוריה שנת 2015'
	            },
	            tooltip: {
	                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	            },
	            plotOptions: {
	                pie: {
	                    allowPointSelect: true,
	                    cursor: 'pointer',
	                    dataLabels: {
	                        enabled: true,
	                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
	                        style: {
	                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
	                        }
	                    }
	                }
	            },
	            series: [{
	                name: 'Cities',
	                colorByPoint: true,
	                data: [{
	                    name: 'Tel aviv',
	                    y: 56.33
	                }, {
	                    name: 'Jerusalem',
	                    y: 24.03,
	                    sliced: true,
	                    selected: true
	                }, {
	                    name: 'Haifa',
	                    y: 10.38
	                }, {
	                    name: 'Ashdod',
	                    y: 4.77
	                }, {
	                    name: 'Eilat',
	                    y: 0.91
	                }, {
	                    name: 'Natanya',
	                    y: 0.2
	                }]
	            }]
	        });
	    }
	    

 }]);
