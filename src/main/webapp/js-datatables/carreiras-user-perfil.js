/**
 * 				obter os dados
 */

	function obterCarreirasUserPerfil (tipo, carreira, append) {
//		
//		carrega carreiras
//
		/**
		 * 	carrega lista de carreiras
		 */

		rest_obterUserPerfilItens(tipo, carregaCarreirasUserPerfil, semAcao, tipo, carreira, append);
	};
		
	function carregaCarreirasUserPerfil (objJson, tipo, carreira, append) {	

		$("." + append).remove();

		var label = "";
		if (tipo == "carreiras"){
			label = "Objetivos visitados"
		}else{
			label = "Interesse nos objetivos"
		};
    	var actions = "";
    	if (append == "carreiras_user_perfil_theader"){
    		actions = 
				'<th> % </th>' +
				'<th>Ação</th>';
    	}else{
    		label = "Objetivos conquistados";    		
    	};
		var carreira_user_perfil_table_header =
				'<table id="carreira_user_perfil_list' + append + '" class="' + append + ' user-panel-table">' +
					'<thead>' +
						'<tr>' +
							'<th data-toggle="true" data-sort-ignore="true"></th>' +
							'<th data-toggle="true" data-sort-ignore="true"></th>' + 
							'<th data-toggle="true" data-sort-ignore="true"></th>' + 
							'<th data-hide="all" ></th>' +
						'</tr>' +
					'</thead>' +
					'<tbody id="carreira_user_perfil_tbody' + append + '">' +
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
		$("#" + append).append(carreira_user_perfil_table_header);

    	$( ".itemCarreiraUserPerfil" + append).remove();
        
    	$.each(objJson, function (i, carreira) {
        	calculoPercentual = parseInt(carreira.totalPossuiHabilidades) / parseInt(carreira.totalHabilidades) * 100;
            var percentualHabilidades = calculoPercentual.toFixed(0);
        	if ((append == "carreiras_user_perfil_conquista_theader" && percentualHabilidades == 100) | 
        		(append == "carreiras_user_perfil_theader" && percentualHabilidades != 100)	){
            	var habilidades = "";
            	$.each(carreira.arrayNecessarios, function (z, habilidade){
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
       				'<div class="row">' +
	       				'<div class="user-panel-habilidade-div col-xs-12">' +
		    				'<span class="user-panel-carreira-habilidade-nome habilidadeCarreira col-xs-9">- ' + habilidade.name + '</span>' +
		    				'<span><a id="seiFazerHabilidade_' + i + "-" + z + '" data-tooltip="' + textoTip_2 + '" data-toggle="modal" data-idHabilidade="' + habilidade.idHabilidade + '"  class="' + disabled_2 + ' seiFazerHabilidade"><i class="fa fa-book"></i></a></span>' +
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
       				'<div class="row">' +
       					'<div class="user-panel-curso-div col-xs-12">' +
       						'<span class="user-panel-curso-habilidade-nome cursoHabilidade_' + i + "-" + z + ' col-xs-12 hide">- <a  href="' + curso.documento.wiki + '" target="_blank">  ' + curso.documento.descricao + '</a>' +
       						'&nbsp;&nbsp;&nbsp;<a id="querofazercurso_' + i + "-" + z + "-" + w + '" data-tooltip="' + textoTip + '"  class="hide querofazercurso icon-querofazer ' + disabled + ' cursoHabilidade_' + i + "-" + z + '"  data-idCurso="' + curso.documento.idCurso + '"><i class="fa fa-leanpub icon-quefazer"></i></a>' +
       						'</span>' +
						'</div>' +
       				'</div>';
            	});
            	});
	        	actions = "";
	        	if (append == "carreiras_user_perfil_theader"){
	        		actions = 
	        			'<td class="user-panel-td"><span class="panel-label percentual-box"><span class="percentual-numero">' + percentualHabilidades + '%</span><span class="percentual-texto"> em comum</span></td>';
	        	};
	        	carreira_user_perfil_table_row = 
					'<tr id="itemCarreiraUserPerfil_' + i + '" class="itemCarreiraUserPerfil col-xs-12' + append + '">' +
			   			'<td id="nome_' + i + '" class="user-panel-td"><span class="user-panel-label">' + carreira.nome + '</span></td>' +
			   			actions +
						'<td class="user-panel-td"><a id="excluiInteresse_' + i + '" data-tooltip="exclui interesse" ><i class="fa fa-trash-o icon-trash"></i></a></td>' +
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
	        	console.log ("**********************************************************************");
	        	console.log ("**********************************************************************");
	        	console.log ("**********************************************************************");
	        	console.log (habilidades);
	        	$("#carreira_user_perfil_tbody" + append).append(carreira_user_perfil_table_row);

	        	$('.queroAprenderHabilidade').off('click');
        	    $('.queroAprenderHabilidade').on('click',function(){
        			$("#" + $(this).attr('id')).addClass("disabled");
        	    	var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
        	    	atualizaUserPerfilElemento (objJson, "habilidadeInteresse", $(this).attr('data-idhabilidade'));
        	    	atualizaMapa ($(this).attr('data-idhabilidade'), "have", "2");
        	    });

        	    $('.seiFazerHabilidade').off('click');
        	    $('.seiFazerHabilidade').on('click',function(){
        			$("#" + $(this).attr('id')).addClass("disabled");
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

    			$('#acaoCarreiraUserPerfilHabilidades' + i + append).off('click');
	            $('#acaoCarreiraUserPerfilHabilidades' + i + append).on('click', function () {
	    			var id = $(this).attr('id');
	    			var i = id.split("_")[1];
	        		$('.paineis-user-perfil').addClass("hide");
	        		$('.habilidade-user-perfil').removeClass("hide");
					rest_obterUserPerfilItens("habilidades-interesse-carreiras", carregaHabilidadesUserPerfil, semAcao, "habilidades-necessarias-carreira", carreira.nome, "habilidades_user_perfil_theader");
	            });
	        	$("#excluiInteresse_" + i).off('click');
	    		$("#excluiInteresse_" + i).on('click',function(){
	    	    	var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
	    	    	atualizaUserPerfilElemento (objJson, "carreiraInteresseOff", carreira.nome);
		        	$("#itemCarreiraUserPerfil_" + i).addClass('hide');
	    		});
        	};
        });

        var carreira_user_perfil = $('#carreira_user_perfil_list' + append);
        
        carreira_user_perfil.footable().trigger('footable_collapse_all');

		$('#collapseCarreirasUserPerfilConquista').on('click', function(){
			carreira_user_perfil.trigger('footable_collapse_all');
			$( "#collapseCarreirasUserPerfilConquista").addClass('hide');
			$( "#expandCarreirasUserPerfilConquista").removeClass('hide');
		});
		$('#expandCarreirasUserPerfilConquista').on('click', function(){
			carreira_user_perfil.trigger('footable_expand_all');
			$( "#collapseCarreirasUserPerfilConquista").removeClass('hide');
			$( "#expandCarreirasUserPerfilConquista").addClass('hide');
		})
		// Search input
		$('#searchCarreirasUserPerfilConquista').on('input', function (e) {
			e.preventDefault();
			carreira_user_perfil.trigger('footable_filter', {filter: $(this).val()});
		});
	
	};
