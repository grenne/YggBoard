/**
 * 
 */
	console.log ("$(window).height:()" + $(window).height());
	console.log ("$(document).height():" + $(document).height()); 
	console.log ("$(window).width():" + $(window).width());
	console.log ("$(document).width():" + $(document).width());

var largura = 13;
if ($(window).width() > 1185){
	largura = 9.8;
}
$('.cy').css( "width", ($(window).width() / 14 * largura));
$('.cy').css( "height", ($(window).height() / 12 * 10));

localStorage.usuario = "false";