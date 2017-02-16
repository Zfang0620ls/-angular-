(function(angular){
	'use strict';
	var module = angular.module('movie.movie-detail', [
		'ngRoute',
		'movie.services.http',
		])
	module.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/movie-detail/:id', {
	    templateUrl: 'movie-detail/view.html',
	    controller: 'movieDetailController'
	  });
	}])

	module.controller('movieDetailController', [
		'$scope',
		'$route',
		'$routeParams',
		'HttpService',
		function($scope,$route,$routeParams,HttpService) {
				$scope.loading = true;
				$scope.movie = {};
				$scope.message = '';
				var urlAddress = 'http://api.douban.com/v2/movie/subject/'+$routeParams.id;
				console.log(urlAddress);
				HttpService.jsonp(urlAddress,{},function(data){
					$scope.movie = data;
					$scope.loading = false;
					$scope.$apply();
				});

		}

	]);
})(angular);
