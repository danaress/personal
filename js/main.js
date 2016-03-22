
angular.module('myApp', [])

angular.module('myApp')
  .controller('navController', ['$scope', '$location', function($scope, $location){
    var s = $scope
    s.aboutNav = function(){
      window.location.href="about.html"
    }

    s.projectsNav = function(){
      window.location.href="projects.html"
    }

}])