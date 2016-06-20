/**
 * **   criar diagrama a partir de um arquivo json
 */
$(function () {
	
		$.ajax({
	        url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/habilidades/lista?diagrama=habilidades",
	        contentType: "application/json; charset=utf-8",
	        dataType: 'json'
		})
		.done(function( data ) {
		})
		.fail(function(data) {
		})
		.always(function(data) {
	    	if (data.status = 200) {
	    		var cy = createDiagram ("cy", data);	
	    		if (localStorage.usuario == "true"){
	    			cy.autolock( true );
	    		};
//	    		objJson = templateHabilidades ();
	    		objJson = data;
//	    		objJson = JSON.parse(localStorage.getItem("elements"));
	    		localStorage.setItem("elements", JSON.stringify(objJson));
//	    		drawElements (cy, objJson, actionMove, 'grid');
	    		$("#labelYggmap").html("");
	    		localStorage.criaPerfil = false;
	    		$( "#comparaMeuPerfil" ).bind( "click", function() {
		    		$("#labelYggmap").html("Montando seu perfil...");
		    		$("#labelYggmap").removeClass("text-warning");
		    		$("#labelYggmap").addClass("text-success");
		    		$("#labelYggmap").removeClass("text-primary");
	    			carregaMeuPerfil (cy, objJson);
	            	$('.habilidade').addClass('hide');
	            	$('.habilidades').addClass('hide');
	    			$('.cursos').addClass('hide');
		    		localStorage.criaPerfil = false;
		    		$("#labelYggmap").html("Seu perfil");
	    		});
	    		obterCarreiras (cy);
	    		$( "#criarMeuPerfil" ).bind( "click", function() {
		    		$("#labelYggmap").html("Criar seu perfil");
		    		$("#labelYggmap").removeClass("text-warning");
		    		$("#labelYggmap").addClass("text-success");
		    		$("#labelYggmap").removeClass("text-primary");
	    			carregaHabilidadesLista (cy, objJson);
	    			carregaMeuPerfil (cy, objJson);
	            	$('.habilidade').addClass('hide');
	    			$('.cursos').addClass('hide');
	    			$('.carreiras').addClass('hide');
	    			localStorage.criaPerfil = true;
	    		});
	    		$( "#carregaHabilidades" ).bind( "click", function() {
	            	$("#labelYggmap").html("");
	    			limpaDiagrama (cy, "blue", "blue", 0.2, "perfilCarreira");
	    			limpaDiagrama (cy, "blue", "blue", 0.2, "perfilUsuario");
	    			$('.cursos').addClass('hide');
	            	$('.habilidade').addClass('hide');
	            	$('.habilidades').addClass('hide');
	            	$('.carreiras').removeClass('hide');
	            	localStorage.criaPerfil = false;
	    		});
/*	    		$( "#carregaHabilidades" ).bind( "click", function() {
	    			cy.destroy();
	    			cy = createDiagram ("cy");
    				objJson = JSON.parse(localStorage.getItem("elements"));
	    			drawElementsTotal (cy, objJson, actionMove, 'grid');
	    			$('.cursos').addClass('hide');
	            	$('.habilidade').addClass('hide');
	            	$('.habilidades').addClass('hide');
	            	$('.carreiras').removeClass('hide');
	            	localStorage.criaPerfil = false;
	            	localStorage.layoutPerfil = "false";
	    		});
*/	    		$( "#fechaCursos" ).bind( "click", function() {
/*	    			cy.destroy();
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
	            	localStorage.criaPerfil = false;
*/	    		});
	    	}else{
	    		actio_not_ok()
	    	};
		});
	
});

function createDiagram (name, objJson, readyFunction, par1, par2){
	var diagramaCy = montaCy (objJson);

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
						'background-opacity' : 0.1,
						'background-color' : 'orange'
					}
				},
				{
				     selector: 'edge',
				      style: {
				        'width': 1,
				        'line-color': 'gray',
				        'target-arrow-shape': 'triangle',
				        'background-opacity' : 0.1,
				        	}
				}
			],
			elements: diagramaCy,
			layout: {
			    name: 'preset'
			  }

	});
	
	cy.panzoom({
	});

	cy.on('tap', function(evt){
		if (evt.cyTarget.id){
			var selector = '#' + evt.cyTarget.id();
			var node = cy.$(selector);
			var opacity = 0.1;
			if (evt.cyTarget.id) {
				$('#habilidadeName').html(evt.cyTarget.data('name'));  
				$('#habilidadeDescricao').html(evt.cyTarget.data('descricao'));
				$('#habilidadeWiki').html(evt.cyTarget.data('wiki'));
				$("#habilidadeWiki").attr("href", evt.cyTarget.data('wiki'));
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
				var parent = cy.$(selector).parent(node);
				var selectorParent = '#' + parent.id();
				var nodeZoom = cy.$(selectorParent);
				if (cy.$(selector).isParent()){
					nodeZoom = node;
				};
				if (localStorage.criaPerfil == "true"){
					incluiHabilidadePerfil (cy, evt.cyTarget.data('idOriginal'));
				}else{
					if (nodeZoom){
						cy.animate(
								{
									fit: {
										eles: nodeZoom,
										padding: 20
									}
								}, 
								{
									duration: 1000
								});		
					};
				};
			};
			console.log ("tap element:" + node.id() + " x:" + x + " y:" + y);
		};
	});
	cy.bind('tapend', function(evt){
		if (evt.cyTarget.id) {
			actionMove(cy, evt.cyTarget.id(), evt.cyPosition.x, evt.cyPosition.y);
		};
	});
	
	return cy;
};

function montaCy (objJson){

	var diagramaCy = [];

	montaTipo (objJson, diagramaCy, "area");
	montaTipo (objJson, diagramaCy, "campo");
	montaTipo (objJson, diagramaCy, "categoria");
	montaTipo (objJson, diagramaCy, "habilidade");
	montaSeta (objJson, diagramaCy);

	return diagramaCy;
};
function montaTipo (objJson, diagramaCy, tipo){
	
	var xvar = 0;
	var yvar = 0;
	$.each( objJson, function( i, element ) {
		if (element.documento.classes == tipo){
			if (element.documento.positionX == "") {
				if (element.documento.parent == ""){
					objJson = JSON.parse(localStorage.getItem("elements"));
					element.documento.positionX = xvar;
					element.documento.positionY = yvar;
					objJson[i].documento.positionX = xvar;
					objJson[i].documento.positionY = yvar;
					localStorage.setItem("elements", JSON.stringify(objJson));
				}else{
					var x1 = 0;
					var y1 = 0;
					id = compoeId (element.documento.parent);
					$.each( diagramaCy, function( i, parent ) {
						if (id == parent.data.id){
							x1 = parent.data.parentAddX + 30;
							y1 = parent.data.parentAddY + 30;
							parent.data.parentAddX = x1;
							parent.data.parentAddY = y1;
							return
						};
					});
					element.documento.positionX = x1;
					element.documento.positionY = y1;
					objJson[i].documento.positionX = x1;
					objJson[i].documento.positionY = y1;
					};
			};
			id = compoeId (element.documento.idHabilidade);
			var elementcy = {
			      group: 'nodes', // 'nodes' for a node, 'edges' for an edge
			      data: { // element data (put dev data here)
			        id: id, // mandatory for each element, assigned automatically on undefined
			    	idOriginal : id,  
			        parent: compoeId (element.documento.parent), // indicates the compound node parent id; not defined => no parent
				    name : element.documento.name,
				    descricao : element.documento.descricao,
				    wiki : element.documento.wiki,
				    area : element.documento.area,
				    campo : element.documento.campo,
				    categoria : element.documento.categoria,
				    parentAddX : parseInt(element.documento.positionX),
				    parentAddY : parseInt(element.documento.positionY),
			      },
			      scratch: {
			        foo: 'bar'
			      },
			      position: { // the model position of the node (optional on init, mandatory after)
			        x: parseInt(element.documento.positionX),
			        y: parseInt(element.documento.positionY)
			      },
			      selected: false, // whether the element is selected (default false)
			      selectable: true, // whether the selection state is mutable (default true)
			      locked: false, // when locked a node's position is immutable (default false)
			      grabbable: true, // whether the node can be grabbed and moved by the user
			};
			diagramaCy.push(elementcy);
		};
	});
	return diagramaCy;
}
function montaSeta (objJson, diagramaCy){
	
	$.each( objJson, function( i, element ) {
		if (element.documento.type == "edges"){
			var temSource = false;
			var temTarget = false;
			$.each( diagramaCy, function( i, objElement ) {
				if (compoeId (element.documento.source) == objElement.data.id){
					temSource = true;
				};
				if (compoeId (element.documento.target) == objElement.data.id){
					temTarget = true;
				};
				if (temSource && temTarget){
					return
				};
			});
			if (temSource && temTarget){			
				id = compoeId (element.documento.idHabilidade);
				var elementcy = {
				      data: {
				          id: id,
				          source : compoeId (element.documento.source),
						  target : compoeId (element.documento.target)
				      }
				};
				diagramaCy.push(elementcy);
			};
		};
	});
	return diagramaCy;
}
function limpaDiagrama (cy, cor1, cor2, opacity, perfil){

	var elementsCarreira = cy.nodes('.' + perfil);

	$.each( elementsCarreira, function( i, element ) {
		var selector = '#' + element.id();
		var node = cy.$(selector);
		if (cy.$(selector).hasClass('perfilUsuario')){
			cy.style()
			  .selector(selector)
			    .style({
			      'background-color': cor1,
			      'background-opacity': opacity
			    })
			  .update()				
		}else{
			cy.style()
			  .selector(selector)
			    .style({
			      'background-color': cor2,
			      'background-opacity': opacity
			    })
			  .update()							
		};
		cy.$(selector).removeClass(perfil);
	});
};

function removeCarreira (cy){
	
	var elementsCarreira = cy.nodes('.perfilCarreira');

	$.each( elementsCarreira, function( i, element ) {
		var selector = '#' + element.id();
		var node = cy.$(selector);
		if (cy.$(selector).hasClass('perfilUsuario')){
			cy.style()
			  .selector(selector)
			    .style({
			      'background-color': "green",
			      'background-opacity': 0.3
			    })
			  .update()				
		};
		if (!cy.$(selector).hasClass('perfilUsuario')){
			cy.remove(node);
		};
	});
};

function comparaCarreira (cy, objJson){
	
	if (localStorage.layoutPerfil == "true"){
		removeCarreira (cy);
	}else{
		limpaDiagrama (cy, "green", "blue", 0.2, "perfilCarreira");
	};

	objJsonElements = JSON.parse(localStorage.getItem("elements"));

	$.each( objJson.necessarios, function( i, element ) {
		console.log ("carrega necessarios:" + element);
		var selector = '#' + compoeId (element);
		var node = cy.$(selector);
		addElementsGeral (cy, element, node.data('classes'));
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
		console.log ("carrega recomendados:" + element);
		var selector = '#' + compoeId (element);
		var node = cy.$(selector);
		addElementsGeral (cy, element, node.data('classes'));
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
	if (localStorage.layoutPerfil == "true"){
		addEdges (cy, objJsonElements);	
	};
	
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
	
//	addMeuPerfil (cy);
		
	addEdges (cy, objJson);

	if (JSON.parse(localStorage.getItem("meuPerfil"))){
		var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
	}else{
		var objJson  = JSON.parse(
				'{' +
				'"documento": {' +
					'"usuario" : "",' +
					'"elements" : ' +
				    	'[' +
				        ']' +
		'}}');
	};

	if (objJson.documento.elements.length == 0){
    	$('.habilidades').removeClass('hide');		
	};

	/*
	var selectorZoom = '#2';
	var nodeZoom = cy.$(selectorZoom);
	cy.animate(
			{
				fit: {
					eles: nodeZoom,
					padding: 20
				}
			}, 
			{
				duration: 1000
			});		
	*/
	cy.on('tap', function(evt){
		if (evt.cyTarget.id){
			var selector = '#' + evt.cyTarget.id();
			var node = cy.$(selector);
			var opacity = 0.1;
			if (evt.cyTarget.id) {
				$('#habilidadeName').html(evt.cyTarget.data('name'));  
				$('#habilidadeDescricao').html(evt.cyTarget.data('descricao'));
				$("#habilidadeWiki").prop("href", evt.cyTarget.data('wiki'));
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
				var parent = cy.$(selector).parent(node);
				var selectorParent = '#' + parent.id();
				var nodeZoom = cy.$(selectorParent);
				if (cy.$(selector).isParent()){
					nodeZoom = node;
				};
				if (localStorage.criaPerfil == "true"){
					incluiHabilidadePerfil (cy, evt.cyTarget.data('idOriginal'));
				}else{
					if (nodeZoom){
						cy.animate(
								{
									fit: {
										eles: nodeZoom,
										padding: 20
									}
								}, 
								{
									duration: 1000
								});		
					};
				};
			};
			console.log ("tap element:" + node.id() + " x:" + x + " y:" + y);
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

function drawElementsTotal (cy, objJson, actionMove, typeLayout){
	
	addElements (cy, objJson,"area", 30);
	
	addElements (cy, objJson,"campo", 30);

	addElements (cy, objJson,"categoria");

	addElements (cy, objJson,"habilidade");
	
	addEdges (cy, objJson);

	var selectorZoom = '#2670';
	var nodeZoom = cy.$(selectorZoom);
	cy.animate(
			{
				fit: {
					eles: nodeZoom,
					padding: 20
				}
			}, 
			{
				duration: 1000
			});		

	cy.on('tap', function(evt){
		if (evt.cyTarget.id){
			var selector = '#' + evt.cyTarget.id();
			var node = cy.$(selector);
			var opacity = 0.1;
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
				var parent = cy.$(selector).parent(node);
				var selectorParent = '#' + parent.id();
				var nodeZoom = cy.$(selectorParent);
				if (cy.$(selector).isParent()){
					nodeZoom = node;
				};
				if (localStorage.criaPerfil == "true"){
					incluiHabilidadePerfil (cy, evt.cyTarget.data('idOriginal'));
				}else{
					if (nodeZoom){
						cy.animate(
								{
									fit: {
										eles: nodeZoom,
										padding: 20
									}
								}, 
								{
									duration: 1000
								});		
					};
				};
			};
			console.log ("tap element:" + node.id() + " x:" + x + " y:" + y);
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
					element.documento.positionX = 100 + xvar;
					element.documento.positionY = 100 - 200;
					objJson[i].documento.positionX = 100 + 200;
					objJson[i].documento.positionY = 100 - 200;
					localStorage.setItem("elements", JSON.stringify(objJson));
				}else{
					var selector = '#' + compoeId (element.documento.parent);
					var x1 = cy.$(selector).position('x');
					var y1 = cy.$(selector).position('y');
					var xvar = cy.$(selector).data('parentAddX') + 30;
					var yvar = cy.$(selector).data('parentAddY') + 30;
					cy.$(selector).data('parentAddX', xvar);
					cy.$(selector).data('parentAddY', yvar);
					element.documento.positionX = x1 - xvar;
					element.documento.positionY = y1 - yvar;
					objJson[i].documento.positionX = x1 - xvar;
					objJson[i].documento.positionY = y1 - yvar;
				};
			};
			id = compoeId (element.documento.idHabilidade);
			cy.add({
			    group: element.documento.type,
			    data: { 
			    	id : id,
			    	idOriginal : element.documento.idHabilidade,  
			    	name : element.documento.name,
			    	descricao : element.documento.descricao,
			    	wiki : element.documento.wiki,
			    	area : element.documento.area,
			    	campo : element.documento.campo,
			    	categoria : element.documento.categoria,
			    	parent : compoeId (element.documento.parent),
			    	parentAddX : 0,
			    	parentAddY : 0,
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
				      'background-opacity': 0.06,
				      'background-color': "orange",
				       'width': 100,
				       'shape':'rectangle'
				    })
				  .update()						  
				cy.$(selector).addClass('agrupamento');
			}else{
				if (tipo == "campo" ){
					cy.style()
					  .selector(selector)
					    .style({
					      'background-opacity': 0.08,
					      'background-color': "orange",
					       'width': 100,
					       'shape':'rectangle'
					    })
					  .update()						  
					cy.$(selector).addClass('agrupamento');
				}else{
					if (tipo == "categoria"){
						cy.style()
						  .selector(selector)
						    .style({
						      'background-opacity': 0.1,
						      'background-color': "orange",
						       'width': 100,
						       'shape':'rectangle'
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

function addElementsGeral (cy, elementAdd, tipo, widthElement){
	
	objJson = JSON.parse(localStorage.getItem("elements"));
	
	$.each( objJson, function( i, element ) {	
		if (element.documento.idHabilidade == elementAdd){
			var tipo = element.documento.classes;
			if (element.documento.positionX == "") {
				if (element.documento.parent == ""){
					objJson = JSON.parse(localStorage.getItem("elements"));
					element.documento.positionX = 100 + xvar;
					element.documento.positionY = 100 - 200;
					objJson[i].documento.positionX = 100 + 200;
					objJson[i].documento.positionY = 100 - 200;
					localStorage.setItem("elements", JSON.stringify(objJson));
				}else{
					var selector = '#' + compoeId (element.documento.parent);
					var x1 = cy.$(selector).position('x');
					var y1 = cy.$(selector).position('y');
					var xvar = cy.$(selector).data('parentAddX') + 30;
					var yvar = cy.$(selector).data('parentAddY') + 30;
					cy.$(selector).data('parentAddX', xvar);
					cy.$(selector).data('parentAddY', yvar);
					element.documento.positionX = x1 - xvar;
					element.documento.positionY = y1 - yvar;
					objJson[i].documento.positionX = x1 - xvar;
					objJson[i].documento.positionY = y1 - yvar;
				};
			};
			id = compoeId (element.documento.idHabilidade);
			var selector = '#' + id;
			var node = cy.$(selector);
			if (!node.isNode()){
				cy.add({
				    group: element.documento.type,
				    data: { 
				    	id : id,
				    	idOriginal : element.documento.idHabilidade,  
				    	name : element.documento.name,
				    	descricao : element.documento.descricao,
				    	wiki : element.documento.wiki,
				    	area : element.documento.area,
				    	campo : element.documento.campo,
				    	categoria : element.documento.categoria,
				    	parent : compoeId (element.documento.parent),
				    	},
				    position: {
				    	x: parseInt(element.documento.positionX), 
				    	y: parseInt(element.documento.positionY) 
				    	},
					style : {
				    	'shape' : 'ellipse',
					}
				});
			}
			return;
		};
	});
};

function addEdges (cy, objJson) {
	
	console.log ("carrega ligacoes");

	$.each( objJson, function( i, element ) {
		if (element.documento.type == "edges" ){
			sou = compoeId (element.documento.source);
			tar = compoeId (element.documento.target);
			var selectorSource = '#' + sou;
			var nodeSource = cy.$(selectorSource);
			if (nodeSource.isNode()){
				var selectorTarget = '#' + tar;
				var nodeTarget = cy.$(selectorTarget);
				if (nodeTarget.isNode()){
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
			};
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
			if (x1){
				element.documento.positionX = x1; 
				element.documento.positionY = y1;
			};
		};
	});
	localStorage.setItem("elements", JSON.stringify(objJson));
};

function compoeId (nome){
/*
	var id = 0;
	for( var i=0; i < nome.length; i++ ){
		var letter = nome.charAt(i); 
		if (letter != " "){
			var n = letter.charCodeAt(0);
			id = parseInt(id)  + parseInt(n);	
		};
	};
	
	return id;
*/
	return nome;
};