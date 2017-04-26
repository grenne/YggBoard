package com.yggboard;

import org.codehaus.jackson.annotate.JsonCreator;

public class AreaConhecimento {

	public Documento documento;

	public AreaConhecimento() {

	}

	public AreaConhecimento(Documento documento) {
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
		public String id;
		public String descricao;
		public String tags[];

		public Documento() {

		}

		@JsonCreator
		public Documento(
						String nome,
						String id,
						String descricao,
						String [] tags
						) {
						this.nome = nome;  
						this.id = id;  
						this.descricao = descricao;
						this.tags = tags; 
		}

		@Override
		public String toString() {
			return new StringBuffer(" Nome : ").append(this.nome).append(" Descrição : ").append(this.descricao).toString();
		}
	}
} 