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
    	})
    	.fail(function(data) {
    	})
    	.always(function(data) {
        	if (data.status = 200) {
        		action_ok(data);
        	}else{
        		actio_not_ok()
        	};
    	});
    };

    function rest_obterCarreiras(action_ok, cy) {
    	$.ajax({
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/carreiras/lista",
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
    	})
    	.done(function( data ) {
    	})
    	.fail(function(data) {
    	})
    	.always(function(data) {
        	if (data.status = 200) {
        		action_ok(data, cy);
        	}else{
        		actio_not_ok()
        	};
    	});
    };
    
    function rest_incluiHabilidades(objJson, action_ok, action_not_ok) {
		$.ajax({
			type: "POST",
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/habilidade/incluir",
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
    
    function rest_atualizaHabilidade(objJson, action_ok, action_not_ok, afterUpdate) {
		$.ajax({
			type: "POST",
            url: "http://" + localStorage.urlServidor + ":8080/yggboard/rest/habilidade/atualizar",
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
