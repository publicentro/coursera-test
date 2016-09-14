(function () {
    'use strict';
    angular.module('myApp', [])

    .controller('myController', function($scope){
           
        
            $scope.countList = function (){
                if($scope.lunchList===undefined){
                    $scope.result="Please enter data first";
                }else{
                    var cuenta = $scope.lunchList;
                    var lista = cuenta.split(",");
                    if (lista.length > 3) {
                        $scope.result = "Too much!";
                     }else{
                        $scope.result = "Enjoy!";
                    }; 
                 };
            };      
       });      

})();