'use strict';
angular.module('movie', [
  'ngRoute',
  'movie.movie-detail',
  'movie.movie-list',
  'movie.directives.auto-focus'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/in_theaters'});
}])
.controller('searchController',['$scope','$route',function($scope,$route){
	$scope.input = '';
	$scope.search = function(){
		$route.updateParams({category:'search',q:$scope.input});
	}
}])
