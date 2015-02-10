var app = angular.module("myFriends");

app.controller("MainController", function($scope) {
    $scope.test = "Hello World";
    $scope.friendz = [];
    $.getJSON('friend-data.json', function(res) {
        $scope.friendz = res;
        console.log(friendz);
    });
    
    
});


