var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){
	$scope.name = "Blake";
	
	$scope.friends = ['Jordyn', 'Ryan', 'Chelsey'];
	
	$scope.addFriend = function(){
		$scope.friends.push($scope.newFriend);
	}
	
});
