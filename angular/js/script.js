(function () {
    'use strict';
    angular.module('myApp', [])

    .controller('myController', function($scope){
           
        
            $scope.countList = function (){
                if($scope.lunchList===undefined){
                    $scope.result="Please enter data first";
                }else{
                $scope.matches =0
                $scope.matches=count($scope.lunchList)+1;
                if ($scope.matches > 3) {
                    $scope.result = "Too much!";
                }else{
                    $scope.result = "Enjoy!";
                }; 
            };
        };
      
      var count = function(str){
        var matches = str.match(/.*?,/g);
        return matches.length;        
      };
    });      

})();