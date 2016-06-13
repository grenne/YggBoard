/**
 * 				obter os dados
 */

	function obterCarreiras (cy) {
//		
//		carrega carreiras
//
		/**
		 * 	carrega lista de carreiras
		 */
//		objJson  = templateCarreiras ();
		
//		carregaCarreiras (objJson, cy);	

		rest_obterCarreiras(carregaCarreiras, cy)
	};
		
	function carregaCarreiras (objJson, cy) {	
		$( ".carreira_theader" ).remove();

		var carreira_table_header =
				'<table id="carreira_list" class="carreira_theader table toggle-circle">' +
					'<thead>' +
						'<tr>' +
							'<th data-toggle="true">Carreiras</th>' +
							'<th>Ação</th>' +
							'<th data-hide="all">Descrição</th>' +
							'<th data-hide="all">Wiki</th>' +
							'<th data-hide="all">Salário</th>' +
							'<th data-hide="all">Salário Médio</th>' +
							'<th data-hide="all">Função</th>' +
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

    	$( ".itemCarreira" ).remove();
        $.each(objJson, function (i, carreira) {
        	carreira_table_row = 
				'<tr class="itemCarreira">' +
		   			'<td id="nome_' + i + '">' + carreira.nome + '</td>' +
					'<td id="acaoTd_' + i + '"><button id="acaoCarreira_' + i + '" class="btn-xs btn-info">Comparar</button></td>' +
					'<td id="descricao_' + i + '">' + carreira.descricao + '</td>' +
					'<td id="wiki_' + i + '" class="text-info"><a href="' + carreira.wiki + '" target="_blank">Wiki</a></td>' +
					'<td id="salario_' + i + '">' + carreira.salario + '</td>' +
					'<td id="salarioMedio_' + i + '">' + carreira.salarioMedio + '</td>' +
					'<td id="funcao_' + i + '">' + carreira.funcao + '</td>' +
				'</tr>';
        	$( "#carreira_tbody" ).append(carreira_table_row);
            $('#acaoCarreira_' + i).bind('click', function () {
            	comparaCarreira (cy, carreira);
				$('.cursos').addClass('hide');
				$('.habilidade').addClass('hide');
          });
        });

        var carreira_table = $('#carreira_list');
		carreira_table.footable().trigger('footable_collapse_all');


		$('#collapseCarreiras').on('click', function(){
			carreira_table.trigger('footable_collapse_all');
			$( "#collapseCarreiras").addClass('hide');
			$( "#expandCarreiras").removeClass('hide');
		});
		$('#expandCarreiras').on('click', function(){
			carreira_table.trigger('footable_expand_all');
			$( "#collapseCarreiras").removeClass('hide');
			$( "#expandCarreiras").addClass('hide');
		})
		// Search input
		$('#searchCarreiras').on('input', function (e) {
			e.preventDefault();
			carreira_table.trigger('footable_filter', {filter: $(this).val()});
		});
	};
