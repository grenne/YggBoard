package com.rcapitol.yggboard;

import org.codehaus.jackson.annotate.JsonCreator;

public class Badge {

	public Documento documento;

	public Badge() {

	}

	public Badge(Documento documento) {
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

		public String nome;
		public String badge;
		public String entidadeCertificadora;
		public String descricao;
		public String textoCompartilhamento_1;
		public String textoCompartilhamento_2;
		public String habilidades[];
		public String tags[];

		public Documento() {

		}

		@JsonCreator
		public Documento(
						String nome,
						String badge,
						String entidadeCertificadora,
						String descricao,
						String textoCompartilhamento_1,
						String textoCompartilhamento_2,
						String [] habilidades,
						String [] tags
						) {
						this.nome = nome;  
						this.badge = badge;  
						this.entidadeCertificadora = entidadeCertificadora;  
						this.descricao = descricao;
						this.textoCompartilhamento_1 = textoCompartilhamento_1;
						this.textoCompartilhamento_2 = textoCompartilhamento_2;
						this.habilidades = habilidades; 
						this.tags = tags; 
		}

		@Override
		public String toString() {
			return new StringBuffer(" Nome : ").append(this.nome).append(" Descrição : ").append(this.descricao).toString();
		}
	}
} 