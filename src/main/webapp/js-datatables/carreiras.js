/**
 * 				obter os dados
 */

	function obterCarreiras () {
		/* BASIC datatables*/

		var breakpointDefinition = {
			tablet : 1024,
			phone : 480
		};

		rest_obterCarreiraAll(carregaCarreiras, noAction, cy);
	};
		
	function carregaCarreiras (objJson, cy) {	

        $.each(objJson, function (i, carreira) {
        	carreira_table_row = 
				'<tr>' +
		   			'<td id="nome_' + i + '">' + carreira.nome + '</td>' +
					'<td id="acaoTd_' + i + '"><button id="acao_' + i + '" class="btn-xs btn-info">Comparar</button></td>' +
					'<td id="descricao_' + i + '">' + carreira.descricao + '</td>' +
					'<td id="wiki_' + i + '" class="text-info"><a href="' + carreira.wiki + '">Wiki</a></td>' +
					'<td id="salario_' + i + '">' + carreira.salario + '</td>' +
					'<td id="salarioMedio_' + i + '">' + carreira.salarioMedio + '</td>' +
					'<td id="funcao_' + i + '">' + carreira.funcao + '</td>' +
				'</tr>';
        	$( "#carreira_tbody" ).append(carreira_table_row);
            $('#acao_' + i).bind('click', function () {
            	comparaCarreira (cy, carreira);
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
