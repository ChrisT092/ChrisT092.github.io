app.factory('streamers', ['$http', function($http) {
  return $http.get('https://api.twitch.tv/kraken/streams/?client_id=8bsg96j70be4n7ljw19ohdhez49765i')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);