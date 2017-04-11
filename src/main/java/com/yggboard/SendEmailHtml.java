package com.yggboard;

import org.apache.commons.mail.DefaultAuthenticator;
import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.HtmlEmail;

public class SendEmailHtml {
	
	public void sendEmailHtml(String hostName, String userName, String password, String from, String to, String subject, String html ){
	    
		HtmlEmail email = new HtmlEmail();
		
//		String newEmail = "<div><h3 style='color: #1c70db;'>NOW $159</h3></div>";

		try {
			email.setHostName("smtp.gmail.com");
			email.setSmtpPort(587);
			email.setAuthenticator(new DefaultAuthenticator("grenneglr@gmail.com", "H2l2n1#0701"));
			email.setStartTLSEnabled(true);
			email.setFrom("grenneglr@gmail.com");
			email.setSubject(subject);
			email.setHtmlMsg(html);
			email.setTextMsg("Your email client does not support HTML messages");

			email.addTo(to);
			email.send();
		} catch(EmailException ee) {
		    ee.printStackTrace();
		}

	};
};