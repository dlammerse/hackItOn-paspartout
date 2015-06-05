var app = angular.module('app', ['ngRoute']);

app.controller('BaseController', ['$scope', '$http', '$location', '$interval','$anchorScroll', function($scope, $http, $location, $interval, $anchorScroll)
{
	$scope.merchant = {
        "id":"1",
		"name":"Sportschool"
	};
	
	$scope.user = {
        "id":"1"
	};
	
	$scope.Authorize = function(user_id) {
		$http.get('/api/v1/access', {params: {user_id: user_id,company_id: $scope.merchant.id}}).
			success(function(data, status, headers, config)
			{
				console.log('api access succesfully returned: ' + data.access);
				
				// go to green or red screen.
				if(data.access == 1)
				{
					$location.url('/green');
				}
				else
				{
					$location.url('/red');
				}
			}).
			error(function(data, status, headers, config)
			{
				console.log('error: cannot authorize');
			});
	}
}]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
		when('/home', {
			templateUrl: './views/home.html'
		}).
		when('/green', {
			templateUrl: './views/green.html'
		}).
		when('/red', {
			templateUrl: './views/red.html'
		}).
		otherwise({
			redirectTo: '/home'
		});
  }]);