package com.yggboard;

import org.codehaus.jackson.annotate.JsonCreator;

public class Index {

	public Documento documento;

	public Index() {

	}

	public Index(Documento documento) {
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

		public String texto [];
		public String assunto;
		public String entidade;
		public String id;
		public String descricao;

		public Documento() {

		}

		@JsonCreator
		public Documento(
						String [] texto,
						String assunto,
						String entidade,
						String id,
						String descricao
						) {
						this.texto = texto;  
						this.assunto = assunto;  
						this.entidade = entidade;  
						this.id = id;  
						this.descricao = descricao;  
		}

		@Override
		public String toString() {
			return new StringBuffer(" Assunto : ").append(this.assunto).append(" Assunto : ").append(this.assunto).toString();
		}
	}
} 