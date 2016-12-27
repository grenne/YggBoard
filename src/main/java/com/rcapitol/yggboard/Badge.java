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
						String [] habilidades,
						String [] tags
						) {
						this.nome = nome;  
						this.badge = badge;  
						this.entidadeCertificadora = entidadeCertificadora;  
						this.descricao = descricao; 
						this.habilidades = habilidades; 
						this.tags = tags; 
		}

		@Override
		public String toString() {
			return new StringBuffer(" Nome : ").append(this.nome).append(" Descrição : ").append(this.descricao).toString();
		}
	}
} 