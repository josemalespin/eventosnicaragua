
var moduloPrincipal = angular.module('moduloPrincipal',[]);

function controladorPrincipal($scope, $http){
	$scope.loguear = function(vUsuario, vContra){
		alert("si funciono" + vUsuario);
	};
}

/****************************************************/

$(function(){
  //Se cargan los eventos
   $.ajax({
          url: 'http://www.mgutierrez.somee.com/EventService.svc/eventos/obtener',
          type: 'get',         
          dataType: 'json',
          success: function(response) { 
            alert("funco");
            console.log(response); 
          },
          error: function() { console.log('Uh Oh!'); },
    });
})