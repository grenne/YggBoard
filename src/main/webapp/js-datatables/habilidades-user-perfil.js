/**
 * 				obter os dados
 */

	function obterHabilidadesUserPerfil (tipo, montarCurso) {
//		
//		carrega carreiras
//
		/**
		 * 	carrega lista de carreiras
		 */
		
		if (montarCurso){
			rest_obterUserPerfilItens(tipo, carregaCursosUserPerfil, semAcao, tipo);
		}else{
			rest_obterUserPerfilItens(tipo, carregaHabilidadesUserPerfil, semAcao, tipo);
		};
	};
		
	function carregaHabilidadesUserPerfil (objJson, tipo, carreira) {	

		$( ".habilidades_user_perfil_theader" ).remove();
		var label = "";
		if (tipo == "habilidades"){
			label = "Habilidades visitadas"
		}else{
			if (tipo == "habilidades-necessarias-carreiras"){
				label = "Habilidades dos objetivos visitados"
			}else{
				if (tipo == "habilidades-interesse-carreiras"){
					label = "Habilidades dos objetivos com interesse"
				}else{
					if (tipo == "habilidades-necessarias-carreira"){
						label = "Habilidades necessárias do objetivo " + carreira
					}else{
						label = "Interesse nas habilidades"
					}
				}
			}
		};
		var habilidade_user_perfil_table_header =
				'<table id="habilidade_user_perfil_list" class="habilidades_user_perfil_theader table toggle-circle">' +
					'<thead>' +
						'<tr>' +
							'<th data-toggle="true">' + label + '</th>' +
							'<th>Ação</th>' +
							'<th data-hide="all"></th>' +
							'<th data-hide="all"></th>' +
							'<th data-hide="all"></th>' +
							'<th data-hide="all"></th>' +
							'<th data-hide="all"></th>' +
						'</tr>' +
					'</thead>' +
					'<tbody id="habilidade_user_perfil_tbody">' +
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
    	$( "#habilidades_user_perfil_theader" ).append(habilidade_user_perfil_table_header);

    	$( ".itemHabilidade" ).remove();
        $.each(objJson, function (i, element) {
        	habilidade_user_perfil_table_row = 
				'<tr class="itemHabilidade">' +
		   			'<td id="nome_' + i + '">' + element.documento.name + '</td>' +
					'<td id="acaoHabilidadeUserPefil_' + i + '"><button id="acaoHabilidadeUserPefil__' + i + '" class="btn-xs btn-info">Cursos</button></td>' +
					'<td id="descricao_' + i + '"><span class="panel-label">Descrição: </span>' + element.documento.descricao + '</td>' +
					'<td id="wiki_' + i + '" class="text-info"><span class="panel-label">Wiki: </span><a href="' + element.documento.wiki + '" target="_blank">Wiki</a></td>' +
					'<td id="area' + i + '"><span class="panel-label">Área: </span>' + element.documento.area + '</td>' +
					'<td id="campo' + i + '"><span class="panel-label">Campo: </span>' + element.documento.campo + '</td>' +
					'<td id="categoria' + i + '"><span class="panel-label">Categoria: </span>' + element.documento.categoria + '</td>' +
				'</tr>';
        	$("#habilidade_user_perfil_tbody").append(habilidade_user_perfil_table_row);
            $('#acaoHabilidadeUserPefil_' + i).bind('click', function () {
        		$('.paineis-user-perfil').addClass("hide");
        		$('.curso-user-perfil').removeClass("hide");
        		obterCursosHabilidade (element.documento.idHabilidade, tipo, element.documento.name)
            });
        });
        
        $('.habilidades').removeClass('hide');
        
        var habilidade_user_perfil_table = $('#habilidade_user_perfil_list');
		habilidade_user_perfil_table.footable().trigger('footable_collapse_all');


		$('#collapseHabilidadesUserPerfil').on('click', function(){
			habilidade_user_perfil_table.trigger('footable_collapse_all');
			$( "#collapseHabilidadesUserPerfil").addClass('hide');
			$( "#expandHabilidadesUserPerfil").removeClass('hide');
		});
		$('#expandHabilidadesUserPerfil').on('click', function(){
			habilidade_user_perfil_table.trigger('footable_expand_all');
			$( "#collapseHabilidadesUserPerfil").removeClass('hide');
			$( "#expandHabilidadesUserPerfil").addClass('hide');
		})
		// Search input
		$('#searchHabilidadesUserPerfil').on('input', function (e) {
			e.preventDefault();
			habilidade_user_perfil_table.trigger('footable_filter', {filter: $(this).val()});
		});
	};
