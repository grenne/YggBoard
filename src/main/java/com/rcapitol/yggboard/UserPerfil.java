package com.rcapitol.yggboard;

import org.codehaus.jackson.annotate.JsonCreator;

public class UserPerfil {

	public Documento documento;

	public UserPerfil() {

	}

	public UserPerfil(Documento documento) {
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

		public String usuario;
		public String habilidadesInteresse[];
		public String habilidades[];
		public String carreirasInteresse[];
		public String carreiras[];
		public String tags[];


		public Documento() {

		}

		@JsonCreator
		public Documento(
						String usuario,
						String [] habilidadesInteresse,
						String [] habilidades,
						String [] carreirasInteresse,
						String [] carreiras,
						String [] tags
						) {
						this.usuario = usuario;  
						this.habilidadesInteresse = habilidadesInteresse; 
						this.habilidades = habilidades; 
						this.carreirasInteresse = carreirasInteresse; 
						this.carreiras = carreiras; 
						this.tags = tags; 
								}
		@Override
		public String toString() {
			return new StringBuffer(" usuario : ").append(this.usuario).append("  nome : ").toString();
		}
	}
} 