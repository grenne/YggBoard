/**
 * 
 */
	console.log ("$(window).height:()" + $(window).height());
	console.log ("$(document).height():" + $(document).height()); 
	console.log ("$(window).width():" + $(window).width());
	console.log ("$(document).width():" + $(document).width());

	localStorage.urlServidor = window.location.hostname;

	var largura = 13;
	if ($(window).width() > 1185){
		largura = 9.8;
	}
	$('.cy').css( "width", ($(window).width() / 14 * largura));
	$('.cy').css( "height", ($(window).height() / 12 * 9));
	
	localStorage.usuario = "false";
	
	  
	$( "#carregaHabilidadesTotal" ).bind( "click", function() {
		carregaHabilidadesTotal();
	});

	$( "#carregaCarreirasTotal" ).bind( "click", function() {
		carregaCarreirasTotal();
	});

	$( "#gravaDiagrama" ).bind( "click", function() {
		gravaDiagrama();
	});

	
	function gravaDiagrama (){
		
		var objJson = JSON.parse(localStorage.getItem("elements"));
		
		$.each( objJson, function( i, element ) {
			rest_atualizaHabilidade(element, semAcao, semAcao, semAcao);
		});
	};
		
	