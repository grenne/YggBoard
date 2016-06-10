package com.rcapitol.yggboard;

import org.codehaus.jackson.annotate.JsonCreator;

public class Carreira {

	public Documento documento;

	public Carreira() {

	}

	public Carreira(Documento documento) {
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
		public String descricao;
		public String wiki;
		public String salario;
		public String salarioMedio;
		public String funcao;
		public String necessarios[];
		public String recomendados[];

		public Documento() {

		}

		@JsonCreator
		public Documento(
						String nome,
						String descricao,
						String wiki,
						String salario,
						String salarioMedio,
						String funcao,
						String [] necessarios,
						String [] recomendados
						) {
						this.nome = nome;  
						this.descricao = descricao; 
						this.wiki = wiki; 
						this.salario = salario; 
						this.salarioMedio = salarioMedio; 
						this.funcao = funcao; 
						this.necessarios = necessarios; 
						this.recomendados = recomendados; 
		}

		@Override
		public String toString() {
			return new StringBuffer(" Nome : ").append(this.nome).append(" Descrição : ").append(this.descricao).toString();
		}
	}
} 