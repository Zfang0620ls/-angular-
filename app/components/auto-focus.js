/*
* @Author: zff
* @Date:   2016-11-15 16:48:34
* @Last Modified time: 2016-11-17 18:18:35
*/
(function(angular){
	angular.module('movie.directives.auto-focus',[])
	.directive('autoFocus',['$location',function($location){
		// var path = '#'+$location.path();
		// console.log(path);
		return {
			restrict:'A',
			link:function($scope,iElm,iAttrs,controller){
				$scope.$location = $location;
				$scope.$watch('$location.path()',function(now){
			  now = '#'+now;
				var aLink = iElm.children().attr('href');
        var type = aLink.replace(/#(\/.+?)\/\d+/,'$1'); // /coming_soon
				console.log(type);
				if(now.startsWith(type)){
					iElm.parent().children().removeClass('on');
					iElm.addClass('on');
					}
				})

				// iElm.on('click',function(){
				// 	iElm.parent().children().removeClass('on');
				// 	iElm.addClass('on');
				// })
			}
		}
	}])
})(angular);


