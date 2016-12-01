/**
 * 				obter os dados
 */

	function obterCursosHabilidade (habilidade, tipo, habilidadeNome, append) {

		rest_obterCursosHabilidade(habilidade, carregaCursosUserPerfil, semAcao, tipo, habilidadeNome, append);
	
	};
		
	function carregaCursosUserPerfil (objJson, tipo, habilidadeNome, append) {	
//		
//		carrega cursos
//
		$( "." + append ).remove();
		var label = "";
		if (habilidadeNome){
			label = " da habilidade " + habilidadeNome;
		};

		var curso_user_perfil_table_header =
				'<table id="curso_user_perfil_list' + append + '" class="' + append + '">' +
					'<thead>' +
						'<tr>' +
							'<th data-toggle="true">Materias' + label + '</th>' +
//							'<th>Ação</th>' +
							'<th data-hide="all" class="text-info">Curso</th>' +
							'<th data-hide="all" class="text-info">Descrição</th>' +
							'<th data-hide="all" class="text-info">Tempo</th>' +
							'<th data-hide="all" class="text-info">Custo</th>' +
							'<th data-hide="all" class="text-info">Escola</th>' +
							'<th data-hide="all" class="text-info">Pré requisito</th>' +
						'</tr>' +
					'</thead>' +
					'<tbody id="curso_user_perfil_tbody' + append + '">' +
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
    	$( "#" + append).append(curso_user_perfil_table_header);

    	$( ".itemCursoUserPerfil" + append ).remove();
        $.each(objJson, function (i, curso) {
        	curso_user_perfil_table_row = 
				'<tr class="itemCursoUserPerfil' + append + '">' +
		   			'<td id="nome_' + i + '">' + montaMaterias(curso.documento.materias) + '</td>' +
//					'<td id="acaoTd_' + i + '"><button id="acaoCursoUserPerfil_' + i + '" class="btn-xs btn-info">Grade</button></td>' +
					'<td id="curso' + i + '">' + curso.documento.nome + 
						'<a id="wiki_' + i + '" href="' + curso.documento.wiki + '" class="wiki" data-tooltip="wikipédia" target="_blank"><i class="fa fa-wikipedia-w"></i></a></td>' +		   								
					'</td>' +
					'<td id="descricao_' + i + '">' + curso.documento.descricao + '</td>' +
					'<td id="tempo' + i + '">' + curso.documento.tempo + '</td>' +
					'<td id="custo' + i + '">' + curso.documento.custo + '</td>' +
					'<td id="escola' + i + '">' + curso.documento.escola + '</td>' +
					'<td id="preRequisito' + i + '">' + curso.documento.preRequisito + '</td>' +
				'</tr>';

        	$( "#curso_user_perfil_tbody" + append).append(curso_user_perfil_table_row);
           	
        	$("#excluiInteresse_" + i).off('click');
    		$("#excluiInteresse_" + i).on('click',function(){
    	    	var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
    	    	atualizaUserPerfilElemento (objJson, "habilidadeInteresseOff", element.documento.idHabilidade);
    	    	atualizaMapa (element.documento.idHabilidade, "have", "1");
    	    	$("#itemHabilidade_" + i).addClass('hide');
    	    });
        });
        
        var curso_user_perfil_table = $('#curso_user_perfil_list' + append);
		curso_user_perfil_table.footable().trigger('footable_collapse_all');

	};
