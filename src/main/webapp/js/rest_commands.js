/**
 * 
 */
    
    function rest_obterHabilidades(action_ok) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/habilidades/lista",
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
    	})
    	.done(function( data ) {
    		action_ok(data);
    	})
    	.fail(function(data) {
    		actio_not_ok()
    	})
    	.always(function(data) {
    	});
    };

    function rest_obterHabilidadesName(name, action_ok, actio_not_ok, var1, var2) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/habilidades/obter?name=" + name,
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
    	})
    	.done(function( data ) {
    		action_ok(data, var1, var2);
    	})
    	.fail(function(data) {
    		actio_not_ok(null, var1, var2);
    	})
    	.always(function(data) {
    	});
    };


    function rest_obterHabilidadesIdHabilidade(name, action_ok, actio_not_ok, var1, var2) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/habilidades/obter?idHabilidade=" + idHabilidade,
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
    	})
    	.done(function( data ) {
    		action_ok(data, var1, var2);
    	})
    	.fail(function(data) {
    		actio_not_ok(null, var1, var2)
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
    		actio_not_ok(null, cy);
    	})
    	.always(function(data) {
    	});
    };

    function rest_obterCursosName(nome, action_ok, actio_not_ok, var1, var2) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/cursos/obter?nome=" + nome,
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
    	})
    	.done(function( data ) {
       		action_ok(data, var1, var2);
    	})
    	.fail(function(data) {
    		actio_not_ok(null, var1, var2)
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
        	if (data.status = 200) {
        		action_ok ();
        	}else{
        		actio_not_ok()
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
        	if (data.status = 200) {
        		action_ok ();
        	}else{
        		actio_not_ok()
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
        	if (data.status = 200) {
        		action_ok ();
        	}else{
        		actio_not_ok()
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
        	if (data.status = 200) {
        		action_ok ("Student updated", afterUpdate);
        	}else{
        		actio_not_ok()
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
        	if (data.status = 200) {
        		action_ok ("Student updated", afterUpdate);
        	}else{
        		actio_not_ok()
        	};
    	});

    };
