app.controller('DescController', ['$scope', 'streamers', '$routeParams', function($scope, streamers, $routeParams) {
  streamers.success(function(data) {
	$scope.detail = data.streams[$routeParams.id];
	document.getElementById("titre").innerHTML = $scope.detail.channel.display_name;
	var options = {
		width: 1200,
		height: 700,
 		channel: $scope.detail.channel.name,
	};
	var player = new Twitch.Player("videoTwitch", options);
	player.setMuted(true);
  });
}]);
