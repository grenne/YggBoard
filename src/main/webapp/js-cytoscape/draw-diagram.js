/**
 * **   criar diagrama a partir de um arquivo json
 */
$(function() {
	if (JSON.parse(localStorage.getItem("elements"))){
		objJson = JSON.parse(localStorage.getItem("elements"));
	}else{
		var objJson  = JSON.parse(
			'{' +
				    '"name" : "",' +
					    '"elements" : ' +
				    	'[' +
				                '{' +
				    				'"type" : "nodes",' +
				    				'"id" : "g1",' +
				    				'"name" : "grupo",' +
				    				'"descricao" : "xxxxxxxxxxxxxxxxxx",' +
				    				'"parent" : "",' +
				    				'"classes" : "agrupamento",' +
				    				'"weight" : "70",' +
				    				'"positionX" : "311",' +
				    				'"positionY" : "201",' +
				        			'"opacity" : "0.2",' +
				        			'"color" : "blue",' +
				        			'"shape" : "ellipse",' +
				    		    	'"width" : "",' +
				    		    	'"lineColor" : "blue",' +
				        			'"targetArrowColor" : "",' +
				        			'"targetArrowShape" : ""' +
				        		'},' +
				                '{' +
			    				'"type" : "nodes",' +
			    				'"id" : "g2",' +
			    				'"name" : "grupo",' +
			    				'"descricao" : "xxxxxxxxxxxxxxxxxx",' +
			    				'"parent" : "g1",' +
			    				'"classes" : "agrupamento",' +
			    				'"weight" : "70",' +
			    				'"positionX" : "400",' +
			    				'"positionY" : "180",' +
			        			'"opacity" : "0.2",' +
			        			'"color" : "blue",' +
			        			'"shape" : "ellipse",' +
			    		    	'"width" : "",' +
			    		    	'"lineColor" : "red",' +
			        			'"targetArrowColor" : "",' +
			        			'"targetArrowShape" : ""' +
				        		'},' +
				                '{' +
			    				'"type" : "nodes",' +
			    				'"id" : "j2",' +
			    				'"name" : "j2",' +
			    				'"descricao" : "xxxxxxxxxxxxxxxxxx",' +
			    				'"parent" : "g1",' +
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
			    				'"parent" : "g2",' +
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
			    				'"parent" : "g1",' +
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
			        			'"target" : "g2"' +
				        		'},' +
				                '{' +
			    				'"type" : "edges",' +
			    				'"id" : "a7",' +
			    				'"name" : "a7",' +
			    				'"descricao" : "xxxxxxxxxxxxxxxxxx",' +
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
			        			'"source" : "g1",' +
			        			'"target" : "j4"' +
				        		'},' +
				                '{' +
			    				'"type" : "edges",' +
			    				'"id" : "a8",' +
			    				'"name" : "a8",' +
			    				'"descricao" : "xxxxxxxxxxxxxxxxxx",' +
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
			'}');
		localStorage.setItem("elements", JSON.stringify(objJson));
	};

		var cy = createDiagram ("cy");	
		drawElements (cy, objJson, actionMove, '');
		cy.on('tap', function(evt){
			if (evt.cyTarget.id) {
			};
		});
		$( "#comparaMeuPerfil" ).bind( "click", function() {
			carregaMeuPerfil (cy, objJson)
		});
		$( "#comparaCarreira" ).bind( "click", function() {
			comparaCarreira (cy, objJson)
		});
		$( "#carregaHabilidades" ).bind( "click", function() {
			cy.destroy();
			cy = createDiagram ("cy");
			if (JSON.parse(localStorage.getItem("elements"))){
				objJson = JSON.parse(localStorage.getItem("elements"));
			};			
			drawElements (cy, objJson, actionMove, '');
		});

});

function actionMove (id, x,y){
	objJson = JSON.parse(localStorage.getItem("elements"));
	$.each( objJson.elements, function( i, element ) {
		if (id == element.id){
	    	element.positionX = x; 
	    	element.positionY =	y;		
		};
	});
	localStorage.setItem("elements", JSON.stringify(objJson));
};

function createDiagram (name, readyFunction, par1, par2){

	var cy = window.cy = cytoscape({
		container: document.getElementById('cy'),

		ready: function(){
		},
		style: [
				{
					selector: 'node',
					style: {
						'background-opacity' : 0.3,
						'background-color' : 'blue',
						'content': 'data(name)',
						'shape':'ellipse'
					}
				},
				{
					selector : ':parent',
					style : {
						'background-opacity' : 0.05,
						'background-color' : 'blue'
					}
				},
				{
				     selector: 'edge',
				      style: {
				        'width': 3,
				        'line-color': '#ccc',
				        'target-arrow-color': '#ccc',
				        'target-arrow-shape': 'triangle'					}
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
		    				'"id" : "g2",' +
		        			'"color" : "blue"' +
		        		'},' +
		                '{' +
		    				'"type" : "nodes",' +
		    				'"id" : "j4",' +
		        			'"color" : "blue"' +
		        		'},' +
		                '{' +
		    				'"type" : "nodes",' +
		    				'"id" : "j5",' +
		        			'"color" : "blue"' +
	        		'}' +
		        ']' +
	'}');
	$.each( objJson.elements, function( i, element ) {
		var selector = '#' + element.id;
		var node = cy.$(selector);
		if (node.isParent(selector)){
			console.log ("node:" + element.id + " is parent")
			var nodes = node.parent();
			var descendants = node.descendants();
			$.each( descendants, function( i, descendant ) {
				montaComparacao(cy, descendant.id(), 'perfilCarreira', 'perfilUsuario', 'green', 'green');				
			});
		}else{
			montaComparacao(cy, element.id, 'perfilCarreira', 'perfilUsuario', 'green', 'green');				
		}
	});
};

function comparaCarreira (cy, objJson){
	objJson  = JSON.parse(
			'{' +
		    '"name" : "",' +
			    '"elements" : ' +
		    	'[' +
		                '{' +
		    				'"type" : "nodes",' +
		    				'"id" : "g2",' +
		        			'"color" : "blue"' +
		        		'},' +
		                '{' +
		    				'"type" : "nodes",' +
		    				'"id" : "j4",' +
		        			'"color" : "blue"' +
		        		'},' +
		                '{' +
		    				'"type" : "nodes",' +
		    				'"id" : "j6",' +
		        			'"color" : "blue"' +
	        		'}' +
		        ']' +
	'}');
	$.each( objJson.elements, function( i, element ) {
		var selector = '#' + element.id;
		var node = cy.$(selector);
		if (node.isParent(selector)){
			console.log ("node:" + element.id + " is parent")
			var nodes = node.parent();
			var descendants = node.descendants();
			$.each( descendants, function( i, descendant ) {
				montaComparacao(cy, descendant.id(), 'perfilUsuario', 'perfilCarreira', 'green', 'orange');				
			});
		}else{
			montaComparacao(cy, element.id, 'perfilUsuario', 'perfilCarreira', 'green', 'orange');				
		}
	});
};

function montaComparacao(cy, element, perfil_01, perfil_02, cor_01, cor_02){
	var selector = '#' + element;
	var node = cy.$(selector);
	if (!node.isParent(selector)){
		cy.$(selector).addClass(perfil_01);
		if (cy.$(selector).hasClass(perfil_02)){
			cy.style()
			  .selector(selector)
			    .style({
			      'background-color': cor_01,
			      'background-opacity': 0.8
			    })
			  .update()				
		}else{
			cy.style()
			  .selector(selector)
			    .style({
			      'background-color': cor_02
			    })
			  .update()										
		};
	};
};

function drawElements (cy, objJson, actionMove, typeLayout){
	
	$.each( objJson.elements, function( i, element ) {
		cy.add({
		    group: element.type,
		    data: { 
		    	id : element.id,
		    	name : element.name,  
		    	descricao : element.descricao,
		    	parent : element.parent,
		    	weight: element.weight,
		    	source : element.source,
		    	target : element.target
		    	},
		    position: {
		    	x: parseInt(element.positionX), 
		    	y: parseInt(element.positionY) 
		    	},
		    width : parseInt(element.width),
			style : {
//		    	'background-opacity' : parseFloat(element.opacity),
//		    	'background-color' : element.color,
		    	'shape' : element.shape,
		    	'width' : parseInt(element.width),
//		    	'line-color' : element.lineColor
		    	'target-arrow-color': 'blue',
		    	'target-arrow-shape': 'triangle'
			}
		});
		var selector = '#' + element.id;
		cy.$(selector).addClass(element.classes);
		var node = cy.$(selector);
		if (!node.isChild() && !cy.$(selector).hasClass("agrupamento")){
			cy.style()
			  .selector(selector)
			    .style({
			      'background-opacity': 0.4
			    })
			  .update()						  
		};
	});
	// just use the regular qtip api but on cy elements
	cy.elements().qtip({
		content: function(){
			return this.data ('name')  
					+ '<br><br>'
					+ this.data('descricao') 
			},
		position: {
			my: 'top center',
			at: 'bottom center'
		},
		style: {
			classes: 'qtip-bootstrap ',
			tip: {
				width: 20,
				height: 10
			}
		}
	});

	// call on core
	cy.qtip({
		content: 'Click no item para obter informações',
		position: {
			my: 'top center',
			at: 'bottom center'
		},
		show: {
			cyBgOnly: true
		},
		style: {
			classes: 'qtip-bootstrap',
			tip: {
				width: 16,
				height: 8
			}
		}
	});
	cy.bind('tapend', function(evt){
		if (evt.cyTarget.id) {
			actionMove(evt.cyTarget.id(), evt.cyPosition.x, evt.cyPosition.y);
		};
	});
	if (typeLayout){
		var layout = cy.makeLayout({
			  name: typeLayout
		});
		layout.run();
	};

};

