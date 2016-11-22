/**
 * 
 */
$(function() {
	
	
	
	localStorage.app = "yggboard";
	localStorage.urlServidor = window.location.hostname;
	if (localStorage.urlServidor == "localhost"){
		localStorage.mainHost = "52.41.8.255";
	}else{
		localStorage.mainHost = localStorage.urlServidor;
	};

	//
	// ** setup carga photo
	//
	montaPhoto (localStorage.app, "usuarios", "photosUsuarios", "usuario", localStorage.usuarioEmail, "photo");


	// obter dados
	rest_obterUsuario(localStorage.usuarioEmail, montaTela, semAcao);

	// FORM VALIDATION FEEDBACK ICONS
	// =================================================================
	var faIcon = {
		valid: 'fa fa-check-circle fa-lg text-success',
		invalid: 'fa fa-times-circle fa-lg',
		validating: 'fa fa-refresh'
	};
	
	var formValido = true;
	// FORM VALIDATION ON TABS
	// =================================================================
	$('#form-register').bootstrapValidator({
		excluded: [':disabled'],
		feedbackIcons: faIcon,
		fields: {
		firstName: {
			validators: {
				notEmpty: {
					message: 'Informe seu primeiro nome'
				},
				stringLength: {
					min: 4,
					max: 30,
					message: 'Nome tem que ser maior que 4 e menor que 30 caractreres'
				},
				regexp: {
					regexp: /^[a-zA-Z_\.]+$/,
					message: 'Nome tem que ter somente letras sem espaços'
				}
			}
		},
		lastName: {
			validators: {
				notEmpty: {
					message: 'Informe seu ultimo nome'
				}
			}
		},
        birthDate: {
            validators: {
                date: {
                    format: 'DD-MM-YYYY',
   					message: 'Data inválida'
                }
            }
        },
		email: {
			validators: {
				notEmpty: {
					message: 'Entre com email'
				},
				emailAddress: {
					message: 'Informe um email valido'
				}
			}
		},
        password: {
            validators: {
				stringLength: {
					min: 4,
					max: 30,
					message: 'Minimo e 4 caracteres'
                },
                identical: {
                    field: 'confirmPassword',
                    message: 'senha deve ser igual a senha confirmada'
                }
            }
        },
        confirmPassword: {
            validators: {
                identical: {
                    field: 'password',
                    message: 'confirmação deve ser igual a senha'
                }
            }
        }
		}
	}).on('status.field.bv', function(e, data) {
		$('#btn-submit-perfil').attr("disabled", false);
		formValido = true;
		$('.msgErro').addClass("hide");
		var $form     = $(e.target),
		validator = data.bv,
		$tabPane  = data.element.parents('.tab-pane'),
		tabId     = $tabPane.attr('id');

		if (tabId) {
			var $icon = $('a[href="#' + tabId + '"][data-toggle="tab"]').parent().find('i');

			// Add custom class to tab containing the field
			if (data.status == validator.STATUS_INVALID) {
				$icon.removeClass(faIcon.valid).addClass(faIcon.invalid);
			} else if (data.status == validator.STATUS_VALID) {
				var isValidTab = validator.isValidContainer($tabPane);
				$icon.removeClass(faIcon.valid).addClass(isValidTab ? faIcon.valid : faIcon.invalid);
			}
		};
		if (data.status == "INVALID"){
			$('#btn-submit-login').attr("disabled", true);
			formValido = false;
		};	
	});
	
	// *** seta plugins
	$('#birthDate').datepicker({
	    format : 'dd-mm-yyyy',
		language : 'pt-BR'
		});
	$("#birthDate").mask("99-99-9999",{placeholder:"dd-mm-yyyy"});
	$("#celPhone").mask("(99)99999.9999",{placeholder:"(99)99999.9999"});

	// *** limpa foto
	$("#removeImagem").off('click');
	$("#removeImagem").on('click', function () {
    	$('#img-photo').remove();
    	$('#photo').val("");
	});
	
	// *** submit
	$("#btn-submit-perfil").off('click');
	$("#btn-submit-perfil").on('click', function () {
		if (formValido){
			jsonPerfil = JSON.parse(localStorage.jsonPerfil);
			jsonPerfil.documento.email = $("#email").val();
			jsonPerfil.documento.firstName = $("#firstName").val();
			jsonPerfil.documento.lastName = $("#lastName").val();
			if ($("#password").val()){
				jsonPerfil.documento.password = $("#password").val();
			};
			jsonPerfil.documento.birthDate = $("#birthDate").val();
			jsonPerfil.documento.institution = $("#institution").val();
			jsonPerfil.documento.celPhone = $("#celPhone").val();
			jsonPerfil.documento.photo = $("#photo").val();
			rest_atualizaUsuario(jsonPerfil, usuarioAtualizado, usuarioErroAtualizacao);
		}else{
			console.log ("notok");
		}
	});
});
function montaTela (data){
	
	//  *** salva dados 
	// *** inicializa registro
	var jsonPerfil = 
		{
			documento: 
			{
		        email : data.documento.email,
		        firstName : data.documento.firstName,
		        lastName : data.documento.lastName,
		        perfil : data.documento.perfil,
		        city : data.documento.city,
		        password : data.documento.password,
		        birthDate : data.documento.birthDate,
		        institution : data.documento.institution,
		        celPhone : data.documento.celPhone,
		        photo : data.documento.photo,
		        gender : data.documento.gender				
			}
		};

	localStorage.jsonPerfil = JSON.stringify(jsonPerfil);
	
	//  *** monta tela
	$('#firstName').val(data.documento.firstName);
	$('#lastName').val(data.documento.lastName);
	$('#birthDate').val(data.documento.birthDate);
	$('#email').val(data.documento.email);
	$('#celPhone').val(data.documento.celPhone);
	$('#institution').val(data.documento.institution);
	$('#photo').val(data.documento.photo);
	if (data.documento.photo){
		carregaPhoto (localStorage.app, data.documento.photo, "photo");
		carregaPhoto (localStorage.app, data.documento.photo, "photoHeader");
	};

};
function usuarioAtualizado (data){
	$(window.document.location).attr('href','yggboard.html');
};
	
function usuarioErroAtualizacao (data){
	$('.msgErro').html("Erro na atualização, tente novamente");
	$('.msgErro').removeClass("hide");
};
