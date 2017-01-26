angular.module('portfolio')
.service('mainService', function($http, $state) {

  this.URL = "http://www.omdbapi.com/?t=";

  this.searchMovie = (term) => {
    console.log("MainService receiving term: ", term);
    return $http({
      method: 'GET',
      url: this.URL + term
    }).then((response) => {
      // console.log("MainService Response: ", response);
      return response.data;
    })
  }

















})
