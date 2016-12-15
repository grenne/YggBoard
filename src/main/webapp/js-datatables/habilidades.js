/**
 * 				obter os dados
 */
//		
//		carrega carreiras
//
	/**
	 * 	carrega lista de carreiras
	 */
	//rest_obterHabilidades(carregaHabilidadesLista, semAcao)
	
				
	function carregaHabilidadesLista (objJson) {
		
		var date = new Date();
		console.log ("01-"  + date)
		localStorage.setItem("elements", JSON.stringify(objJson));
		
		montaHeaderHabilidade (objJson);
		
    	$( ".itemHabilidade" ).remove();
    	
    	var totalHabilidades = 0;
    	var habilidades = "";
    	$.each(objJson, function (i, element) {
    		if (element.documento.type != "edges"){
				if (localStorage.montacampo && 
					localStorage.montacategoria && 
					localStorage.montahabilidade &&
					localStorage.montaseta
					){
					if (element.documento.classes == "area"){
		            	habilidades = habilidades + montaLinhaHabilidade(i, element, objJson);
		            	montaFiltro("area_" + i, element, objJson, "area", element.documento.area);
		            	montaFiltro("campo_" + i, element, objJson, "campo", element.documento.campo);
		            	montaFiltro("categoria_" + i, element, objJson, "categoria",  element.documento.categoria);
			            ++totalHabilidades;
					}else{
						if (localStorage.montacampo == "true" && element.documento.classes == "campo"){
							habilidades = habilidades + montaLinhaHabilidade(i, element, objJson);
			            	montaFiltro("area_" + i, element, objJson, "area", element.documento.area);
			            	montaFiltro("campo_" + i, element, objJson, "campo", element.documento.campo);
			            	montaFiltro("categoria_" + i, element, objJson, "categoria",  element.documento.categoria);
				            ++totalHabilidades;
						}else{
							if (localStorage.montacategoria == "true" && element.documento.classes == "categoria"){
								habilidades = habilidades + montaLinhaHabilidade(i, element, objJson);
				            	montaFiltro("area_" + i, element, objJson, "area", element.documento.area);
				            	montaFiltro("campo_" + i, element, objJson, "campo", element.documento.campo);
				            	montaFiltro("categoria_" + i, element, objJson, "categoria",  element.documento.categoria);
					            ++totalHabilidades;
							}else{
								if (localStorage.montahabilidade == "true" && element.documento.classes == "habilidade"){
									habilidades = habilidades + montaLinhaHabilidade(i, element, objJson);
					            	montaFiltro("area_" + i, element, objJson, "area", element.documento.area);
					            	montaFiltro("campo_" + i, element, objJson, "campo", element.documento.campo);
					            	montaFiltro("categoria_" + i, element, objJson, "categoria",  element.documento.categoria);
						            ++totalHabilidades;
								}else{
									if (localStorage.montaseta == "true" && element.documento.type == "edges"){
										habilidades = habilidades + montaLinhaHabilidade(i, element, objJson);
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
					habilidades = habilidades + montaLinhaHabilidade(i, element, objJson);
	            	montaFiltro("area_" + i, element, objJson, "area", element.documento.area);
	            	montaFiltro("campo_" + i, element, objJson, "campo", element.documento.campo);
	            	montaFiltro("categoria_" + i, element, objJson, "categoria",  element.documento.categoria);
		            ++totalHabilidades;
				};
    		};
        });

		date = new Date();
		console.log ("02-"  + date)

    	$("#qtdeHabilidades").html(totalHabilidades + " habilidades");

		$("#habilidade_tbody").append(habilidades);
		var habilidade_table = $('#habilidade_list');
		montaAcoesHabilidades();

		date = new Date();
		console.log ("03-"  + date)

		habilidade_table.footable().trigger('footable_collapse_all');

		date = new Date();
		console.log ("04-"  + date)

		
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
			'<a  href="' + curso.wiki + '" class="panel-text panel-cursos cursoHabilidade hide" target="_blank">  ' + curso.descricao + '</a>';
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
		var dadosHabilidade = 
	    	"data-diagrama='" + element.documento.diagrama + "' " +
	    	"data-type='" + element.documento.type + "' " +
	    	"data-idHabilidade='" + element.documento.idHabilidade + "' " +
	    	"data-name='" + element.documento.name + "' " +
			"data-descricao='" + element.documento.descricao + "' " +
			"data-wiki='" + element.documento.wiki + "' " +
			"data-area='" + element.documento.area + "' " +
			"data-campo='" + element.documento.campo + "' " +
			"data-categoria='" + element.documento.categoria + "' " +
			"data-parent='" + element.documento.parent + "' " +
			"data-classes='" + element.documento.classes + "' " +
			"data-weight='" + element.documento.weight + "' " +
			"data-positionx='" + element.documento.positionX + "' " +
			"data-positiony='" + element.documento.positionY + "' " +
			"data-opacity='" + element.documento.opacity + "' " +
			"data-color='" + element.documento.color + "' " +
			"data-shape='" + element.documento.shape + "' " +
			"data-width='" + element.documento.width + "' " +
			"data-lineColor='" + element.documento.lineColor + "' " +
			"data-targetArrowColor='" + element.documento.targetArrowColor + "' " +
			"data-targetArrowShape='" + element.documento.targetArrowShape + "' " +
			"data-source='" + element.documento.source + "' " +
			"data-target='" + element.documento.target + "' " +
			"data-tags='" + stringTags(element.documento.tags) + "' ";

		habilidade_table_row = 
			'<tr id="itemHabilidade_' + i + '"  class="itemHabilidade">' +
			'<td id="nome_' + i + '"><span class="panel-label" data-tooltip="objetivo" data-idHabilidade="' + element.documento.idHabilidade + '"></span>' + element.documento.name + '</td>' +
			'<td><a id="alterarHabilidade_' + i + '" data-tooltip="alterar" href="#habilidadeModal" data-toggle="modal" ' + dadosHabilidade + ' ><i class="fa fa-stack-exchange"></i></a></td>' +
			'<td><a id="seiFazerHabilidade_' + i + '" data-tooltip="' + textoTip_2 + '" data-toggle="modal" data-idHabilidade="' + element.documento.idHabilidade + '"  class="' + disabled_2 + '"><i class="fa fa-book"></i></a></td>' +
			'<td><a id="queroAprenderHabilidade_' + i + '" data-tooltip="' + textoTip + '" data-idHabilidade="' + element.documento.idHabilidade + '" class="' + disabled + '"><i class="fa fa-leanpub"></i></a></td>' +
				'<td ><span class="panel-label">DESCRIÇÃO: </span><br>' + 
				'<span class="panel-text">' + element.documento.descricao + '</span></td>' + 
				'<td><br><button id="cursoHabilidadeIn_' + i + '" class="panel-button-habilidade cursoHabilidadeIn"><i class="fa fa-chevron-down icon-check-habilidade"></i><span>cursos disponíveis</span></button>' +
				'<button id="cursoHabilidadeOff_' + i + '" class="panel-button-habilidade cursoHabilidade hide"><i class="fa fa-chevron-up icon-check-habilidade"></i><span>cursos disponíveis</span></button>' +
				'<a id="wiki_' + i + '" href="' + element.documento.wiki + '" class="wiki" data-tooltip="wikipédia" target="_blank"><i class="fa fa-wikipedia-w"></i></a></td>' +
				'<td>' + cursos + '</td>' +
			'</tr>';
//    	$("#habilidade_tbody").append(habilidade_table_row);
        
        return habilidade_table_row;
	};

	function montaAcoesHabilidades(){

    	$('.querofazercurso').each(function(z) {
    		$("#" + $(this).attr('id')).off('click');
    		$("#" + $(this).attr('id')).on('click',function(){
    			$("#" + $(this).attr('id')).addClass("disabled");
    	    	var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
    	    	atualizaUserPerfilElemento (objJson, "cursoInteresse", $(this).attr('data-idcurso'));
    	    });
    	});
		
    	$('.itemHabilidade').each(function(z) {
			var i = $(this).attr('id').split("_")[1];

	    	if (localStorage.usuarioPerfil != "tools"){
	    		$("#alterarHabilidade_" + i).addClass ("hide");
	    	}; 
	    	
	    	$('#queroAprenderHabilidade_' + i).off('click');
		    $('#queroAprenderHabilidade_' + i).on('click',function(){
				$("#" + $(this).attr('id')).addClass("disabled");
		    	var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
		    	atualizaUserPerfilElemento (objJson, "habilidadeInteresse", $(this).attr('data-idhabilidade'));
		    	atualizaMapa ($(this).attr('data-idhabilidade'), "have", "2");
		    });
		    $('#seiFazerHabilidade_' + i).off('click');
		    $('#seiFazerHabilidade_' + i).on('click',function(){
				$("#" + $(this).attr('id')).addClass("disabled");
		    	var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
		    	atualizaUserPerfilElemento (objJson, "habilidade", $(this).attr('data-idhabilidade'));
		    	atualizaMapa ($(this).attr('data-idhabilidade'), "have", "0");
		    });
		    $('#alterarHabilidade_' + i).off('click');
		    $('#alterarHabilidade_' + i).on('click',function(){
		    	localStorage.habilidadeExistente = "true";
		    	$("#diagrama").val($(this).attr("data-diagrama"));
		    	$("#type").val($(this).attr("data-type"));
		    	$("#idHabilidade").val($(this).attr("data-idHabilidade"));
		    	$("#name").val($(this).attr("data-name"));
	  			$("#descricao").val($(this).attr("data-descricao"));
				$("#wiki").val($(this).attr("data-wiki"));
				$("#area").val($(this).attr("data-area"));
				$("#campo").val($(this).attr("data-campo"));
				$("#categoria").val($(this).attr("data-categoria"));
				$("#parent").val($(this).attr("data-parent"));
				$("#classes").val($(this).attr("data-classes"));
				$("#weight").val($(this).attr("data-weight"));
				$("#positionX_I").val($(this).attr("data-positionx"));
				$("#positionY_I").val($(this).attr("data-positiony"));
				$("#opacity").val($(this).attr("data-opacity"));
				$("#color").val($(this).attr("data-color"));
				$("#shape").val($(this).attr("data-shape"));
				$("#width").val($(this).attr("data-width"));
				$("#lineColor").val($(this).attr("data-lineColor"));
				$("#targetArrowColor").val($(this).attr("data-targetArrowColor"));
				$("#targetArrowShape").val($(this).attr("data-targetArrowShape"));
				$("#source").val($(this).attr("data-source"));
				$("#target").val($(this).attr("data-target"));
				$("#tags").val(stringTags($(this).attr("data-tags")));
		    });
		    $('#cursoHabilidadeIn_' + i).off('click');
	        $('#cursoHabilidadeIn_' + i).on('click', function () {
	        	$(".cursoHabilidade").removeClass("hide");
	        	$(".cursoHabilidadeIn").addClass("hide");
	        });
	        $('#cursoHabilidadeOff_' + i).off('click');
	        $('#cursoHabilidadeOff_' + i).on('click', function () {
	        	$(".cursoHabilidade").addClass("hide");
	        	$(".cursoHabilidadeIn").removeClass("hide");
	        });
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
