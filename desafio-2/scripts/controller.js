'use strict';

angular.module('app', ['app.directive']).controller('AppController', controller);

function controller($scope) {
    var vm = this;

    vm.save = save;   
    vm.reset = reset;   
    vm.contacts = [];     

    function save(data) {
    	console.log(data);
    	if (vm.signupForm.$valid) {
            vm.contacts.push(angular.copy(data));
        } else {
        	alert('Formulário inválido.');
        }    
    }

    function reset() {    	      
        $scope.data = angular.copy({});
    }

    vm.reset();
}
