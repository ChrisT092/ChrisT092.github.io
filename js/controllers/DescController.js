app.controller('DescController', ['$scope', 'streamers', '$routeParams', function($scope, streamers, $routeParams) {
  streamers.success(function(data) {
	$scope.detail = data.streams[$routeParams.id];
	document.getElementById("videoTwitch").setAttribute("src", "http://player.twitch.tv/?channel=" + $scope.detail.channel.name + "&muted=true");
	document.getElementById("titre").innerHTML = $scope.detail.channel.display_name;
  });
}]);
