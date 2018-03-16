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
    // TODO for later
  })

})
