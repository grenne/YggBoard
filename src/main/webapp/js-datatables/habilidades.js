		
	function carregaHabilidadesLista (cy, objJson) {	
		$( ".habilidade_theader" ).remove();

		var habilidade_table_header =
				'<table id="habilidade_list" class="habilidade_theader table toggle-circle">' +
					'<thead>' +
						'<tr>' +
							'<th data-toggle="true">Habilidades</th>' +
							'<th>Ação</th>' +
							'<th data-hide="all"></th>' +
							'<th data-hide="all"></th>' +
							'<th data-hide="all"></th>' +
							'<th data-hide="all"></th>' +
							'<th data-hide="all"></th>' +
						'</tr>' +
					'</thead>' +
					'<tbody id="habilidade_tbody">' +
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
    	$( "#habilidade_theader" ).append(habilidade_table_header);

    	$( ".itemHabilidade" ).remove();
        $.each(objJson, function (i, element) {
        	habilidade_table_row = 
				'<tr class="itemHabilidade">' +
		   			'<td id="nome_' + i + '">' + element.documento.name + '</td>' +
					'<td id="acaoHabilidade' + i + '"><button id="acaoHabilidade_' + i + '" class="btn-xs btn-info">Incluir</button></br>' +
					'<button id="acaoHabilidadeInteresse_' + i + '" class="btn-xs btn-info">Interesse</button></td>' +
					'<td id="descricao_' + i + '"><span class="panel-label">Descrição: </span>' + element.documento.descricao + '</td>' +
					'<td id="wiki_' + i + '" class="text-info"><span class="panel-label">Wiki: </span><a href="' + element.documento.wiki + '" target="_blank">Wiki</a></td>' +
					'<td id="area' + i + '"><span class="panel-label">Área: </span>' + element.documento.area + '</td>' +
					'<td id="campo' + i + '"><span class="panel-label">Campo: </span>' + element.documento.campo + '</td>' +
					'<td id="categoria' + i + '"><span class="panel-label">Categoria: </span>' + element.documento.categoria + '</td>' +
				'</tr>';
        	$( "#habilidade_tbody" ).append(habilidade_table_row);
            $('#acaoHabilidade_' + i).bind('click', function () {
            	incluiHabilidadePerfil (cy, element.documento.idHabilidade);
				$('.cursos').addClass('hide');
				$('.carreira').addClass('hide');
				$('.habilidade').addClass('hide');
          });
            $('#acaoHabilidadeInteresse_' + i).bind('click', function () {
            	atualizaUserPerfil ("habilidadeInteresse", element.documento.idHabilidade);
            });
        });
        
        $('.habilidades').removeClass('hide');
        
        var habilidade_table = $('#habilidade_list');
		habilidade_table.footable().trigger('footable_collapse_all');


		$('#collapseHabilidades').on('click', function(){
			habilidade_table.trigger('footable_collapse_all');
			$( "#collapseHabilidades").addClass('hide');
			$( "#expandHabilidades").removeClass('hide');
		});
		$('#expandHabilidades').on('click', function(){
			habilidade_table.trigger('footable_expand_all');
			$( "#collapseHabilidades").removeClass('hide');
			$( "#expandHabilidades").addClass('hide');
		})
		// Search input
		$('#searchHabilidades').on('input', function (e) {
			e.preventDefault();
			habilidade_table.trigger('footable_filter', {filter: $(this).val()});
		});
	};

	function incluiHabilidadePerfil (cy, element) {
		var selector = '#' + compoeId (element);
		var node = cy.$(selector);
		
		if (node.isParent(selector)){
		    if (confirm("Carrega agrupamento " + element + " no seu perfil?") == true) {
				var nodes = node.parent();
				var descendants = node.descendants();
				$.each( descendants, function( i, descendant) {
					console.log ("descedentes:" + descendant.data('name'));
					montaPerfil(cy, descendant.id(), descendant.data('idOriginal'));				
				});
		    };
		}else{
			montaPerfil(cy, compoeId (element), element);
		};
	};
