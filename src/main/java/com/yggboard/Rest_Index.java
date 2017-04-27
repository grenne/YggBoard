package com.yggboard;

import java.awt.print.Book;
import java.io.IOException;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.inject.Singleton;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.bson.BasicBSONObject;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.google.gson.Gson;
import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.Mongo;
import com.mongodb.MongoException;

	
@Singleton
// @Lock(LockType.READ)
@Path("/index")

public class Rest_Index {

	@SuppressWarnings({ "unchecked", "rawtypes", "unused" })
	@Path("/obter/itens")	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public BasicDBObject ObterItens(@QueryParam("assunto") String assunto, @QueryParam("entidade") String entidade ) throws UnknownHostException, MongoException {
		
		JSONArray objetivos = new JSONArray();
		JSONArray habilidades = new JSONArray();
		JSONArray cursos = new JSONArray();
		JSONArray areaAtuacao = new JSONArray();
		JSONArray areaConhecimento = new JSONArray();

		switch (assunto) {
		case "objetivo":
			carregaObjetivos(entidade, objetivos, habilidades, cursos, areaAtuacao, areaConhecimento);
			break;
		case "habilidade":
			carregaHabilidades(entidade, objetivos, habilidades, cursos, areaAtuacao, areaConhecimento);
			break;
		case "curso":
			carregaCursos(entidade, objetivos, habilidades, cursos, areaAtuacao, areaConhecimento);
			break;
		case "areaAtuacao":
			carregaAreaAtuacao(entidade, objetivos, habilidades, cursos, areaAtuacao, areaConhecimento);
			break;
		case "areaConhecimento":
			carregaAreaConhecimento(entidade, objetivos, habilidades, cursos, areaAtuacao, areaConhecimento);
			break;
		default:
			break;
		};
		
		BasicDBObject listas = new BasicDBObject();
		
		listas.put("objetivos", objetivos);
		listas.put("habilidades", habilidades);
		listas.put("cursos", cursos);
		listas.put("areaAtuacao", areaAtuacao);
		listas.put("areaConhecimento", areaConhecimento);
		
		return listas;
			
			// qdo escolhida uma habilidade trazer todos os pré-requisitos, objetivos, cursos, area de atuação da habiidade e área e conhecimento dos objetivos
			//
			// qdo escolhida uma objetivo trazer todas habilidades e seus pré-requisitos, objetivos da mesma aréa de atuação , cursos das habilidades, area de atuação das habilidades e área e conhecimento das habilidades
			//
			// qdo escolhida uma curso trazer todas habilidades, objetivos das habilidades , cursos só ele, area de atuação dos objetivos e área e conhecimento das habilidades
			//
			// qdo escolhida uma area de atuação trazer todos objetivos, as habilidades, cursos das habilidades, area de atuação só a selecionada e área e conhecimento das habilidades
			//
			// qdo escolhida uma area de conhecimento trazer todas habilidades, objetivos das habilidades, cursos das habilidades, area de conhecimento só a selecionada e área de atuação de todos os objetivos
	};
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	private void carregaAreaConhecimento(String entidade, JSONArray objetivos, JSONArray habilidades, JSONArray cursos2, JSONArray areaAtuacao, JSONArray areaConhecimento) {

		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("carreiras");
			BasicDBObject searchQuery = new BasicDBObject("documento.nome", entidade);
			DBObject cursor = collection.findOne(searchQuery);
			BasicDBObject objetivo = (BasicDBObject) cursor.get("documento");
			objetivos.add(objetivo);
			
			ArrayList arrayListNecessarios = new ArrayList(); 
	    	arrayListNecessarios = (ArrayList) objetivo.get("necessarios");
	    	Object arrayNecessarios[] = arrayListNecessarios.toArray(); 
			int z = 0;
			while (z < arrayNecessarios.length) {
				Mongo mongoHabilidade;
				try {
					mongoHabilidade = new Mongo();
					DB dbHabilidade = (DB) mongoHabilidade.getDB("documento");
					DBCollection collectionHabilidade = dbHabilidade.getCollection("habilidades");
					BasicDBObject searchQueryHabilidade = new BasicDBObject("documento.idHabilidade", arrayNecessarios[z]);
					DBObject cursorHabilidade = collectionHabilidade.findOne(searchQueryHabilidade);
					if (cursorHabilidade != null){
						habilidades.add (cursorHabilidade.get("documento"));
					};
					mongoHabilidade.close();
				} catch (UnknownHostException | MongoException e) {
					e.printStackTrace();
				}
				++z;
			};
			mongo.close();
		} catch (UnknownHostException | MongoException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
	};
	private void carregaAreaAtuacao(String entidade, JSONArray objetivos, JSONArray habilidades, JSONArray cursos, JSONArray areaAtuacao, JSONArray areaConhecimento) {
		// TODO Auto-generated method stub
		
	};
	private void carregaCursos(String entidade, JSONArray objetivos, JSONArray habilidades, JSONArray cursos, JSONArray areaAtuacao, JSONArray areaConhecimento) {
		// TODO Auto-generated method stub
		
	};
	private void carregaHabilidades(String entidade, JSONArray objetivos, JSONArray habilidades, JSONArray cursos, JSONArray areaAtuacao, JSONArray areaConhecimento) {
		// TODO Auto-generated method stub
		
	};
	private void carregaObjetivos(String entidade, JSONArray objetivos, JSONArray habilidades, JSONArray cursos, JSONArray areaAtuacao, JSONArray areaConhecimento) {
		// TODO Auto-generated method stub
		
	};
	
	@Path("/lista")	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public JSONArray ObterCursos(@QueryParam("characters") String characters) {

		JSONArray documentos = new JSONArray();
		carregaIndex("Objetivo", documentos, characters);
		carregaIndex("Habilidade", documentos, characters);
		carregaIndex("Curso", documentos, characters);
		carregaIndex("Área Atuação", documentos, characters);
		carregaIndex("Área Conhecimento", documentos, characters);
		return documentos;
	};

	private void carregaIndex(String assunto, JSONArray documentos, String characters) {
		Mongo mongo;
			try {
				mongo = new Mongo();
				DB db = (DB) mongo.getDB("documento");
				BasicDBObject setQuery = new BasicDBObject();
				DBCollection collection = db.getCollection("index");
				setQuery.put("documento.assunto", assunto);			
				DBCursor cursor = collection.find(setQuery);
				int i = 0;
				while (((Iterator<DBObject>) cursor).hasNext()) {
					JSONParser parser = new JSONParser(); 
					BasicDBObject objUserPerfil = (BasicDBObject) ((Iterator<DBObject>) cursor).next();
					String documento = objUserPerfil.getString("documento");
					try {
						JSONObject jsonObject; 
						jsonObject = (JSONObject) parser.parse(documento);
						JSONObject jsonDocumento = new JSONObject();
						String [] wordsSource = limpaChar (characters).split(" ");
						List wordsCompare = (List) jsonObject.get("texto");
						if (wordsoK (wordsSource, wordsCompare)){
							jsonDocumento.put("assunto", jsonObject.get("assunto"));
							jsonDocumento.put("entidade", jsonObject.get("entidade"));
							documentos.add(jsonDocumento);
							++i;
							if (i > 3){
								mongo.close();
								return;
							};
						};
					} catch (ParseException e) {
						e.printStackTrace();
					}
				};		
			} catch (UnknownHostException | MongoException e1) {
				e1.printStackTrace();
			}
	};
	
	private boolean wordsoK(String[] wordsSource, @SuppressWarnings("rawtypes") List wordsCompare) {
		int i = 0;
		int palavraIgual = 0;
		System.out.println(wordsSource.length);
		System.out.println(i);
		while (i < wordsSource.length) {
			char[] letrasSource = wordsSource[i].toCharArray();
			if (letrasSource.length > 0){
				int w = 0;
				Boolean achouPalavra = false;
				while (w < wordsCompare.size()) {
					int charIgual = 0;
					char[] letrasCompare = limpaChar((String) wordsCompare.get(w)).toCharArray();
					if (letrasCompare.length > 0 && !achouPalavra){
						int z = 0;
						int jSalvo = 0;
						if (letrasSource[0] == letrasCompare[0]){
							while (z < letrasSource.length) {
								int j = jSalvo;
								Boolean letraIgual = false;
								int pulaLetra = 0;
								while (j < letrasCompare.length) {
									if (letrasSource[z] == letrasCompare[j]){
										if (!letraIgual && pulaLetra < 2){
											++charIgual;
											letraIgual = true;
											jSalvo = j;
										};
									}else{
										++pulaLetra;
									};
									++j;
								};
								++z;
							};
						};
						if (charIgual != 0 && !achouPalavra) {
							if (((charIgual / letrasSource.length) * 100) > 70){
								++palavraIgual;
								achouPalavra = true;
								if (palavraIgual >= wordsSource.length){
									return true;	
								};
							};
						};
					};
					++w;
				};	
			};
			++i;
		};
		if (palavraIgual >= wordsSource.length){
			return true;	
		};
		return false;
	}
	private String limpaChar(String characters) {
		characters = characters.toLowerCase();
		switch (characters) {
		case "ã":
			characters = "a";
	        break;
		case "à":
			characters = "a";
	        break;
		case "á":
	        characters = "a";
	        break;
		case "â":
	        characters = "a";
	        break;
	    case "é":
	    	characters = "e";
	        break;
	    case "ê":
	    	characters = "e";
	        break;
	    case "í":
	    	characters = "i";
	        break;
	    case "ô":
	    	characters = "o";
	        break;
	    case "õ":
	    	characters = "o";
	        break;
	    case "ó":
	    	characters = "o";
	        break;
	    case "ú":
	    	characters = "u";
	        break;
	    case "ç":
	    	characters = "c";
	        break;
		default:
			break;
		};
		return characters;

	};
	
	@SuppressWarnings("unchecked")
	private ArrayList<String> obterHabilidadesCursosNecessarias(Object carreira, Object[] arrayElementos, JSONArray documentos, Boolean obterCursos) {
		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("carreiras");
			BasicDBObject searchQuery = new BasicDBObject("documento.nome", carreira);
			DBObject cursor = collection.findOne(searchQuery);
			BasicDBObject objCarreira = (BasicDBObject) cursor.get("documento");
			ArrayList<String> arrayListHabilidades = new ArrayList<String>(); 
			arrayListHabilidades = (ArrayList<String>) objCarreira.get("necessarios");
	    	Object arrayHabilidades[] = arrayListHabilidades.toArray(); 
			int w = 0;
			while (w < arrayHabilidades.length) {
				Boolean existeHabilidade = false;
				int z = 0;
				while (z < arrayElementos.length) {
					if (arrayHabilidades[w].equals(arrayElementos[z])){
						existeHabilidade = true;
					}
					++z;
				};
				if (!obterCursos){
					int i = 0;
					while (i < documentos.size()) {
						JSONObject jsonObject = (JSONObject) documentos.get(i);
						BasicDBObject objDocumento = (BasicDBObject) jsonObject.get("documento");
						if (arrayHabilidades[w].equals(objDocumento.getString("idHabilidade"))){
							existeHabilidade = true;
						}
						++i;
					};
				};
				if (!existeHabilidade){
					Mongo mongoHabilidades = new Mongo();
					DB dbHabilidade = (DB) mongoHabilidades.getDB("documento");
					DBCollection collectionHabilidades = dbHabilidade.getCollection("habilidades");
					BasicDBObject searchQueryHabilidades = new BasicDBObject("documento.idHabilidade", arrayHabilidades[w]);
					DBObject cursorHabilidades = collectionHabilidades.findOne(searchQueryHabilidades);
					BasicDBObject objHabilidades = (BasicDBObject) cursorHabilidades.get("documento");
					if (obterCursos){
						obterCursosNecessarios (arrayHabilidades[w], documentos);
					}else{
						JSONObject jsonDocumento = new JSONObject();
					    jsonDocumento.put("documento", objHabilidades);
						documentos.add(jsonDocumento);
					}
					mongoHabilidades.close();					
				};
				++w;
			};
		} catch (UnknownHostException e) {
			e.printStackTrace();
		} catch (MongoException e) {
			e.printStackTrace();
		}
		return null;
	}

	@SuppressWarnings("unchecked")
	private ArrayList<String> obterHabilidadesCursosNecessariasBadge(Object badge, Object[] arrayElementos, JSONArray documentos, Boolean obterCursos) {
		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("badges");
			BasicDBObject searchQuery = new BasicDBObject("documento.nome", badge);
			DBObject cursor = collection.findOne(searchQuery);
			BasicDBObject objBadge = (BasicDBObject) cursor.get("documento");
			ArrayList<String> arrayListHabilidades = new ArrayList<String>(); 
			arrayListHabilidades = (ArrayList<String>) objBadge.get("habilidades");
	    	Object arrayHabilidades[] = arrayListHabilidades.toArray(); 
			int w = 0;
			while (w < arrayHabilidades.length) {
				Boolean existeHabilidade = false;
				int z = 0;
				while (z < arrayElementos.length) {
					if (arrayHabilidades[w].equals(arrayElementos[z])){
						existeHabilidade = true;
					}
					++z;
				};
				if (!obterCursos){
					int i = 0;
					while (i < documentos.size()) {
						JSONObject jsonObject = (JSONObject) documentos.get(i);
						BasicDBObject objDocumento = (BasicDBObject) jsonObject.get("documento");
						if (arrayHabilidades[w].equals(objDocumento.getString("idHabilidade"))){
							existeHabilidade = true;
						}
						++i;
					};
				};
				if (!existeHabilidade){
					Mongo mongoHabilidades = new Mongo();
					DB dbHabilidade = (DB) mongoHabilidades.getDB("documento");
					DBCollection collectionHabilidades = dbHabilidade.getCollection("habilidades");
					BasicDBObject searchQueryHabilidades = new BasicDBObject("documento.idHabilidade", arrayHabilidades[w]);
					DBObject cursorHabilidades = collectionHabilidades.findOne(searchQueryHabilidades);
					BasicDBObject objHabilidades = (BasicDBObject) cursorHabilidades.get("documento");
					if (obterCursos){
						obterCursosNecessarios (arrayHabilidades[w], documentos);
					}else{
						JSONObject jsonDocumento = new JSONObject();
					    jsonDocumento.put("documento", objHabilidades);
						documentos.add(jsonDocumento);
					}
					mongoHabilidades.close();					
				};
				++w;
			};
		} catch (UnknownHostException e) {
			e.printStackTrace();
		} catch (MongoException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	@SuppressWarnings("unchecked")
	private JSONObject obterTotalHabilidades (Object carreira, Object[] arrayElementos, ArrayList<String> arrayListElementosFaltantes) {
		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("carreiras");
			BasicDBObject searchQuery = new BasicDBObject("documento.nome", carreira);
			DBObject cursor = collection.findOne(searchQuery);
			if (cursor != null){
				BasicDBObject objCarreira = (BasicDBObject) cursor.get("documento");
				ArrayList<String> arrayListHabilidades = new ArrayList<String>(); 
				arrayListHabilidades = (ArrayList<String>) objCarreira.get("necessarios");
		    	Object arrayHabilidades[] = arrayListHabilidades.toArray();
		    	int totalHabilidades = 0;
		    	int totalPossuiHabilidades = 0;
				int w = 0;
				while (w < arrayHabilidades.length) {
					Boolean temHabilidade = false;
					int z = 0;
					while (z < arrayElementos.length) {
						if (arrayHabilidades[w].equals(arrayElementos[z])){
							++totalPossuiHabilidades;
							temHabilidade = true;
						}
						++z;
					};
					if (!temHabilidade){
						arrayListElementosFaltantes.add((String) arrayHabilidades[w]); 
					}
					++w;
					++totalHabilidades;
				};
				JSONObject jsonQtdeHabilidades = new JSONObject();
				jsonQtdeHabilidades.put("totalHabilidades", totalHabilidades);
				jsonQtdeHabilidades.put("totalPossuiHabilidades", totalPossuiHabilidades);
				mongo.close();
				return jsonQtdeHabilidades;
			}else{
				JSONObject jsonQtdeHabilidades = new JSONObject();
				jsonQtdeHabilidades.put("totalHabilidades", 0);
				jsonQtdeHabilidades.put("totalPossuiHabilidades", 0);
				mongo.close();
				return jsonQtdeHabilidades;
			}
		} catch (UnknownHostException e) {
			e.printStackTrace();
		} catch (MongoException e) {
			e.printStackTrace();
		}
		return null;
	};
	
	@SuppressWarnings("unchecked")
	private JSONObject obterTotalHabilidadesBadges (Object badge, Object[] arrayElementos, ArrayList<String> arrayListElementosFaltantes) {
		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("badges");
			BasicDBObject searchQuery = new BasicDBObject("documento.nome", badge);
			DBObject cursor = collection.findOne(searchQuery);
			if (cursor != null){
				BasicDBObject objBadge = (BasicDBObject) cursor.get("documento");
				ArrayList<String> arrayListHabilidades = new ArrayList<String>(); 
				arrayListHabilidades = (ArrayList<String>) objBadge.get("habilidades");
		    	Object arrayHabilidades[] = arrayListHabilidades.toArray();
		    	int totalHabilidades = 0;
		    	int totalPossuiHabilidades = 0;
				int w = 0;
				while (w < arrayHabilidades.length) {
					Boolean temHabilidade = false;
					int z = 0;
					while (z < arrayElementos.length) {
						if (arrayHabilidades[w].equals(arrayElementos[z])){
							++totalPossuiHabilidades;
							temHabilidade = true;
						}
						++z;
					};
					if (!temHabilidade){
						arrayListElementosFaltantes.add((String) arrayHabilidades[w]); 
					}
					++w;
					++totalHabilidades;
				};
				JSONObject jsonQtdeHabilidades = new JSONObject();
				jsonQtdeHabilidades.put("totalHabilidades", totalHabilidades);
				jsonQtdeHabilidades.put("totalPossuiHabilidades", totalPossuiHabilidades);
				mongo.close();
				return jsonQtdeHabilidades;
			}else{
				JSONObject jsonQtdeHabilidades = new JSONObject();
				jsonQtdeHabilidades.put("totalHabilidades", 0);
				jsonQtdeHabilidades.put("totalPossuiHabilidades", 0);
				mongo.close();
				return jsonQtdeHabilidades;
			}
		} catch (UnknownHostException e) {
			e.printStackTrace();
		} catch (MongoException e) {
			e.printStackTrace();
		}
		return null;
	};

	@SuppressWarnings("unchecked")
	private ArrayList<String> obterCursosNecessarios (Object habilidade, JSONArray documentos) {

		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");

			BasicDBObject setQuery = new BasicDBObject();
		    if (habilidade != null){
		    	setQuery.put("documento.habilidades.habilidade", habilidade);
		    };
			DBCollection collection = db.getCollection("cursos");
			
			DBCursor cursor = collection.find(setQuery);
			while (((Iterator<DBObject>) cursor).hasNext()) {
				JSONParser parser = new JSONParser(); 
				BasicDBObject objCurso = (BasicDBObject) ((Iterator<DBObject>) cursor).next();
				String documento = objCurso.getString("documento");
				try {
					JSONObject jsonCurso = new JSONObject();
					jsonCurso.put("documento", (JSONObject) parser.parse(documento));
					Boolean existeCurso = false;
					int i = 0;
					while (i < documentos.size()) {
						JSONObject jsonElementoArray = (JSONObject) documentos.get(i);
						if (jsonCurso.get("documento").equals(jsonElementoArray.get("documento"))){
							existeCurso = true;
						}
						++i;
					};
					if (!existeCurso){
						documentos.add(jsonCurso);
					};
				} catch (ParseException e) {
					e.printStackTrace();
				}
			};
			mongo.close();
			return documentos;
		} catch (UnknownHostException e) {
			e.printStackTrace();
		} catch (MongoException e) {
			e.printStackTrace();
		}
		return null;
	};

};
