angular.module('portfolio', ['ui.router', 'ngAnimate'])
.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './app/views/homeView.html'
  })












  // End of app.js
})
