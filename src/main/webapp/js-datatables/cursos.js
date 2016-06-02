/**
 * 				obter os dados
 */

	function obterCursos (cy, element_id) {

//		rest_obterCursoAll(carregaCursos, noAction, cy);
//		
//		carrega cursos
//
		/**
		 * 	carrega lista de cursos
		 */
		objJson  = JSON.parse(
			'[' +
				'{' +
			    '"nome" : "Administração",' +
			    '"descricao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus, lorem et elementum consequat, felis quam malesuada ante, in rhoncus orci est nec felis. Nulla blandit nulla odio, eu fringilla.",' +
			    '"tempo" : "4 anos",' +
			    '"custo" : "12222,21",' +
			    '"escola" : "FGV",' +
			    '"curso" : "MBM (Master in business management)",' +
			    '"preRequisito" : "Fundamental Completo",' +
				'"elements" : ' +
			    	'[' +
		                '{' +
	    				'"type" : "nodes",' +
	    				'"id" : "j2",' +
	    				'"name" : "j2",' +
	    				'"descricao" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"wiki" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"area" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"campo" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"categoria" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"parent" : "",' +
	    				'"classes" : "elemento",' +
	    				'"weight" : "70",' +
	    				'"positionX" : "411",' +
	    				'"positionY" : "422",' +
	        			'"opacity" : "0.1",' +
	        			'"color" : "blue",' +
	        			'"shape" : "ellipse",' +
	    		    	'"width" : "100",' +
	    		    	'"lineColor" : "blue",' +
	        			'"targetArrowColor" : "",' +
	        			'"targetArrowShape" : ""' +
		        		'},' +
		                '{' +
	    				'"type" : "nodes",' +
	    				'"id" : "j3",' +
	    				'"name" : "j3",' +
	    				'"descricao" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"wiki" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"area" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"campo" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"categoria" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"parent" : "",' +
	    				'"classes" : "elemento",' +
	    				'"weight" : "70",' +
	    				'"positionX" : "138",' +
	    				'"positionY" : "221",' +
	        			'"opacity" : "0.7",' +
	        			'"color" : "blue",' +
	        			'"shape" : "ellipse",' +
	    		    	'"width" : "100",' +
	    		    	'"lineColor" : "blue",' +
	        			'"targetArrowColor" : "",' +
	        			'"targetArrowShape" : ""' +
		        		'},' +
		                '{' +
	    				'"type" : "nodes",' +
	    				'"id" : "j4",' +
	    				'"name" : "j4",' +
	    				'"descricao" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"wiki" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"area" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"campo" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"categoria" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"parent" : "",' +
	    				'"classes" : "elemento",' +
	    				'"weight" : "70",' +
	    				'"positionX" : "246",' +
	    				'"positionY" : "101",' +
	        			'"opacity" : "0.7",' +
	        			'"color" : "blue",' +
	        			'"shape" : "ellipse",' +
	    		    	'"width" : "100",' +
	    		    	'"lineColor" : "blue",' +
	        			'"targetArrowColor" : "",' +
	        			'"targetArrowShape" : ""' +
		        		'},' +
		                '{' +
	    				'"type" : "nodes",' +
	    				'"id" : "j5",' +
	    				'"name" : "j5",' +
	    				'"descricao" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"wiki" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"area" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"campo" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"categoria" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"parent" : "",' +
	    				'"classes" : "elemento",' +
	    				'"weight" : "70",' +
	    				'"positionX" : "396",' +
	    				'"positionY" : "215",' +
	        			'"opacity" : "0.7",' +
	        			'"color" : "blue",' +
	        			'"shape" : "ellipse",' +
	    		    	'"width" : "100",' +
	    		    	'"lineColor" : "blue",' +
	        			'"targetArrowColor" : "",' +
	        			'"targetArrowShape" : ""' +
		        		'},' +
		                '{' +
	    				'"type" : "nodes",' +
	    				'"id" : "j6",' +
	    				'"name" : "j6",' +
	    				'"descricao" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"wiki" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"area" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"campo" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"categoria" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"parent" : "",' +
	    				'"classes" : "elemento",' +
	    				'"weight" : "70",' +
	    				'"positionX" : "275",' +
	    				'"positionY" : "317",' +
	        			'"opacity" : "0.7",' +
	        			'"color" : "blue",' +
	        			'"shape" : "ellipse",' +
	    		    	'"width" : "100",' +
	    		    	'"lineColor" : "blue",' +
	        			'"targetArrowColor" : "",' +
	        			'"targetArrowShape" : ""' +
		        		'},' +
		                '{' +
	    				'"type" : "edges",' +
	    				'"id" : "a6",' +
	    				'"name" : "a6",' +
	    				'"descricao" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"wiki" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"area" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"campo" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"categoria" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"parent" : "",' +
	    				'"classes" : "ligacao",' +
	    				'"weight" : "70",' +
	    				'"positionX" : "",' +
	    				'"positionY" : "",' +
	        			'"opacity" : "",' +
	        			'"color" : "blue",' +
	        			'"shape" : "",' +
	    		    	'"width" : "",' +
	    		    	'"lineColor" : "blue",' +
	        			'"targetArrowColor" : "blue",' +
	        			'"targetArrowShape" : "",' +
	        			'"source" : "j4",' +
	        			'"target" : "j2"' +
		        		'},' +
		                '{' +
	    				'"type" : "edges",' +
	    				'"id" : "a7",' +
	    				'"name" : "a7",' +
	    				'"descricao" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"wiki" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"area" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"campo" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"categoria" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"parent" : "",' +
	    				'"classes" : "ligacao",' +
	    				'"weight" : "70",' +
	    				'"positionX" : "",' +
	    				'"positionY" : "",' +
	        			'"opacity" : "",' +
	        			'"color" : "blue",' +
	        			'"shape" : "",' +
	    		    	'"width" : "",' +
	    		    	'"lineColor" : "blue",' +
	        			'"targetArrowColor" : "blue",' +
	        			'"targetArrowShape" : "",' +
	        			'"source" : "j6",' +
	        			'"target" : "j4"' +
		        		'},' +
		                '{' +
	    				'"type" : "edges",' +
	    				'"id" : "a8",' +
	    				'"name" : "a8",' +
	    				'"descricao" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"wiki" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"area" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"campo" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"categoria" : "xxxxxxxxxxxxxxxxxx",' +
	    				'"parent" : "",' +
	    				'"classes" : "ligacao",' +
	    				'"weight" : "70",' +
	    				'"positionX" : "",' +
	    				'"positionY" : "",' +
	        			'"opacity" : "",' +
	        			'"color" : "blue",' +
	        			'"shape" : "",' +
	    		    	'"width" : "",' +
	    		    	'"lineColor" : "blue",' +
	        			'"targetArrowColor" : "blue",' +
	        			'"targetArrowShape" : "",' +
	        			'"source" : "j5",' +
	        			'"target" : "j6"' +
	        		'}' +
		        	']' +
			    '},' +
				'{' +
			    '"nome" : "Matemática Financeira",' +
			    '"descricao" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus, lorem et elementum consequat, felis quam malesuada ante, in rhoncus orci est nec felis. Nulla blandit nulla odio, eu fringilla.",' +
			    '"tempo" : "4 anos",' +
			    '"custo" : "12222,21",' +
			    '"escola" : "FGV",' +
			    '"curso" : "MBM (Master in business management)",' +
			    '"preRequisito" : "Fundamental Completo",' +
				'"elements" : ' +
				    	'[' +
		                '{' +
						'"type" : "nodes",' +
						'"id" : "j2",' +
						'"name" : "j2",' +
						'"descricao" : "xxxxxxxxxxxxxxxxxx",' +
						'"wiki" : "xxxxxxxxxxxxxxxxxx",' +
						'"area" : "xxxxxxxxxxxxxxxxxx",' +
						'"campo" : "xxxxxxxxxxxxxxxxxx",' +
						'"categoria" : "xxxxxxxxxxxxxxxxxx",' +
						'"parent" : "",' +
						'"classes" : "elemento",' +
						'"weight" : "70",' +
						'"positionX" : "411",' +
						'"positionY" : "422",' +
		    			'"opacity" : "0.1",' +
		    			'"color" : "blue",' +
		    			'"shape" : "ellipse",' +
				    	'"width" : "100",' +
				    	'"lineColor" : "blue",' +
		    			'"targetArrowColor" : "",' +
		    			'"targetArrowShape" : ""' +
		        		'},' +
		                '{' +
						'"type" : "nodes",' +
						'"id" : "j3",' +
						'"name" : "j3",' +
						'"descricao" : "xxxxxxxxxxxxxxxxxx",' +
						'"wiki" : "xxxxxxxxxxxxxxxxxx",' +
						'"area" : "xxxxxxxxxxxxxxxxxx",' +
						'"campo" : "xxxxxxxxxxxxxxxxxx",' +
						'"categoria" : "xxxxxxxxxxxxxxxxxx",' +
						'"parent" : "",' +
						'"classes" : "elemento",' +
						'"weight" : "70",' +
						'"positionX" : "138",' +
						'"positionY" : "221",' +
		    			'"opacity" : "0.7",' +
		    			'"color" : "blue",' +
		    			'"shape" : "ellipse",' +
				    	'"width" : "100",' +
				    	'"lineColor" : "blue",' +
		    			'"targetArrowColor" : "",' +
		    			'"targetArrowShape" : ""' +
		        		'},' +
		                '{' +
						'"type" : "nodes",' +
						'"id" : "j4",' +
						'"name" : "j4",' +
						'"descricao" : "xxxxxxxxxxxxxxxxxx",' +
						'"wiki" : "xxxxxxxxxxxxxxxxxx",' +
						'"area" : "xxxxxxxxxxxxxxxxxx",' +
						'"campo" : "xxxxxxxxxxxxxxxxxx",' +
						'"categoria" : "xxxxxxxxxxxxxxxxxx",' +
						'"parent" : "",' +
						'"classes" : "elemento",' +
						'"weight" : "70",' +
						'"positionX" : "246",' +
						'"positionY" : "101",' +
		    			'"opacity" : "0.7",' +
		    			'"color" : "blue",' +
		    			'"shape" : "ellipse",' +
				    	'"width" : "100",' +
				    	'"lineColor" : "blue",' +
		    			'"targetArrowColor" : "",' +
		    			'"targetArrowShape" : ""' +
		        		'},' +
		                '{' +
						'"type" : "nodes",' +
						'"id" : "j5",' +
						'"name" : "j5",' +
						'"descricao" : "xxxxxxxxxxxxxxxxxx",' +
						'"wiki" : "xxxxxxxxxxxxxxxxxx",' +
						'"area" : "xxxxxxxxxxxxxxxxxx",' +
						'"campo" : "xxxxxxxxxxxxxxxxxx",' +
						'"categoria" : "xxxxxxxxxxxxxxxxxx",' +
						'"parent" : "",' +
						'"classes" : "elemento",' +
						'"weight" : "70",' +
						'"positionX" : "396",' +
						'"positionY" : "215",' +
		    			'"opacity" : "0.7",' +
		    			'"color" : "blue",' +
		    			'"shape" : "ellipse",' +
				    	'"width" : "100",' +
				    	'"lineColor" : "blue",' +
		    			'"targetArrowColor" : "",' +
		    			'"targetArrowShape" : ""' +
		        		'},' +
		                '{' +
						'"type" : "nodes",' +
						'"id" : "j6",' +
						'"name" : "j6",' +
						'"descricao" : "xxxxxxxxxxxxxxxxxx",' +
						'"wiki" : "xxxxxxxxxxxxxxxxxx",' +
						'"area" : "xxxxxxxxxxxxxxxxxx",' +
						'"campo" : "xxxxxxxxxxxxxxxxxx",' +
						'"categoria" : "xxxxxxxxxxxxxxxxxx",' +
						'"parent" : "",' +
						'"classes" : "elemento",' +
						'"weight" : "70",' +
						'"positionX" : "275",' +
						'"positionY" : "317",' +
		    			'"opacity" : "0.7",' +
		    			'"color" : "blue",' +
		    			'"shape" : "ellipse",' +
				    	'"width" : "100",' +
				    	'"lineColor" : "blue",' +
		    			'"targetArrowColor" : "",' +
		    			'"targetArrowShape" : ""' +
		        		'},' +
		                '{' +
						'"type" : "edges",' +
						'"id" : "a6",' +
						'"name" : "a6",' +
						'"descricao" : "xxxxxxxxxxxxxxxxxx",' +
						'"wiki" : "xxxxxxxxxxxxxxxxxx",' +
						'"area" : "xxxxxxxxxxxxxxxxxx",' +
						'"campo" : "xxxxxxxxxxxxxxxxxx",' +
						'"categoria" : "xxxxxxxxxxxxxxxxxx",' +
						'"parent" : "",' +
						'"classes" : "ligacao",' +
						'"weight" : "70",' +
						'"positionX" : "",' +
						'"positionY" : "",' +
		    			'"opacity" : "",' +
		    			'"color" : "blue",' +
		    			'"shape" : "",' +
				    	'"width" : "",' +
				    	'"lineColor" : "blue",' +
		    			'"targetArrowColor" : "blue",' +
		    			'"targetArrowShape" : "",' +
		    			'"source" : "j4",' +
		    			'"target" : "j2"' +
		        		'},' +
		                '{' +
						'"type" : "edges",' +
						'"id" : "a7",' +
						'"name" : "a7",' +
						'"descricao" : "xxxxxxxxxxxxxxxxxx",' +
						'"wiki" : "xxxxxxxxxxxxxxxxxx",' +
						'"area" : "xxxxxxxxxxxxxxxxxx",' +
						'"campo" : "xxxxxxxxxxxxxxxxxx",' +
						'"categoria" : "xxxxxxxxxxxxxxxxxx",' +
						'"parent" : "",' +
						'"classes" : "ligacao",' +
						'"weight" : "70",' +
						'"positionX" : "",' +
						'"positionY" : "",' +
		    			'"opacity" : "",' +
		    			'"color" : "blue",' +
		    			'"shape" : "",' +
				    	'"width" : "",' +
				    	'"lineColor" : "blue",' +
		    			'"targetArrowColor" : "blue",' +
		    			'"targetArrowShape" : "",' +
		    			'"source" : "j6",' +
		    			'"target" : "j4"' +
		        		'},' +
		                '{' +
						'"type" : "edges",' +
						'"id" : "a8",' +
						'"name" : "a8",' +
						'"descricao" : "xxxxxxxxxxxxxxxxxx",' +
						'"wiki" : "xxxxxxxxxxxxxxxxxx",' +
						'"area" : "xxxxxxxxxxxxxxxxxx",' +
						'"campo" : "xxxxxxxxxxxxxxxxxx",' +
						'"categoria" : "xxxxxxxxxxxxxxxxxx",' +
						'"parent" : "",' +
						'"classes" : "ligacao",' +
						'"weight" : "70",' +
						'"positionX" : "",' +
						'"positionY" : "",' +
		    			'"opacity" : "",' +
		    			'"color" : "blue",' +
		    			'"shape" : "",' +
				    	'"width" : "",' +
				    	'"lineColor" : "blue",' +
		    			'"targetArrowColor" : "blue",' +
		    			'"targetArrowShape" : "",' +
		    			'"source" : "j5",' +
		    			'"target" : "j6"' +
		    		'}' +
		        	']' +
			    '}' +
        	']'
		);
		
		carregaCursos (objJson, cy);	

	};
		
	function carregaCursos (objJson, cy) {	
		$( ".curso_theader" ).remove();

		var curso_table_header =
				'<table id="curso_list" class="curso_theader table toggle-circle">' +
					'<thead>' +
						'<tr>' +
							'<th data-toggle="true">Cursos</th>' +
							'<th>Ação</th>' +
							'<th data-hide="all">Descrição</th>' +
							'<th data-hide="all">Tempo</th>' +
							'<th data-hide="all">Custo</th>' +
							'<th data-hide="all">Escola</th>' +
							'<th data-hide="all">Curso</th>' +
							'<th data-hide="all">Pré requisito</th>' +
						'</tr>' +
					'</thead>' +
					'<tbody id="curso_tbody">' +
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
    	$( "#curso_theader" ).append(curso_table_header);

    	$( ".itemCurso" ).remove();
        $.each(objJson, function (i, curso) {
        	curso_table_row = 
				'<tr class="itemCurso">' +
		   			'<td id="nome_' + i + '">' + curso.nome + '</td>' +
					'<td id="acaoTd_' + i + '"><button id="acaoCurso_' + i + '" class="btn-xs btn-info">Grade</button></td>' +
					'<td id="descricao_' + i + '">' + curso.descricao + '</td>' +
					'<td id="tempo' + i + '">' + curso.tempo + '</td>' +
					'<td id="custo' + i + '">' + curso.custo + '</td>' +
					'<td id="escola' + i + '">' + curso.escola + '</td>' +
					'<td id="curso' + i + '">' + curso.curso + '</td>' +
					'<td id="preRequisito' + i + '">' + curso.preRequisito + '</td>' +
				'</tr>';
        	$( "#curso_tbody" ).append(curso_table_row);
            $('#acaoCurso_' + i).bind('click', function () {
            	gradeCurso (cy, curso);
            	$('.habilidade').addClass('hide');
            	$('.carreiras').addClass('hide');
            });
        });

        var curso_table = $('#curso_list');
		curso_table.footable().trigger('footable_collapse_all');


		$('#collapseCursos').on('click', function(){
			curso_table.trigger('footable_collapse_all');
			$( "#collapseCursos").addClass('hide');
			$( "#expandCursos").removeClass('hide');
		});
		$('#expandCursos').on('click', function(){
			curso_table.trigger('footable_expand_all');
			$( "#collapseCursos").removeClass('hide');
			$( "#expandCursos").addClass('hide');
		})
		// Search input
		$('#searchCursos').on('input', function (e) {
			e.preventDefault();
			curso_table.trigger('footable_filter', {filter: $(this).val()});
		});
	};

	function gradeCurso (cy, curso) {
		cy.destroy();
		cy = createDiagram ("cy");
		if (localStorage.usuario){
			cy.autolock( true );
		};
		drawElements (cy, curso, actionMove, '');
	};
