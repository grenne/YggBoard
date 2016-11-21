/**
 * 
 */
$(function() {
	
	localStorage.app = "yggboard";
	localStorage.loginOk = "false";
	localStorage.urlServidor = window.location.hostname;
	if (localStorage.urlServidor == "localhost"){
		localStorage.mainHost = "52.41.8.255";
	}else{
		localStorage.mainHost = localStorage.urlServidor;
	};

	// FORM VALIDATION FEEDBACK ICONS
	// =================================================================
	var faIcon = {
		valid: 'fa fa-check-circle fa-lg text-success',
		invalid: 'fa fa-times-circle fa-lg',
		validating: 'fa fa-refresh'
	};

	var loginRegister = 
		{
			documento: 
			{
		        email : "",
		        firstName : "",
		        lastName : "",
		        perfil : "user",
		        city : "",
		        password : "",
		        gender : ""				
			}
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
				notEmpty: {
					message: 'Informe a senha'
				},
				identical: {
					field: 'confirmPassword',
					message: 'Deve ser igual a senha confirmada'
				},
				stringLength: {
					min: 4,
					max: 30,
					message: 'Minimo e 4 caracteres'
				}
			}
		},
		confirmPassword: {
			validators: {
				notEmpty: {
					message: 'Confirme a senha'
				},
				identical: {
					field: 'password',
					message: 'Deve ser igual a senha informada'
				}
			}
		},
		acceptTerms: {
			validators: {
				notEmpty: {
					message: 'You have to accept the terms and policies'
				}
			}
		
		}
		}
	}).on('status.field.bv', function(e, data) {
		$('#btn-submit-login').attr("disabled", false);
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
		if (data.status == "VALID" && data.field != "confirmPassword"){
			loginRegister.documento[data.field] = data.element[0].value;
		};	
	});
	$("#btn-submit-login").bind('click', function () {
		if (formValido){
			rest_obterUsuario(loginRegister.documento.email, usuarioExistente, incluirUsuario, loginRegister)
		}else{
			console.log ("notok");
		}
	});
});

function usuarioExistente (data){
	$('.msgErro').html("Usuário existente");
	$('.msgErro').removeClass("hide");
};
function incluirUsuario (dataSys, data){
	rest_incluirUsuario(data, usuarioIncluido, usuarioErroInclusao)
};
function usuarioIncluido (data){
	localStorage.usuarioEmail = data.documento.email;
	localStorage.usuarioFirstName = data.documento.firstName;
	localStorage.usuarioLastName = data.documento.lastName;
	localStorage.usuarioPerfil = data.documento.perfil;
	localStorage.usuarioGender = data.documento.gender;
	localStorage.loginOk = "true";
	$(window.document.location).attr('href','yggboard.html');
};
function usuarioErroInclusao (data){
	$('.msgErro').html("Erro na inclusão, tente novamente");
	$('.msgErro').removeClass("hide");
};
