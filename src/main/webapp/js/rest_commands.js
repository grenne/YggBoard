/**
 * 
 */
    
    function rest_obterHabilidades(action_ok, action_not_ok, var1, var2) {
    	$.ajax({
	        url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/habilidades/lista?diagrama=habilidades&semCursos=" + var1,
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
    	})
    	.done(function( data ) {
    		if (data){
    			action_ok (data, var1, var2);
    		}else{
    			action_not_ok (data, var1, var2);	
    		};
    	})
    	.fail(function(data) {
    		action_not_ok()
    	})
    	.always(function(data) {
    	});
    };

    function rest_obterHabilidadesName(name, action_ok, action_not_ok, var1, var2) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/habilidades/obter?name=" + name,
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
    	})
    	.done(function( data ) {
    		if (data){
    			action_ok (data, var1, var2);
    		}else{
    			action_not_ok (data, var1, var2);	
    		};
    	})
    	.fail(function(data) {
    		action_not_ok(null, var1, var2);
    	})
    	.always(function(data) {
    	});
    };

    function rest_obterHabilidadesIdHabilidade(name, action_ok, action_not_ok, var1, var2) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/habilidades/obter?idHabilidade=" + idHabilidade,
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
    	})
    	.done(function( data ) {
    		if (data){
    			action_ok (data, var1, var2);
    		}else{
    			action_not_ok (data, var1, var2);	
    		};
    	})
    	.fail(function(data) {
    		action_not_ok(null, var1, var2)
    	})
    	.always(function(data) {
    	});
    };

    function rest_obterCarreiras(action_ok, action_not_ok, var1, var2) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/carreiras/lista",
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
    	})
    	.done(function( data ) {
    		if (data){
    			action_ok (data, var1, var2);
    		}else{
    			action_not_ok (data, var1, var2);	
    		};
    	})
    	.fail(function(data) {
			action_not_ok (data, var1, var2);	
    	})
    	.always(function(data) {
    	});
    };

    function rest_obterCarreira(idCarreira, action_ok, action_not_ok, var1, var2) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/carreiras/obter?idCarreira=" + idCarreira,
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
    	})
    	.done(function( data ) {
    		action_ok(data, var1, var2);
    	})
    	.fail(function(data) {
    		action_not_ok(null, var1, var2);
    	})
    	.always(function(data) {
    	});
    };

    function rest_obterBadges(action_ok, action_not_ok, var1, var2) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/badges/lista",
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
    	})
    	.done(function( data ) {
    		if (data){
    			action_ok (data, var1, var2);
    		}else{
    			action_not_ok (data, var1, var2);	
    		};
    	})
    	.fail(function(data) {
			action_not_ok (data, var1, var2);	
    	})
    	.always(function(data) {
    	});
    };

    function rest_obterBadge(idBadge, action_ok, action_not_ok, var1, var2) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/carreiras/obter?idBadge=" + idBadge,
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
    	})
    	.done(function( data ) {
    		action_ok(data, var1, var2);
    	})
    	.fail(function(data) {
    		action_not_ok(null, var1, var2);
    	})
    	.always(function(data) {
    	});
    };

    function rest_obterCursos(action_ok, action_not_ok, var1, var2) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/cursos/lista",
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
    	})
    	.done(function( data ) {
    		if (data){
    			action_ok (data, var1, var2);
    		}else{
    			action_not_ok (data, var1, var2);	
    		};
    	})
    	.fail(function(data) {
			action_not_ok (data, var1, var2);	
    	})
    	.always(function(data) {
    	});
    };

    function rest_obterAreaAtuacao(action_ok, action_not_ok, var1, var2) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/areaatuacao/lista",
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
    	})
    	.done(function( data ) {
    		if (data){
    			action_ok (data, var1, var2);
    		}else{
    			action_not_ok (data, var1, var2);	
    		};
    	})
    	.fail(function(data) {
			action_not_ok (data, var1, var2);	
    	})
    	.always(function(data) {
    	});
    };

    function rest_obterAreaConhecimento(action_ok, action_not_ok, var1, var2) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/areaconhecimento/lista",
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
    	})
    	.done(function( data ) {
    		if (data){
    			action_ok (data, var1, var2);
    		}else{
    			action_not_ok (data, var1, var2);	
    		};
    	})
    	.fail(function(data) {
			action_not_ok (data, var1, var2);	
    	})
    	.always(function(data) {
    	});
    };

    function rest_obterCursosHabilidade(habilidade, action_ok, action_not_ok, var1, var2, var3) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/cursos/lista?habilidade=" + habilidade,
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
    	})
    	.done(function( data ) {
       		action_ok(data, var1, var2, var3);
    	})
    	.fail(function(data) {
    		action_not_ok(null, var1, var2, var3)
    	})
    	.always(function(data) {
    	});
    };

    function rest_obterUserPerfil(usuario, action_ok, action_not_ok, var1, var2) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/userPerfil/obter?usuario=" + usuario,
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
    	})
    	.done(function( data ) {
    		if (data){
    			action_ok (data, var1, var2);
    		}else{
    			action_not_ok (data, var1, var2);	
    		};
    	})
    	.fail(function(data) {
    		action_not_ok(null, var1, var2)
    	})
    	.always(function(data) {
    	});
    };

    function rest_obterUsersPerfil(action_ok, action_not_ok, var1, var2) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/userPerfil/lista",
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
    	})
    	.done(function( data ) {
    		if (data){
    			action_ok (data, var1, var2);
    		}else{
    			action_not_ok (data, var1, var2);	
    		};
    	})
    	.fail(function(data) {
			action_not_ok (data, var1, var2);	
    	})
    	.always(function(data) {
    	});
    };

    function rest_obterUserPerfilItens(item, action_ok, action_not_ok, var1, var2, var3) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/userPerfil/obter/itens?usuario=" + localStorage.usuarioEmail + "&item=" + item  + "&elemento=" + var2,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            
    	})
    	.done(function( data ) {
    		if (data){
    			action_ok (data, var1, var2, var3);
    		}else{
    			action_not_ok (data, var1, var2, var3);	
    		};
    	})
    	.fail(function(data) {
    		action_not_ok(null, var1, var2, var3)
    	})
    	.always(function(data) {
    	});
    };
    

    function rest_obterUsuario(email, action_ok, action_not_ok, var1, var2) {
    	$.ajax({
			url : "http://" + localStorage.urlServidor + ":8080/yggboard/rest/usuario/obter?email=" + email,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async:false
    	})
    	.done(function(data) {
    		if (data){
    			action_ok (data, var1, var2);
    		}else{
    			action_not_ok (data, var1, var2);	
    		};
    	})
    	.fail(function(data) {
    		action_not_ok (data, var1, var2);
    	})
    	.always(function(data) {
    	});
    };

    function rest_obterSetup(setupKey, action_ok, action_not_ok, var1, var2, var3) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/setup/obterSetup?setupKey=" + setupKey,
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
    	})
    	.done(function( data ) {
    		if (data){
    			action_ok (data, var1, var2, var3);
    		}else{
    			action_not_ok (data, var1, var2, var3);	
    		};
    	})
    	.fail(function(data) {
    		action_not_ok(null, var1, var2, var3)
    	})
    	.always(function(data) {
    	});
    };

    function rest_incluiHabilidades(objJson, action_ok, action_not_ok) {
		$.ajax({
			type: "POST",
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/habilidades/incluir",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data : JSON.stringify(objJson)
		})
	  	.done(function( data ) {
	  	})
        .fail(function(data) {
        })
       	.always(function(data) {
        	if (data.status == 200) {
        		action_ok ();
        	}else{
        		action_not_ok()
        	};
       	});
    };
    
    function rest_incluiCarreiras(objJson, action_ok, action_not_ok) {
		$.ajax({
			type: "POST",
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/carreiras/incluir",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data : JSON.stringify(objJson)
		})
	  	.done(function( data ) {
	  	})
        .fail(function(data) {
        })
       	.always(function(data) {
        	if (data.status == 200) {
        		action_ok ();
        	}else{
        		action_not_ok()
        	};
       	});
    };
        
    function rest_incluiBadges(objJson, action_ok, action_not_ok) {
		$.ajax({
			type: "POST",
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/badges/incluir",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data : JSON.stringify(objJson)
		})
	  	.done(function( data ) {
	  	})
        .fail(function(data) {
        })
       	.always(function(data) {
        	if (data.status == 200) {
        		action_ok ();
        	}else{
        		action_not_ok()
        	};
       	});
    };
    
    function rest_incluiCursos(objJson, action_ok, action_not_ok) {
		$.ajax({
			type: "POST",
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/cursos/incluir",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data : JSON.stringify(objJson)
		})
	  	.done(function( data ) {
	  	})
        .fail(function(data) {
        })
       	.always(function(data) {
        	if (data.status == 200) {
        		action_ok ();
        	}else{
        		action_not_ok()
        	};
       	});
    };

    function rest_incluiUserPerfil(objJson, action_ok, action_not_ok) {
		$.ajax({
			type: "POST",
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/userPerfil/incluir",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data : JSON.stringify(objJson)
		})
	  	.done(function( data ) {
	  	})
        .fail(function(data) {
        })
       	.always(function(data) {
        	if (data.status == 200) {
        		action_ok ();
        	}else{
        		action_not_ok()
        	};
       	});
    };

    function rest_incluirUsuario(objJson, action_ok, action_not_ok) {
    	objJson.documento.email = objJson.documento.email.toLowerCase(); 
		$.ajax({
			type: "POST",
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/usuario/incluir",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data : JSON.stringify(objJson)
		})
	  	.done(function( data ) {
    		action_ok (data);
	  	})
        .fail(function(data) {
    		action_not_ok(data)
        })
       	.always(function(data) {
       	});
    };

    function rest_incluiSetup(objJson, action_ok, action_not_ok) {
    	alert ("aqui");
		$.ajax({
			type: "POST",
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/setup/incluir",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data : JSON.stringify(objJson)
		})
	  	.done(function( data ) {
	  	})
        .fail(function(data) {
        })
       	.always(function(data) {
        	if (data.status == 200) {
        		action_ok ();
        	}else{
        		action_not_ok()
        	};
       	});
    };

    
    function rest_incluiIndex(objJson, action_ok, action_not_ok) {
		$.ajax({
			type: "POST",
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/index/incluir",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data : JSON.stringify(objJson)
		})
	  	.done(function( data ) {
	  	})
        .fail(function(data) {
        })
       	.always(function(data) {
        	if (data.status == 200) {
        		action_ok ();
        	}else{
        		action_not_ok()
        	};
       	});
    };

    function rest_atualizaHabilidade(objJson, action_ok, action_not_ok, afterUpdate) {
    	
		$.ajax({
			type: "POST",
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/habilidades/atualizar",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data : JSON.stringify(objJson),
            async:false
    	
		})        	
		.done(function( data ) {
    	})
    	.fail(function(data) {
    	})
    	.always(function(data) {
        	if (data.status == 200) {
        		action_ok ("", afterUpdate);
        	}else{
        		action_not_ok()
        	};
    	});

    };

    function rest_atualizaCurso(objJson, action_ok, action_not_ok, afterUpdate) {
		$.ajax({
			type: "POST",
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/cursos/atualizar",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data : JSON.stringify(objJson),
            async:false
    	
		})        	
		.done(function( data ) {
    	})
    	.fail(function(data) {
    	})
    	.always(function(data) {
        	if (data.status == 200) {
        		action_ok ("Student updated", afterUpdate);
        	}else{
        		action_not_ok()
        	};
    	});
    };

    function rest_atualizaUsuario(objJson, action_ok, action_not_ok, var1, var2) {
    	objJson.documento.email = objJson.documento.email.toLowerCase();
		$.ajax({
			type: "POST",
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/usuario/atualizar",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data : JSON.stringify(objJson),
            async:false
		})        	
		.done(function( data ) {
    	})
    	.fail(function(data) {
    	})
    	.always(function(data) {
        	if (data.status == 200) {
        		action_ok (data, var1, var2);
        	}else{
        		action_not_ok(data, var1, var2)
        	};
    	});

    };

    function rest_atualizaUserPerfil(objJson, action_ok, action_not_ok, var1, var2) {
		$.ajax({
			type: "POST",
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/userPerfil/atualizar",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data : JSON.stringify(objJson),
            async:false
    	
		})        	
		.done(function( data ) {
    	})
    	.fail(function(data) {
    	})
    	.always(function(data) {
        	if (data.status == 200) {
        		action_ok (data, var1, var2);
        	}else{
        		action_not_ok(data, var1, var2)
        	};
    	});

    };

    function rest_atualizaUserPerfilElementos(objJson, action_ok, action_not_ok, var1, var2) {
		$.ajax({
			type: "POST",
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/userPerfil/atualizar/perfil",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data : JSON.stringify(objJson),
            global: false,
            async:false
    	
		})        	
		.done(function( data ) {
    	})
    	.fail(function(data) {
    	})
    	.always(function(data) {
        	if (data.status == 200) {
        		action_ok (data, var1, var2);
        	}else{
        		action_not_ok(data, var1, var2)
        	};
    	});

    };

    function rest_atualizaSetup(objJson, action_ok, action_not_ok, var1, var2) {
		$.ajax({
			type: "POST",
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/setup/atualizar",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data : JSON.stringify(objJson),
            async:false
    	
		})        	
		.done(function( data ) {
    	})
    	.fail(function(data) {
    	})
    	.always(function(data) {
        	if (data.status == 200) {
        		action_ok (data, var1, var2);
        	}else{
        		action_not_ok(data, var1, var2)
        	};
    	});

    };

    function rest_obterItensFiltro(item, action_ok, action_not_ok, var1, var2, var3) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/index/obter/itens?characters=" + setupKey,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            
    	})
    	.done(function( data ) {
    		if (data){
    			action_ok (data, var1, var2, var3);
    		}else{
    			action_not_ok (data, var1, var2, var3);	
    		};
    	})
    	.fail(function(data) {
    		action_not_ok(null, var1, var2, var3)
    	})
    	.always(function(data) {
    	});
    };

    function rest_obterIndex(characters, action_ok, action_not_ok, var1, var2, var3) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/index/lista?characters=" + characters + "&planejamentoLista=true",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            global: false,
            
    	})
    	.done(function( data ) {
    		if (data){
    			action_ok (data, var1, var2, var3);
    		}else{
    			action_not_ok (data, var1, var2, var3);	
    		};
    	})
    	.fail(function(data) {
    		action_not_ok(null, var1, var2, var3)
    	})
    	.always(function(data) {
    	});
    };

    function rest_obterListasPlanejamento(assunto, entidade, action_ok, action_not_ok, var1, var2, var3) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/index/obter/itens?assunto=" + assunto + "&entidade=" + entidade ,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            global: false,
            
    	})
    	.done(function( data ) {
    		if (data){
    			action_ok (data, var1, var2, var3);
    		}else{
    			action_not_ok (data, var1, var2, var3);	
    		};
    	})
    	.fail(function(data) {
    		action_not_ok(null, var1, var2, var3)
    	})
    	.always(function(data) {
    	});
    };

    function rest_atualizaCursosSugeridos(objJson, action_ok, action_not_ok) {
		$.ajax({
			type: "POST",
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/userPerfil/cursosSugeridos",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            data : JSON.stringify(objJson)
		})
	  	.done(function( data ) {
	  	})
        .fail(function(data) {
        })
       	.always(function(data) {
        	if (data.status == 200) {
        		action_ok ();
        	}else{
        		action_not_ok()
        	};
       	});
    };
