(function (){
  'use strict';

  angular.module('insta').controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$scope', 'APP_SETTINGS', '$firebaseArray'];

  function HomeCtrl($scope, APP_SETTINGS, $firebaseArray) {
    var url = APP_SETTINGS.FIREBASE_URL + '/Messages';
    $scope.messages = [];
    var ref = new Firebase(url);
    activate();

    function activate(){
      $scope.messages = $firebaseArray(ref);
    }
  }
})();
