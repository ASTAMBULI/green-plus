
	var application = angular.module('sales',['ui.router','chart.js']);
	application.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('index',{
				url: '/', 
				templateUrl:'templetes/login_form.html',
        controller: 'loginCtrl'
			})
			.state('board',{
				url: '/board', 
          controller: 'homeCtrl',
				views: {

        // the main template will be placed here (relatively named)
        '': { 
            templateUrl:'templetes/board.html'
          },

        // the child views will be defined here (absolutely named)
        'charts@board': { 
            templateUrl:'templetes/bar.html',
            controller: 'BarCtrl'
      },
       
			}
    })  .state('board.pie',{
        url: '/board', 
          controller: 'homeCtrl',
        views: {

        // the main template will be placed here (relatively named)
        '': { 
            templateUrl:'templetes/board.html'
          },

        // another child view
        'charts@board': { 
          
            templateUrl:'templetes/pie.html',
            controller: 'PieCtrl'
        }
       
      }
    }).state('board.toporder',{
        url: '/board', 
          controller: 'homeCtrl',
        views: {

        // the main template will be placed here (relatively named)
        '': { 
            templateUrl:'templetes/board.html'
          },

        // another child view
        'charts@board': { 
          
            templateUrl:'templetes/toporder.html',
            controller: 'TopSalesOrder'
        }
       
      }
    }).state('board.topman',{
        url: '/board', 
          controller: 'homeCtrl',
        views: {

        // the main template will be placed here (relatively named)
        '': { 
            templateUrl:'templetes/board.html'
          },

        // another child view
        'charts@board': { 
          
            templateUrl:'templetes/topman.html',
            controller: 'TopSalesMan'
        }
       
      }
    })
				

	}]);

	
	