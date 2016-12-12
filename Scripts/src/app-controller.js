angular.module('GMRSapp')
	.controller('AppController', ['$scope', 'AppService',  function ($scope, AppService) {

	    $scope.report = {
	        reportType: [],
	        categories: [],
            years: ['2010','2011','2012','2013','2014','2015','2016'],
	        cCategory: null,
	        cReportType: null,
            cYear: null,
            data: [],
            catDesc: [],
            valForPieChart: [],
            totalSum: 0
	    }

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


	    $scope.dataList = [];
	    $scope.showReport = false;
	    $scope.showDataTable = false;

	    $scope.createReport = function () {
	        $scope.getAllCategories();
	        $scope.getAllValueType();
	    }

	    $scope.getAllData = function () {
	        AppService.GetAllData().then(function (results) {
	            $scope.dataList = results.data;
	            $scope.showDataTable = true;
	        }, function (e) {
	            alert("getting categories failed");
	        });
	    }

	    $scope.getAllCategories = function () {
	        AppService.GetAllCategories().then(function (results) {
	            $scope.report.categories = results.data;
	        }, function (e) {
	            alert("getting categories failed");
	        });
	    }

	    $scope.getAllValueType = function () {
	        AppService.GetAllValueType().then(function (results) {
	            $scope.report.reportType = results.data;
	        }, function (e) {
	            alert("getting categories failed");
	        });
	    }

	    $scope.loadRelevantData = function () {
	        AppService.GetRelevantData($scope.report.cYear, $scope.report.cCategory.CategoryName, $scope.report.cReportType.ValueTypeName).then(function (results) {
	            $scope.report.data = results.data;
	            $scope.report.totalSum = 0;
	            for (i = 0; i < results.data.length; i++) {
	                $scope.report.catDesc[i] = results.data[i]["name"];
	                $scope.report.valForPieChart[i] = results.data[i]["y"];
	                $scope.report.totalSum = $scope.report.totalSum + $scope.report.valForPieChart[i];

	            }
	            for (j = 0; j < results.data.length; j++) {
	                $scope.report.valForPieChart[j] = $scope.report.valForPieChart[j] / $scope.report.totalSum;
	            }
	            $scope.loadPieChart();
	            $scope.showReport = true;
	        }, function (e) {
	            alert("getting categories failed");
	        });
	    }

	    $scope.loadBarChart = function ()
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
	                categories: $scope.report.catDesc
	            },
	            yAxis: {
	                title: {
	                    text: 'ש"ח'
	                }
	            },
	            series: [{
	                name: 'הנכסות',
	                data: [514334, 326337, 346553]
	            }, {
	                name: 'הוצאות',
	                data: [513434, 646337, 344653]
	            }]
	        });
	    }

	    $scope.loadChart = function ()
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
	                text: ' פילוג הכנסות לפי ' + $scope.report.cCategory.CategoryName + ' שנת ' + $scope.report.cYear
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
	            legend: {
	                rtl: true
	            }, useHTML : true,
	            series: [{
	                name: $scope.report.cCategory.CategoryName,
	                colorByPoint: true,
	                data: $scope.report.valForPieChart
	            }]
	        });
	    }
	    
 }]);
