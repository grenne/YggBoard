/**
 * 				obter os dados
 */
//		
//		carrega carreiras
//
	/**
	 * 	carrega lista de carreiras
	 */
	var cy = "";
	rest_obterHabilidades(carregaHabilidadesLista, cy)
				
	function carregaHabilidadesLista (objJson) {
		localStorage.setItem("elements", JSON.stringify(objJson));
		$("#qtdeHabilidades").html(objJson.length + " habilidades");
		$( ".habilidade_theader" ).remove();

		var habilidade_table_header =
				'<table id="habilidade_list" class="habilidade_theader footable table toggle-circle" data-sorting="true">' +
					'<thead>' +
						'<tr>' +
							'<th data-toggle="true" data-sort-initial="true"></th>' +
							'<th></th>' +
							'<th></th>' +
								'<th data-hide="all"></th>' +
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
        	var cursos = "0";
        	$.each(element.documento.cursos, function (i, curso){
        		cursos = cursos +
				'<br class="cursoHabilidade "><span class="panel-text cursoHabilidade ">- ' + curso.nome + '</span>';
        	});
        	habilidade_table_row = 
				'<tr class="itemHabilidade">' +
				'<td id="nome_' + i + '"><span class="panel-label" data-tooltip="objetivo"></span>' + element.documento.name + '</td>' +
				'<td><a id="seiFazerHabilidade_' + i + '" data-tooltip="sei fazer"><i class="fa fa-leanpub"></i></a></td>' +
				'<td><a id="queroAprenderHabilidade_' + i + '" data-tooltip="quero aprender"><i class="fa fa-book"></i></a></td>' +
					'<td ><span class="panel-label">DESCRIÇÃO: </span><br>' + 
					'<span class="panel-text">' + element.documento.descricao + '</span></td>' + 
					'<td><br><span class="panel-label">ÁREA: </span><br>' +
					'<span class="panel-text">' + element.documento.area + '</span></td>' + 
					'<td><br><span class="panel-label">CAMPO: </span><br>' +
					'<span class="panel-text">' + element.documento.campo + '</span></td>' +
					'<td><br><span class="panel-label">CATEGORIA: </span><br>' +
					'<span class="panel-text">' + element.documento.categoria + '</span></td>' +
					'<td><br><button id="cursoHabilidadeIn_' + i + '" class="panel-button cursoHabilidadeIn"><i class="fa fa-chevron-down icon-check"></i><span>cursos</span></button>' +
					'<button id="cursoHabilidadeOff_' + i + '" class="panel-button cursoHabilidade hide"><i class="fa fa-chevron-up icon-check""></i><span>cursos</span></button></td>' +
					'<td>' + cursos + '</td>' +
				'</tr>';
        	$("#habilidade_tbody" ).append(habilidade_table_row);
            $('#cursoHabilidadeIn_' + i).bind('click', function () {
            	$(".cursoHabilidade").removeClass("hide");
            	$(".cursoHabilidadeIn").addClass("hide");
            });
            $('#cursoHabilidadeOff_' + i).bind('click', function () {
            	$(".cursoHabilidade").addClass("hide");
            	$(".cursoHabilidadeIn").removeClass("hide");
            });
        	$('#acaoHabilidade_' + i).on('click');
            $('#acaoHabilidade_' + i).on('click', function () {
				$('.cursos').addClass('hide');
				$('.carreira').addClass('hide');
				$('.habilidade').addClass('hide');
            });
            $('#acaoHabilidadeInteresse_' + i).off('click');
            $('#acaoHabilidadeInteresse_' + i).on('click', function () {
            	atualizaUserPerfil ("habilidadeInteresse", element.documento.idHabilidade);
            });
        });
        
        var habilidade_table = $('#habilidade_list');
		habilidade_table.footable().trigger('footable_collapse_all');

		// Search input
		$('#searchHabilidades').on('input', function (e) {
			e.preventDefault();
			habilidade_table.trigger('footable_filter', {filter: $(this).val()});
		});
	};

	function incluiHabilidadePerfil (element) {
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
