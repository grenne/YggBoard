/**
 * 
 */
	console.log ("$(window).height:()" + $(window).height());
	console.log ("$(document).height():" + $(document).height()); 
	console.log ("$(window).width():" + $(window).width());
	console.log ("$(document).width():" + $(document).width());

	localStorage.urlServidor = window.location.hostname;

	localStorage.layoutPerfil = "false";

	// ** testa login
	if (localStorage.loginOk != "true"){
		$(window.document.location).attr('href','index.html');	
	};
	
	// *** carrega nome usuario
	$('.userName').html(localStorage.usuarioFirstName);
	$('.completeName').html(localStorage.usuarioFirstName + " " + localStorage.usuarioLastName);

	// *** reseta para forcar login
	//localStorage.loginOk = "false";
	
	// **** carrega perfil
	rest_obterUserPerfil(localStorage.usuarioEmail, carregaPerfil, incluiUserPerfil, "elementos", "")
	
	var largura = 13;
	if ($(window).width() > 1185){
		largura = 9.8;
	}

			
	// *** flag de controle da montagem do diagrama para acerto de posicoes
	if (!localStorage.montacampo){
		localStorage.montacampo = "true";
	}else{
		if (localStorage.montacampo == "false"){
			$('#cargaCampos').attr('checked', false);
		}else{
			$('#cargaCampos').attr('checked', true);
		};
	};
	if (!localStorage.montacategoria){
		localStorage.montacategoria = "true";
	}else{
		if (localStorage.montacategoria == "false"){
			$('#cargaCategorias').attr('checked', false);
		}else{
			$('#cargaCategorias').attr('checked', true);
		};
	};
	if (!localStorage.montahabilidade){
		localStorage.montahabilidade = "true";
	}else{
		if (localStorage.montahabilidade == "false"){
			$('#cargaHabilidades').attr('checked', false);
		}else{
			$('#cargaHabilidades').attr('checked', true);
		};
	};
	if (!localStorage.montaseta){
		localStorage.montaseta = "true";
	}else{
		if (localStorage.montaseta == "false"){
			$('#cargaSetas').attr('checked', false);
		}else{
			$('#cargaSetas').attr('checked', true);
		};
	};
	// *** flag de controle do calculo autumatico das posicoes
	if (!localStorage.calculaposicao){
		localStorage.calculaposicao = "false";
	}else{
		if (localStorage.calculaposicao == "true"){
			$('#calculaPosicao').attr('checked', true);
		}else{
			$('#calculaPosicao').attr('checked', false);
		};
	};
	if (!localStorage.calculacampo){
		localStorage.calculacampo = "false";
	}else{
		if (localStorage.calculacampo == "true"){
			$('#calculaCampos').attr('checked', true);
		}else{
			$('#calculaCampos').attr('checked', false);
		};
	};
	if (!localStorage.calculacategoria){
		localStorage.calculacategoria = "false";
	}else{
		if (localStorage.calculacategoria == "true"){
			$('#calculaCategorias').attr('checked', true);
		}else{
			$('#calculaCategorias').attr('checked', false);
		};
	};
	if (!localStorage.calculahabilidade){
		localStorage.calculahabilidade = "false";
	}else{
		if (localStorage.calculahabilidade == "true"){
			$('#calculaHabilidades').attr('checked', true);
		}else{
			$('#calculaHabilidades').attr('checked', false);
		};
	};	
	
	// ** carga de componentes
	$( "#carregaHabilidadesTotal" ).bind( "click", function() {
		carregaHabilidadesTotal();
	});

	$( "#carregaCarreirasTotal" ).bind( "click", function() {
		carregaCarreirasTotal();
	});

	$( "#carregaCursosTotal" ).bind( "click", function() {
		carregaCursosTotal();
	});

	$( "#gravaDiagrama" ).bind( "click", function() {
		gravaDiagrama();
	});
	
	// *** campos para auxilio da montagem das posiçoes do diagrama
	$( "#auxiliamontagemdiagrama" ).bind( "click", function() {
		if ($(".auxiliamontagemdiagrama").hasClass("hide")){
			$(".auxiliamontagemdiagrama").removeClass ("hide")
		}else{
			$(".auxiliamontagemdiagrama").addClass ("hide")
		}
	});
	
	$( "#cargaCampos" ).bind( "click", function() {
		if ($('#cargaCampos').is(":checked")){
			localStorage.montacampo = "true";
		}else{
			localStorage.montacampo = "false";
		};
	});
	$( "#cargaCategorias" ).bind( "click", function() {
		if ($('#cargaCategorias').is(":checked")){
			localStorage.montacategoria = "true";
		}else{
			localStorage.montacategoria = "false";
		};
	});
	$("#cargaHabilidades" ).bind( "click", function() {
		if ($('#cargaHabilidades').is(":checked")){
			localStorage.montahabilidade = "true";
		}else{
			localStorage.montahabilidade = "false";
		};
	});
	$( "#cargaSetas" ).bind( "click", function() {
		if ($('#cargaSetas').is(":checked")){
			localStorage.montaseta = "true";
		}else{
			localStorage.montaseta = "false";
		};
	});
	$( "#calculaPosicao" ).bind( "click", function() {
		if ($('#calculaPosicao').is(":checked")){
			localStorage.calculaposicao = "true";
		}else{
			localStorage.calculaposicao = "false";
		};
	});
	$( "#calculaCampos" ).bind( "click", function() {
		if ($('#calculaCampos').is(":checked")){
			localStorage.calculacampo = "true";
		}else{
			localStorage.calculacampo = "false";
		};
	});
	$( "#calculaCategorias" ).bind( "click", function() {
		if ($('#calculaCategorias').is(":checked")){
			localStorage.calculacategoria = "true";
		}else{
			localStorage.calculacategoria = "false";
		};
	});
	$( "#calculaHabilidades" ).bind( "click", function() {
		if ($('#calculaHabilidades').is(":checked")){
			localStorage.calculahabilidade = "true";
		}else{
			localStorage.calculahabilidade = "false";
		};
	});
	
    // ** ações do menu do user perfil tab interesses
	$( "#openUserPainel" ).on( "click", function() {
		$('#userPanel').removeClass("hide");
		$('#tutorial').addClass("hide");
	});
	$( "#openTutorial" ).on( "click", function() {
		$('#userPanel').addClass("hide");
		$('#tutorial').removeClass("hide");
	});
	$( "#closePainel" ).on( "click", function() {
		$('#userPanel').addClass("hide");
		$('#tutorial').addClass("hide");
	});
	$( "#interesseUserPerfilHabilidades" ).on( "click", function() {
		$('.paineis-user-perfil').addClass("hide");
		$('.habilidade-user-perfil').removeClass("hide");
		obterHabilidadesUserPerfil ("habilidades-interesse", false, "habilidades_user_perfil_theader")
	});
	$( "#interesseUserPerfilCursos" ).on( "click", function() {
		$('.paineis-user-perfil').addClass("hide");
		$('.curso-user-perfil').removeClass("hide");
		obterHabilidadesUserPerfil ("cursos-interesse-habilidades", true, "cursos_user_perfil_theader")
	});
	
    // ** ações do menu do user perfil tab conquistas
	$( "#conquistasUserPerfil" ).on( "click", function() {
		$('.paineis-user-perfil').addClass("hide");
		$('.carreira-user-perfil').removeClass("hide");
		obterCarreirasUserPerfil ("carreiras-interesse", null, "carreiras_user_perfil_conquista_theader");
	});
	$( "#conquistasUserPerfilHabilidades" ).on( "click", function() {
		$('.paineis-user-perfil').addClass("hide");
		$('.habilidade-user-perfil').removeClass("hide");
		obterHabilidadesUserPerfil ("habilidades-elementos", false, "habilidades_user_perfil_conquista_theader")
	});

	localStorage.carrega = "true";
	$('#habilidade_theader_tab').on('shown.bs.tab', function (e) {
		if (localStorage.carrega == "true"){
			var cy = "";
			carregaHabilidadesLista(JSON.parse(localStorage.getItem("elements")), cy);
		};
		localStorage.carrega = "false";
		$('.numero-objetivos').addClass("hide");
		$('.numero-habilidades').removeClass("hide");
	});
	$('#carreira_theader_tab').on('shown.bs.tab', function (e) {
		if (localStorage.carrega == "true"){
			var cy = "";
			carregaHabilidadesLista(JSON.parse(localStorage.getItem("elements")), cy);
		};
		localStorage.carrega = "false";
		$('.numero-objetivos').removeClass("hide");
		$('.numero-habilidades').addClass("hide");
	});

//	$( "#conquistasUserPerfilCursos" ).on( "click", function() {
//		$('.paineis-user-perfil').addClass("hide");
//		$('.curso-user-perfil').removeClass("hide");
//		obterHabilidadesUserPerfil ("", true, "cursos_user_perfil_conquista_theader")
//	});

	// ** ações da troca de tabs
//	$( "#tab_conquistas" ).on( "click", function() {
//		$('.paineis-user-perfil').addClass("hide");
//		$('.carreira-user-perfil').removeClass("hide");
//		obterCarreirasUserPerfil ("carreiras-interesse", null, "carreiras_user_perfil_conquista_theader");
//	});
//	$( "#tab_interesses" ).on( "click", function() {
//		$('.paineis-user-perfil').addClass("hide");
//		$('.carreira-user-perfil').removeClass("hide");
//		obterCarreirasUserPerfil ("carreiras-interesse", null, "carreiras_user_perfil_theader");
//	});

	function gravaDiagrama (){
		
		var objJson = JSON.parse(localStorage.getItem("elements"));
		
		$.each( objJson, function( i, element ) {
			rest_atualizaHabilidade(element, semAcao, semAcao, semAcao);
		});
	};
			
	function atualizaUserPerfil (tipo, elemento){
		rest_obterUserPerfil (localStorage.usuarioEmail, atualizaUserPerfilElemento, incluiUserPerfil, tipo, elemento)
	};
	
	function carregaPerfil (objJson){
		localStorage.setItem("meuPerfil", JSON.stringify(objJson));
	};	
	
	function incluiUserPerfil (tipo, elemento){
		var objJson  = 
				{
				documento: 
					{
					usuario : localStorage.usuarioEmail,
					elementos : [],
					habilidadesInteresse : [],
					habilidades : [],
					carreirasInteresse : [],
					carreiras : [],
					tags : []
					}
				};	
		localStorage.setItem("meuPerfil", JSON.stringify(objJson));
		rest_incluiUserPerfil (objJson, atualizaUserPerfil, semAcao, tipo, elemento);
	};

	function atualizaUserPerfilElemento (objJson, tipo, elemento){
		var atualizarPerfil = false;
		if (tipo == "habilidadeInteresse"){
			var existente = false;
			$.each( objJson.documento.habilidadesInteresse, function( i, habilidade) {
				if (elemento == habilidade){
					existente = true;
				};
			});
			if (!existente){
				objJson.documento.habilidadesInteresse.push(elemento);
				atualizarPerfil = true;
			};
		};
		if (tipo == "habilidades"){
			var existente = false;
			$.each( objJson.documento.habilidades, function( i, habilidade) {
				if (elemento == habilidade){
					existente = true;
				};
			});
			if (!existente){
				objJson.documento.habilidades.push(elemento);
				atualizarPerfil = true;
			};
		};
		if (tipo == "carreiraInteresse"){
			var existente = false;
			$.each( objJson.documento.carreirasInteresse, function( i, carreira) {
				if (elemento == carreira){
					existente = true;
				};
			});
			if (!existente){
				objJson.documento.carreirasInteresse.push(elemento);
				atualizarPerfil = true;
			};
		};
		if (tipo == "carreiras"){
			var existente = false;
			$.each( objJson.documento.carreiras, function( i, carreira) {
				if (elemento == carreira){
					existente = true;
				};
			});
			if (!existente){
				objJson.documento.carreiras.push(elemento);
				atualizarPerfil = true;
			};
		};
		if (tipo == "tags"){
			var tags = elemento.split(",");
			$.each( tags, function( i, tag) {
				var existente = false;
				$.each( objJson.documento.tags, function( i, tagsElemento) {
					if (tag == tagsElemento){
						existente = true;
					};
				});
				if (!existente){
					objJson.documento.tags.push(tag);
					atualizarPerfil = true;
				};
			});
		};
		if (atualizarPerfil){
			localStorage.setItem("meuPerfil", JSON.stringify(objJson));
			rest_atualizaUserPerfil (objJson, semAcao, semAcao);
		}
	};

	