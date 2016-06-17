package com.rcapitol.yggboard;

import org.codehaus.jackson.annotate.JsonCreator;

public class Curso {

	public Documento documento;

	public Curso() {

	}

	public Curso(Documento documento) {
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

		public String idCurso;
		public String nome;
		public String descricao;
		public String tempo;
		public String custo;
		public String escola;
		public String eletiva;
		public String preRequisito;
		public String materias[];
		public Habilidades habilidades[];


		public Documento() {

		}

		@JsonCreator
		public Documento(
						String idCurso,
						String nome,
						String descricao,
						String tempo,
						String custo,
						String escola,
						String eletiva,
						String preRequisito,
						String [] materias,
						Habilidades [] habilidades
						) {
						this.idCurso = idCurso;  
						this.nome = nome; 
						this.descricao = descricao; 
						this.tempo = tempo; 
						this.custo = custo; 
						this.escola = escola; 
						this.eletiva = eletiva; 
						this.preRequisito = preRequisito; 
						this.materias = materias; 
						this.habilidades = habilidades;
								}
		@Override
		public String toString() {
			return new StringBuffer(" id : ").append(this.idCurso).append("  nome : ").append(this.nome).toString();
		}
		public static final class Habilidades {
			public String habilidade;

			public Habilidades() {

			}

			@JsonCreator
			public Habilidades(String habilidade) {
				this.habilidade = habilidade;
			}
		}

	}
} 