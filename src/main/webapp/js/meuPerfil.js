/**
 * 
 */

function carregaMeuPerfil (cy, objJson){
	
	if (JSON.parse(localStorage.getItem("meuPerfil"))){
//		var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
//	}else{
		var objJson  = JSON.parse(
				'{' +
				'"documento": {' +
					'"usuario" : "",' +
					'"elements" : ' +
				    	'[' +
				        ']' +
		'}}');
	};
	$.each( objJson.documento.elements, function( i, element ) {
		var id = compoeId (element);
		var selector = '#' + id
		var node = cy.$(selector);
		if (node.isParent()){
			var descendants = node.descendants();
			$.each( descendants, function( i, descendant ) {
				montaComparacao(cy, descendant.id(), 'perfilUsuario', 'perfilCarreira', 'green', 'green', 1);				
			});
		}else{
			montaComparacao(cy, id, 'perfilUsuario', 'perfilCarreira', 'green', 'green', 1);				
		}
	});
	
	localStorage.setItem("meuPerfil", JSON.stringify(objJson));
};


function montaPerfil (cy, element, idOriginal){
	
	var selector = '#' + element;
	var node = cy.$(selector);
	if (!node.isParent()){
		if (cy.$(selector).hasClass('perfilUsuario')){
			cy.style()
			  .selector(selector)
			    .style({
			      'background-color': "blue",
			      'background-opacity': 0.2
			    })
			  .update()
			  cy.$(selector).removeClass('perfilUsuario');
			removerItemMeuPerfil (idOriginal)
		}else{
			cy.style()
			  .selector(selector)
			    .style({
			      'background-color': "green",
			      'background-opacity': 0.5
			    })
			  .update()
			  cy.$(selector).addClass('perfilUsuario');		
			incluirItemMeuPerfil (idOriginal)
		};
	};
};

function incluirItemMeuPerfil (idOriginal){
	
	var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
	
	objJson.documento.elements.push(idOriginal);
	
	localStorage.setItem("meuPerfil", JSON.stringify(objJson));
};
function removerItemMeuPerfil (idOriginal){
	
	var objJson = JSON.parse(localStorage.getItem("meuPerfil"));
	
	$.each( objJson.documento.elements, function( i, element ) {
		if (idOriginal == element){
			objJson.documento.elements.slice (i);
			return;
		};
	});
	
	
	localStorage.setItem("meuPerfil", JSON.stringify(objJson));
};
