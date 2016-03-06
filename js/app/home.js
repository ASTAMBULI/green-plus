application.controller('homeCtrl', ['$rootScope','$scope','$location','$http',function ($rootScope,$scope,$location,$http) {
	
  if( $rootScope.loggedIn===false ) {
               $location.path('/');
             }


    $scope.logout = function() {

 $rootScope.info="Successfully logged Out.";
 $rootScope.user =  "";
  $rootScope.sessionid =  "";
   $rootScope.loggedIn =  false;
  $location.path('/');
       $http.post('http://localhost:8080/logout?sessionid='+$rootScope.sessionid +'')
           .success(function(data){
           });
     };
   }]);
