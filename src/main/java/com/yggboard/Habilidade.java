package com.yggboard;

import org.codehaus.jackson.annotate.JsonCreator;

public class Habilidade {

	public Documento documento;

	public Habilidade() {

	}

	public Habilidade(Documento documento) {
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

		public String diagrama;
		public String type;
		public String idHabilidade;
		public String name;
		public String descricao;
		public String wiki;
		public String area;
		public String campo;
		public String categoria;
		public String parent;
		public String classes;
		public String weight;
		public String positionX;
		public String positionY;
		public String opacity;
		public String color;
		public String shape;
		public String width;
		public String lineColor;
		public String targetArrowColor;
		public String targetArrowShape;
		public String source;
		public String target;
		public String tags[];


		public Documento() {

		}

		@JsonCreator
		public Documento(
				String diagrama,
				String type,
				String idHabilidade,
				String name,
				String descricao,
				String wiki,
				String area,
				String campo,
				String categoria,
				String parent,
				String classes,
				String weight,
				String positionX,
				String positionY,
				String opacity,
				String color,
				String shape,
				String width,
				String lineColor,
				String targetArrowColor,
				String targetArrowShape,
				String source,
				String target,
				String [] tags
						) {
						this.diagrama = diagrama;
						this.type = type;
						this.idHabilidade = idHabilidade;
						this.name = name;
						this.descricao = descricao;
						this.wiki = wiki;
						this.area = area;
						this.campo = campo;
						this.categoria = categoria;
						this.parent = parent;
						this.classes = classes;
						this.weight = weight;
						this.positionX = positionX;
						this.positionY = positionY;
						this.opacity = opacity;
						this.color = color;
						this.shape = shape;
						this.width = width;
						this.lineColor = lineColor;
						this.targetArrowColor = targetArrowColor;
						this.targetArrowShape = targetArrowShape;
						this.source = source;
						this.target = target;
						this.tags = tags;
		}


		@Override
		public String toString() {
			return new StringBuffer(" Email : ").append(this.name).append(" Last name : ").append(this.descricao).toString();
		}
	}
} 