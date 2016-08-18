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
        	var tagsString = "";
        	$.each(carreira.tags, function (i, tags){
        		tagsString = tagsString + tags + ", ";
        	});
        	carreira_table_row = 
				'<tr class="itemCarreira">' +
		   			'<td id="nome_' + i + '"><span class="panel-label"></span>' + carreira.nome + '</td>' +
					'<td id="acaoCarreira' + i + '"><button id="acaoCarreira_' + i + '" class="btn-xs btn-info">Comparar</button></td>' +
					'<td id="descricao_' + i + '"><span class="panel-label">Objetivo: </span>' + carreira.descricao + '</td>' +
					'<td id="industria_' + i + '"><span class="panel-label">Industria: </span>' + carreira.industria + '</td>' +
					'<td id="tarefas_' + i + '"<span class="panel-label">Tarefas: </span>' + carreira.tarefas + '</td>' +
					'<td id="salarioMinimo_' + i + '"><span class="panel-label">Salário Minimo: </span>' + montaValor(carreira.salarioMinimo) + '</td>' +
					'<td id="salarioMedio_' + i + '"><span class="panel-label">Salário Médio: </span>' + montaValor(carreira.salarioMedio) + '</td>' +
					'<td id="salarioMaximo_' + i + '"><span class="panel-label">Salário Maximo: </span>' + montaValor(carreira.salarioMaximo) + '</td>' +
					'<td id="funcao_' + i + '">Função:' + carreira.funcao + '</td>' +
					'<td id="tags_' + i + '"><span class="hide">' + tagsString + '</span></td>' +
				'</tr>';
        	$( "#carreira_tbody" ).append(carreira_table_row);
            $('#acaoCarreira_' + i).bind('click', function () {
            	$("#labelYggmap").html("Montando carreira:" + carreira.nome + "...");
            	$("#labelYggmap").removeClass("text-success");
            	$("#labelYggmap").removeClass("text-warning");
            	$("#labelYggmap").addClass("text-primary");
            	comparaCarreira (cy, carreira);
            	$('.cursos').addClass('hide');
				$('.habilidade').addClass('hide');
            	$("#labelYggmap").html("Carreira:" + carreira.nome);
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
