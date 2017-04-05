app.controller('HomeController', ['$scope', 'streamers', function($scope, streamers) {
  streamers.success(function(data) {
    $scope.streamersData = data;
	document.getElementById("titre").innerHTML = "Top 25 streamer on twitch.tv";
  });
}]);
