var app = angular.module('app', ['ngRoute']);

app.controller('BaseController', ['$scope', '$http', '$location', '$interval','$anchorScroll', function($scope, $http, $location, $interval, $anchorScroll)
{
	// Projects
	$scope.projects = [];

	$http.get('/data/projects.json').
		success(function(data, status, headers, config)
		{
		    $scope.projects = data.projects;
		}).
		error(function(data, status, headers, config)
		{
		    // on error
		});
}]);

app.controller('ProjectController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams)
{
	// Project
	$scope.projectId = $routeParams.id;
	
	$scope.project = {
        "name":"EZ",
		"description":"EZ account.",
		"members":[
			{
				"name":"Ruud van Dinten"
			},
			{
				"name":"Jan Willem van de Griendt"
			}
		],
		"projects":[
			{
				"name":"Oracle Beheer",
				"description":"oracle beheer desc.",
				"members":[
					{
						"name":"Cees Hendriks"
					},
					{
						"name":"Marco Boers"
					}
				],
				"locations":[
					{
						"city":"Groningen","country":"The Netherlands"
					},
					{
						"city":"Assen","country":"The Netherlands"
					}
				]
			},
			{
				"name":"Domus",
				"description":"domus desc.",
				"members":[
					{
						"name":"Thijs Hoenjet"
					},
					{
						"name":"Matijn Woudt"
					}
				],
				"locations":[
					{
						"city":"Groningen","country":"The Netherlands"
					},
					{
						"city":"Assen","country":"The Netherlands"
					},
					{
						"city":"Den Haag","country":"The Netherlands"
					}
				]
			},
		]
      };
}]);


app.directive('location', function() {
  return {
    restrict: 'A',
    scope: {
      location: '=data'
    },
    templateUrl: 'views/directives/location.html'
  };
});

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
		when('/projects/:id', {
			templateUrl: './views/project.html',
			controller: 'ProjectController'
		}).
		when('/projects', {
			templateUrl: './views/projects.html'
		}).
		otherwise({
			redirectTo: '/projects'
		});
  }]);