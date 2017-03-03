/**
 * 
 */

function templateSenhaProvisoria (email, senha){

	
	var senhaProvisoria = 
'		<html>' +
'		<body>' +
'		    <table width="650px" cellspacing="0" cellpadding="0" border="0.2" color:"blue">' +
'		        <tr>' +
'		            <td class="navbar navbar-inverse" align="center">' +
'		                <!-- This setup makes the nav background stretch the whole width of the screen. -->' +
'		                <table width="650px" cellspacing="0" cellpadding="3" class="container">' +
'		                    <tr class="navbar navbar-inverse">' +
'		                        <td colspan="4">' +
'									<img src="http://' + localStorage.mainHost + ':8080/yggboard/img/logo/logo.png"></img>' + 
'								</td>' +
'		                        <td>' +
'									<ul>' +
'										<li>' +
'											<a href="www.yggboard.com">www.yggboard.com</a>' +
'										</li>' +
'									</ul>' +
'								</td>' +
'		                    </tr>' +
'		                </table>' +
'		            </td>' +
'		        </tr>' +
'		        <tr>' +
'		            <td bgcolor="white" align="left">' +
'	    	            <table width="900px" cellspacing="0" cellpadding="3" align="center">' +
'	                    <tr>' +
'	                        <td align="left">' +
'										<p>' +
'											<span style="font-style: italic;font-size: 20px;" >Caro Sr.(a) segue sua senha provisória para o email <small id="contato" style="font-style: italic;font-size: 20px;">' + email + '</small></span>' +
'										</p>' +
'										<p >' +
'											<span >Senha provisória: <small style="font-style: italic;font-size: 20px;">' + senha + '</small></span><br>' +
'										</p>' +
'										<p >' +
'											<span >Troque sua senha depois do primeiro acesso em "Meu perfil"<br>' +
'										</p>' +
'	                        </td>' +
'	                    </tr>' +
'		                </table>' +
'		            </td>' +
'		        </tr>' +
'	    </table>' +
'	</body>' +
'	</html>';
	return senhaProvisoria;
}
