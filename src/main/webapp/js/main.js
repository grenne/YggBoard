//
//*** 	botão genérico para voltar uma pagina
//
	$( ".getback" ).bind( "click", function() {
		parent.history.back();
		return false;
	});

	$(".tools").addClass ("hide");
	localStorage.usuario = "false";
	localStorage.layoutPerfil = "false";

	if (localStorage.usuarioPerfil == "administrator"){
		$(".tools").removeClass ("hide");
	}; 
	if (localStorage.usuarioPerfil == "user"){
	}; 
	
	$("#usuarioNome").html(localStorage.usuarioFirstName);

	function executaLogin(email, senha) {

		rest_obterUsuario(email, usuarioOk, usuarioFail, senha)

	};

	function usuarioOk (data, senha){

		if (data.documento.password == senha){
			localStorage.usuarioEmail = data.documento.email;
			localStorage.usuarioFirstName = data.documento.firstName;
			localStorage.usuarioLastName = data.documento.lastName;
			localStorage.usuarioPerfil = data.documento.perfil;
			localStorage.usuarioGender = data.documento.gender;
			localStorage.loginOk = "true";
			switch(localStorage.usuarioPerfil) {
		    case "administrator":
				$(".tools").removeClass ("hide");
				$(window.document.location).attr('href','yggboard.html');
		        break;
		    case "user":
				localStorage.usuario = "true";
				$(window.document.location).attr('href','yggboard.html');
		        break;
		    default:
		    	localStorage.usuario = "true";
				$('.msgErro').removeClass("hide");
			};			
			return true;
		}else{
			usuarioFail ();
		};
		return false;
	};
	
	function usuarioFail (){
		$('.msgErro').removeClass("hide");
	};

	function inclusaoEfetuada(mensagem) {
		parent.history.back();
    };
	function inclusaoNaoEfetuada() {
    };
	function obtencaoNaoEfetuada() {
    };
	function atualizacaoEfetuada(literal) {
    };

    function atualizacaoNaoEfetuada() {
    };

    function semAcao() {
    };

    function montaValor(valor) {
    	
    	var size = valor.lenght;
    	
    	var i = 0;
    	var valorString = "";
    	while (i < 10 - valor.length) {
			valorString = " " + valorString;
			++i;
    	};
    	
    	return "R$" + valorString + valor;;
    };

    function limpaEspacos(texto) {
    	    	
    	return texto.replace (" ", "");
    };
