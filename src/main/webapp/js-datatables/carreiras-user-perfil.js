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
				'<table id="carreira_user_perfil_list' + append + '" class="' + append + ' user-panel-table">' +
					'<thead>' +
						'<tr>' +
							'<th data-toggle="true" data-sort-ignore="true"></th>' +
							'<th data-toggle="true" data-sort-ignore="true"></th>' + 
							'<th data-toggle="true" data-sort-ignore="true"></th>' + 
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
            	var habilidades = "";
            	$.each(carreira.arrayNecessarios, function (z, habilidade){
            		habilidades = habilidades +
       				'<div class="row">' +
	       				'<div class="user-panel-habilidade-div col-xs-12">' +
		    				'<span class="user-panel-carreira-habilidade-nome habilidadeCarreira col-xs-9">- ' + habilidade.name + '</span>' +
							'<button id="cursoHabilidadeIn_' + i + "-" + z + '" class="user-panel-button-curso user-panel-button-curso-item col-xs-3"><span><i class="fa fa-chevron-down "></i> cursos</span></button>' +
							'<button id="cursoHabilidadeOff_' + i + "-" + z + '" class="user-panel-button-curso col-xs-3 hide"><span><i class="fa fa-chevron-up "></i> cursos</span></button>' +
						'</div>' +
					'</div>';
                	$.each(habilidade.cursos, function (w, curso){
                		habilidades = habilidades +
           				'<div class="row">' +
           					'<div class="user-panel-curso-div col-xs-12">' +
           						'<span class="user-panel-curso-habilidade-nome cursoHabilidade_' + i + "-" + z + ' col-xs-12 hide">- ' + curso.documento.descricao + '</span>' +
    						'</div>' +
           				'</div>';
                	});
            	});
	        	actions = "";
	        	if (append == "carreiras_user_perfil_theader"){
	        		actions = 
	        			'<td class="user-panel-td"><span class="panel-label percentual-box"><span class="percentual-numero">' + percentualHabilidades + '%</span><span class="percentual-texto"> em comum</span></td>';
	        	};
	        	carreira_user_perfil_table_row = 
					'<tr class="itemCarreiraUserPerfil col-xs-12' + append + '">' +
			   			'<td id="nome_' + i + '" class="user-panel-td"><span class="user-panel-label">' + carreira.nome + '</span></td>' +
			   			actions +
						'<td class="user-panel-td"><a id="excluiInteresse_' + i + '" data-tooltip="exclui interesse"><i class="fa fa-trash-o icon-trash"></i></a></td>' +
						'<td>' +
							'<div id="habilidades_' + i + '" class="user-panel-td-habilidade"><span class="user-panel-label-habilidade">Habilidades faltantes</span>' +
							habilidades +
							'</div>' +
						'</td>' +
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
        
		$(".user-panel-button-curso-item").each(function() {
			var id = $(this).attr('id');
			var i = id.split("_")[1];
			$('#cursoHabilidadeIn_' + i).on('click', function(){
				$( ".cursoHabilidade_" + i).removeClass('hide');
				$( "#cursoHabilidadeOff_" + i).removeClass('hide');
				$( "#cursoHabilidadeIn_" + i).addClass('hide');
			});
			$('#cursoHabilidadeOff_' + i).on('click', function(){
				$( ".cursoHabilidade_" + i).addClass('hide');
				$( "#cursoHabilidadeOff_" + i).addClass('hide');
				$( "#cursoHabilidadeIn_" + i).removeClass('hide');
			});
		});

        carreira_user_perfil.footable().trigger('footable_collapse_all');

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
