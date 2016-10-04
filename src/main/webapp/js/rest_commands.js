/**
 * 
 */
    
    function rest_obterHabilidades(action_ok, var1, var2) {
    	$.ajax({
	        url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/habilidades/lista?diagrama=habilidades",
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
    	})
    	.done(function( data ) {
    		action_ok(data, var1, var2);
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
    		action_ok(data, var1, var2);
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
    		action_ok(data, var1, var2);
    	})
    	.fail(function(data) {
    		action_not_ok(null, var1, var2)
    	})
    	.always(function(data) {
    	});
    };

    function rest_obterCarreiras(action_ok, cy) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/carreiras/lista",
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
    	})
    	.done(function( data ) {
    		action_ok(data, cy);
    	})
    	.fail(function(data) {
    		action_not_ok(null, cy);
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
       		action_ok(data, var1, var2);
    	})
    	.fail(function(data) {
    		action_not_ok(null, var1, var2)
    	})
    	.always(function(data) {
    	});
    };

    function rest_obterUserPerfilItens(item, action_ok, action_not_ok, var1, var2, var3) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/userPerfil/obter/itens?usuario=" + localStorage.usuarioEmail + "&item=" + item  + "&carreira=" + var2,
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
    	alert ("aqui");
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
        		action_ok ("Student updated", afterUpdate);
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
    
    function rest_obterUsuario(email, action_ok, action_not_ok, par1, par2) {
    	$.ajax({
			url : "http://" + localStorage.urlServidor + ":8080/yggboard/rest/usuario/obter?email=" + email,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async:false
    	})
    	.done(function( data ) {
    		action_ok (data, par1, par2);
    	})
    	.fail(function(data) {
    		action_not_ok (data, par1, par2);
    	})
    	.always(function(data) {
    	});
    };

    function rest_incluirUsuario(objJson, action_ok, action_not_ok) {
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
