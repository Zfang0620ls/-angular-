/*
* @Author: zff
* @Date:   2016-11-14 18:37:32
* @Last Modified by:   zff
* @Last Modified time: 2016-11-14 20:50:59
*/

'use strict';
(function(angular){
	var http = angular.module('movie.services.http',[]);
	http.service('HttpService',['$window','$document',function($window,$document){
		this.jsonp = function(url,data,callback){
			var fnSuffix = Math.random().toString().replace('.','');
			var cbFuncName = 'my_json_cb_'+fnSuffix;
			$window[cbFuncName] = callback;
			var querystring = url.indexOf('?') == -1?'?':'&';
			for(var key in data){
				querystring += key+'='+data[key]+'&';
			}
			querystring +='callback='+cbFuncName;
			var scriptElement = $document[0].createElement('script');
			scriptElement.src = url + querystring;
			$document[0].body.appendChild(scriptElement);
		};
	}]);
})(angular);
