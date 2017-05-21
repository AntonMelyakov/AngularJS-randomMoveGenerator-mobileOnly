(function() {

var movies = ['Batman', 'Batman Returns', 'Logan',
              'Batman Begins', 'Avengers', 'Captain America: Civil War',
              'Iron Man', 'Hulk','Batman Forever','Batman & Robin',
              'Steel', 'Superman Returns', 'The Dark Knight', 'Jonah Hex',
              'Green Lantern', 'The Dark Knight Rises', 'Man of Steel',
              'Batman v Superman: Dawn of Justice', 'Suicide Squad', 'X-Men',
              'Iron Man 2', 'Thor', 'America: The First Avenger', 'Thor: The Dark World',
              'Captain America: The Winter Soldier', 'Guardians of the Galaxy', 'Ant-Man',
              'Deadpool', 'Doctor Strange' ];

var MainCtrl = function($scope, $http) {

  var onLoad = function(response){
    if (response.data.Response == "False") {
      $scope.error = "Something has gone wrong! There is not such movie in imdb."
      $scope.movie = null;
    } else {
      $scope.movie = response.data;
      $scope.error = null;
    }
  };

  $scope.generate = function() {
    var randomNumber = Math.floor((Math.random() * movies.length));
    $http.get("http://www.omdbapi.com/?t=" + movies[randomNumber])
         .then(onLoad);
  };

  $scope.search = function(searchedMovie) {
    $http.get("http://www.omdbapi.com/?t=" + searchedMovie)
         .then(onLoad);
  };

};

var app = angular.module("newModule", []);
app.controller("MainCtrl", MainCtrl);

}) ();
