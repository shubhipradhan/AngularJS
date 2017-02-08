var app = angular.module('myApp', [ 'ngRoute' ])

app.config(function($routeProvider) {
	
	$routeProvider
	
	.when('/', {
		templateUrl : 'home.html',
		controller : 'HomeController'
	})
	
	
	.when('/about', {
		templateUrl : 'about.html',

	})
	
	
	.when('/contact', {
		templateUrl : 'contact.html'
	})
	
	
	.when('/login', {
		templateUrl : 'login.html',
		controller : 'LoginController'
	})
	
	
	.when('/job', {
    templateUrl : 'job.html',
    controller : 'JobController'
   
  })
	
	
	.when('/blog', {
		templateUrl : 'blog.html',
		controller : 'BlogController'

	})
	
	
	.when('/friend', {
		templateUrl : 'friend.html',
		controller : 'FriendController'

	})
	
	
	.when('/logout', {
		templateUrl : "logout.html",
		controller : 'LogoutController'
	})
	
	
	.when('/signup', {
		templateUrl : "signUp.html"
	})
	
	
	.otherwise({
		redirectTo : '/'
	});
});/**
	 * 
	 */
