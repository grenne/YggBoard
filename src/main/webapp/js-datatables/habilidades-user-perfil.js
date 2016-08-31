/**
 * 				obter os dados
 */

	function obterHabilidadesUserPerfil (tipo, montarCurso, append) {
//		
//		carrega carreiras
//
		/**
		 * 	carrega lista de carreiras
		 */
		
		if (montarCurso){
			rest_obterUserPerfilItens(tipo, carregaCursosUserPerfil, semAcao, tipo, null, append);
		}else{
			rest_obterUserPerfilItens(tipo, carregaHabilidadesUserPerfil, semAcao, tipo, null, append);
		};
	};
		
	function carregaHabilidadesUserPerfil (objJson, tipo, carreira, append) {	

		$("." + append).remove();
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
						label = "Habilidades faltantes do objetivo "  + carreira
					}else{
						label = "Interesse nas habilidades"
					}
				}
			}
		};
    	if (append == "habilidades_user_perfil_conquista_theader"){
    		label = "Habilidades conquistadas";
    	};
		var habilidade_user_perfil_table_header =
				'<table id="habilidade_user_perfil_list' + append + '" class="' + append + '">' +
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
					'<tbody id="habilidade_user_perfil_tbody' + append + '">' + 
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
    	$("#" + append).append(habilidade_user_perfil_table_header);

    	$( ".itemHabilidade" + append).remove();
        $.each(objJson, function (i, element) {
        	habilidade_user_perfil_table_row = 
				'<tr class="itemHabilidade' + append + '">' +
		   			'<td id="nome_' + i + '">' + element.documento.name + '</td>' +
					'<td id="acaoHabilidadeUserPefil_' + i + append + '"><button id="acaoHabilidadeUserPefil__' + i + append + '" class="btn-xs btn-info">Cursos</button></td>' +
					'<td id="descricao_' + i + '"><span class="panel-label">Descrição: </span>' + element.documento.descricao + '</td>' +
					'<td id="wiki_' + i + '" class="text-info"><span class="panel-label">Wiki: </span><a href="' + element.documento.wiki + '" target="_blank">Wiki</a></td>' +
					'<td id="area' + i + '"><span class="panel-label">Área: </span>' + element.documento.area + '</td>' +
					'<td id="campo' + i + '"><span class="panel-label">Campo: </span>' + element.documento.campo + '</td>' +
					'<td id="categoria' + i + '"><span class="panel-label">Categoria: </span>' + element.documento.categoria + '</td>' +
				'</tr>';
        	$("#habilidade_user_perfil_tbody" + append).append(habilidade_user_perfil_table_row);
        	$('#acaoHabilidadeUserPefil_' + i + append).off('click');
            $('#acaoHabilidadeUserPefil_' + i + append).on('click', function () {
        		$('.paineis-user-perfil').addClass("hide");
        		$('.curso-user-perfil').removeClass("hide");
            	if (append == "habilidades_user_perfil_theader"){
            		obterCursosHabilidade (element.documento.idHabilidade, tipo, element.documento.name, "cursos_user_perfil_theader")
            	}else{
            		obterCursosHabilidade (element.documento.idHabilidade, tipo, element.documento.name, "cursos_user_perfil_conquista_theader")
            	}
            });
        });
        
        $('.habilidades').removeClass('hide');
        
        var habilidade_user_perfil_table = $('#habilidade_user_perfil_list' + append);
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

		$('#collapseHabilidadesUserPerfilConquista').on('click', function(){
			habilidade_user_perfil_table.trigger('footable_collapse_all');
			$( "#collapseHabilidadesUserPerfilConquista").addClass('hide');
			$( "#expandHabilidadesUserPerfilConquista").removeClass('hide');
		});
		$('#expandHabilidadesUserPerfilConquista').on('click', function(){
			habilidade_user_perfil_table.trigger('footable_expand_all');
			$( "#collapseHabilidadesUserPerfilConquista").removeClass('hide');
			$( "#expandHabilidadesUserPerfilConquista").addClass('hide');
		})
		// Search input
		$('#searchHabilidadesUserPerfilConquista').on('input', function (e) {
			e.preventDefault();
			habilidade_user_perfil_table.trigger('footable_filter', {filter: $(this).val()});
		});
	};
