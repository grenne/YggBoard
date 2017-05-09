package com.yggboard;

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
		public String elementos[];
		public String habilidadesInteresse[];
		public String habilidades[];
		public String carreirasInteresse[];
		public String carreiras[];
		public String carreirasSugeridas[];
		public String cursosInteresse[];
		public CursosInscritos cursosInscrito[];
		public String cursosAndamento[];
		public String cursos[];
		public String badges[];
		public String badgesInteresse[];
		public String tags[];


		public Documento() {

		}

		@JsonCreator
		public Documento(
						String usuario,
						String [] elementos,
						String [] habilidadesInteresse,
						String [] habilidades,
						String [] carreirasSugeridas,
						String [] carreirasInteresse,
						CursosInscritos [] cursosInscrito,
						String [] carreiras,
						String [] cursosInteresse,
						String [] cursosAndamento,
						String [] cursos,
						String [] badges,
						String [] badgesInteresse,
						String [] tags
						) {
						this.usuario = usuario;
						this.elementos = elementos;
						this.habilidadesInteresse = habilidadesInteresse; 
						this.habilidades = habilidades; 
						this.carreirasSugeridas = carreirasSugeridas; 
						this.carreirasInteresse = carreirasInteresse; 
						this.carreiras = carreiras; 
						this.cursosInteresse = cursosInteresse;
						this.cursosAndamento = cursosAndamento;
						this.cursosInscrito = cursosInscrito;
						this.cursos = cursos;
						this.badges = badges; 
						this.badgesInteresse = badgesInteresse;
						this.tags = tags; 
								}
		@Override
		public String toString() {
			return new StringBuffer(" usuario : ").append(this.usuario).append("  nome : ").toString();
		}

		public static final class CursosInscritos {
    		public String id;
    		public String inscricao;

    		public CursosInscritos() {

			}
   
            @JsonCreator
            public CursosInscritos(
            			String id,
            			String inscricao
            			)
            {
	    		this.id = id;
	    		this.inscricao = inscricao;
            };
		};
	}
} 