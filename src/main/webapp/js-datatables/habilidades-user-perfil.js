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
							'<th data-toggle="true" data-sort-ignore="true"></th>' +
							'<th data-toggle="true" data-sort-ignore="true"></th>' + 
							'<th data-hide="all" ></th>' +
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
        	var cursos = "";
        	$.each(element.cursos, function (w, curso){
        		cursos = cursos +
   				'<div class="row">' +
   					'<div class="user-panel-curso-div col-xs-12">' +
   						'<span class="user-panel-curso-habilidade-nome cursoHabilidade_' + i + "-" + w + ' ">- ' + curso.documento.descricao + '</span>' +
   						'<a id="wiki_' + i + '" href="' + curso.documento.wiki + '" class="wiki" data-tooltip="wikipédia"  target="_blank"><i class="fa fa-wikipedia-w"></i></a></td>';
					'</div>' +
   				'</div>';
        	});
        	habilidade_user_perfil_table_row = 
				'<tr id="itemHabilidade_' + i + '" class="itemHabilidade' + append + '">' +
		   			'<td>' + 
	    				'<span class="user-panel-label">' + element.documento.name + '</span>' +
					'</td>' +
					'<td class="user-panel-td"><a id="excluiInteresse_' + i + '" data-tooltip="exclui interesse"><i class="fa fa-trash-o icon-trash"></i></a></td>' +
					'<td><span class="user-panel-label-curso">Cursos disponíveis</span>' +
					cursos +
					'</td>' +
				'</tr>';
        	$("#habilidade_user_perfil_tbody" + append).append(habilidade_user_perfil_table_row);
        	$("#excluiInteresse_" + i).off('click');
    		$("#excluiInteresse_" + i).on('click',function(){
    	    	var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
    	    	atualizaUserPerfilElemento (objJson, "habilidadeInteresseOff", element.documento.idHabilidade);
	        	$("#itemHabilidade_" + i).addClass('hide');
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
