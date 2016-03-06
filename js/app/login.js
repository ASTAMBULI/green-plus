application.controller('loginCtrl', ['$rootScope','$scope','$location','$http',function ($rootScope,$scope,$location,$http) {
	 
	  if(!$scope.failed)
	 $scope.failed=true;
	 if(!$scope.loading)
	 $scope.loading=false;
	if(!$scope.success)
	 $scope.success=false;
	if(!$scope.loading)
	 $scope.loading=false;
	 if(!$rootScope.loggedIn)
	 $rootScope.loggedIn= false;
	 if(!$rootScope.info)
	 $rootScope.info=" ";
    
     $scope.login = function() {
     	 $scope.failed=true;
     	 $scope.loading=true;
 $rootScope.info="Loading please wait..";
       $http.post('http://localhost:8080/login?username='+$scope.username+'&password='+$scope.password)
           .success(function(data){
             if(data.loginSucceeded===true) {
             	$scope.loading=false;
             	$scope.success=true;
               $rootScope.info="Login Succeed, Redirecting..";
               $rootScope.user =  $scope.username;
               $rootScope.sessionid =  data.sessionId;
                $rootScope.loggedIn =  true;
               $location.path('/board');
             }else{
             	$scope.loading=false;
             	 $scope.failed=false;
             	 	$scope.success=false;
               $rootScope.info="Login Failed, Invalid Credentials";
               $location.path('/');
             }
           });
     };
   }]);