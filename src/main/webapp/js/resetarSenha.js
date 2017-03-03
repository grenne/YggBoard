/**
 * 
 */
	$(function() {
		localStorage.app = "yggboard";
		localStorage.loginOk = "false";
		localStorage.urlServidor = window.location.hostname;
		localStorage.hostNameEmail = "smtp.gmail.com";
		localStorage.userNameEmail = "grenneglr@gmail.com";
		localStorage.passwordEmail = "H2l2n1#0701";
		if (localStorage.urlServidor == "localhost"){
			localStorage.mainHost = "52.67.61.248";
		}else{
			localStorage.mainHost = localStorage.urlServidor;
		};

		// FORM VALIDATION FEEDBACK ICONS
		// =================================================================
		var faIcon = {
			valid: 'fa fa-check-circle fa-lg text-success',
			invalid: 'fa fa-times-circle fa-lg',
			validating: 'fa fa-refresh'
		}


		var formValido = true;
		// FORM VALIDATION ON TABS
		// =================================================================
		$('#form-login').bootstrapValidator({
			excluded: [':disabled'],
			feedbackIcons: faIcon,
			fields: {
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
		});
		$("#btn-submit-login").off('click');
		$("#btn-submit-login").on('click', function () {
			if (formValido){
				console.log ("ok");
				localStorage.loginOk = "true";
				rest_obterUsuario($("#email").val(), resetaSenha, usuarioFail, "") 
			}else{
				console.log ("notok");
			}
		});
		$(document).keypress(function(e) {
		    if(e.which == 13) $("#btn-submit-login").click();
		});
	});

	function resetaSenha (data){
		
		if (data){
			data.documento.password = criaSenha();
			rest_atualizaUsuario(data, usuarioAtualizado, semAcao);
			rest_sendEmailHtml(localStorage.hostNameEmail, localStorage.userNameEmail , localStorage.passwordEmail, "eric@yggboard.com", data.documento.email, "Yggboard - senha provisória", templateSenhaProvisoria(data.documento.email, data.documento.password), semAcao, semAcao );
		};
		
	};

	function usuarioAtualizado (data){
		$(window.document.location).attr('href','index.html');
	};

	function criaSenha (){

		var data = new Date();
		var min     = data.getMinutes();        // 0-59
		var seg     = data.getSeconds();        // 0-59
		var mseg    = data.getMilliseconds();   // 0-999

		var senha = "ygg" + mseg + min + seg;
		
		return senha;
	};
