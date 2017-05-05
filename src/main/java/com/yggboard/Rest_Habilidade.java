package com.yggboard;

import java.io.IOException;
import java.net.UnknownHostException;
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
@Path("/habilidades")

public class Rest_Habilidade {

	@SuppressWarnings("unchecked")
	@Path("/obter")	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public JSONObject ObterEmail(@QueryParam("idHabilidade") String idHabilidade, @QueryParam("name") String name)  {
		BasicDBObject setQuery = new BasicDBObject();
	    if (name != null){
	    	setQuery.put("documento.name", name);
	    };
	    if (idHabilidade != null){
	    	setQuery.put("documento.idHabilidade", idHabilidade);
	    };
		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("habilidade");
			BasicDBObject searchQuery = new BasicDBObject("documento.idHabilidade", idHabilidade);
			DBObject cursor = collection.findOne(searchQuery);
			JSONObject documento = new JSONObject();
			BasicDBObject obj = (BasicDBObject) cursor.get("documento");
			documento.put("documento", obj);
			mongo.close();
			return documento;
		} catch (UnknownHostException e) {
			e.printStackTrace();
		} catch (MongoException e) {
			return null;
		}
		return null;
	};
	@SuppressWarnings("unchecked")
	@Path("/incluir")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response IncluirHabilidade(Habilidade habilidade)  {
		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("habilidades");
			Gson gson = new Gson();
			String jsonDocumento = gson.toJson(habilidade);
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
	@SuppressWarnings({ "unchecked", "unused" })
	@Path("/atualizar")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response AtualizarDocumento(Habilidade doc) throws MongoException, JsonParseException, JsonMappingException, IOException {
		String mail = doc.documento.idHabilidade;
		Mongo mongo = new Mongo();
		DB db = (DB) mongo.getDB("documento");
		DBCollection collection = db.getCollection("habilidades");
		Gson gson = new Gson();
		String jsonDocumento = gson.toJson(doc);
		Map<String,String> mapJson = new HashMap<String,String>();
		ObjectMapper mapper = new ObjectMapper();
		mapJson = mapper.readValue(jsonDocumento, HashMap.class);
		JSONObject documento = new JSONObject();
		documento.putAll(mapJson);
		BasicDBObject update = new BasicDBObject("$set", new BasicDBObject(documento));
		BasicDBObject searchQuery = new BasicDBObject("documento.idHabilidade", mail);
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
	
	@SuppressWarnings("unchecked")
	@Path("/lista")	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public JSONArray ObterHabilidadess(@QueryParam("diagrama") String diagrama, @QueryParam("type") String type, @QueryParam("classes") String classes, @QueryParam("semCursos") String semCursos) {

		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");

			BasicDBObject setQuery = new BasicDBObject();
		    if (diagrama != null){
		    	setQuery.put("documento.diagrama", diagrama);
		    };
		    if (type != null){
		    	setQuery.put("documento.type", type);
		    };
		    if (classes != null){
		    	setQuery.put("documento.classes", type);
		    };
			DBCollection collection = db.getCollection("habilidades");
			
			DBCursor cursor = collection.find(setQuery);
			JSONArray documentos = new JSONArray();
			while (((Iterator<DBObject>) cursor).hasNext()) {
				JSONParser parser = new JSONParser(); 
				BasicDBObject objHabilidade = (BasicDBObject) ((Iterator<DBObject>) cursor).next();
				JSONObject jsonDocumento = new JSONObject();
			    BasicDBObject obj = (BasicDBObject) objHabilidade.get("documento");
			    String idHabilidade = (String) obj.get("idHabilidade");
			    if (semCursos != "false"){
					Mongo mongoCurso;
					mongoCurso = new Mongo();
					DB dbCurso = (DB) mongoCurso.getDB("documento");
					DBCollection collectionCurso = dbCurso.getCollection("cursos");
					BasicDBObject setQueryCurso = new BasicDBObject();
					setQueryCurso.put("documento.habilidades.habilidade", idHabilidade);
					DBCursor cursorCurso = collectionCurso.find(setQueryCurso);
					JSONArray cursosArray = new JSONArray();
					while (((Iterator<DBObject>) cursorCurso).hasNext()) {
						BasicDBObject objCurso = (BasicDBObject) ((Iterator<DBObject>) cursorCurso).next();
						String documentoCurso = objCurso.getString("documento");
						try {
							JSONObject jsonObject = (JSONObject) parser.parse(documentoCurso);
							JSONObject jsonCursos = new JSONObject();
							jsonCursos.put("nome", jsonObject.get("nome"));
							jsonCursos.put("idCurso", jsonObject.get("idCurso"));
							jsonCursos.put("descricao", jsonObject.get("descricao"));
							jsonCursos.put("wiki", jsonObject.get("wiki"));
							cursosArray.add (jsonCursos);
						} catch (ParseException e) {
							e.printStackTrace();
						}
					};
					mongoCurso.close();
				    obj.remove("cursos");
				    obj.put("cursos", cursosArray);
			    };
			    jsonDocumento.put("documento", obj);
				documentos.add(jsonDocumento);
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

}
