angular.module('starter.controllers', ['ionic.native'])

.controller('DashCtrl', function($scope, $cordovaInAppBrowser) {
  $scope.openBrowser = function(){
    $cordovaInAppBrowser.create("https://www.google.com");
  }

})

.controller('TasksCtrl', function($scope, Tasks, $ionicModal, $cordovaLocalNotification) {
  $scope.tasks = Tasks.all();
  $scope.remove = function(task) {
    Tasks.remove(task);
    $cordovaLocalNotification.schedule({
      id: 1,
      text: 'Single ILocalNotifcation'
    })
  };

  $ionicModal.fromTemplateUrl("templates/modal.html", {
  	scope: $scope,
  	animation: "slide-in-up"
  }).then(function(modal){
  	$scope.modal = modal;
  });

  $scope.new = {
    taskName: "",
    taskDesc: ""
  };
  $scope.newTask = function(){
    if(Tasks.create($scope.new)){
      $scope.modal.hide();
    }
  }
})

.controller('TaskDetailCtrl', function($scope, $stateParams, Tasks) {
  $scope.task = Tasks.get($stateParams.taskId);
})

.controller('AccountCtrl', function($scope) {});
