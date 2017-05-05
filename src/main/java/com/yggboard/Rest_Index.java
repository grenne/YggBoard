package com.yggboard;

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

	@SuppressWarnings("unchecked")
	@Path("/incluir")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response IncluirCarreiras(Index index)  {
		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("index");
			Gson gson = new Gson();
			String jsonDocumento = gson.toJson(index);
			Map<String,String> mapJson = new HashMap<String,String>();
			ObjectMapper mapper = new ObjectMapper();
			mapJson = mapper.readValue(jsonDocumento, HashMap.class);
			JSONObject documento = new JSONObject();
			documento.putAll(mapJson);
			DBObject insert = new BasicDBObject(documento);
			collection.insert(insert);
			mongo.close();
			return Response.status(200).entity(documento).build();
		} catch (UnknownHostException e) {
			System.out.println("UnknownHostException");
			e.printStackTrace();
		} catch (MongoException e) {
			System.out.println("MongoException");
			e.printStackTrace();
		} catch (JsonMappingException e) {
			System.out.println("JsonMappingException");
			e.printStackTrace();
		} catch (IOException e) {
			System.out.println("IOException");
			e.printStackTrace();
		}
		return Response.status(500).build();
		
	};
	
	@Path("/obter/itens")	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public BasicDBObject ObterItens(@QueryParam("assunto") String assunto, @QueryParam("id") String id ) throws UnknownHostException, MongoException {
		
		JSONArray objetivos = new JSONArray();
		JSONArray habilidades = new JSONArray();
		JSONArray cursos = new JSONArray();
		JSONArray areaAtuacao = new JSONArray();
		JSONArray areaConhecimento = new JSONArray();

		switch (assunto) {
		case "objetivo":
			processaObjetivos(id, objetivos, habilidades, cursos, areaAtuacao, areaConhecimento);
			break;
		case "habilidade":
			processaHabilidades(id, objetivos, habilidades, cursos, areaAtuacao, areaConhecimento);
			break;
		case "curso":
			processaCursos(id, objetivos, habilidades, cursos, areaAtuacao, areaConhecimento);
			break;
		case "areaAtuacao":
			processaAreaAtuacao(id, objetivos, habilidades, cursos, areaAtuacao, areaConhecimento);
			break;
		case "areaConhecimento":
			processaAreaConhecimento(id, objetivos, habilidades, cursos, areaAtuacao, areaConhecimento);
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
	
	@SuppressWarnings({ "unchecked" })
	private void processaObjetivos(String id, JSONArray objetivos, JSONArray habilidades, JSONArray cursos, JSONArray areaAtuacao, JSONArray areaConhecimento) {

		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("carreiras");
			BasicDBObject searchQuery = new BasicDBObject("documento.id", id);
			DBObject cursor = collection.findOne(searchQuery);
			if (cursor != null){
				BasicDBObject objetivo = (BasicDBObject) cursor.get("documento");				
				//
				// ***		carrega habilidades
				//
				ArrayList<?> arrayListNecessarios = new ArrayList<Object>(); 
				JSONArray newNecessarios = new JSONArray(); 
		    	arrayListNecessarios = (ArrayList<?>) objetivo.get("necessarios");
		    	Object arrayNecessarios[] = arrayListNecessarios.toArray();
				int z = 0;
				while (z < arrayNecessarios.length) {
					String nomeHabilidade = "";
					carregaHabilidade(habilidades, cursos, objetivos, areaAtuacao, areaConhecimento, (String) arrayNecessarios[z], true, nomeHabilidade);
					newNecessarios.add(nomeHabilidade(arrayNecessarios[z].toString()));
					++z;
				};
				//
				// ***		carrega área de atuação
				//			
				processaAreaAtuacao(id, objetivos, habilidades, cursos, areaAtuacao, areaConhecimento);
				//
				// ***		carrega objetivo
				//			
				if (addObjeto(objetivos, objetivo)){
					objetivo.remove("necessarios");
					objetivo.put("necessarios", newNecessarios);
					objetivos.add(objetivo);
				};
			};			
			mongo.close();
		} catch (UnknownHostException | MongoException e1) {
			e1.printStackTrace();
		};
	};

	private void processaHabilidades(String id, JSONArray objetivos, JSONArray habilidades, JSONArray cursos, JSONArray areaAtuacao, JSONArray areaConhecimento) {
		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("habilidades");
			BasicDBObject searchQuery = new BasicDBObject("documento.idHabilidade", id);
			DBObject cursor = collection.findOne(searchQuery);
			if (cursor != null){
				BasicDBObject habilidade = (BasicDBObject) cursor.get("documento");
				//
				// ***		carrega habilidade
				//			
				carregaHabilidade(habilidades, cursos, objetivos, areaAtuacao, areaConhecimento, habilidade.getString("idHabilidade"), true, null);
			};			
			mongo.close();
		} catch (UnknownHostException | MongoException e1) {
			e1.printStackTrace();
		};
	
	};
	
	@SuppressWarnings({ "unchecked" })
	private void processaCursos(String id, JSONArray objetivos, JSONArray habilidades, JSONArray cursos, JSONArray areaAtuacao, JSONArray areaConhecimento) {

		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("cursos");
			BasicDBObject searchQuery = new BasicDBObject("documento.idCurso", id);
			DBObject cursor = collection.findOne(searchQuery);
			if (cursor != null){
				BasicDBObject curso = (BasicDBObject) cursor.get("documento");
				if (addObjeto(cursos, curso)){
					cursos.add(curso);
				};
				//
				// ***		carrega habilidades
				//
				ArrayList<?> arrayListHabilidades = new ArrayList<Object>(); 
				arrayListHabilidades = (ArrayList<?>) curso.get("habilidades");
		    	Object arrayHabilidades[] = arrayListHabilidades.toArray();
				int z = 0;
				while (z < arrayHabilidades.length) {
					carregaHabilidade(habilidades, cursos, objetivos, areaAtuacao, areaConhecimento, arrayHabilidades[z].toString(), true, null);
					++z;
				};
			};			
			mongo.close();
		} catch (UnknownHostException | MongoException e1) {
			e1.printStackTrace();
		}
	};

	private void processaAreaConhecimento(String id, JSONArray objetivos, JSONArray habilidades, JSONArray cursos, JSONArray areaAtuacao, JSONArray areaConhecimento) {
	};
	private void processaAreaAtuacao(String id, JSONArray objetivos, JSONArray habilidades, JSONArray cursos, JSONArray areaAtuacao, JSONArray areaConhecimento) {		
	};

	@SuppressWarnings("unchecked")
	private void carregaHabilidade(JSONArray habilidades, JSONArray cursos,JSONArray objetivos, JSONArray areaAtuacao,JSONArray areaConhecimento, String idHabilidade, Boolean carregaPreRequisitos, Object nomeHabilidade) {
		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("habilidades");
			BasicDBObject searchQuery = new BasicDBObject("documento.idHabilidade", idHabilidade);
			DBObject cursor = collection.findOne(searchQuery);
			if (cursor != null){
				BasicDBObject habilidade = (BasicDBObject) cursor.get("documento");
				nomeHabilidade = habilidade.get("name").toString();
				habilidade.put ("nivel", "0");
				if (addObjeto(habilidades, habilidade)){
					habilidades.add (habilidade);
				};
				if (carregaPreRequisitos){
					ArrayList<?> arrayList = new ArrayList<Object>(); 
			    	arrayList = (ArrayList<?>) habilidade.get("preRequisitos");
			    	Object array[] = arrayList.toArray();
					int z = 0;
					while (z < array.length) {
						BasicDBObject preRequisito = (BasicDBObject) array[z];
						carregaPreRequisitos(habilidades, cursos, objetivos, areaAtuacao, areaConhecimento, (String) preRequisito.get("id"), (String) preRequisito.get("nivel") );
						++z;
					};
					//
					// ***		carrega cursos
					//
					ArrayList<?> arrayListCursos = new ArrayList<BasicDBObject>(); 
			    	arrayListCursos = (ArrayList<?>) habilidade.get("cursos");
			    	Object[] arrayCursos = arrayListCursos.toArray();
					int i = 0;
					while (i < arrayCursos.length) {
						String curso = arrayCursos[i].toString();
						carregaCurso(cursos, curso);
						++i;
					};
					//
					// ***		carrega objetivos
					//
					ArrayList<Object> arrayListObjetivo = new ArrayList<Object>(); 
			    	arrayListObjetivo = (ArrayList<Object>) habilidade.get("objetivos");
			    	Object arrayObjetivo[] = arrayListObjetivo.toArray();
					int w = 0;
					while (w < arrayObjetivo.length) {
						String objetivo = arrayObjetivo[w].toString();
						carregaObjetivo(objetivos, objetivo);
						++w;
					};
					//
					// ***		carrega área do conhecimento
					//			
					processaAreaAtuacao(idHabilidade, objetivos, habilidades, cursos, areaAtuacao, areaConhecimento);
				};
			};			
			mongo.close();
		} catch (UnknownHostException | MongoException e) {
			e.printStackTrace();
		};
	};

	@SuppressWarnings("unchecked")
	private void carregaPreRequisitos(JSONArray habilidades, JSONArray cursos,JSONArray objetivos, JSONArray areaAtuacao,JSONArray areaConhecimento, String id, String nivel) {
		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("habilidades");
			BasicDBObject searchQuery = new BasicDBObject("documento.idHabilidade", id);
			DBObject cursor = collection.findOne(searchQuery);
			if (cursor != null){
				BasicDBObject habilidade = (BasicDBObject) cursor.get("documento");
				habilidade.put ("nivel", nivel);
				if (addObjeto(habilidades, habilidade)){
					habilidades.add (habilidade);
				};
				//
				// ***		carrega cursos
				//
				ArrayList<?> arrayListCursos = new ArrayList<Object>(); 
		    	arrayListCursos = (ArrayList<?>) habilidade.get("cursos");
		    	Object arrayCursos[] = arrayListCursos.toArray();
				int z = 0;
				while (z < arrayCursos.length) {
					String curso = arrayCursos[z].toString();
					carregaCurso(cursos, curso);
					++z;
				};
				//
				// ***		carrega objetivos
				//
				ArrayList<?> arrayListObjetivo = new ArrayList<Object>(); 
		    	arrayListObjetivo = (ArrayList<?>) habilidade.get("objetivos");
		    	Object arrayObjetivo[] = arrayListObjetivo.toArray();
				int w = 0;
				while (w < arrayObjetivo.length) {
					String objetivo = arrayObjetivo[w].toString();
					carregaObjetivo(objetivos, objetivo);
					++w;
				};
				//
				// ***		carrega área do conhecimento
				//			
				processaAreaAtuacao(id, objetivos, habilidades, cursos, areaAtuacao, areaConhecimento);
			};			
			mongo.close();
		} catch (UnknownHostException | MongoException e) {
			e.printStackTrace();
		};
	};

	@SuppressWarnings("unchecked")
	private void carregaCurso(JSONArray cursos, String id) {
		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("cursos");
			BasicDBObject searchQuery = new BasicDBObject("documento.idCurso", id);
			DBObject cursor = collection.findOne(searchQuery);
			if (cursor != null){
				BasicDBObject curso = (BasicDBObject) cursor.get("documento");
				if (addObjeto(cursos, curso)){
					cursos.add (curso);
				};
			};			
			mongo.close();
		} catch (UnknownHostException | MongoException e) {
			e.printStackTrace();
		};
		
	};
	
	@SuppressWarnings("unchecked")
	private void carregaAreaAtuacao(JSONArray areasAtuacao, String id) {
		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("areaAtuacao");
			BasicDBObject searchQuery = new BasicDBObject("documento.id", id);
			DBObject cursor = collection.findOne(searchQuery);
			if (cursor != null){
				BasicDBObject areaAtuacao = (BasicDBObject) cursor.get("documento");
				if (addObjeto(areasAtuacao, areaAtuacao)){
					areasAtuacao.add (areaAtuacao);
				};
			};			
			mongo.close();
		} catch (UnknownHostException | MongoException e) {
			e.printStackTrace();
		};
		
	};
	@SuppressWarnings("unchecked")
	private void carregaAreaConhecimento(JSONArray areasConhecimento, String id) {
		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("cursos");
			BasicDBObject searchQuery = new BasicDBObject("documento.id", id);
			DBObject cursor = collection.findOne(searchQuery);
			if (cursor != null){
				BasicDBObject areaConhecimento = (BasicDBObject) cursor.get("documento");
				if (addObjeto(areasConhecimento, areaConhecimento)){
					areasConhecimento.add (areaConhecimento);
				};
			};			
			mongo.close();
		} catch (UnknownHostException | MongoException e) {
			e.printStackTrace();
		};
		
	};

	@SuppressWarnings("unchecked")
	private void carregaObjetivo(JSONArray objetivos, String id) {
		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("carreiras");
			BasicDBObject searchQuery = new BasicDBObject("documento.id", id);
			DBObject cursor = collection.findOne(searchQuery);
			if (cursor != null){
				BasicDBObject objetivo = (BasicDBObject) cursor.get("documento");
				//
				// ***		pega nome habilidades
				//
				ArrayList<?> arrayListNecessarios = new ArrayList<Object>(); 
				JSONArray newNecessarios = new JSONArray(); 
		    	arrayListNecessarios = (ArrayList<?>) objetivo.get("necessarios");
		    	Object arrayNecessarios[] = arrayListNecessarios.toArray();
				int z = 0;
				while (z < arrayNecessarios.length) {
					newNecessarios.add(nomeHabilidade(arrayNecessarios[z].toString()));
					++z;
				};
				//
				// ***		carrega objetivo
				//			
				if (addObjeto(objetivos, objetivo)){
					objetivo.remove("necessarios");
					objetivo.put("necessarios", newNecessarios);
					objetivos.add(objetivo);
				};
			};			
			mongo.close();
		} catch (UnknownHostException | MongoException e) {
			e.printStackTrace();
		};
		
	};

	private Object nomeHabilidade(String id) {
		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("habilidades");
			BasicDBObject searchQuery = new BasicDBObject("documento.idHabilidade", id);
			DBObject cursor = collection.findOne(searchQuery);
			if (cursor != null){
				BasicDBObject habilidade = (BasicDBObject) cursor.get("documento");
				mongo.close();
				return habilidade.get("name").toString();
			};			
			mongo.close();
		} catch (UnknownHostException | MongoException e) {
			e.printStackTrace();
		};
		return null;
	}

	private boolean addObjeto(JSONArray array, BasicDBObject elemento) {

		if (array != null){
			for (int i = 0; i < array.size(); i++) {
				if (array.get(i).equals(elemento)){
					return false;
				};
			};
		}else{
			return false;
		};
		return true;
	};

	@Path("/lista")	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public BasicDBObject ObterCursos(@QueryParam("characters") String characters, @QueryParam("planejamentoLista") String planejamentoLista) {
		
		
		BasicDBObject listas = new BasicDBObject();
		if (planejamentoLista.equals("true")){			
			JSONArray objetivos = new JSONArray();
			JSONArray habilidades = new JSONArray();
			JSONArray cursos = new JSONArray();
			JSONArray areaAtuacao = new JSONArray();
			JSONArray areaConhecimento = new JSONArray();
			carregaIndex("Objetivo", objetivos, characters, true, objetivos, habilidades, cursos, areaAtuacao, areaConhecimento);
			carregaIndex("Habilidade", habilidades, characters, true, objetivos, habilidades, cursos, areaAtuacao, areaConhecimento);
			carregaIndex("Curso", cursos, characters, true, objetivos, habilidades, cursos, areaAtuacao, areaConhecimento);
			carregaIndex("Área Atuação", areaAtuacao, characters, true, objetivos, habilidades, cursos, areaAtuacao, areaConhecimento);
			carregaIndex("Área Conhecimento", areaConhecimento, characters, true, objetivos, habilidades, cursos, areaAtuacao, areaConhecimento);
			listas.put("objetivos", objetivos);
			listas.put("habilidades", habilidades);
			listas.put("cursos", cursos);
			listas.put("areaAtuacao", areaAtuacao);
			listas.put("areaConhecimento", areaConhecimento);
		}else{
			JSONArray documentos = new JSONArray();
			carregaIndex("Objetivo", documentos, characters, false, null, null, null, null, null);
			carregaIndex("Habilidade", documentos, characters, false, null, null, null, null, null);;
			carregaIndex("Curso", documentos, characters, false, null, null, null, null, null);
			carregaIndex("Área Atuação", documentos, characters, false, null, null, null, null, null);
			carregaIndex("Área Conhecimento", documentos, characters, false, null, null, null, null, null);
			listas.put("pesquisa", documentos);
		};
		return listas;			
	};

	@SuppressWarnings("unchecked")
	private void carregaIndex(String assunto, JSONArray documentos, String characters, Boolean lista, JSONArray objetivos, JSONArray habilidades, JSONArray cursos, JSONArray areaAtuacao, JSONArray areaConhecimento) {
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
						List<?> wordsCompare = (List<?>) jsonObject.get("texto");
						if (wordsoK (wordsSource, wordsCompare)){
							if (lista){
								switch (assunto) {
								case "Objetivo":
									carregaObjetivo(objetivos, jsonObject.get("id").toString());
									break;
								case "Habilidade":
									carregaHabilidade(habilidades, cursos, objetivos, areaAtuacao, areaConhecimento, jsonObject.get("id").toString(), false, null);
								break;
								case "Curso":
									carregaCurso(cursos, jsonObject.get("id").toString());								
								break;
								case "Área Atuação":
									carregaAreaAtuacao(areaAtuacao, jsonObject.get("id").toString());
								break;
								case "Área Conhecimento":
									carregaAreaConhecimento(areaConhecimento, jsonObject.get("id").toString());									
								break;

								default:
									break;
								}
							}else{
								jsonDocumento.put("assunto", jsonObject.get("assunto"));
								jsonDocumento.put("entidade", jsonObject.get("entidade"));
								jsonDocumento.put("id", jsonObject.get("id"));
								jsonDocumento.put("descricao", jsonObject.get("descricao"));
								documentos.add(jsonDocumento);
								if (i > 3){
									mongo.close();
									return;
								};
							};
							++i;
						};
					} catch (ParseException e) {
						e.printStackTrace();
					}
				};		
			} catch (UnknownHostException | MongoException e1) {
				e1.printStackTrace();
			}
	};
	
	private boolean wordsoK(String[] wordsSource, List<?> wordsCompare) {
		int i = 0;
		int palavraIgual = 0;
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

};
