let routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  /// Home states and nested views --------------
  .state('home', {
    url: '/home',
    templateUrl: 'partial-home.html'
  })

  //nested list with custom controller
  .state('home.list', {
    url: '/list',
    templateUrl: 'partial-home-list.html',
    controller: function($scope) {
      $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
    }
  })

  //nested list with just some random string data
  .state('home.paragraph', {
    url: '/paragraph',
    template: 'I could sure use a drink right now'
  })

  // About page and multiple named views --------
  .state('about', {
    url: '/about',
    views: {
      // the main template will be places here (relative named)
      '': { templateUrl: 'partial-about.html'},

      // the child views will be defined here (absolute named)
      'columnOne@about': {template: 'Look I am a column!'},

      // for column two, we'll define a seperate controller
      'columnTwo@about': {
        templateUrl: 'table-data.html',
        controller: 'scotchController'
      }
    }
  });

}); // closes $routerApp.config



// defining a scotch controller we use up in the about state
routerApp.controller('scotchController', function($scope) {
  $scope.message = 'test';

  $scope.scotches = [
    {
      name: 'Macallan 12',
      price: 50
    },
    {
      name: 'Chivas Regal Royal Salute',
      price: 10000
    },
    {
      name: 'Glenfiddich 1937',
      price: 20000
    }
  ];

})
