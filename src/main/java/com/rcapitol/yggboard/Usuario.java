package com.rcapitol.yggboard;

import org.codehaus.jackson.annotate.JsonCreator;

public class Usuario {

	public Documento documento;

	public Usuario() {

	}

	public Usuario(Documento documento) {
		this.documento = documento;
	}

	public void setDocumento( Documento documento) {
		this.documento = documento;
	}

	public Documento getDocumento() {
		return this.documento;
	}

	@Override
	public String toString() {
		return new StringBuffer(" Documento : ").append(this.documento).toString();
	}

	public static final class Documento {

		public String email;
		public String firstName;
		public String lastName;
		public String perfil;
		public String city;
		public String password;
		public String birthDate;
        public String institution;
        public String celPhone;
        public String photo;
		public String gender;
		public String acceptTerms;
		public String status;
		public String dateTimeAcceptTerms;

		public Documento() {

		}

		@JsonCreator
		public Documento(
				String email,
				String firstName,
				String lastName,
				String perfil,
				String city,
				String password,
				String birthDate,
		        String institution,
		        String celPhone,
		        String photo,
				String gender,
				String acceptTerms,
				String dateTimeAcceptTerms,
				String status
						) {
						this.email = email; 
						this.firstName = firstName;  
						this.lastName = lastName; 
						this.perfil = perfil; 
						this.city = city; 
						this.password = password; 
						this.birthDate = birthDate;
						this.institution = institution;
						this.celPhone = celPhone;
						this.photo = photo;
						this.gender = gender; 
						this.acceptTerms = acceptTerms;
						this.status = status;
						this.dateTimeAcceptTerms = dateTimeAcceptTerms;
						
		}

		@Override
		public String toString() {
			return new StringBuffer(" Email : ").append(this.email).append(" Name : ").append(this.firstName).toString();
		}
	}
} 