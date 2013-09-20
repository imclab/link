'use strict';


// Declare app level module which depends on filters, and services
angular.module('linkApp', ['restangular', 'linkApp.controllers'])
  .config(['RestangularProvider', function(RestangularProvider) {
      RestangularProvider.setBaseUrl('http://127.0.0.1:5000/sim');
      
      RestangularProvider.setRequestInterceptor(function(elem, operation, what) {
        if (operation === 'put') {
          elem._id = undefined;
          return elem;
        }
        return elem;
      });
  }])
  .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
      }
  ])
  .config(function(RestangularProvider) {
      // Now let's configure the response extractor for each request
      RestangularProvider.setResponseExtractor(function(response, operation, what, url) {
        // This is a get for a list
        var newResponse;
        if (operation === "getList") {
          // Here we're returning an Array which has one special property metadata with our extra information
          newResponse = response.objects;
          //newResponse.metadata = response.data.meta;
        } else {
          // This is an element
          newResponse = response;
        }
        return newResponse;
      });
    })
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', { 
      controller: 'LinkListCtrl', 
      templateUrl: 'partials/linkList.html'
    });
    $routeProvider.when('/links', {
      controller: 'LinkListCtrl',
      templateUrl: 'partials/linkList.html'
    });
    $routeProvider.when('/link/:linkID', {
      controller: 'LinkDetailCtrl',
      templateUrl: 'partials/linkDetail.html',
      resolve: {
        linkID: function(Restangular, $route) {
          return $route.current.params.linkID;
        }
      }
    });
    $routeProvider.when('/tags', {
      controller: 'TagListCtrl',
      templateUrl: 'partials/tagList.html'
    });
    $routeProvider.otherwise({redirectTo:'/'});
  }]);
