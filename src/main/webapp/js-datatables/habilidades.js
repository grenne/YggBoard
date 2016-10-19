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
		
		montaHeaderHabilidade (objJson);
		
    	$( ".itemHabilidade" ).remove();
    	
    	var totalHabilidades = 0;
        
    	$.each(objJson, function (i, element) {
        	if (element.documento.classes == "habilidade"){
            	montaLinhaHabilidade(i, element, objJson);
            	montaFiltro("area_" + i, element, objJson, "area", element.documento.area);
            	montaFiltro("campo_" + i, element, objJson, "campo", element.documento.campo);
            	montaFiltro("categoria_" + i, element, objJson, "categoria",  element.documento.categoria);
	            ++totalHabilidades;
        	};
        });
        
		$("#qtdeHabilidades").html(totalHabilidades + " habilidades");

        var habilidade_table = $('#habilidade_list');
		habilidade_table.footable().trigger('footable_collapse_all');

//		$('#habilidade_theader_tab').on('shown.bs.tab', function (e) {
//			habilidade_table.footable().trigger('footable_collapse_all');
//		});

		// Search input
		$('#searchHabilidades').on('input', function (e) {
			e.preventDefault();
			habilidade_table.trigger('footable_filter', {filter: $(this).val()});
		});
		// mostra filtros
		$('#filterHabilidade').off('click');
		$('#filterHabilidade').on('click', function () {
			if ($('#filtro-habilidade').hasClass("hide")){
				$(".filtro-habilidade").removeClass("hide");
				$('#searchHabilidades').off('input');
				$('#searchHabilidades').on('input', function (e) {
					e.preventDefault();
					carreira_table.trigger('footable_filter', {filter: $(this).val()});
				});
			}else{
				$('#searchHabilidades').off('input');
				$(".filtro-habilidade").addClass("hide");
			};
        });
	};

	function montaHeaderHabilidade (objJson) {
		
		$( ".habilidade_theader" ).remove();

		var habilidade_table_header =
				'<table id="habilidade_list" class="habilidade_theader footable table toggle-circle" data-sorting="true">' +
					'<thead>' +
						'<tr>' +
							'<th data-toggle="true" data-sort-initial="true"></th>' +
							'<th data-sort-ignore="true"></th>' +
							'<th data-sort-ignore="true"></th>' +
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

	};
	function montaLinhaHabilidade(i, element, objJson) {

    	var cursos = "";
    	$.each(element.documento.cursos, function (i, curso){
    		cursos = cursos +
			'<br class="cursoHabilidade hide"><a id="querofazer_' + i + '" data-tooltip="quero fazer"  class="cursoHabilidade hide icon-querofazer"><i class="fa fa-leanpub icon-quefazer"></i></a>' +
			'<span class="panel-text panel-cursos cursoHabilidade hide ">  ' + curso.nome + '</span>';
    	});
    	habilidade_table_row = 
			'<tr class="itemHabilidade">' +
			'<td id="nome_' + i + '"><span class="panel-label" data-tooltip="objetivo"></span>' + element.documento.name + '</td>' +
			'<td><a id="seiFazerHabilidade_' + i + '" data-tooltip="sei fazer"><i class="fa fa-leanpub"></i></a></td>' +
			'<td><a id="queroAprenderHabilidade_' + i + '" data-tooltip="quero aprender"><i class="fa fa-book"></i></a></td>' +
				'<td ><span class="panel-label">DESCRIÇÃO: </span><br>' + 
				'<span class="panel-text">' + element.documento.descricao + '</span></td>' + 
				'<td><br><button id="cursoHabilidadeIn_' + i + '" class="panel-button-habilidade cursoHabilidadeIn"><i class="fa fa-chevron-down icon-check-habilidade"></i><span>cursos disponíveis</span></button>' +
				'<button id="cursoHabilidadeOff_' + i + '" class="panel-button-habilidade cursoHabilidade hide"><i class="fa fa-chevron-up icon-check-habilidade"></i><span>cursos disponíveis</span></button>' +
				'<a id="wiki_' + i + '" href="' + element.documento.wiki + '" class="wiki" data-tooltip="wikipédia"><i class="fa fa-wikipedia-w"></i></a></td>' +
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
	};

	function montaFiltro(i, element, objJson, filtro, itemNome){
		
		var itemIncluido = false;
    	$(".item-filter").each(function(i, value) {
			if ($(this).attr('data-nome-filter') == itemNome) {
				itemIncluido = true;
			};
		});
    	
    	if (!itemIncluido){
        	var item = 
        		'<li id="' + i + '" class="list-group-item item-filter" data-nome-filter="' + itemNome + '"><input id="filter-check_' + i + '" type="checkbox">' + itemNome + '</li>';
    		$("#filtro-" + filtro + "-list").append(item);
            $("#" + i).off('click');
            $("#" + i).on('click', function () {
				montaHeaderHabilidade (objJson);
				$(".itemHabilidade").remove();
		    	var totalHabilidades = 0;
            	$(".item-filter").each(function(w, value) {
    				var item = $(this).attr('id');
    				if ($("#filter-check_" + item).prop( "checked" )) {
    					var nomeItemChecked = $(this).attr("data-nome-filter");
    					$.each(objJson, function (z, habilidade){
                    		if (habilidade.documento.area == nomeItemChecked) {
                            	montaLinhaHabilidade(z, habilidade, objJson);
                	            ++totalHabilidades;
                    		}else{
	                    		if (habilidade.documento.campo == nomeItemChecked) {
	                            	montaLinhaHabilidade(z, habilidade, objJson);
	                	            ++totalHabilidades;
	                    		}else{
		                    		if (habilidade.documento.categoria == nomeItemChecked) {
		                            	montaLinhaHabilidade(z, habilidade, objJson);
		                	            ++totalHabilidades;
		                    		};
	                    		};
                    		};
                    	});
    				};
    			});
                var habilidade_table = $('#habilidade_list');
        		habilidade_table.footable().trigger('footable_collapse_all');
        		$("#qtdeHabilidades").html(totalHabilidades + " habilidades");
           });
    	};		
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
