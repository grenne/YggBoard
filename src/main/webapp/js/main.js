//
//*** 	botão genérico para voltar uma pagina
//
	$( ".getback" ).off( "click");
	$( ".getback" ).on( "click", function() {
		parent.history.back();
		return false;
	});

	$(".tools").addClass ("hide");
	localStorage.usuario = "false";
	localStorage.layoutPerfil = "false";

	if (localStorage.usuarioPerfil == "tools"){
		$(".tools").removeClass ("hide");
	}; 
	if (localStorage.usuarioPerfil == "user"){
	}; 
	
	// *** carrega nome usuario
	$('.userName').html(localStorage.usuarioFirstName);
	$('.completeName').html(localStorage.usuarioFirstName + " " + localStorage.usuarioLastName);

	function executaLogin(email, senha) {

		rest_obterUsuario(email, usuarioOk, usuarioFail, senha)

	};

	function usuarioOk (data, senha){
		
		if (data){
			if (data.documento.status == "inscrito"){
				$(window.document.location).attr('href','esperandoAprovacao.html');
			}else{
				if (data.documento.password == senha){
					localStorage.usuarioEmail = data.documento.email;
					localStorage.usuarioFirstName = data.documento.firstName;
					localStorage.usuarioLastName = data.documento.lastName;
					localStorage.usuarioPerfil = data.documento.perfil;
					localStorage.usuarioGender = data.documento.gender;
					localStorage.usuarioPhoto = data.documento.photo;
					localStorage.loginOk = "true";
					switch(localStorage.usuarioPerfil) {
				    case "administrator":
						$(window.document.location).attr('href','yggboard.html');
				        break;
				    case "tools":
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
			};
		}else{
			usuarioFail ();
		};
		usuarioFail ();
	};
	
	function usuarioFail (){
		$('.msgErro').removeClass("hide");
		localStorage.loginOk = "false";
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
    	
    	if (valor){
	    	var size = valor.lenght;
	    	var i = 0;
	    	var valorString = "";
	    	while (i < 10 - valor.length) {
				valorString = " " + valorString;
				++i;
	    	};
	    	return "R$" + valorString + valor;;
    	};
    	
    	return "R$";
    };

    function limpaEspacos(texto) {
    	    	
    	return texto.replace (" ", "");
    };
