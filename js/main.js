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
    
    
  
    
});


