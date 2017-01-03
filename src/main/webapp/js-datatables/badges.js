		
	function carregaBadges (objJson) {
		
		montaHeaderBadge (objJson);
    	
		$( ".itemBadge" ).remove();
        
		$.each(objJson, function (i, badge) {
        	
        	montaLinhaBadge(i, badge);
        	
        	$('#habilidadeBadgeIn_' + i).off('click');
            $('#habilidadeBadgeIn_' + i).on('click', function () {
            	$(".habilidadeBadge").removeClass("hide");
            	$(".habilidadeBadgeIn").addClass("hide");
            });
            $('#habilidadeBadgeOff_' + i).off('click');
            $('#habilidadeBadgeOff_' + i).on('click', function () {
            	$(".habilidadeBadge").addClass("hide");
            	$(".habilidadeBadgeIn").removeClass("hide");
            });
            $('#comparaBadge' + i).off('click');
            $('#comparaBadge' + i).on('click', function () {
            	$("#labelYggmap").html("Montando badge:" + badge.nome + "...");
            	$("#labelYggmap").removeClass("text-success");
            	$("#labelYggmap").removeClass("text-warning");
            	$("#labelYggmap").addClass("text-primary");
            	comparaBadge (cy, badge);
            	$('.cursos').addClass('hide');
				$('.habilidade').addClass('hide');
            	$("#labelYggmap").html("Badge:" + badge.nome);
            	atualizaUserPerfil ("badges", badge.nome);
            	atualizaUserPerfil ("tags", tagsString);
            });
            $('#acaoBadgeInteresse_' + i).off('click');
            $('#acaoBadgeInteresse_' + i).on('click', function () {
            	atualizaUserPerfil ("badgeInteresse", badge.nome);
            	atualizaUserPerfil ("tags", tagsString);
            });
        });

        $('#badge_list').footable();

		$.each(objJson, function (i, badge) {
			if (badge.badge){
				carregaPhoto (localStorage.app, badge.badge, "badge_" + i);
			};
		});
        
		// Search input
		$('#searchBadges').on('input', function (e) {
			e.preventDefault();
			badge_table.trigger('footable_filter', {filter: $(this).val()});
		});
	};
		
	function montaHeaderBadge (objJson) {

		$( ".badge_theader" ).remove();

		var badge_table_header =
				'<table id="badge_list" class="badge_theader footable table toggle-circle" data-sorting="true">' +
					'<thead>' +
						'<tr>' +
							'<th data-toggle="true" data-sort-initial="true"></th>' +
							'<th data-sort-ignore="true"></th>' +
							'<th data-hide="all" ></th>' +
							'<th data-hide="all" ></th>' +
							'<th data-hide="all" ></th>' +
							'<th data-hide="all" ></th>' +
						'</tr>' +
					'</thead>' +
					'<tbody id="badge_tbody">' +
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

		$("#badge_theader").append(badge_table_header);
	};	

	function montaLinhaBadge (i, badge){
		var habilidades = "";
		$.each(badge.arrayHabilidades, function (w, habilidade){
			habilidades = habilidades +
			'<br class="habilidadeBadge hide"><span class="panel-text user-panel-habilidade-nome habilidadeBadge hide habilidadeNecessariaBadge_' + i + '" data-idHabilidade="' + habilidade.idHabilidade + '">- ' + habilidade.name + '</span>';
			if (habilidade.classes != "habilidade"){
				habilidades = montaHabilidadesAreas (habilidade, habilidades, true, i);
			};
		});
		var disabled = "";
		var textoTip = "quero aprender";
		if (checaUserPerfilElemento("badgeInteresse", badge.nome)){
			disabled = 'disabled';
			textoTip = "marquei interesse";	
		};
		badge_table_row = 
			'<tr id="itemBadge_' + i + '" class="itemBadge" data-nome="' + badge.nome + '">' +
				'<td id="nome_' + i + '"><img id="img-badge_' + i + '" width="60" height="60" class="img-circle"><span class="panel-label" data-tooltip="objetivo"> ' + badge.nome + '</span></td>' +
				'<td><a id="queroAprender_' + i + '" data-tooltip="' + textoTip + '" class="' + disabled + '"><i class="fa fa-thumbs-o-up"></i></a></td>' +
				'<td><span class="panel-label">OBJETIVO: </span><br>' +
					'<span class="panel-text">' + badge.descricao + '</span></td>' +
				'<td><br><span class="panel-label">Certificadora: </span><br>' +
					'<span class="panel-text">' + badge.entidadeCertificadora + '</span></td>' +
				'<td><br><button id="habilidadeBadgeIn_' + i + '" class="panel-button-badge habilidadeBadgeIn"><i class="fa fa-chevron-down icon-check-badge"></i><span>lista de habilidades</span></button>' +
					'<button id="habilidadeBadgeOff_' + i + '" class="panel-button-badge habilidadeBadge hide"><i class="fa fa-chevron-up icon-check-badge"></i><span>lista de habilidades</span></button></td>' +
				'<td>' + habilidades  + '</td>' +
			'</tr>';

		$("#badge_tbody").append(badge_table_row);
		
		$('#queroAprender_' + i).off('click');
	    $('#queroAprender_' + i).on('click',function(){
	    	$('#queroAprender_' + i).addClass("disabled");
	    	var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
	    	atualizaUserPerfilElemento (objJson, "badgeInteresse", badge.nome);
	    });	
	};
	
	function montaHabilidadesAreas (habilidade, habilidades, necessarias, i) {

		var objJson = JSON.parse(localStorage.getItem("jsonYggmap"));
		
		$.each( objJson.data, function(w, element ) {
			if (element.parent == habilidade.idHabilidade){
				if (element.category != "habilidade"){
					habilidades = montaHabilidadesCampos (element, habilidades,necessarias, i)
				};
				if (necessarias){
					habilidades = habilidades +
					'<br class="habilidadeBadge hide"><span class="panel-text user-panel-habilidade-nome habilidadeBadge hide habilidadeNecessariaBadge habilidadeNecessariaBadge_' + i + '" data-idHabilidade="' + element.id + '">- ' + element.Label + '</span>';
				}else{
					habilidades = habilidades +
					'<span class="hide habilidadeRecomendadaBadge habilidadeRecomendadaBadge_' + i + '" data-idHabilidade="' + element.id + '"></span>';					
				}
			};
		});

		return habilidades;
	};	
	
	function montaHabilidadesCampos (habilidade, habilidades, necessarias, i) {
		var objJson = JSON.parse(localStorage.getItem("jsonYggmap"));
		
		$.each( objJson.data, function(w, element ) {
			if (element.parent == habilidade.id){
				if (element.category != "habilidade"){
					habilidades = montaHabilidadesCategorias (element, habilidades,necessarias, i)
				};
				if (necessarias){
					habilidades = habilidades +
					'<br class="habilidadeBadge hide"><span class="panel-text habilidadeBadge hide habilidadeNecessariaBadge_' + i + '" data-idHabilidade="' + element.id + '">- ' + element.Label + '</span>';
				}else{
					habilidades = habilidades +
					'<span class="hide habilidadeRecomendadaBadge_' + i + '" data-idHabilidade="' + element.id + '"></span>';					
				}
			};
		});

		return habilidades;
	};	
		
	function montaHabilidadesCategorias (habilidade, habilidades, necessarias, i) {
		var objJson = JSON.parse(localStorage.getItem("jsonYggmap"));
		
		$.each( objJson.data, function(w, element ) {
			if (element.parent == habilidade.id){
				if (element.category != "habilidade"){
					habilidades = montaHabilidades (element, habilidades,necessarias, i)
				};
				if (necessarias){
					habilidades = habilidades +
					'<br class="habilidadeBadge hide"><span class="panel-text habilidadeBadge hide habilidadeNecessariaBadge_' + i + '" data-idHabilidade="' + element.id + '">- ' + element.Label + '</span>';
				}else{
					habilidades = habilidades +
					'<span class="hide habilidadeRecomendadaBadge_' + i + '" data-idHabilidade="' + element.id + '"></span>';					
				}
			};
		});

		return habilidades;
	};
	
	function montaHabilidades (habilidade, habilidades, necessarias, i) {
		var objJson = JSON.parse(localStorage.getItem("jsonYggmap"));
		
		$.each( objJson.data, function(w, element ) {
			if (element.parent == habilidade.id){
				if (element.category != "habilidade"){
					habilidades = montaAgrupamento (element, habilidades,necessarias, i)
				};
				if (necessarias){
					habilidades = habilidades +
					'<br class="habilidadeBadge hide"><span class="panel-text habilidadeBadge hide habilidadeNecessariaBadge_' + i + '" data-idHabilidade="' + element.id + '">- ' + element.Label + '</span>';
				}else{
					habilidades = habilidades +
					'<span class="hide habilidadeRecomendadaBadge_' + i + '" data-idHabilidade="' + element.id + '"></span>';					
				}
			};
		});

		return habilidades;
	};	