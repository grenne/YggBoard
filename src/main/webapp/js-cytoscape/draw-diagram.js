/**
 * **   criar diagrama a partir de um arquivo json
 */
$(function () {
	
		$.ajax({
	        url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/habilidade/lista?diagrama=habilidades",
	        contentType: "application/json; charset=utf-8",
	        dataType: 'json'
		})
		.done(function( data ) {
		})
		.fail(function(data) {
		})
		.always(function(data) {
	    	if (data.status = 200) {
	    		var cy = createDiagram ("cy");	
	    		if (localStorage.usuario == "true"){
	    			cy.autolock( true );
	    		};
//	    		objJson = templateHabilidades ();
	    		objJson = data;
//	    		objJson = JSON.parse(localStorage.getItem("elements"));
	    		localStorage.setItem("elements", JSON.stringify(objJson));
	    		drawElements (cy, objJson, actionMove, 'grid');
	    		cy.on('tap', function(evt){
	    			if (evt.cyTarget.id) {
	    			};
	    		});
	    		$( "#comparaMeuPerfil" ).bind( "click", function() {
	    			carregaMeuPerfil (cy, objJson);
	            	$('.habilidade').addClass('hide');
	    			$('.cursos').addClass('hide');
	    		});
	    		obterCarreiras (cy);
	    		$( "#carregaHabilidades" ).bind( "click", function() {
	    			cy.destroy();
	    			cy = createDiagram ("cy");
	    			if (JSON.parse(localStorage.getItem("elements"))){
	    				objJson = JSON.parse(localStorage.getItem("elements"));
	    			};			
	    			$( "#comparaMeuPerfil" ).bind( "click", function() {
	    				carregaMeuPerfil (cy, objJson)
	    			});
	    			if (localStorage.usuario == "true"){
	    				cy.autolock( true );
	    			};
	    			drawElements (cy, objJson, actionMove, '');
	    			$('.cursos').addClass('hide');
	            	$('.habilidade').addClass('hide');
	            	$('.carreiras').removeClass('hide');

	            	obterCarreiras (cy);
	    		});
	    		$( "#fechaCursos" ).bind( "click", function() {
	    			cy.destroy();
	    			cy = createDiagram ("cy");
	    			if (JSON.parse(localStorage.getItem("elements"))){
	    				objJson = JSON.parse(localStorage.getItem("elements"));
	    			};			
	    			$( "#comparaMeuPerfil" ).bind( "click", function() {
	    				carregaMeuPerfil (cy, objJson)
	    			});
	    			if (localStorage.usuario == "true"){
	    				cy.autolock( true );
	    			};
	    			drawElements (cy, objJson, actionMove, '');
	    			$('.cursos').addClass('hide');
	    			obterCarreiras (cy);
	            	$('.carreiras').removeClass('hide');
	    		});
	    	}else{
	    		actio_not_ok()
	    	};
		});
	
});

function createDiagram (name, readyFunction, par1, par2){

	var cy = window.cy = cytoscape({
		container: document.getElementById('cy'),

		ready: function(){
		},
		style: [
				{
					selector: 'node',
					style: {
						'background-opacity' : 0.2,
						'background-color' : 'blue',
						'content': 'data(name)',
						'width': 100,
						'shape':'ellipse'
					}
				},
				{
					selector : ':parent',
					style : {
						'background-opacity' : 0.02,
						'background-color' : 'oramge'
					}
				},
				{
				     selector: 'edge',
				      style: {
				        'width': 2,
				        'line-color': 'blue',
				        'target-arrow-color': 'blue',
				        'target-arrow-shape': 'triangle',
				        'target-arrow-fill':"filled "
				        	}
				}
			],

			elements: {
				nodes: [
				],
				edges: [
				]
			},
		});
	
	var options = {
			  name: 'grid',

			  fit: true, // whether to fit to viewport
			  padding: 30, // fit padding
			  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
			  animate: true, // whether to transition the node positions
			  animationDuration: 500, // duration of animation in ms if enabled
			  animationEasing: undefined, // easing of animation if enabled
			  ready: undefined, // callback on layoutready
			  stop: undefined // callback on layoutstop
			};		
	cy.panzoom({
		options
	});

	
	return cy;
};
function carregaMeuPerfil (cy, objJson){
	objJson  = JSON.parse(
			'{' +
		    '"name" : "",' +
			    '"elements" : ' +
		    	'[' +
		                '{' +
		    				'"type" : "nodes",' +
		    				'"id" : "Pesquisa mercadológica",' +
		        			'"color" : "blue"' +
		        		'},' +
		                '{' +
		    				'"type" : "nodes",' +
		    				'"id" : "Atração retenção de clientes",' +
		        			'"color" : "blue"' +
		        		'},' +
		                '{' +
		    				'"type" : "nodes",' +
		    				'"id" : "Criação de estratégia competitiva",' +
		        			'"color" : "blue"' +
		        		'},' +
		                '{' +
		    				'"type" : "nodes",' +
		    				'"id" : "Gestão de comunicação mercadológica",' +
		        			'"color" : "blue"' +
			        	'},' +
		                '{' +
		    				'"type" : "nodes",' +
		    				'"id" : "Gestão de canais",' +
		        			'"color" : "blue"' +
			        	'},' +
		                '{' +
		    				'"type" : "nodes",' +
		    				'"id" : "Gestão de produtos",' +
		        			'"color" : "blue"' +
			        	'},' +
		                '{' +
		    				'"type" : "nodes",' +
		    				'"id" : "Gestão de propaganda e publicidade",' +
		        			'"color" : "blue"' +
			        	'},' +
		                '{' +
		    				'"type" : "nodes",' +
		    				'"id" : "Inteligência competitiva",' +
		        			'"color" : "blue"' +
			        	'},' +
		                '{' +
		    				'"type" : "nodes",' +
		    				'"id" : "Precificação de produtos e serviços",' +
		        			'"color" : "blue"' +
			        	'},' +
		                '{' +
		    				'"type" : "nodes",' +
		    				'"id" : "Desenvolvimento de novos produtos",' +
		        			'"color" : "blue"' +
				        	'},' +
		                '{' +
		    				'"type" : "nodes",' +
		    				'"id" : "Análises estratégicas",' +
		        			'"color" : "blue"' +
		        		'}' +
		        ']' +
	'}');
	$.each( objJson.elements, function( i, element ) {
		var id = compoeId (element.id);
		var selector = '#' + id
		var node = cy.$(selector);
		if (node.isParent(selector)){
			var nodes = node.parent();
			var descendants = node.descendants();
			$.each( descendants, function( i, descendant ) {
				montaComparacao(cy, descendant.id(), 'perfilUsuario', 'perfilCarreira', 'green', 'green', 1);				
			});
		}else{
			montaComparacao(cy, id, 'perfilUsuario', 'perfilCarreira', 'green', 'green', 1);				
		}
	});
};

function comparaCarreira (cy, objJson){
	
	var elementsCarreira = cy.nodes('.perfilCarreira');

	$.each( elementsCarreira, function( i, element ) {
		var selector = '#' + element.id();
		var node = cy.$(selector);
		var opacity = 0.3;
		if (!node.isChild() && !cy.$(selector).hasClass("agrupamento")){
			var opacity = 0.02;
		};
		if (element.hasClass('perfilUsuario')){
			cy.style()
			  .selector(selector)
			    .style({
			      'background-color': 'green',
			      'background-opacity': opacity
			    })
			  .update()				
		}else{
			cy.style()
			  .selector(selector)
			    .style({
			      'background-color': 'orange',
			      'background-opacity': opacity
			    })
			  .update()							
		};
		cy.$(selector).removeClass('perfilCarreira');
	});
	
	$.each( objJson.necessarios, function( i, element ) {
		objJsonElements = JSON.parse(localStorage.getItem("elements"));
		var selector = '#' + compoeId (element);
		var node = cy.$(selector);
		if (node.isParent(selector)){
			var nodes = node.parent();
			var descendants = node.descendants();
			$.each( descendants, function( i, descendant ) {
				montaComparacao(cy, descendant.id(), 'perfilCarreira', 'perfilUsuario', 'green', 'red', 0.2);				
			});
		}else{
			montaComparacao(cy, compoeId (element), 'perfilCarreira', 'perfilUsuario', 'green', 'red', 0.2);				
		}
	});
	$.each( objJson.recomendados, function( i, element ) {
		var selector = '#' + compoeId (element);
		var node = cy.$(selector);
		if (node.isParent(selector)){
			var nodes = node.parent();
			var descendants = node.descendants();
			$.each( descendants, function( i, descendant ) {
				montaComparacao(cy, descendant.id(), 'perfilCarreira', 'perfilUsuario', 'green', 'red', -0.1);				
			});
		}else{
			montaComparacao(cy, compoeId (element), 'perfilCarreira', 'perfilUsuario', 'green', 'red', -0.1);				
		}
	});
};

function montaComparacao(cy, element, perfil_01, perfil_02, cor_01, cor_02, opacity){
	var selector = '#' + element;
	var node = cy.$(selector);
	if (!node.isParent(selector)){
		cy.$(selector).addClass(perfil_01);
		if (cy.$(selector).hasClass(perfil_02)){
			cy.style()
			  .selector(selector)
			    .style({
			      'background-color': cor_01,
			      'background-opacity': 0.7 + opacity
			    })
			  .update()				
		}else{
			cy.style()
			  .selector(selector)
			    .style({
			      'background-color': cor_02,
			      'background-opacity': 0.8 + opacity
			    })
			  .update()										
		};
	};
};

function drawElements (cy, objJson, actionMove, typeLayout){
	
	addElements (cy, objJson,"area", 30);
	
	addElements (cy, objJson,"campo", 30);

	addElements (cy, objJson,"categoria");

	addElements (cy, objJson,"habilidade");
	
	addEdges (cy, objJson);

	cy.on('tap', function(evt){
		if (evt.cyTarget.id){
			var selector = '#' + evt.cyTarget.id();
			var node = cy.$(selector);
			var opacity = 0.3;
			if (evt.cyTarget.id) {
				$('#habilidadeName').html(evt.cyTarget.data('name'));  
				$('#habilidadeDescricao').html(evt.cyTarget.data('descricao'));
				$('#habilidadeWiki').html(evt.cyTarget.data('wiki'));
				$('#habilidadeArea').html(evt.cyTarget.data('area'));
				$('#habilidadeCampo').html(evt.cyTarget.data('campo'));
				$('#habilidadeCategoria').html(evt.cyTarget.data('categoria'));
				$('.habilidade').removeClass('hide');
				if (cy.$(selector).hasClass("perfilCarreira")){
					obterCursos (cy, evt.cyTarget.id());
					$('.cursos').removeClass('hide');
					obterCursos (cy, evt.cyTarget.id());
					$('.cursos').removeClass('hide');
				};
				var x = cy.$(selector).position('x');
				var y = cy.$(selector).position('y');
				cy.animate(
						{
							fit: {
								eles: node,
								padding: 20
							}
						}, 
						{
							duration: 1000
						});			
				};
				console.log ("tap: x:" + x + " y:" + y);
		};
	});
	cy.bind('tapend', function(evt){
		if (evt.cyTarget.id) {
			actionMove(cy, evt.cyTarget.id(), evt.cyPosition.x, evt.cyPosition.y);
		};
	});

	var layout = cy.makeLayout({
		name: "preset"
	});
		
	layout.run();

};


function 	addElements (cy, objJson, tipo, widthElement){

	console.log ("carrega " + tipo );
	
	$.each( objJson, function( i, element ) {
		if (element.documento.classes == tipo){
			if (element.documento.positionX == "") {
				if (element.documento.parent == ""){
					objJson = JSON.parse(localStorage.getItem("elements"));
					element.documento.positionX = 100 + 200;
					element.documento.positionY = 100 - 200;
					objJson[i].documento.positionX = 100 + 200;
					objJson[i].documento.positionY = 100 - 200;
					localStorage.setItem("elements", JSON.stringify(objJson));
				}else{
					var selector = '#' + compoeId (element.documento.parent);
					var x1 = cy.$(selector).position('x');
					var y1 = cy.$(selector).position('y');
					if (x1 > 0){
						difX = 20
					}else{
						difX = -20
					};
					if (y1 > 0){
						difY = 70
					}else{
						difY = -70
					};
					element.documento.positionX = x1 - difX;
					element.documento.positionY = y1 - difY;
					objJson[i].documento.positionX = x1 - difX;
					objJson[i].documento.positionY = y1 - difY;
				};
			};
			id = compoeId (element.documento.idHabilidade);
			cy.add({
			    group: element.documento.type,
			    data: { 
			    	id : id,
			    	name : element.documento.name,  
			    	descricao : element.documento.descricao,
			    	wiki : element.documento.wiki,
			    	area : element.documento.area,
			    	campo : element.documento.campo,
			    	categoria : element.documento.categoria,
			    	parent : compoeId (element.documento.parent),
	//		    	weight: element.documento.weight,
			    	},
			    position: {
			    	x: parseInt(element.documento.positionX), 
			    	y: parseInt(element.documento.positionY) 
			    	},
	//		    width : parseInt(element.documento.width),
	//		    width : 100,
				style : {
	//		    	'background-opacity' : parseFloat(element.documento.opacity),
	//		    	'background-color' : element.documento.color,
			    	'shape' : 'ellipse',
	//		    	'width' : widthElement
	//		    	'line-color' : element.documento.lineColor
				}
			});
			var selector = '#' + id;
			cy.$(selector).addClass(element.documento.classes);
			var node = cy.$(selector);
			if (tipo == "area" ){
				cy.style()
				  .selector(selector)
				    .style({
				      'background-opacity': 0.02,
				      'background-color': "orange"
				    })
				  .update()						  
				cy.$(selector).addClass('agrupamento');
			}else{
				if (tipo == "campo" ){
					cy.style()
					  .selector(selector)
					    .style({
					      'background-opacity': 0.08,
					      'background-color': "orange"
					    })
					  .update()						  
					cy.$(selector).addClass('agrupamento');
				}else{
					if (tipo == "categoria"){
						cy.style()
						  .selector(selector)
						    .style({
						      'background-opacity': 0.12,
						      'background-color': "orange"
						    })
						  .update()						  
						cy.$(selector).addClass('agrupamento');
					};
				};
			};
		};
	});
	console.log ("carregou " + tipo );
};

function addEdges (cy, objJson) {
	
	console.log ("carrega ligacoes");

	$.each( objJson, function( i, element ) {
		if (element.documento.type == "edges" ){
			sou = compoeId (element.documento.source);
			tar = compoeId (element.documento.target);
			cy.add({
			    group: element.documento.type,
			    data: { 
			    	id : i,
			    	name : element.documento.name,  
			    	source : sou,
			    	target : tar
			    	}
			});
		};
	});
	
	console.log ("termina carrega ligacoes");
};

function actionMove (cy, id, x,y){
	
	objJson = JSON.parse(localStorage.getItem("elements"));
	$.each( objJson, function( i, element ) {
		if (element.documento.type == "nodes"){
			var selector = '#' + compoeId (element.documento.idHabilidade);
			var x1 = cy.$(selector).position('x');
			var y1 = cy.$(selector).position('y');
			if (x1 != element.documento.positionX){
				console.log ("mudou " + element.documento.name)
			};
			if (x1){
				element.documento.positionX = x1; 
				element.documento.positionY = y1;
			};
		};
	});
	localStorage.setItem("elements", JSON.stringify(objJson));
};

function compoeId (nome){

	var id = 0;
	for( var i=0; i < nome.length; i++ ){
		var letter = nome.charAt(i); 
		if (letter != " "){
			var n = letter.charCodeAt(0);
			id = parseInt(id)  + parseInt(n);	
		};
	};
	
	return id;
	
};