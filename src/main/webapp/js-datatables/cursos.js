/**
 * 				obter os dados
 */

	function obterCursos (cy, element_id) {

		rest_obterCursosHabilidade(element_id, carregaCursos, carregaCursos, cy);

	};
		
	function carregaCursos (objJson, cy) {	
//		
//		carrega cursos
//
		$( ".curso_theader" ).remove();

		var curso_table_header =
				'<table id="curso_list" class="curso_theader table toggle-circle">' +
					'<thead>' +
						'<tr>' +
							'<th data-toggle="true">Materias</th>' +
//							'<th>Ação</th>' +
							'<th data-hide="all" class="text-info">Curso</th>' +
							'<th data-hide="all" class="text-info">Descrição</th>' +
							'<th data-hide="all" class="text-info">Tempo</th>' +
							'<th data-hide="all" class="text-info">Custo</th>' +
							'<th data-hide="all" class="text-info">Escola</th>' +
							'<th data-hide="all" class="text-info">Pré requisito</th>' +
						'</tr>' +
					'</thead>' +
					'<tbody id="curso_tbody">' +
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
    	$( "#curso_theader" ).append(curso_table_header);

    	$( ".itemCurso" ).remove();
        $.each(objJson, function (i, curso) {
        	curso_table_row = 
				'<tr class="itemCurso">' +
		   			'<td id="nome_' + i + '">' + montaMaterias(curso.documento.materias) + 
		   				'<a id="wiki_' + i + '" href="' + curso.documento.wiki + '" class="wiki" data-tooltip="wikipédia"><i class="fa fa-wikipedia-w"></i></a></td>' +		   			
		   			'</td>' +
//					'<td id="acaoTd_' + i + '"><button id="acaoCurso_' + i + '" class="btn-xs btn-info">Grade</button></td>' +
					'<td id="curso' + i + '">' + curso.documento.nome + '</td>' +
					'<td id="descricao_' + i + '">' + curso.documento.descricao + '</td>' +
					'<td id="tempo' + i + '">' + curso.documento.tempo + '</td>' +
					'<td id="custo' + i + '">' + curso.documento.custo + '</td>' +
					'<td id="escola' + i + '">' + curso.documento.escola + '</td>' +
					'<td id="preRequisito' + i + '">' + curso.documento.preRequisito + '</td>' +
				'</tr>';
        	$( "#curso_tbody" ).append(curso_table_row);
            $('#acaoCurso_' + i).bind('click', function () {
            	gradeCurso (cy, curso);
            	$('.habilidade').addClass('hide');
            	$('.carreiras').addClass('hide');
            });
        });

        var curso_table = $('#curso_list');
		curso_table.footable().trigger('footable_collapse_all');


		$('#collapseCursos').on('click', function(){
			curso_table.trigger('footable_collapse_all');
			$( "#collapseCursos").addClass('hide');
			$( "#expandCursos").removeClass('hide');
		});
		$('#expandCursos').on('click', function(){
			curso_table.trigger('footable_expand_all');
			$( "#collapseCursos").removeClass('hide');
			$( "#expandCursos").addClass('hide');
		})
		// Search input
		$('#searchCursos').on('input', function (e) {
			e.preventDefault();
			curso_table.trigger('footable_filter', {filter: $(this).val()});
		});
	};

	function gradeCurso (cy, curso) {
		cy.destroy();
		cy = createDiagram ("cy");
		if (localStorage.usuario){
			cy.autolock( true );
		};
		drawElements (cy, curso, actionMove, '');
	};
	function montaMaterias (materias) {
		var materiasTexto = "";
		var barra = "";
		var w = 0;
		while (w < materias.length) {
			materiasTexto = barra + materiasTexto + materias[w];
			barra = "/";
			w++;
		};
		return materiasTexto;
	};
