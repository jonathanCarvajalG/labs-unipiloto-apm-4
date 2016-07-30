angular.module('app.controllers', [])
  
.controller('pageCtrl', function($scope) {

})
   
.controller('page1Ctrl', function($scope) {

})
   
.controller('page2Ctrl', function($scope) {

})
   
.controller('page3Ctrl', function($scope) {

})
 
.controller('page4Ctrl', function($scope) {
	$scope.diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
})

.controller('page5Ctrl', function($scope) {
	$scope.goto = function(email, pass){

		localStorage.setItem("email",email);
		localStorage.setItem("pass",pass);
        $state.go('Page6');

     };	
})

.controller('page6Ctrl', function($scope) {
	$scope.email = localStorage.getItem("email");
	$scope.pass = localStorage.getItem("pass");
})