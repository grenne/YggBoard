	/**
	 * 		setup dos input do form price table
	 */
	var $tablesFormHabilidade = $("#habilidadeModal-form").validate({
		// Rules for form validation
		rules : {
			name : {
				required : true,
			},
			descricao : {
				required : true,
			},
			positionX : {
				required : true,
			},
			positionY : {
				required : true,
			}
		},

		// Messages for form validation
		messages : {
			name : {
				required : 'Informe o nome',
			},
			descricao : {
				required : 'Informe a descrição',
			},
			positionX : {
				required : 'Informe a posição X',
			},
			positionY : {
				required : 'Informe a posição Y',
			}
		},
		// form submition
		submitHandler : function(form) {
			var objJson = limpaHierarquiaJson();
			$.each(form
			    , function (i, field) {
				var value = field.value;
				if (field.type == "radio" || field.type == "checkbox") {
					if (field.checked){
						value = "Yes"
					}else{
						value = "No"
					}
				}
				if (field.name == "tags"){
					montaArrayTags(objJson, field.value); 
					field.value = null;
				};
				if (field.value){
					objJson.documento[field.name] = value;
				};
			});
			if (localStorage.habilidadeExistente == "true"){
				rest_atualizaHabilidade(objJson, fechaModalHabilidade, semAcao, objJson);
			}else{
				rest_incluiHabilidades(objJson, fechaModalHabilidade, semAcao, ObjJson);
			};
		},	
		// Do not change code below
		errorPlacement : function(error, element) {
			error.insertAfter(element.parent());
			$.smallBox({
				title : "Error",
				content : "<i class='fa fa-clock-o'></i> <i>Existe um erro</i>",
				color : "#ff8080",
				iconSmall : "fa fa-check fa-2x fadeInRight animated",
				timeout : 4000
			});
		}
	});

	/**
	 * 
	 */

	$('#habilidadeInclusao').off('click');
	$('#habilidadeInclusao').on('click', function () {
		localStorage.habilidadeExistente = "false";
	});

	
 function fechaModalHabilidade (data, objJson) {
	
	$("#habilidadeModal").modal('hide');
	
	atualizaHabilidade(objJson);
};

function atualizaHabilidade (elementNew) {
	var objJson = JSON.parse(localStorage.getItem("jsonYggmap"));
	$.each( objJson.data, function( i, element) {
		if (element.id == elementNew.documento.idHabilidade){
			objJson.data[i].Label = elementNew.documento.name;
			objJson.data[i].description = elementNew.documento.descricao;
			objJson.data[i].positionX = elementNew.documento.positionX;
			objJson.data[i].positionY = elementNew.documento.positiony;
			objJson.data[i].width = elementNew.documento.width;
			objJson.data[i].height = elementNew.documento.weight;
		};
	});
	localStorage.setItem("jsonYggmap", JSON.stringify(objJson));
	SendMessage('Main','Load',localStorage.getItem("jsonYggmap"));
	var objJson = JSON.parse(localStorage.getItem("elements"));
	$.each( objJson, function( i, element) {
		if (element.documento.idHabilidade == elementNew.documento.idHabilidade){
			objJson[i].documento.name = elementNew.documento.name;
			objJson[i].documento.description = elementNew.documento.descricao;
			objJson[i].documento.positionX = elementNew.documento.positionX;
			objJson[i].documento.positionY = elementNew.documento.positionY;
			objJson[i].documento.width = elementNew.documento.width;
			objJson[i].documento.weight = elementNew.documento.weight;
		};
	});
	localStorage.setItem("elements", JSON.stringify(objJson));
	carregaHabilidadesLista (objJson);
};

function limpaHierarquiaJson () {
	
	var data  = 
			{
				documento :  
				  {
					diagrama : "",
				    type : "",
				    idHabilidade : "",
				    name : "",
				    descricao : "",
				    wiki : "",
				    area : "",
				    campo : "",
				    categoria : "",
				    parent : "",
				    classes : "",
				    weight : "",
				    positionX : "",
				    positionY : "",
				    opacity : "",
				    color : "",
				    shape : "",
				    width : "",
				    lineColor : "",
				    targetArrowColor : "",
				    targetArrowShape : "",
				    source : "",
				    target : "",
				    tags : []				  
				 }
			};
	return data;
};	

function montaArrayTags(objJson, tags){
	var splitTags = tags.split(",");
	var i = 0;
	while (i < splitTags.length) {
		objJson.documento.tags.push(splitTags[i]);
		++i;
	};
};

