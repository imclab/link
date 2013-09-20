'use strict';

/* Controllers */

angular.module('linkApp.controllers', [])
  .controller('LinkDetailCtrl', ['$scope', 'linkID', 'Restangular', function ($scope, linkID, Restangular) {
    $scope.link = Restangular.one('link', linkID).get();
    console.log('looking for link ' + linkID);
    console.log(JSON.stringify($scope.l));
  }])
  .controller('LinkListCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
    $scope.links = Restangular.all('link').getList();
  }])
  .controller('TagListCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
    $scope.tags = Restangular.all('tag').getList();
  }])
  .controller('UserDetailCtrl', ['$scope', 'userID', 'Restangular', function ($scope, userID, Restangular) {
    $scope.user = Restangular.one('user', userID).get();
    console.log(JSON.stringify($scope.user));
  }]);

