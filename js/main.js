// preventing the gallery anchor tag from redirecting
function myfunc(ev){
    event.preventDefault();
}

// gallery code
$(document).ready(function() {
       
		$(".fancybox").fancybox({
            
            openEffect	: 'elastic',
    	    closeEffect	: 'elastic',
            helpers:  {
                thumbs : {
                    width: 100,
                    height: 100
                }
            }
        });     
	});
// end of gallery code

var app = angular.module('myApp',["ngRoute", 'ngAnimate','angular-carousel']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
     templateUrl : "partials/home.html"
  })
    .when('/specs/:id', {templateUrl :"partials/specs.html",
                         controller :"ctrl"
         })
    .when('/brands/:id', {templateUrl :"partials/brands.html",
                          controller :"ctrl"
         })
    .when('/allbrands', {templateUrl :"partials/brands.html",
                          controller :"ctrl"
         })
    .when('/search/', {templateUrl :"partials/search.html",
                          controller :"ctrl"
         })
    .when('/location/', {templateUrl :"partials/location.html",
                          controller :"ctrl"
         })
    $locationProvider.html5Mode(true);
     
});

app.controller('ctrl', function($scope, $http,$location ,$routeParams, $rootScope) {
    $http.get("phones.json")
	.then(function(response) {
         $scope.p = response.data;
         $scope.id = $routeParams.id
    });
    
    $scope.se = function(e,v){
        if(v == null && e.keyCode == 13){alert("Please Write Something.")}
        if(e.keyCode === 13 && v != null) {
         $rootScope.v = v;
         $location.path(/search/);
     }
        $scope.blur = function(){
          $scope.search.name = null;
     }
   }
//MailChamp API   

   
  $scope.aler = function(s){
      $http({
              method: 'post',
              url: 'https://us15.api.mailchimp.com/3.0/lists/209317f46d',
              headers: { 
                      "Content-Type": "application/json",
                      "X-HTTP-Method-Override": "PUT"},
              data:{"email_address": "himaa_pc@hotmail.com",
                    "status":"pending"}
   });
       

  }
    
});

