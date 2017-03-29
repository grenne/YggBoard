/**
 * 				obter os dados
 */

	function obterBadgesUserPerfil (tipo, badge, append) {
//		
//		carrega badges
//
		/**
		 * 	carrega lista de badges
		 */

		rest_obterUserPerfilItens(tipo, carregaBadgesUserPerfil, semAcao, tipo, badge, append);
	};
		
	function carregaBadgesUserPerfil (objJson, tipo, badge, append) {	

		$("." + append).remove();

		var	label = "Interesse nos badges"
		var badge_user_perfil_table_header =
				'<table id="badge_user_perfil_list' + append + '" class="' + append + ' user-panel-table">' +
					'<thead>' +
						'<tr>' +
							'<th data-toggle="true" data-sort-ignore="true"></th>' +
							'<th data-toggle="true" data-sort-ignore="true"></th>' + 
							'<th data-toggle="true" data-sort-ignore="true"></th>' + 
							'<th data-hide="all" ></th>' +
						'</tr>' +
					'</thead>' +
					'<tbody id="badge_user_perfil_tbody' + append + '">' +
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
		$("#" + append).append(badge_user_perfil_table_header);

    	$( ".itemBadgeUserPerfil" + append).remove();
        
    	$.each(objJson, function (i, badge) {
        	var calculoPercentual = 0;
        	if (badge.totalHabilidades != "0"){
        		calculoPercentual = parseInt(badge.totalPossuiHabilidades) / parseInt(badge.totalHabilidades) * 100;
        	};
            var percentualHabilidades = calculoPercentual.toFixed(0);
        	if ((append == "badges_user_conquista_theader") | 
        		(append == "badges_user_perfil_theader" && percentualHabilidades != 100)	){
            	var habilidades = "";
            	$.each(badge.arrayHabilidades, function (z, habilidade){
            		var disabled = "";
            		var textoTip = "quero aprender";
            		if (checaUserPerfilElemento("habilidadeInteresse", habilidade.idHabilidade)){
            			disabled = 'disabled';
            			textoTip = "marquei interesse";	
            		};
            		var disabled_2 = "";
            		var textoTip_2 = "sei fazer";
            		if (checaUserPerfilElemento("habilidades", habilidade.idHabilidade)){
            			disabled_2 = 'disabled';
            			textoTip_2 = "ja possuo";	
            		};
            		habilidades = habilidades +
       				'<div  class="row">' +
	       				'<div id="itemHabilidade_' + i + "-" + z + '" class="user-panel-habilidade-div col-xs-12">' +
		    				'<span class="user-panel-habilidade-nome habilidadeBadge col-xs-9">- ' + habilidade.name + '</span>' +
		    				'<span><a id="seiFazerHabilidade_' + i + "-" + z + '" data-tooltip="' + textoTip_2 + '" data-toggle="modal" data-idHabilidade="' + habilidade.idHabilidade + '" class="' + disabled_2 + ' seiFazerHabilidade"><i class="fa fa-book"></i></a></span>' +
		    				'<span><a id="queroAprenderHabilidade_' + i + "-" + z + '" data-tooltip="' + textoTip + '" data-idHabilidade="' + habilidade.idHabilidade + '" class="' + disabled + ' queroAprenderHabilidade"><i class="fa fa-leanpub"></i></a></span>' +
							'<button id="cursoHabilidadeIn_' + i + "-" + z + '" class="user-panel-button-curso user-panel-button-curso-item col-xs-2 cursoHabilidadeIn"><span><i class="fa fa-chevron-down "></i> cursos</span></button>' +
							'<button id="cursoHabilidadeOff_' + i + "-" + z + '" class="user-panel-button-curso col-xs-2 hide cursoHabilidadeOff"><span><i class="fa fa-chevron-up "></i> cursos</span></button>' +
						'</div>' +
					'</div>';                	
             	$.each(habilidade.cursos, function (w, curso){
            		var disabled = "";
            		var textoTip = "quero fazer";
            		if (checaUserPerfilElemento("cursoInteresse", curso.documento.idCurso)){
            			disabled = 'disabled';
            			textoTip = "marquei interesse";	
            		};
            		habilidades = habilidades +
       				'<div id="itemCurso_' + i + "-" + z +  + "-" + w + ' class="row">' +
       					'<div class="user-panel-curso-div col-xs-12">' +
       						'<span class="user-panel-curso-habilidade-nome cursoHabilidade_' + i + "-" + z + ' col-xs-12 hide">- <a  href="' + curso.documento.wiki + '" target="_blank">  ' + curso.documento.descricao + '</a>' +
       						'&nbsp;&nbsp;&nbsp;<a id="querofazercurso_' + i + "-" + z + "-" + w + '" data-tooltip="' + textoTip + '"  class="hide querofazercurso icon-querofazer ' + disabled + ' cursoHabilidade_' + i + "-" + z + '"  data-idCurso="' + curso.documento.idCurso + '"><i class="fa fa-leanpub icon-quefazer"></i></a>' +
       						'</span>' +
						'</div>' +
       				'</div>';
            	});
            	});
	        	actions = "";
	        	if (append == "badges_user_conquista_theader"){
	        		actions = 
	        			'<td class="user-panel-td"><span class="panel-label"><span id="itemPercentualHabilidades_' + i + '" class=""></span></td>';
	        	};
	        	if (append == "badges_user_perfil_theader"){
		        		actions = 
		        			'<td class="user-panel-td"><span class="panel-label percentual-box"><span id="itemPercentualHabilidades_' + i + '" class="percentual-numero">' + percentualHabilidades + '%</span><span class="percentual-texto"> em comum</span></td>';
	        	};
	        	var compFacebook = "badgeYgg";
	        	if (badge.badge){
	        		compFacebook = badge.badge.split(".")[0];
	        	};
	        	var compFaceDiv = "";
	        	if (append == "badges_user_conquista_theader"){
	        		compFaceDiv =
//	        			'<div class="fb-share-button"' + 
//	        					' data-href="http://52.67.61.248:8080/yggboard/Beta_Tester.html"' + 
//	        					' data-layout="button">' +
//						' </div>'; 	
	        			'<div class="fb-share-button" data-href="http://52.67.61.248:8080/yggboard/img/badges/' + badge.badge + '" data-layout="button" data-size="small" data-mobile-iframe="false"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F52.67.61.248%3A8080%2Fyggboard%2Fimg%2Fbadges%2F' + badge.badge + '&amp;src=sdkpreparse">Compartilhar</a></div>';	        			
//	        			'<div class="fb-share-button" data-href="http://52.67.61.248:8080/yggboard/' + compFacebook + '.html" data-layout="icon" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore fa fa-facebook-official" color="blue" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F52.67.61.248%3A8080%2Fyggboard%2F' + compFacebook + '.html&amp;src=sdkpreparse">Compartilhar</a></div>';
	        	};
	        	badge_user_perfil_table_row = 
					'<tr id="itemBadgeUserPerfil_' + i + '" class="itemBadgeUserPerfil col-xs-12' + append + '"  data-totalHabilidades="' + badge.totalHabilidades + '"  data-possuiHabilidades="' + badge.totalPossuiHabilidades + '">' +
			   			'<td id="nome_' + i + '" class="user-panel-td"><img id="img-badgeInteresse_' + i + append + '" width="60" height="60" class="img-circle"><span class="user-panel-label">   ' + badge.nome + '</span></td>' +
			   			actions +
			   			'<td>' +
			   			 	compFaceDiv +
			   			 '</td>' +
						'<td class="col-xs-12">' +
							'<div class="col-xs-12 lineInvisible">' +
							'____________________________________________'+
							'</div>' +
							'<div id="habilidades_' + i + '" class="user-panel-td-habilidade row"><span class="user-panel-label-habilidade">Habilidades faltantes</span>' +
							'</div>' +
							'<div class="col-xs-12">' +
							habilidades +
							'</div>' +
						'</td>' +
					'</tr>';

	        	$("#badge_user_perfil_tbody" + append).append(badge_user_perfil_table_row);

	        	$('.queroAprenderHabilidade').off('click');
        	    $('.queroAprenderHabilidade').on('click',function(){
        			$("#" + $(this).attr('id')).addClass("disabled");
        	    	var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
        	    	atualizaUserPerfilElemento (objJson, "habilidadeInteresse", $(this).attr('data-idhabilidade'));
        	    	atualizaMapa ($(this).attr('data-idhabilidade'), "have", "2");
        	    });

        	    $('.seiFazerHabilidade').off('click');
        	    $('.seiFazerHabilidade').on('click',function(){
        			var id = $(this).attr('id');
        			var i = id.split("_")[1];
        			var z = i.split("-")[0];
        			$("#" + $(this).attr('id')).addClass("disabled");
        			$("#itemHabilidade_" + i).addClass("hide");
        			var possuiHabilidades = $("#itemBadgeUserPerfil_" + z).attr('data-possuiHabilidades');
        			possuiHabilidades = parseInt($("#itemBadgeUserPerfil_" + z).attr('data-possuiHabilidades')) + 1; 
        			$("#itemBadgeUserPerfil_" + z).attr("data-possuiHabilidades",possuiHabilidades);
                	calculoPercentual = parseInt(possuiHabilidades) / parseInt($("#itemBadgeUserPerfil_" + z).attr('data-totalHabilidades')) * 100;
                	var percentualHabilidades = calculoPercentual.toFixed(0);                	
                	$("#itemPercentualHabilidades_" + z).html(percentualHabilidades + "%");
        	    	var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
        	    	atualizaUserPerfilElemento (objJson, "habilidade", $(this).attr('data-idhabilidade'));
        	    	atualizaMapa ($(this).attr('data-idhabilidade'), "have", "0");
        	    });

        	    $('.querofazercurso').each(function( z ) {
            		$("#" + $(this).attr('id')).off('click');
            		$("#" + $(this).attr('id')).on('click',function(){
            			$("#" + $(this).attr('id')).addClass("disabled");
            	    	var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
            	    	atualizaUserPerfilElemento (objJson, "cursoInteresse", $(this).attr('data-idcurso'));
            	    });
            	});

        	    $('.cursoHabilidadeIn').off('click');
        	    $('.cursoHabilidadeIn').on('click', function(){
        			var id = $(this).attr('id');
        			var i = id.split("_")[1];
    				$( ".cursoHabilidade_" + i).removeClass('hide');
    				$( "#cursoHabilidadeOff_" + i).removeClass('hide');
    				$( "#cursoHabilidadeIn_" + i).addClass('hide');
    			});

        	    $('.cursoHabilidadeOff').off('click');
        	    $('.cursoHabilidadeOff').on('click', function(){
        			var id = $(this).attr('id');
        			var i = id.split("_")[1];
    				$( ".cursoHabilidade_" + i).addClass('hide');
    				$( "#cursoHabilidadeOff_" + i).addClass('hide');
    				$( "#cursoHabilidadeIn_" + i).removeClass('hide');
    			});

    			$('#acaoBadgeUserPerfilHabilidades' + i + append).off('click');
	            $('#acaoBadgeUserPerfilHabilidades' + i + append).on('click', function () {
	    			var id = $(this).attr('id');
	    			var i = id.split("_")[1];
	        		$('.paineis-user-perfil').addClass("hide");
	        		$('.habilidade-user-perfil').removeClass("hide");
					rest_obterUserPerfilItens("habilidades-interesse-badges", carregaHabilidadesUserPerfil, semAcao, "habilidades-necessarias-badge", badge.nome, "habilidades_user_perfil_theader");
	            });
	        	$("#excluiInteresseBadge_" + i).off('click');
	    		$("#excluiInteresseBadge_" + i).on('click',function(){
	    	    	var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
	    	    	atualizaUserPerfilElemento (objJson, "badgeInteresseOff", badge.nome);
		        	$("#itemBadgeUserPerfil_" + i).addClass('hide');
	    		});
        	};
        });

        var badge_user_perfil = $('#badge_user_perfil_list' + append);

    	$.each(objJson, function (i, badge) {
			if (badge.badge){
				carregaPhoto (localStorage.app, badge.badge, "badgeInteresse_" + i + append);
			};
		});
        
        badge_user_perfil.footable().trigger('footable_collapse_all');

		// Search input
		$('#searchBadgesUserPerfilConquista').on('input', function (e) {
			e.preventDefault();
			badge_user_perfil.trigger('footable_filter', {filter: $(this).val()});
		});
	
	};
