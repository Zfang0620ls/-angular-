(function(angular){
	'use strict';
	var module = angular.module('movie.movie-list', [
		'ngRoute',
		'movie.services.http',
		])
	module.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/:category', {
	    templateUrl: 'movie-list/view.html',
	    controller: 'movieListController'
	  });
	}])

	module.controller('movieListController', [
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		function($scope,$route,$routeParams,HttpService) {
				// var count = 10; //每一页的条数
				// var page = parseInt($routeParams.page); //当前是第几页
				// var start = (page - 1)*count; //当前页从哪开始
				$scope.title = '';
				$scope.loading = true;
				$scope.subjects = [];
				$scope.message = '';
				$scope.totalCount = 0;
				// $scope.totalPages = 0;
				// $scope.currentPage = page;
				var url = 'http://api.douban.com/v2/movie/'+$routeParams.category;
				HttpService.jsonp(url,{q:$routeParams.q},function(data){
					$scope.subjects = data.subjects;
					$scope.title = data.title;
					$scope.totalCount = data.count;
					// $scope.totalPages = Math.ceil($scope.totalCount / count);
					$scope.loading = false;
					$scope.$apply();
				});
				// $scope.go =function(){
				// }


			// $scope.go=function(page){
			// 	$scope.custParam.page=$scope.custParam.page+1;//加载页数+1
			// }

		}

	]);
})(angular);
