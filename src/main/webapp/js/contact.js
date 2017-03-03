/**
 * 
 */
$(function() {
	
	
	
	localStorage.app = "yggboard";
	localStorage.urlServidor = window.location.hostname;
	if (localStorage.urlServidor == "localhost"){
		localStorage.mainHost = "52.67.61.248";
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
		nome: {
			validators: {
				notEmpty: {
					message: 'Informe seu nome'
				},
				stringLength: {
					min: 4,
					max: 30,
					message: 'Nome tem que ser maior que 4 e menor que 30 caractreres'
				}
			}
        },
		categoria: {
			validators: {
				notEmpty: {
					message: 'Informe a categoria de sua dúvida'
				}
			}
        },
		mensagem: {
			validators: {
				notEmpty: {
					message: 'Informe a mensagem'
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
        }
		}
	}).on('status.field.bv', function(e, data) {
		$('#btn-submit-contato').attr("disabled", false);
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
			$('#btn-submit-contato').attr("disabled", true);
			formValido = false;
		};	
		$(document).keypress(function(e) {
		    if(e.which == 13) $("#btn-submit-contato").click();
		});
	});
		
	// *** submit
	$("#btn-submit-contato").off('click');
	$("#btn-submit-contato").on('click', function () {
		if (formValido){
			jsonContato = JSON.parse(localStorage.jsonContato);
			jsonContato.documento.email = $("#email").val();
			jsonContato.documento.nome = $("#nome").val();
			jsonContato.documento.instituicao = $("#intituicao").val();
			jsonContato.documento.categoria = $("#categoria").val();
			jsonContato.documento.institution = $("#mensagem").val();
			jsonContato.documento.celPhone = $("#celPhone").val();
			jsonContato.documento.assunto = $("#assunto").val();
			//
			//  ** send email to confirm
			//
			rest_sendEmailHtml(localStorage.hostNameEmail, localStorage.userNameEmail , localStorage.passwordEmail, "grenneglr@gmail.com", "eric@yggboard.com", $("#assunto").val(), templateContato(), emailEnviado, semAcao );
		}else{
			console.log ("notok");
		}
	});
});
function montaTela (data){
	
	//  *** salva dados 
	// *** inicializa registro
	var jsonContato = 
		{
			documento: 
			{
		        email : data.documento.email,
		        nome : data.documento.firstName + " " + data.documento.lastName,
		        lastName : data.documento.lastName,
		        institution : data.documento.institution,
		        celPhone : data.documento.celPhone,
			}
		};

	localStorage.jsonContato = JSON.stringify(jsonContato);
	
	//  *** monta tela
	$('#nome').val(data.documento.firstName + " " + data.documento.lastName);
	$('#email').val(data.documento.email);
	$('#celPhone').val(data.documento.celPhone);
	$('#instituicao').val(data.documento.institution);

};

function emailEnviado (){
	window.history.back();
};
