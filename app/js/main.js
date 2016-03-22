var blogApp = angular.module('blogApp',['ngRoute']);

blogApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/phones', {
		templateUrl: 'app/templates/phone-list.html',
		controller: 'PhoneListCtrl'
	}).
	when('/phones/:phoneId', {
		templateUrl: 'app/templates/phone-detail.html',
		controller: 'PhoneDetailCtrl'
	}).
	otherwise({
		redirectTo: '/phones'
	});
}]);