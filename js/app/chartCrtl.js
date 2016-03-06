application.controller("BarCtrl",['$scope','$http','$rootScope', '$location', function ($scope,$http,$rootScope, $location){
$http.post('http://localhost:8080/lastyeardata?sessionid='+$rootScope.sessionid +'')
           .success(function(values){
            $scope.result=values.resultDescription;
            if($scope.result==='SUCCESS'){
            $scope.myData=values.data;
      		 $scope.labels = [];
      		 $scope.data =[[]];

      		for(var i=0; i < $scope.myData.length; i++){

				$scope.labels[i]=$scope.myData[i][0];
				$scope.data[0][i]=$scope.myData[i][1];
			}

             }else{
               $rootScope.info="You must Log in!";
               $location.path('/');
             }
           });

  
}]);


application.controller("PieCtrl",['$scope','$http','$rootScope', '$location', function ($scope,$http,$rootScope, $location) {

		$http.post('http://localhost:8080/salesmandata?sessionid='+$rootScope.sessionid +'')
           .success(function(values){
            $scope.result=values.resultDescription;
            if($scope.result==='SUCCESS'){
            $scope.myData=values.data;
      		 $scope.labels = [];
      		 $scope.data = [];
	
			for(var i=0; i < $scope.myData.length; i++){

				$scope.labels[i]=$scope.myData[i][0];
				$scope.data[i]=$scope.myData[i][1];
			}
            
            
     	 
  }else{
               $rootScope.info="You must Log in!";
               $location.path('/');
             }
           });
  
}]);



application.controller("TopSalesOrder",['$scope','$http','$rootScope', '$location', function ($scope,$http,$rootScope, $location) {

		$http.post(' http://localhost:8080/topsalesorders?sessionid='+$rootScope.sessionid +'')
           .success(function(values){
            $scope.result=values.resultDescription;
            if($scope.result==='SUCCESS'){
            $scope.data=values.data;  	 
  			}else{
               $rootScope.info="You must Log in!";
               $location.path('/');
             }
           });
  
}]);

application.controller("TopSalesMan",['$scope','$http','$rootScope', '$location', function ($scope,$http,$rootScope, $location) {

		$http.post(' http://localhost:8080/salesmandata?sessionid='+$rootScope.sessionid +'')
           .success(function(values){
            $scope.result=values.resultDescription;
            if($scope.result==='SUCCESS'){
            $scope.data=values.data; 
            $scope.i=0;  	 
  			}else{
               $rootScope.info="You must Log in!";
               $location.path('/');
             }
           });
  
}]);