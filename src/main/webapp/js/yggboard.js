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

	// 
	//*** seta as funções para carga de dados
	//
	setupTools();
	
    // ** ações do menu do user perfil tab interesses
	$( "#openUserPainel" ).on( "click", function() {
		$('#userPanel').removeClass("hide");
		$('#tutorial').addClass("hide");
		$('#unity').addClass("hide");
	});
	$( "#openTutorial" ).on( "click", function() {
		$('#userPanel').addClass("hide");
		$('#tutorial').removeClass("hide");
		$('#unity').addClass("hide");
	});
	$( "#closePainel" ).on( "click", function() {
		$('#userPanel').addClass("hide");
		$('#tutorial').addClass("hide");
		$('#unity').removeClass("hide");
	});
    // ** ações do menu do user perfil tab interesses
	$( "#interesse_objetivos_theader_tab" ).on( "click", function() {
		obterCarreirasUserPerfil ("carreiras-interesse", null, "carreiras_user_perfil_theader");
	});
	$( "#interesse_habilidades_theader_tab" ).on( "click", function() {
		obterHabilidadesUserPerfil ("habilidades-interesse", false, "habilidades_user_perfil_theader")
	});
	$( "#interesse_cursos_theader_tab" ).on( "click", function() {
		obterCursosInteresseUserPerfil ("cursos-interesse", true, "cursos_user_perfil_theader")
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

	function GetJson (Json) {
	    alert(Json);
	};

	function UnityIsLoaded (msg) {
		SendMessage('Main','Load',localStorage.getItem("jsonYggmap"));
	};

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
		
		rest_obterHabilidades(montaJsonYggmap, semAcao, objJson);
		
	};	
	
	function montaJsonYggmap (elementos, meuPerfilJson ){
		
		var jsonYggmap = {
							"MaxZoom" : parseFloat(localStorage.maxZoom),
							"MinZoom" : parseFloat(localStorage.minZoom),
							"positionX" : parseFloat(localStorage.positionX),
							"positionY" : parseFloat(localStorage.positionY),
							"StartZoom" : parseFloat(localStorage.startZoom),
							"data" : []
							};

		var x = -2000;
		var jsonPos = [];
		$.each(elementos, function( i, element ) {
			var position = {
					positionX:element.documento.positionX,
					positionY:element.documento.positionY,
					width:0,
					weight:0,
					elementos:0,
					elemento:0
				};
			jsonPos.push(position);
		});
		$.each(elementos, function( i, element ) {
			$.each(elementos, function( w, elementParent){
				if (element.documento.parent == elementParent.documento.idHabilidade){
					jsonPos[w].elementos = jsonPos[w].elementos + 1;					
				};
			});
		});
		$.each(elementos, function( i, element ) {
			var type = 1;
			var maxfade = parseFloat(localStorage.maxFadeHabilidade);
			var minfade = parseFloat(localStorage.minFadeHabilidade);
			var animationStart = parseFloat(localStorage.animationStartHabilidade);
			var animationEnd = parseFloat(localStorage.animationEndHabilidade);
			width = element.documento.width;
			height = element.documento.weight;
			if (element.documento.classes == "area"){ 
				maxfade = parseFloat(localStorage.maxFadeArea);
				minfade = parseFloat(localStorage.minFadeArea);
				animationStart = parseFloat(localStorage.animationStartArea);
				animationEnd = parseFloat(localStorage.animationEndArea);
				type = 0;
				if (!width){
					width = 2000;
					height = 2000;
				};
			};
			if (element.documento.classes == "campo"){ 
				type = 0;
				maxfade = parseFloat(localStorage.maxFadeCampo);
				minfade = parseFloat(localStorage.minFadeCampo);
				animationStart = parseFloat(localStorage.animationStartCampo);
				animationEnd = parseFloat(localStorage.animationEndCampo);
				if (!width){
					width = 800;
					height = 800;
				};
				if (localStorage.calculacampo == "true"){
					$.each(elementos, function( w, elementParent){
						if (element.documento.parent == elementParent.documento.idHabilidade){
							element.documento.positionY == jsonPos[w].positionY;
							jsonPos[w].positionX = jsonPos[w].positionY + 1100;
							jsonPos[w].weight = jsonPos[w].weight + 1100;
							jsonPos[w].elemento = jsonPos[w].elemento + 1;
							var coluna = (jsonPos[w].elementos / jsonPos[w].elemento).toFixed(0);
							element.documento.positionX == jsonPos[w].positionX * coluna;
							jsonPos[w].positionX = jsonPos[w].positionY + 1100;
							jsonPos[w].width = jsonPos[w].width + 1100;
							elementos[w].documento.width = jsonPos[w].width;
							elementos[w].documento.weight = jsonPos[w].weight;
							jsonPos[w].elemento = jsonPos[w].elemento + 1;
						};
					});
				};
			};
			if (element.documento.classes == "categoria"){ 
				type = 0;
				maxfade = parseFloat(localStorage.maxFadeCategoria);
				minfade = parseFloat(localStorage.minFadeCategoria);
				animationStartCategoria = parseFloat(localStorage.animationStartCategoria);
				animationEndCategoria = parseFloat(localStorage.animationEndCategoria);
				if (!width){
					width = 400;
					height = 400;
				};
			};
			if (element.documento.type == "edges" ){
				element.documento.name = "seta"
				type = 2;
			}
			var jsonElement = 
			{
				id : element.documento.idHabilidade,
				type : type,
				Label : element.documento.name,
				description : element.documento.descricao,
				wiki : element.documento.wiki,
				area : element.documento.area,
				field: element.documento.campo,
				category : element.documento.categoria,
				parent : element.documento.parent,
				positionX : element.documento.positionX,
				positionY : element.documento.positionY,
				width : width,
				height : height,
				source : element.documento.source,
				target: element.documento.target,
				FadeStart : maxfade,
				FadeEnd : minfade,
				tags:[],
				have:verificaPossuiHabilidade(element.documento.idHabilidade),
				states: 0,
				AnimationStart : animationStart,
				AnimationEnd : animationEnd,
			};
			$.each(element.documento.tags, function(w, tag) {
				jsonElement.tags.push(tag);
			});
			if (localStorage.montacampo && 
				localStorage.montacategoria && 
				localStorage.montahabilidade &&
				localStorage.montaseta
				){
				if (element.documento.classes == "area"){
					jsonYggmap.data.push(jsonElement);
				}else{
					if (localStorage.montacampo == "true" && element.documento.classes == "campo"){
						jsonYggmap.data.push(jsonElement);
					}else{
						if (localStorage.montacategoria == "true" && element.documento.classes == "categoria"){
							jsonYggmap.data.push(jsonElement);
						}else{
							if (localStorage.montahabilidade == "true" && element.documento.classes == "habilidade"){
								jsonYggmap.data.push(jsonElement);
							}else{
								if (localStorage.montaseta == "true" && element.documento.type == "edges"){
									jsonYggmap.data.push(jsonElement);
								}
							}
						}
					}
				}
			}else{
				jsonYggmap.data.push(jsonElement);
			};
		});
		localStorage.setItem("jsonYggmap", JSON.stringify(jsonYggmap));
		console.log (JSON.stringify(jsonYggmap));

	};

	function GetJson (Json) {
		alert(Json);
	};
	function verificaPossuiHabilidade(id){
		var possuiHabilidade = 1;
		var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
		$.each(objJson.documento.habilidadesInteresse, function(w, idHabilidade) {
			if (id == idHabilidade){
				possuiHabilidade = 2;
			};
		});
		$.each(objJson.documento.habilidades, function(w, idHabilidade) {
			if (id == idHabilidade){
				possuiHabilidade = 0;
			};
		});
		return possuiHabilidade;
	};	
	function verificaTemInteresseHabilidade(id){
		var habilidadeNecessaria = 0;
		var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
		$.each(objJson.documento.habilidades, function(w, idHabilidade) {
			if (id == idHabilidade){
//				habilidadeNecessaria = 0;
			};
		});
		return habilidadeNecessaria;
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
					cursosInteresse : [],
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
		if (tipo == "habilidadeInteresseOff"){
			$.each( objJson.documento.habilidadesInteresse, function( i, habilidade) {
				if (elemento == habilidade){
					objJson.documento.habilidadesInteresse.splice(i,1);
					atualizarPerfil = true;
				};
			});
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
		if (tipo == "habilidadesOff"){
			$.each( objJson.documento.habilidades, function( i, habilidade) {
				if (elemento == habilidade){
					objJson.documento.habilidades.splice(i,1);
					atualizarPerfil = true;
				};
			});
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
		if (tipo == "carreiraInteresseOff"){
			$.each( objJson.documento.carreirasInteresse, function( i, habilidade) {
				if (elemento == habilidade){
					objJson.documento.carreirasInteresse.splice(i,1);
					atualizarPerfil = true;
				};
			});
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
		if (tipo == "carreirasOff"){
			$.each( objJson.documento.carreiras, function( i, habilidade) {
				if (elemento == habilidade){
					objJson.documento.carreiras.splice(i,1);
					atualizarPerfil = true;
				};
			});
		};
		if (tipo == "cursoInteresse"){
			var existente = false;
			$.each( objJson.documento.cursosInteresse, function( i, curso) {
				if (elemento == curso){
					existente = true;
				};
			});
			if (!existente){
				objJson.documento.cursosInteresse.push(elemento);
				atualizarPerfil = true;
			};
		};
		if (tipo == "cursoInteresseOff"){
			$.each( objJson.documento.cursosInteresse, function( i, habilidade) {
				if (elemento == habilidade){
					objJson.documento.cursosInteresse.splice(i,1);
					atualizarPerfil = true;
				};
			});
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


	function checaUserPerfilElemento (tipo, elemento){

    	var objJson = JSON.parse(localStorage.getItem("meuPerfil"));

    	var temElemento = false;
		if (tipo == "habilidadeInteresse"){
			$.each( objJson.documento.habilidadesInteresse, function( i, habilidade) {
				if (elemento == habilidade){
					temElemento = true;
				};
			});
		};
		if (tipo == "habilidades"){
			var existente = false;
			$.each( objJson.documento.habilidades, function( i, habilidade) {
				if (elemento == habilidade){
					temElemento = true;
				};
			});
		};
		if (tipo == "carreiraInteresse"){
			$.each( objJson.documento.carreirasInteresse, function( i, carreira) {
				if (elemento == carreira){
					temElemento = true;
				};
			});
		};
		if (tipo == "carreiras"){
			$.each( objJson.documento.carreiras, function( i, carreira) {
				if (elemento == carreira){
					temElemento = true;
				};
			});
		};
		if (tipo == "cursoInteresse"){
			$.each( objJson.documento.cursosInteresse, function( i, curso) {
				if (elemento == curso){
					temElemento = true;
				};
			});
		};

		return temElemento;
	};

	function setupTools(){
		
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

		//
		//***  controle setup diagrama
		//
		$("#startZoom" ).on( "blur", function() {
			localStorage.startZoom = $("#startZoom" ).val();
			atualizaSetup();
		});		
		$("#minZoom" ).on( "blur", function() {
			localStorage.minZoom = $("#minZoom" ).val();
			atualizaSetup();
		});		
		$("#maxZoom" ).on( "blur", function() {
			localStorage.maxZoom = $("#maxZoom" ).val();
			atualizaSetup();
		});		
		$("#positionX").on( "blur", function() {
			localStorage.positionX = $("#positionX" ).val();
			atualizaSetup();
		});		
		$("#positionY").on( "blur", function() {
			localStorage.positionY = $("#positionY" ).val();
			atualizaSetup();
		});		
		$("#minFadeArea" ).on( "blur", function() {
			localStorage.minFadeArea = $("#minFadeArea" ).val();
			atualizaSetup();
		});		
		$("#maxFadeArea" ).on( "blur", function() {
			localStorage.maxFadeArea = $("#maxFadeArea" ).val();
			atualizaSetup();
		});		
		$("#minFadeCampo" ).on( "blur", function() {
			localStorage.minFadeCampo = $("#minFadeCampo" ).val();
			atualizaSetup();
		});		
		$("#maxFadeCampo" ).on( "blur", function() {
			localStorage.maxFadeCampo = $("#maxFadeCampo" ).val();
			atualizaSetup();
		});		
		$("#minFadeCategoria" ).on( "blur", function() {
			localStorage.minFadeCategoria = $("#minFadeCategoria" ).val();
			atualizaSetup();
		});		
		$("#maxFadeCategoria" ).on( "blur", function() {
			localStorage.maxFadeCategoria = $("#maxFadeCategoria" ).val();
			atualizaSetup();
		});		
		$("#minFadeHabilidade" ).on( "blur", function() {
			localStorage.minFadeHabilidade = $("#minFadeHabilidade" ).val();
			atualizaSetup();
		});		
		$("#maxFadeHabilidade" ).on( "blur", function() {
			localStorage.maxFadeHabilidade = $("#maxFadeHabilidade" ).val();
			atualizaSetup();
		});		
		$("#minFadeSeta" ).on( "blur", function() {
			localStorage.minFadeSeta = $("#minFadeSeta" ).val();
			atualizaSetup();
		});		
		$("#maxFadeSeta" ).on( "blur", function() {
			localStorage.maxFadeSeta = $("#maxFadeSeta" ).val();
			atualizaSetup();
		});		
		$("#animationStartArea" ).on( "blur", function() {
			localStorage.animationStartArea = $("#animationStartArea" ).val();
			atualizaSetup();
		});		
		$("#animationEndArea" ).on( "blur", function() {
			localStorage.animationEndArea = $("#animationEndArea" ).val();
			atualizaSetup();
		});		
		$("#animationStartCampo" ).on( "blur", function() {
			localStorage.animationStartCampo = $("#animationStartCampo" ).val();
			atualizaSetup();
		});		
		$("#animationEndCampo" ).on( "blur", function() {
			localStorage.animationEndCampo = $("#animationEndCampo" ).val();
			atualizaSetup();
		});		
		$("#animationStartCategoria" ).on( "blur", function() {
			localStorage.animationStartCategoria = $("#animationStartCategoria" ).val();
			atualizaSetup();
		});		
		$("#animationEndCategoria" ).on( "blur", function() {
			localStorage.animationEndCategoria = $("#animationEndCategoria" ).val();
			atualizaSetup();
		});		
		$("#animationStartHabilidade" ).on( "blur", function() {
			localStorage.animationStartHabilidade = $("#animationStartHabilidade" ).val();
			atualizaSetup();
		});		
		$("#animationEndHabilidade" ).on( "blur", function() {
			localStorage.animationEndHabilidade = $("#animationEndHabilidade" ).val();
			atualizaSetup();
		});		
		$("#positionX" ).on( "blur", function() {
			localStorage.positionX = $("#positionX" ).val();
			atualizaSetup();
		});		
		$("#positionY" ).on( "blur", function() {
			localStorage.positionY = $("#positionY" ).val();
			atualizaSetup();
		});		

		//
		//****	carregar setup diagrama		
		//		
				
		// **** carrega SETUP
		rest_obterSetup("setupYggBoard", carregaSetup, carregaSemSetup, semAcao)
		
	};

	function carregaSetup(data){
		
		var setup = data.documento.setupValue.split(";");
		localStorage.startZoom = data.documento.setupValue.split(";")[0].split("=")[1];
		$("#startZoom").val(data.documento.setupValue.split(";")[0].split("=")[1]);
		localStorage.positionX = data.documento.setupValue.split(";")[1].split("=")[1];
		$("#positionX").val(data.documento.setupValue.split(";")[1].split("=")[1]);
		localStorage.positionY = data.documento.setupValue.split(";")[2].split("=")[1];
		$("#positionY").val(data.documento.setupValue.split(";")[2].split("=")[1]);
		localStorage.minZoom = data.documento.setupValue.split(";")[3].split("=")[1];
		$("#minZoom").val(data.documento.setupValue.split(";")[3].split("=")[1]);
		localStorage.maxZoom = data.documento.setupValue.split(";")[4].split("=")[1];
		$("#maxZoom").val(data.documento.setupValue.split(";")[4].split("=")[1]);
		localStorage.minFadeArea = data.documento.setupValue.split(";")[5].split("=")[1];
		$("#minFadeArea").val(data.documento.setupValue.split(";")[5].split("=")[1]);
		localStorage.maxFadeArea = data.documento.setupValue.split(";")[6].split("=")[1];
		$("#maxFadeArea").val(data.documento.setupValue.split(";")[6].split("=")[1]);
		localStorage.animationStartArea = data.documento.setupValue.split(";")[7].split("=")[1];
		$("#animationStartArea").val(data.documento.setupValue.split(";")[7].split("=")[1]);
		localStorage.animationEndArea = data.documento.setupValue.split(";")[8].split("=")[1];
		$("#animationEndArea").val(data.documento.setupValue.split(";")[8].split("=")[1]);
		localStorage.minFadeCampo = data.documento.setupValue.split(";")[9].split("=")[1];
		$("#minFadeCampo").val(data.documento.setupValue.split(";")[9].split("=")[1]);
		localStorage.maxFadeCampo = data.documento.setupValue.split(";")[10].split("=")[1];
		$("#maxFadeCampo").val(data.documento.setupValue.split(";")[11].split("=")[1]);
		localStorage.animationStartCampo = data.documento.setupValue.split(";")[11].split("=")[1];
		$("#animationStartCampo").val(data.documento.setupValue.split(";")[11].split("=")[1]);
		localStorage.animationEndCampo = data.documento.setupValue.split(";")[12].split("=")[1];
		$("#animationEndCampo").val(data.documento.setupValue.split(";")[12].split("=")[1]);
		localStorage.minFadeCategoria = data.documento.setupValue.split(";")[13].split("=")[1];
		$("#minFadeCategoria").val(data.documento.setupValue.split(";")[13].split("=")[1]);
		localStorage.maxFadeCategoria = data.documento.setupValue.split(";")[14].split("=")[1];
		$("#maxFadeCategoria").val(data.documento.setupValue.split(";")[14].split("=")[1]);
		localStorage.animationStartCategoria = data.documento.setupValue.split(";")[15].split("=")[1];
		$("#animationStartCategoria").val(data.documento.setupValue.split(";")[15].split("=")[1]);
		localStorage.animationEndCategoria = data.documento.setupValue.split(";")[16].split("=")[1];
		$("#animationEndCategoria").val(data.documento.setupValue.split(";")[16].split("=")[1]);
		localStorage.minFadeHabilidade = data.documento.setupValue.split(";")[17].split("=")[1];
		$("#minFadeHabilidade").val(data.documento.setupValue.split(";")[17].split("=")[1]);
		localStorage.maxFadeHabilidade = data.documento.setupValue.split(";")[18].split("=")[1];
		$("#maxFadeHabilidade").val(data.documento.setupValue.split(";")[18].split("=")[1]);
		localStorage.animationStartHabilidade = data.documento.setupValue.split(";")[19].split("=")[1];
		$("#animationStartHabilidade").val(data.documento.setupValue.split(";")[19].split("=")[1]);
		localStorage.animationEndHabilidade = data.documento.setupValue.split(";")[20].split("=")[1];
		$("#animationEndHabilidade").val(data.documento.setupValue.split(";")[20].split("=")[1]);
		localStorage.minFadeSeta = data.documento.setupValue.split(";")[21].split("=")[1];
		$("#minFadeSeta").val(data.documento.setupValue.split(";")[21].split("=")[1]);
		localStorage.maxFadeSeta = data.documento.setupValue.split(";")[22].split("=")[1];
		$("#maxFadeSeta").val(data.documento.setupValue.split(";")[22].split("=")[1]);
	};

	function carregaSemSetup(){

		if (!localStorage.startZoom){
			localStorage.startZoom = 0.1;
		}else{
			$("#startZoom").val(localStorage.startZoom)
		};
		if (!localStorage.minZoom){
			localStorage.minZoom = 0.1;
		}else{
			$("#minZoom").val(localStorage.minZoom)
		};
		if (!localStorage.maxZoom){
			localStorage.maxZoom = 0.95;
		}else{
			$("#maxZoom").val(localStorage.maxZoom)
		};
		if (!localStorage.positionX){
			localStorage.positionX = 10;
		}else{
			$("#positionX").val(localStorage.positionX)
		};
		if (!localStorage.positionY){
			localStorage.positionY = 10;
		}else{
			$("#positionY").val(localStorage.positionY)
		};
		if (!localStorage.minFadeArea){
			localStorage.minFadeArea = 0;
		}else{
			$("#minFadeArea").val(localStorage.minFadeArea)
		};
		if (!localStorage.maxFadeArea){
			localStorage.maxFadeArea = 0.01;
		}else{
			$("#maxFadeArea").val(localStorage.maxFadeArea)
		};
		if (!localStorage.minFadeCampo){
			localStorage.minFadeCampo = 0.16;
		}else{
			$("#minFadeCampo").val(localStorage.minFadeCampo)
		};
		if (!localStorage.maxFadeCampo){
			localStorage.maxFadeCampo = 0.2;
		}else{
			$("#maxFadeCampo").val(localStorage.maxFadeCampo)
		};
		if (!localStorage.minFadeCategoria){
			localStorage.minFadeCategoria = 0.36;
		}else{
			$("#minFadeCategoria").val(localStorage.minFadeCategoria)
		};
		if (!localStorage.maxFadeCategoria){
			localStorage.maxFadeCategoria = 0.4;
		}else{
			$("#maxFadeCategoria").val(localStorage.maxFadeCategoria)
		};
		if (!localStorage.minFadeHabilidade){
			localStorage.minFadeHabilidade = 0.56;
		}else{
			$("#minFadeHabilidade").val(localStorage.minFadeHabilidade)
		};
		if (!localStorage.maxFadeHabilidade){
			localStorage.maxFadeHabilidade = 0.6;
		}else{
			$("#maxFadeHabilidade").val(localStorage.maxFadeHabilidade)
		};
		if (!localStorage.minFadeSeta){
			localStorage.minFadeSeta = 0.01;
		}else{
			$("#minFadeSeta").val(localStorage.minFadeSeta)
		};
		if (!localStorage.maxFadeSeta){
			localStorage.maxFadeSeta = 0.1;
		}else{
			$("#maxFadeSeta").val(localStorage.maxFadeSeta)
		};
		if (!localStorage.animationStartArea){
			localStorage.animationStartArea = 0.1;
		}else{
			$("#animationStartArea").val(localStorage.animationStartArea)
		};
		if (!localStorage.animationEndArea){
			localStorage.animationEndArea = 0.16;
		}else{
			$("#animationEndArea").val(localStorage.animationEndArea)
		};
		if (!localStorage.animationStartCampo){
			localStorage.animationStartCampo = 0.3;
		}else{
			$("#animationStartCampo").val(localStorage.animationStartCampo)
		};
		if (!localStorage.animationEndCampo){
			localStorage.animationEndCampo = 0.36;
		}else{
			$("#animationEndCampo").val(localStorage.animationEndCampo)
		};
		if (!localStorage.animationStartCategoria){
			localStorage.animationStartCategoria = 0.5;
		}else{
			$("#animationStartCategoria").val(localStorage.animationStartCategoria)
		};
		if (!localStorage.animationEndCategoria){
			localStorage.animationEndCategoria = 0.56;
		}else{
			$("#animationEndCategoria").val(localStorage.animationEndCategoria)
		};
		if (!localStorage.animationStartHabilidade){
			localStorage.animationStartHabilidade = 0.56;
		}else{
			$("#animationStartHabilidade").val(localStorage.animationStartHabilidade)
		};
		if (!localStorage.animationEndHabilidade){
			localStorage.animationEndHabilidade = 0.6;
		}else{
			$("#animationEndHabilidade").val(localStorage.animationEndHabilidade)
		};
		if (!localStorage.positionX){
			localStorage.positionX = 0;
		}else{
			$("#positionX").val(localStorage.positionX)
		};
		if (!localStorage.positionY){
			localStorage.positionY = 0
		}else{
			$("#positionY").val(localStorage.positionY)
		};
	};
	
	function atualizaSetup(){
	    
		var setupValue =
	           "Start Zoom=" + localStorage.startZoom + ";" +
	           "Position x=" + localStorage.positionX + ";" +
	           "Position y=" + localStorage.positionY + ";" +
	           "Zoom -=" + localStorage.minZoom + ";" +
	           "Zoom +=" + localStorage.maxZoom + ";" +
	           "Fade area -=" + localStorage.minFadeArea + ";" +
	           "Fade area +=" + localStorage.maxFadeArea + ";" +
	           "Animation area -=" + localStorage.animationStartArea + ";" +
	           "Animation area +=" + localStorage.animationEndArea + ";" +
	           "Fade campo -=" + localStorage.minFadeCampo + ";" +
	           "Fade campo +=" + localStorage.maxFadeCampo + ";" +
	           "Animation campo -=" + localStorage.animationStartCampo + ";" +
	           "Animation campo +=" + localStorage.animationEndCampo + ";" +
	           "Fade categoria -=" + localStorage.minFadeCategoria + ";" +
	           "Fade categoria +=" + localStorage.maxFadeCategoria + ";" +
	           "Animation categoria -=" + localStorage.animationStartCategoria + ";" +
	           "Animation categoria +=" + localStorage.animationEndCategoria + ";" +
	           "Fade habilidade -=" + localStorage.minFadeHabilidade + ";" +
	           "Fade habilidade +=" + localStorage.maxFadeHabilidade + ";" +
	           "Animation habilidade -=" + localStorage.animationStartHabilidade + ";" +
	           "Animation habilidade +=" + localStorage.animationEndHabilidade + ";" +
	           "Fade seta -=" + localStorage.minFadeSeta + ";" +
	           "Fade seta +=" + localStorage.maxFadeSeta;
	    
	    var objSetup =
	    		{
	    		documento :
	    			{
	    			setupKey : "setupYggBoard",
	    			setupValue : setupValue
	    			}
	    		};
	    
	    rest_atualizaSetup(objSetup, semAcao, semAcao)

	
	};