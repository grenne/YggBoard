/**
 * 				obter os dados
 */

	function obterCarreirasUserPerfil (tipo, carreira) {
//		
//		carrega carreiras
//
		/**
		 * 	carrega lista de carreiras
		 */

		rest_obterUserPerfilItens(tipo, carregaCarreirasUserPerfil, semAcao, tipo, carreira);
	};
		
	function carregaCarreirasUserPerfil (objJson, tipo) {	
		$( ".carreiras_user_perfil_theader" ).remove();

		var label = "";
		if (tipo == "carreiras"){
			label = "Objetivos visitados"
		}else{
			label = "Interesse nos objetivos"
		};
		var carreira_user_perfil_table_header =
				'<table id="carreira_user_perfil_list" class="carreiras_user_perfil_theader table toggle-circle">' +
					'<thead>' +
						'<tr>' +
							'<th data-toggle="true">' + label + '</th>' +
							'<th>Ação</th>' +
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
					'<tbody id="carreira_user_perfil_tbody">' +
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
    	$( "#carreiras_user_perfil_theader" ).append(carreira_user_perfil_table_header);

    	$( ".itemCarreiraUserPerfil" ).remove();
        $.each(objJson, function (i, carreira) {
        	var tagsString = "";
        	var comma = "";
        	$.each(carreira.tags, function (i, tags){
        		tagsString = tagsString + comma + tags;
        		comma = ",";
        	});
        	carreira_user_perfil_table_row = 
				'<tr class="itemCarreiraUserPerfil">' +
		   			'<td id="nome_' + i + '"><span class="panel-label"></span>' + carreira.nome + '</td>' +
					'<td id="acaoCarreiraUserPerfilHabilidades' + i + '"><button id="acaoCarreiraUserPerfilHabilidades_' + i + '" class="btn-xs btn-info">Habilidades Faltantes</button></td>' +
					'<td id="descricao_' + i + '"><span class="panel-label">Objetivo: </span>' + carreira.descricao + '</td>' +
					'<td id="industria_' + i + '"><span class="panel-label">Industria: </span>' + carreira.industria + '</td>' +
					'<td id="tarefas_' + i + '"<span class="panel-label">Tarefas: </span>' + carreira.tarefas + '</td>' +
					'<td id="salarioMinimo_' + i + '"><span class="panel-label">Salário Minimo: </span>' + montaValor(carreira.salarioMinimo) + '</td>' +
					'<td id="salarioMedio_' + i + '"><span class="panel-label">Salário Médio: </span>' + montaValor(carreira.salarioMedio) + '</td>' +
					'<td id="salarioMaximo_' + i + '"><span class="panel-label">Salário Maximo: </span>' + montaValor(carreira.salarioMaximo) + '</td>' +
					'<td id="funcao_' + i + '">Função:' + carreira.funcao + '</td>' +
					'<td id="tags_' + i + '"><span class="hide">' + tagsString + '</span></td>' +
				'</tr>';
        	$("#carreira_user_perfil_tbody" ).append(carreira_user_perfil_table_row);
            $('#acaoCarreiraUserPerfilHabilidades' + i).bind('click', function () {
        		$('.paineis-user-perfil').addClass("hide");
        		$('.habilidade-user-perfil').removeClass("hide");
				rest_obterUserPerfilItens("habilidades-necessarias-carreira", carregaHabilidadesUserPerfil, semAcao, "habilidades-necessarias-carreira", carreira.nome);
            });
        });

        var carreira_user_perfil = $('#carreira_user_perfil_list');
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
	};
