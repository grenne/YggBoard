package com.yggboard;

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
		public String industria;
		public String descricao;
		public String tarefas;
		public String salarioMinimo;
		public String salarioMedio;
		public String salarioMaximo;
		public String funcao;
		public String necessarios[];
		public String recomendados[];
		public String tags[];

		public Documento() {

		}

		@JsonCreator
		public Documento(
						String nome,
						String industria,
						String descricao,
						String tarefas,
						String salarioMinimo,
						String salarioMedio,
						String salarioMaximo,
						String funcao,
						String [] necessarios,
						String [] recomendados,
						String [] tags
						) {
						this.nome = nome;  
						this.industria = industria;  
						this.descricao = descricao; 
						this.tarefas = tarefas; 
						this.salarioMinimo = salarioMinimo; 
						this.salarioMedio = salarioMedio;
						this.salarioMaximo = salarioMaximo;
						this.funcao = funcao; 
						this.necessarios = necessarios; 
						this.recomendados = recomendados; 
						this.tags = tags; 
		}

		@Override
		public String toString() {
			return new StringBuffer(" Nome : ").append(this.nome).append(" Descrição : ").append(this.descricao).toString();
		}
	}
} 