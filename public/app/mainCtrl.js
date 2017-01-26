angular.module('portfolio')
.controller('mainCtrl', function($scope, mainService, $timeout) {


  $scope.searchMovie = (term) => {
    console.log("Your searched term: ", term);
    mainService.searchMovie(term).then((response) => {
      console.log("MainCtrl Search Response: ", response);
      $scope.movieInfo = response;
    })
  }











})
