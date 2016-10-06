package com.rcapitol.yggboard;

import java.io.IOException;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
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
@Path("/userPerfil")

public class Rest_UserPerfil {

	@SuppressWarnings("unchecked")
	@Path("/obter")	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public JSONObject ObterUsuario(@QueryParam("usuario") String usuario) throws UnknownHostException, MongoException {
		Mongo mongo = new Mongo();
		DB db = (DB) mongo.getDB("documento");
		DBCollection collection = db.getCollection("userPerfil");
		BasicDBObject searchQuery = new BasicDBObject("documento.usuario", usuario);
		DBObject cursor = collection.findOne(searchQuery);
		if (cursor != null){
			JSONObject documento = new JSONObject();
			BasicDBObject obj = (BasicDBObject) cursor.get("documento");
			documento.put("documento", obj);
			mongo.close();
			return documento;
		}else{
			return null;
		}
	};
	@SuppressWarnings({ "unchecked", "rawtypes", "unused" })
	@Path("/obter/itens")	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public JSONArray ObterCarreiras(@QueryParam("usuario") String usuario, @QueryParam("item") String item, @QueryParam("carreira") String carreira) throws UnknownHostException, MongoException {
		Mongo mongo = new Mongo();
		DB db = (DB) mongo.getDB("documento");
		DBCollection collection = db.getCollection("userPerfil");
		BasicDBObject searchQuery = new BasicDBObject("documento.usuario", usuario);
		DBObject cursor = collection.findOne(searchQuery);
		BasicDBObject obj = (BasicDBObject) cursor.get("documento");
		mongo.close();
		JSONArray documentos = new JSONArray();
		String docUserPerfil = obj.toString();
		JSONObject jsonObject; 
		JSONParser parser = new JSONParser(); 
		try {
			jsonObject = (JSONObject) parser.parse(docUserPerfil);
			if (item.equals("carreiras") | item.equals("carreiras-interesse")){
				ArrayList arrayList = new ArrayList(); 
				if (item.equals("carreiras")){
					arrayList = (ArrayList) jsonObject.get("carreiras");
				}else{
					arrayList = (ArrayList) jsonObject.get("carreirasInteresse");
				}
		    	Object array[] = arrayList.toArray(); 
				int w = 0;
				while (w < array.length) {
					Mongo mongoCarreiras = new Mongo();
					DB dbCarreiras = (DB) mongoCarreiras.getDB("documento");
					DBCollection collectionCarreiras = dbCarreiras.getCollection("carreiras");
					BasicDBObject searchQueryCarreiras = new BasicDBObject("documento.nome", array[w]);
					DBObject cursorCarreiras = collectionCarreiras.findOne(searchQueryCarreiras);
					BasicDBObject objCarreiras = (BasicDBObject) cursorCarreiras.get("documento");
					JSONObject jsonDocumento = new JSONObject();
					jsonDocumento.put("_id", objCarreiras.getString("_id"));
					jsonDocumento.put("nome", objCarreiras.get("nome"));
					jsonDocumento.put("industria", objCarreiras.get("industria"));
				    jsonDocumento.put("descricao", objCarreiras.get("descricao"));
				    jsonDocumento.put("tarefas", objCarreiras.get("tarefas"));
				    jsonDocumento.put("salarioMinimo", objCarreiras.get("salarioMinimo")); 
				    jsonDocumento.put("salarioMedio", objCarreiras.get("salarioMedio"));
				    jsonDocumento.put("salarioMaximo", objCarreiras.get("salarioMaximo"));
				    jsonDocumento.put("funcao", objCarreiras.get("funcao"));
				    jsonDocumento.put("necessarios", objCarreiras.get("necessarios")); 
				    jsonDocumento.put("recomentados", objCarreiras.get("recomentados"));
				    jsonDocumento.put("tags", objCarreiras.get("tags"));
					ArrayList arrayListElementos = new ArrayList(); 
					arrayListElementos = (ArrayList) jsonObject.get("elementos");
			    	Object arrayElementos[] = arrayListElementos.toArray(); 
					ArrayList <String> arrayListElementosFaltantes = new ArrayList(); 
				    JSONObject jsonQtdeHabilidades = obterTotalHabilidades(objCarreiras.get("nome"), arrayElementos, arrayListElementosFaltantes);
				    jsonDocumento.put("totalHabilidades", jsonQtdeHabilidades.get("totalHabilidades"));
				    jsonDocumento.put("totalPossuiHabilidades", jsonQtdeHabilidades.get("totalPossuiHabilidades"));
			    	ArrayList arrayListNecessarios = new ArrayList(); 
			    	arrayListNecessarios = (ArrayList) objCarreiras.get("necessarios");
			    	Object arrayNecessarios[] = arrayListNecessarios.toArray(); 
					int z = 0;
					JSONArray necessariosArray = new JSONArray();
					while (z < arrayListElementosFaltantes.size()) {
						Mongo mongoHabilidade = new Mongo();
						DB dbHabilidade = (DB) mongoHabilidade.getDB("documento");
						DBCollection collectionHabilidade = dbHabilidade.getCollection("habilidades");
						BasicDBObject searchQueryHabilidade = new BasicDBObject("documento.idHabilidade", arrayListElementosFaltantes.get(z));
						DBObject cursorHabilidade = collectionHabilidade.findOne(searchQueryHabilidade);
						if (cursorHabilidade != null){
							BasicDBObject objCarreira = (BasicDBObject) cursorHabilidade.get("documento");
							JSONObject jsonNecessarios = new JSONObject();
							jsonNecessarios.put("idHabilidade", arrayListElementosFaltantes.get(z));
							jsonNecessarios.put("name", objCarreira.get("name"));
							JSONArray cursos = new JSONArray();
							obterCursosNecessarios (arrayListElementosFaltantes.get(z), cursos);
							jsonNecessarios.put("cursos", cursos);
							necessariosArray.add (jsonNecessarios);
						}
						++z;
					};
					jsonDocumento.put("arrayNecessarios", necessariosArray);
					documentos.add(jsonDocumento);
					mongoCarreiras.close();
					++w;
				};
			};
			if (item.equals("habilidades") | item.equals("habilidades-interesse") |
				item.equals("cursos-necessarias-habilidades") | item.equals("cursos-interesse-habilidades")){
				ArrayList arrayList = new ArrayList(); 
				if (item.equals("habilidades")){
					arrayList = (ArrayList) jsonObject.get("habilidades");
				}else{
					arrayList = (ArrayList) jsonObject.get("habilidadesInteresse");
				}
		    	Object array[] = arrayList.toArray(); 
				int w = 0;
				while (w < array.length) {
					Mongo mongoHabilidades = new Mongo();
					DB dbHabilidades = (DB) mongoHabilidades.getDB("documento");
					DBCollection collectionHabilidades = dbHabilidades.getCollection("habilidades");
					BasicDBObject searchQueryHabilidades = new BasicDBObject("documento.idHabilidade", array[w]);
					DBObject cursorHabilidades = collectionHabilidades.findOne(searchQueryHabilidades);
					if (cursorHabilidades != null){
						BasicDBObject objHabilidades = (BasicDBObject) cursorHabilidades.get("documento");
						if (item.equals("cursos-necessarias-habilidades") | item.equals("cursos-interesse-habilidades")){
							obterCursosNecessarios (objHabilidades.get("idHabilidade"), documentos);
						}else{
							JSONObject jsonDocumento = new JSONObject();
						    jsonDocumento.put("documento", objHabilidades);
							JSONArray cursos = new JSONArray();
							obterCursosNecessarios (objHabilidades.get("idHabilidade"), cursos);
							jsonDocumento.put("cursos", cursos);
							documentos.add(jsonDocumento);
							mongoHabilidades.close();
						};
					};
					++w;
				};
			};
			if (item.equals("habilidades-elementos")){
					ArrayList arrayList = new ArrayList(); 
					arrayList = (ArrayList) jsonObject.get("elementos");
			    	Object array[] = arrayList.toArray(); 
					int w = 0;
					while (w < array.length) {
						Mongo mongoHabilidades = new Mongo();
						DB dbHabilidades = (DB) mongoHabilidades.getDB("documento");
						DBCollection collectionHabilidades = dbHabilidades.getCollection("habilidades");
						BasicDBObject searchQueryHabilidades = new BasicDBObject("documento.idHabilidade", array[w]);
						DBObject cursorHabilidades = collectionHabilidades.findOne(searchQueryHabilidades);
						BasicDBObject objHabilidades = (BasicDBObject) cursorHabilidades.get("documento");
						JSONObject jsonDocumento = new JSONObject();
					    jsonDocumento.put("documento", objHabilidades);
						documentos.add(jsonDocumento);
						mongoHabilidades.close();
						++w;
					};
				};
			if (item.equals("habilidades-necessarias-carreiras") | item.equals("habilidades-interesse-carreiras") |
					item.equals("cursos-necessarias-carreiras") | item.equals("cursos-interesse-carreiras") |
					item.equals("habilidades-necessarias-carreira")){
				ArrayList arrayList = new ArrayList(); 
				if (item.equals("habilidades-necessarias-carreiras") | item.equals("cursos-necessarias-carreiras")){
					arrayList = (ArrayList) jsonObject.get("carreiras");
				}else{
					arrayList = (ArrayList) jsonObject.get("carreirasInteresse");
				}
		    	Object array[] = arrayList.toArray(); 
				ArrayList arrayListElementos = new ArrayList(); 
				arrayListElementos = (ArrayList) jsonObject.get("elementos");
		    	Object arrayElementos[] = arrayListElementos.toArray(); 
		    	if (!carreira.equals("undefined")){
		    		obterHabilidadesCursosNecessarias(carreira, arrayElementos, documentos, false);
		    	}else{
					int w = 0;
					while (w < array.length) {
						if (item.equals("habilidades-necessarias-carreiras") | item.equals("habilidades-interesse-carreiras")){
							obterHabilidadesCursosNecessarias(array[w], arrayElementos, documentos, false);
						}else{
							obterHabilidadesCursosNecessarias(array[w], arrayElementos, documentos, true);
						};
						++w;
					};
		    	};
			};
			if (item.equals("cursos-interesse")){
				ArrayList arrayList = new ArrayList(); 
				arrayList = (ArrayList) jsonObject.get("cursosInteresse");
		    	Object array[] = arrayList.toArray(); 
				int w = 0;
				while (w < array.length) {
					Mongo mongoCursos = new Mongo();
					DB dbCursos = (DB) mongoCursos.getDB("documento");
					DBCollection collectionCursos = dbCursos.getCollection("cursos");
					BasicDBObject searchQueryCursos = new BasicDBObject("documento.idCurso", array[w]);
					DBObject cursorCursos = collectionCursos.findOne(searchQueryCursos);
					JSONObject jsonDocumento = new JSONObject();
					if (cursorCursos != null){
						BasicDBObject objCursos = (BasicDBObject) cursorCursos.get("documento");
						jsonDocumento.put("documento", objCursos);
					};
					documentos.add(jsonDocumento);
					mongoCursos.close();
					++w;
				};
			};
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return documentos;
	};
	@SuppressWarnings("unchecked")
	@Path("/incluir")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response IncluirCurso(UserPerfil userPerfil)  {
		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("userPerfil");
			Gson gson = new Gson();
			String jsonDocumento = gson.toJson(userPerfil);
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
	@SuppressWarnings("unchecked")
	@Path("/atualizar")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response AtualizarDocumento(UserPerfil doc) throws MongoException, JsonParseException, JsonMappingException, IOException {
		String usuario = doc.documento.usuario;	
		Mongo mongo = new Mongo();
		DB db = (DB) mongo.getDB("documento");
		DBCollection collection = db.getCollection("userPerfil");
		Gson gson = new Gson();
		String jsonDocumento = gson.toJson(doc);
		Map<String,String> mapJson = new HashMap<String,String>();
		ObjectMapper mapper = new ObjectMapper();
		mapJson = mapper.readValue(jsonDocumento, HashMap.class);
		JSONObject documento = new JSONObject();
		documento.putAll(mapJson);
		BasicDBObject update = new BasicDBObject("$set", new BasicDBObject(documento));
		BasicDBObject searchQuery = new BasicDBObject("documento.usuario", usuario);
		@SuppressWarnings("unused")
		DBObject cursor = collection.findAndModify(searchQuery,
                null,
                null,
                false,
                update,
                true,
                false);
		mongo.close();
		return Response.status(200).build();
	};
	
	@SuppressWarnings({ "unchecked", "unused" })
	@Path("/lista")	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public JSONArray ObterCursos(@QueryParam("usuario") String usuario) {

		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");

			BasicDBObject setQuery = new BasicDBObject();
		    if (usuario != null){
		    	setQuery.put("documento.usuario", usuario);
		    };
			DBCollection collection = db.getCollection("userPerfil");
			
			DBCursor cursor = collection.find(setQuery);
			JSONArray documentos = new JSONArray();
			while (((Iterator<DBObject>) cursor).hasNext()) {
				JSONParser parser = new JSONParser(); 
				BasicDBObject objUserPerfil = (BasicDBObject) ((Iterator<DBObject>) cursor).next();
				String documento = objUserPerfil.getString("documento");
				try {
					JSONObject jsonObject; 
					jsonObject = (JSONObject) parser.parse(documento);
					JSONObject jsonDocumento = new JSONObject();
				    jsonDocumento.put("documento", (JSONObject) parser.parse(documento));
					documentos.add(jsonDocumento);
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
	private JSONObject obterTotalHabilidades (Object carreira, Object[] arrayElementos, ArrayList<String> arrayListElementosFaltantes) {
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
			return jsonQtdeHabilidades;
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
