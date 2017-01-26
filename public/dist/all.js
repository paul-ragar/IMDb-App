'use strict';

angular.module('portfolio', ['ui.router', 'ngAnimate']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: './app/views/homeView.html'
  });

  // End of app.js
});
'use strict';

angular.module('portfolio').controller('mainCtrl', function ($scope, mainService, $timeout) {

  $scope.searchMovie = function (term) {
    console.log("Your searched term: ", term);
    mainService.searchMovie(term).then(function (response) {
      console.log("MainCtrl Search Response: ", response);
      $scope.movieInfo = response;
    });
  };
});
'use strict';

angular.module('portfolio').service('mainService', function ($http, $state) {
  var _this = this;

  this.URL = "http://www.omdbapi.com/?t=";

  this.searchMovie = function (term) {
    console.log("MainService receiving term: ", term);
    return $http({
      method: 'GET',
      url: _this.URL + term
    }).then(function (response) {
      // console.log("MainService Response: ", response);
      return response.data;
    });
  };
});