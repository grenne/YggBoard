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
	rest_obterHabilidades(carregaHabilidadesLista, semAcao)
				
	function carregaHabilidadesLista (objJson) {
		
		localStorage.setItem("elements", JSON.stringify(objJson));
		
		montaHeaderHabilidade (objJson);
		
    	$( ".itemHabilidade" ).remove();
    	
    	var totalHabilidades = 0;
        
    	$.each(objJson, function (i, element) {
			if (localStorage.montacampo && 
				localStorage.montacategoria && 
				localStorage.montahabilidade &&
				localStorage.montaseta
				){
				if (element.documento.classes == "area"){
	            	montaLinhaHabilidade(i, element, objJson);
	            	montaFiltro("area_" + i, element, objJson, "area", element.documento.area);
	            	montaFiltro("campo_" + i, element, objJson, "campo", element.documento.campo);
	            	montaFiltro("categoria_" + i, element, objJson, "categoria",  element.documento.categoria);
		            ++totalHabilidades;
				}else{
					if (localStorage.montacampo == "true" && element.documento.classes == "campo"){
		            	montaLinhaHabilidade(i, element, objJson);
		            	montaFiltro("area_" + i, element, objJson, "area", element.documento.area);
		            	montaFiltro("campo_" + i, element, objJson, "campo", element.documento.campo);
		            	montaFiltro("categoria_" + i, element, objJson, "categoria",  element.documento.categoria);
			            ++totalHabilidades;
					}else{
						if (localStorage.montacategoria == "true" && element.documento.classes == "categoria"){
			            	montaLinhaHabilidade(i, element, objJson);
			            	montaFiltro("area_" + i, element, objJson, "area", element.documento.area);
			            	montaFiltro("campo_" + i, element, objJson, "campo", element.documento.campo);
			            	montaFiltro("categoria_" + i, element, objJson, "categoria",  element.documento.categoria);
				            ++totalHabilidades;
						}else{
							if (localStorage.montahabilidade == "true" && element.documento.classes == "habilidade"){
				            	montaLinhaHabilidade(i, element, objJson);
				            	montaFiltro("area_" + i, element, objJson, "area", element.documento.area);
				            	montaFiltro("campo_" + i, element, objJson, "campo", element.documento.campo);
				            	montaFiltro("categoria_" + i, element, objJson, "categoria",  element.documento.categoria);
					            ++totalHabilidades;
							}else{
								if (localStorage.montaseta == "true" && element.documento.type == "edges"){
					            	montaLinhaHabilidade(i, element, objJson);
					            	montaFiltro("area_" + i, element, objJson, "area", element.documento.area);
					            	montaFiltro("campo_" + i, element, objJson, "campo", element.documento.campo);
					            	montaFiltro("categoria_" + i, element, objJson, "categoria",  element.documento.categoria);
						            ++totalHabilidades;
								}
							}
						}
					}
				}
			}else{
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
					habilidade_table.trigger('footable_filter', {filter: $(this).val()});
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
    	$.each(element.documento.cursos, function (w, curso){
    		var disabled = "";
    		var textoTip = "quero fazer";
    		if (checaUserPerfilElemento("cursoInteresse", curso.idCurso)){
    			disabled = 'disabled';
    			textoTip = "marquei interesse";	
    		};
    		cursos = cursos +
			'<br class="cursoHabilidade hide"><a id="querofazercurso_' + i + w + '" data-tooltip="' + textoTip + '"  class="cursoHabilidade hide querofazercurso icon-querofazer ' + disabled + '"  data-idCurso="' + curso.idCurso + '"><i class="fa fa-leanpub icon-quefazer"></i></a>' +
			'<span class="panel-text panel-cursos cursoHabilidade hide ">  ' + curso.nome + '</span>';
    	});
		var disabled = "";
		var textoTip = "quero aprender";
		if (checaUserPerfilElemento("habilidadeInteresse", element.documento.idHabilidade)){
			disabled = 'disabled';
			textoTip = "marquei interesse";	
		};
		var disabled_2 = "";
		var textoTip_2 = "sei fazer";
		if (checaUserPerfilElemento("habilidades", element.documento.idHabilidade)){
			disabled_2 = 'disabled';
			textoTip_2 = "ja possuo";	
		};
		habilidade_table_row = 
			'<tr class="itemHabilidade">' +
			'<td id="nome_' + i + '"><span class="panel-label" data-tooltip="objetivo" data-idHabilidade="' + element.documento.idHabilidade + '"></span>' + element.documento.name + '</td>' +
			'<td><a id="alterarHabilidade_' + i + '" data-tooltip="alterar" href="#habilidadeModal" data-toggle="modal" data-idHabilidade="' + element.documento.idHabilidade + '" ><i class="fa fa-stack-exchange"></i></a></td>' +
			'<td><a id="seiFazerHabilidade_' + i + '" data-tooltip="' + textoTip_2 + '" data-toggle="modal" data-idHabilidade="' + element.documento.idHabilidade + '"  class="' + disabled_2 + '"><i class="fa fa-leanpub"></i></a></td>' +
			'<td><a id="queroAprenderHabilidade_' + i + '" data-tooltip="' + textoTip + '" data-idHabilidade="' + element.documento.idHabilidade + '" class="' + disabled + '"><i class="fa fa-book"></i></a></td>' +
				'<td ><span class="panel-label">DESCRIÇÃO: </span><br>' + 
				'<span class="panel-text">' + element.documento.descricao + '</span></td>' + 
				'<td><br><button id="cursoHabilidadeIn_' + i + '" class="panel-button-habilidade cursoHabilidadeIn"><i class="fa fa-chevron-down icon-check-habilidade"></i><span>cursos disponíveis</span></button>' +
				'<button id="cursoHabilidadeOff_' + i + '" class="panel-button-habilidade cursoHabilidade hide"><i class="fa fa-chevron-up icon-check-habilidade"></i><span>cursos disponíveis</span></button>' +
				'<a id="wiki_' + i + '" href="' + element.documento.wiki + '" class="wiki" data-tooltip="wikipédia"><i class="fa fa-wikipedia-w"></i></a></td>' +
				'<td>' + cursos + '</td>' +
			'</tr>';
    	$("#habilidade_tbody" ).append(habilidade_table_row);

    	if (localStorage.usuarioPerfil != "tools"){
    		$("#alterarHabilidade_" + i).addClass ("hide");
    	}; 

    	$('.querofazercurso').each(function( z ) {
    		$("#" + $(this).attr('id')).off('click');
    		$("#" + $(this).attr('id')).on('click',function(){
    			$("#" + $(this).attr('id')).addClass("disabled");
    	    	var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
    	    	atualizaUserPerfilElemento (objJson, "cursoInteresse", $(this).attr('data-idcurso'));
    	    });
    	});
    	
    	$('#queroAprenderHabilidade_' + i).off('click');
	    $('#queroAprenderHabilidade_' + i).on('click',function(){
			$("#" + $(this).attr('id')).addClass("disabled");
	    	var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
	    	atualizaUserPerfilElemento (objJson, "habilidadeInteresse", $(this).attr('data-idhabilidade'));
	    });
	    $('#seiFazerHabilidade_' + i).off('click');
	    $('#seiFazerHabilidade_' + i).on('click',function(){
			$("#" + $(this).attr('id')).addClass("disabled");
	    	var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
	    	atualizaUserPerfilElemento (objJson, "habilidades", $(this).attr('data-idhabilidade'));	    	
	    });
	    $('#alterarHabilidade_' + i).off('click');
	    $('#alterarHabilidade_' + i).on('click',function(){
	    	localStorage.habilidadeExistente = "true";
	    	$("#diagrama").val(element.documento.diagrama);
	    	$("#type").val(element.documento.type);
	    	$("#idHabilidade").val(element.documento.idHabilidade);
	    	$("#name").val(element.documento.name);
  			$("#descricao").val(element.documento.descricao);
			$("#wiki").val(element.documento.wiki);
			$("#area").val(element.documento.area);
			$("#campo").val(element.documento.campo);
			$("#categoria").val(element.documento.categoria);
			$("#parent").val(element.documento.parent);
			$("#classes").val(element.documento.classes);
			$("#weight").val(element.documento.weight);
			$("#positionX_I").val(element.documento.positionX);
			$("#positionY_I").val(element.documento.positionY);
			$("#opacity").val(element.documento.opacity);
			$("#color").val(element.documento.color);
			$("#shape").val(element.documento.shape);
			$("#width").val(element.documento.width);
			$("#lineColor").val(element.documento.lineColor);
			$("#targetArrowColor").val(element.documento.targetArrowColor);
			$("#targetArrowShape").val(element.documento.targetArrowShape);
			$("#source").val(element.documento.source);
			$("#target").val(element.documento.target);
			$("#tags").val(stringTags(element.documento.tags));
	    });
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
	
	function stringTags(tags){
		var stringTags = "";
		var virgula = "";
		$.each( tags, function( i, tag) {
			stringTags = stringTags + virgula + tag;
			virgula = ",";
		});
		return stringTags;
	};
