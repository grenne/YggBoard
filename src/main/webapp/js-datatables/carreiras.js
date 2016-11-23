/**
 * 				obter os dados
 */
//		
//		carrega carreiras
//
	/**
	 * 	carrega lista de carreiras
	 */
	var cy = "";
	rest_obterCarreiras(carregaCarreiras, semAcao);
		
	function carregaCarreiras (objJson, cy) {
		$("#qtdeObjetivos").html(objJson.length + " objetivos");
		
		montaHeaderCarreira (objJson, cy);
    	
		$( ".itemCarreira" ).remove();
        
		$.each(objJson, function (i, carreira) {
        	
        	montaLinhaCarreira(i, carreira);
        	
			var industriaIncluida = false;
        	$(".item-industria").each(function(i, value) {
				if ($(this).attr('data-nome-industria') == carreira.industria) {
					industriaIncluida = true;
				};
			});
        	
        	if (!industriaIncluida){
            	var industriaItem = 
            		'<li id="industria_' + i + '" class="list-group-item item-industria" data-nome-industria="' + carreira.industria + '"><input id="industria-check_' + i + '" type="checkbox">' + carreira.industria + '</li>';
        		$("#filtro-industria-list").append(industriaItem);
                $('#industria_' + i).off('click');
                $('#industria_' + i).on('click', function () {
					montaHeaderCarreira (objJson, cy);
					$(".itemCarreira").remove();
					totalObjetivos = 0;
					$(".item-industria").each(function(w, value) {
        				var item = $(this).attr('id').split("_")[1];
        				if ($('#industria-check_' + item).prop( "checked" )) {
        					var nomeIndustria = $(this).attr('data-nome-industria');
        					$.each(objJson, function (i, carreira){
                        		if (carreira.industria == nomeIndustria) {
                        			montaLinhaCarreira(i, carreira);
                        			++totalObjetivos;
                        		};
                        	});
        				};
        			});
    		        var carreira_table = $('#carreira_list');
    				carreira_table.footable().trigger('footable_collapse_all');
    				$("#qtdeObjetivos").html(totalObjetivos + " objetivos");
                });
        	};
        	
            $('#habilidadeCarreiraIn_' + i).bind('click', function () {
            	$(".habilidadeCarreira").removeClass("hide");
            	$(".habilidadeCarreiraIn").addClass("hide");
            });
            $('#habilidadeCarreiraOff_' + i).bind('click', function () {
            	$(".habilidadeCarreira").addClass("hide");
            	$(".habilidadeCarreiraIn").removeClass("hide");
            });
            $('#comparaCarreira' + i).bind('click', function () {
            	$("#labelYggmap").html("Montando carreira:" + carreira.nome + "...");
            	$("#labelYggmap").removeClass("text-success");
            	$("#labelYggmap").removeClass("text-warning");
            	$("#labelYggmap").addClass("text-primary");
            	comparaCarreira (cy, carreira);
            	$('.cursos').addClass('hide');
				$('.habilidade').addClass('hide');
            	$("#labelYggmap").html("Carreira:" + carreira.nome);
            	atualizaUserPerfil ("carreiras", carreira.nome);
            	atualizaUserPerfil ("tags", tagsString);
            });
            $('#acaoCarreiraInteresse_' + i).bind('click', function () {
            	atualizaUserPerfil ("carreiraInteresse", carreira.nome);
            	atualizaUserPerfil ("tags", tagsString);
            });
        });

        var carreira_table = $('#carreira_list');
		carreira_table.footable().trigger('footable_collapse_all');

//		$('#carreira_theader_tab').on('shown.bs.tab', function (e) {
//			carreira_table.footable().trigger('footable_collapse_all');
//		});
		// Search input
		$('#searchCarreiras').on('input', function (e) {
			e.preventDefault();
			carreira_table.trigger('footable_filter', {filter: $(this).val()});
		});
		// mostra filtros
		$('#filterObjetivo').off('click');
		$('#filterObjetivo').on('click', function () {
			if ($('#filtro-carreira').hasClass("hide")){
				$(".filtro-carreira").removeClass("hide");
				$('#searchCarreiras').off('input');
				$('#searchCarreiras').on('input', function (e) {
					e.preventDefault();
					carreira_table.trigger('footable_filter', {filter: $(this).val()});
				});
			}else{
				$('#searchCarreiras').off('input');
				$(".filtro-carreira").addClass("hide");
			};
        });
	};
		
	function montaHeaderCarreira (objJson, cy) {

		$( ".carreira_theader" ).remove();

		var carreira_table_header =
				'<table id="carreira_list" class="carreira_theader footable table toggle-circle" data-sorting="true">' +
					'<thead>' +
						'<tr>' +
							'<th data-toggle="true" data-sort-initial="true"></th>' +
							'<th data-sort-ignore="true"></th>' +
							'<th data-sort-ignore="true"></th>' +
							'<th data-hide="all" ></th>' +
							'<th data-hide="all" ></th>' +
							'<th data-hide="all" ></th>' +
							'<th data-hide="all" ></th>' +
							'<th data-hide="all" ></th>' +
							'<th data-hide="all" ></th>' +
							'<th data-hide="all" ></th>' +
							'<th data-hide="all" ></th>' +
							'<th data-hide="all" ></th>' +
							'<th data-hide="all" ></th>' +
						'</tr>' +
					'</thead>' +
					'<tbody id="carreira_tbody">' +
					'</tbody>' +
					'<tfoot>' +
						'<tr>' +
							'<td colspan="5">' +
								'<div class="text-right">' +
									'<ul class="pagination"></ul>' +
								'</div>' +
							'</td>' +
						'</tr>' +
					'</tfoot>' +
				'</table>';
    	$( "#carreira_theader" ).append(carreira_table_header);
	};	

	function montaLinhaCarreira (i, carreira){
		var habilidades = "";
		$.each(carreira.arrayNecessarios, function (w, habilidade){
			habilidades = habilidades +
			'<br class="habilidadeCarreira hide"><span class="panel-text habilidadeCarreira hide habilidadeNecessariaCarreira_' + i + '" data-idHabilidade="' + habilidade.idHabilidade + '">- ' + habilidade.name + '</span>';
		});
		var habilidadesRecomendados = "";
		$.each(carreira.arrayRecomendados, function (w, habilidade){
			habilidadesRecomendados = habilidadesRecomendados +
			'<span class="hide habilidadeRecomendadaCarreira_' + i + '" data-idHabilidade="' + habilidade.idHabilidade + '"></span>';
		});
		var disabled = "";
		var textoTip = "quero aprender";
		if (checaUserPerfilElemento("carreiraInteresse", carreira.nome)){
			disabled = 'disabled';
			textoTip = "marquei interesse";	
		};
		carreira_table_row = 
			'<tr id="itemCarreira_' + i + '" class="itemCarreira" data-nome-industria="' + carreira.industria + '">' +
				'<td id="nome_' + i + '"><span class="panel-label" data-tooltip="objetivo"></span>' + carreira.nome + '</td>' +
				'<td><a id="comparar_' + i + '" data-tooltip="comparar" class="icon-logo"><img src="img/icone-arvore.png" alt="compara" height="15" width="15"  class="icon-logo"></i></a></td>' +
				'<td><a id="queroAprender_' + i + '" data-tooltip="' + textoTip + '" class="' + disabled + '"><i class="fa fa-thumbs-o-up"></i></a></td>' +
					'<td><span class="panel-label">OBJETIVO: </span><br>' +
					'<span class="panel-text">' + carreira.descricao + '</span></td>' +
					'<td><br><span class="panel-label">INDÚSTRIA: </span><br>' +
					'<span class="panel-text">' + carreira.industria + '</span></td>' +
					'<td><br><span class="panel-label">FUNÇÃO: </span><br>' +
					'<span class="panel-text">' + carreira.funcao + '</span></td>' +
					'<td><br><span class="panel-label">TAREFAS: </span><br>' +
					'<span class="panel-text">' + carreira.tarefas + '</span></td>' +
					'<td><br><button id="habilidadeCarreiraIn_' + i + '" class="panel-button-carreira habilidadeCarreiraIn"><i class="fa fa-chevron-down icon-check-carreira"></i><span>lista de habilidades</span></button>' +
					'<button id="habilidadeCarreiraOff_' + i + '" class="panel-button-carreira habilidadeCarreira hide"><i class="fa fa-chevron-up icon-check-carreira"></i><span>lista de habilidades</span></button></td>' +
					'<td>' + habilidades + habilidadesRecomendados + '</td>' +
			'</tr>';
		$("#carreira_tbody").append(carreira_table_row);
	
		$('#comparar_' + i).off('click');
	    $('#comparar_' + i).on('click',function(){
	    	var objJson = JSON.parse(localStorage.getItem("jsonYggmap"));
			$.each( objJson.data, function(w, element ) {
				objJson.data[w].states = 0;
		    	$('.habilidadeNecessariaCarreira_' + i).each(function( z ) {
		    		  if ($(this).attr('data-idhabilidade') == element.id){
		  	    		console.log ("comparacao necessaria - " + $(this).attr('data-idhabilidade') + " - " + element.id)
		    			  objJson.data[w].states = 1;
		    		  };
		    	});
		    	$('.habilidadeRecomendadaCarreira_' + i).each(function( z ) {
		    		  if ($(this).attr('data-idhabilidade') == element.id){
		  	    		console.log ("comparacao recomendada - " + $(this).attr('data-idhabilidade') + " - " + element.id)
		    			  objJson.data[w].states = 2;
		    		  };
		    	});
			});
			localStorage.setItem("jsonYggmap", JSON.stringify(objJson));
			SendMessage('Main','Load',localStorage.getItem("jsonYggmap"));
	    });
		$('#queroAprender_' + i).off('click');
	    $('#queroAprender_' + i).on('click',function(){
	    	$('#queroAprender_' + i).addClass("disabled");
	    	var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
	    	atualizaUserPerfilElemento (objJson, "carreiraInteresse", carreira.nome);
	    });	
	};