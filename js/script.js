var wow = angular.module("wow", []);

wow.controller("personaje", function($scope, $http){
	$scope.buscar = function(obtener){

		$http({

			method: "GET",
			url: "http://eu.battle.net/api/wow/character/los-errantes/bendemfalar?fields=stats"	

		}).then(function datos(x){
			console.log(x)
		})
	}
})