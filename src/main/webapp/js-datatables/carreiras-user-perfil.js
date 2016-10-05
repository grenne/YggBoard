/**
 * 				obter os dados
 */

	function obterCarreirasUserPerfil (tipo, carreira, append) {
//		
//		carrega carreiras
//
		/**
		 * 	carrega lista de carreiras
		 */

		rest_obterUserPerfilItens(tipo, carregaCarreirasUserPerfil, semAcao, tipo, carreira, append);
	};
		
	function carregaCarreirasUserPerfil (objJson, tipo, carreira, append) {	
		$("." + append).remove();

		var label = "";
		if (tipo == "carreiras"){
			label = "Objetivos visitados"
		}else{
			label = "Interesse nos objetivos"
		};
    	var actions = "";
    	if (append == "carreiras_user_perfil_theader"){
    		actions = 
				'<th> % </th>' +
				'<th>Ação</th>';
    	}else{
    		label = "Objetivos conquistados";    		
    	};
		var carreira_user_perfil_table_header =
				'<table id="carreira_user_perfil_list' + append + '" class="' + append + '">' +
					'<thead>' +
						'<tr>' +
							'<th data-toggle="true" data-sort-ignore="true"></th>' +
							'<th data-toggle="true" data-sort-ignore="true"></th>' + 
							'<th data-toggle="true" data-sort-ignore="true"></th>' + 
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
					'<tbody id="carreira_user_perfil_tbody' + append + '">' +
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
		$("#" + append).append(carreira_user_perfil_table_header);

    	$( ".itemCarreiraUserPerfil" + append).remove();
        $.each(objJson, function (i, carreira) {
        	calculoPercentual = parseInt(carreira.totalPossuiHabilidades) / parseInt(carreira.totalHabilidades) * 100;
            var percentualHabilidades = calculoPercentual.toFixed(0);
        	if ((append == "carreiras_user_perfil_conquista_theader" && percentualHabilidades == 100) | 
        		(append == "carreiras_user_perfil_theader" && percentualHabilidades != 100)	){
	        	var tagsString = "";
	        	var comma = "";
	        	$.each(carreira.tags, function (i, tags){
	        		tagsString = tagsString + comma + tags;
	        		comma = ",";
	        	});
	        	actions = "";
	        	if (append == "carreiras_user_perfil_theader"){
	        		actions = 
	        			'<td><span class="panel-label percentual">' + percentualHabilidades + '%  em comum </span></td>';
	        	};
	        	carreira_user_perfil_table_row = 
					'<tr class="itemCarreiraUserPerfil' + append + '">' +
			   			'<td id="nome_' + i + '"><span class="user-panel-label">' + carreira.nome + '</span></td>' +
			   			actions +
						'<td><a id="excluiInteresse_' + i + '" data-tooltip="exclui interesse"><i class="fa fa-trash-o icon-trash"></i></a></td>' +
						'<td id="descricao_' + i + '"><span class="panel-label">Objetivo: </span>' + carreira.descricao + '</td>' +
						'<td id="industria_' + i + '"><span class="panel-label">Industria: </span>' + carreira.industria + '</td>' +
						'<td id="tarefas_' + i + '"<span class="panel-label">Tarefas: </span>' + carreira.tarefas + '</td>' +
						'<td id="salarioMinimo_' + i + '"><span class="panel-label">Salário Minimo: </span>' + montaValor(carreira.salarioMinimo) + '</td>' +
						'<td id="salarioMedio_' + i + '"><span class="panel-label">Salário Médio: </span>' + montaValor(carreira.salarioMedio) + '</td>' +
						'<td id="salarioMaximo_' + i + '"><span class="panel-label">Salário Maximo: </span>' + montaValor(carreira.salarioMaximo) + '</td>' +
						'<td id="funcao_' + i + '">Função:' + carreira.funcao + '</td>' +
						'<td id="tags_' + i + '"><span class="hide">' + tagsString + '</span></td>' +
					'</tr>';
	        	$("#carreira_user_perfil_tbody" + append).append(carreira_user_perfil_table_row);
	        	$('#acaoCarreiraUserPerfilHabilidades' + i + append).off('click');
	            $('#acaoCarreiraUserPerfilHabilidades' + i + append).on('click', function () {
	        		$('.paineis-user-perfil').addClass("hide");
	        		$('.habilidade-user-perfil').removeClass("hide");
					rest_obterUserPerfilItens("habilidades-interesse-carreiras", carregaHabilidadesUserPerfil, semAcao, "habilidades-necessarias-carreira", carreira.nome, "habilidades_user_perfil_theader");
	            });
        	};
        });

        var carreira_user_perfil = $('#carreira_user_perfil_list' + append);
		carreira_user_perfil.footable().trigger('footable_collapse_all');

		$('#collapseCarreirasUserPerfil').on('click', function(){
			carreira_user_perfil.trigger('footable_collapse_all');
			$( "#collapseCarreirasUserPerfil").addClass('hide');
			$( "#expandCarreirasUserPerfil").removeClass('hide');
		});
		$('#expandCarreirasUserPerfil').on('click', function(){
			carreira_user_perfil.trigger('footable_expand_all');
			$( "#collapseCarreirasUserPerfil").removeClass('hide');
			$( "#expandCarreirasUserPerfil").addClass('hide');
		})
		// Search input
		$('#searchCarreirasUserPerfil').on('input', function (e) {
			e.preventDefault();
			carreira_user_perfil.trigger('footable_filter', {filter: $(this).val()});
		});

		$('#collapseCarreirasUserPerfilConquista').on('click', function(){
			carreira_user_perfil.trigger('footable_collapse_all');
			$( "#collapseCarreirasUserPerfilConquista").addClass('hide');
			$( "#expandCarreirasUserPerfilConquista").removeClass('hide');
		});
		$('#expandCarreirasUserPerfilConquista').on('click', function(){
			carreira_user_perfil.trigger('footable_expand_all');
			$( "#collapseCarreirasUserPerfilConquista").removeClass('hide');
			$( "#expandCarreirasUserPerfilConquista").addClass('hide');
		})
		// Search input
		$('#searchCarreirasUserPerfilConquista').on('input', function (e) {
			e.preventDefault();
			carreira_user_perfil.trigger('footable_filter', {filter: $(this).val()});
		});
	
	};
