package com.yggboard;

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
@Path("/areaconhecimento")

public class Rest_AreaConhecimento {

	@SuppressWarnings("unchecked")
	@Path("/obter")	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public JSONObject ObterBadge(@QueryParam("id") String id) throws UnknownHostException, MongoException {
		Mongo mongo = new Mongo();
		DB db = (DB) mongo.getDB("documento");
		DBCollection collection = db.getCollection("areaConhecimento");
		BasicDBObject searchQuery = new BasicDBObject("documento.id", id);
		DBObject cursor = collection.findOne(searchQuery);
		JSONObject documento = new JSONObject();
		BasicDBObject obj = (BasicDBObject) cursor.get("documento");
		documento.put("documento", obj);
		mongo.close();
		return documento;
	};
	@SuppressWarnings("unchecked")
	@Path("/incluir")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response Incluirbadges(Badge badges)  {
		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("areaConhecimento");
			Gson gson = new Gson();
			String jsonDocumento = gson.toJson(badges);
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
	public Response AtualizarDocumento(AreaConhecimento doc) throws MongoException, JsonParseException, JsonMappingException, IOException {
		String id = doc.documento.id;
		Mongo mongo = new Mongo();
		DB db = (DB) mongo.getDB("documento");
		DBCollection collection = db.getCollection("areaConhecimento");
		Gson gson = new Gson();
		String jsonDocumento = gson.toJson(doc);
		Map<String,String> mapJson = new HashMap<String,String>();
		ObjectMapper mapper = new ObjectMapper();
		mapJson = mapper.readValue(jsonDocumento, HashMap.class);
		JSONObject documento = new JSONObject();
		documento.putAll(mapJson);
		BasicDBObject update = new BasicDBObject("$set", new BasicDBObject(documento));
		BasicDBObject searchQuery = new BasicDBObject("documento.id", id);
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
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Path("/lista")	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public JSONArray ObterBadges() {

		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");

			DBCollection collection = db.getCollection("areaConhecimento");
			
			DBCursor cursor = collection.find();
			JSONArray documentos = new JSONArray();
			while (((Iterator<DBObject>) cursor).hasNext()) {
				JSONParser parser = new JSONParser(); 
				BasicDBObject objBadges = (BasicDBObject) ((Iterator<DBObject>) cursor).next();
				String documento = objBadges.getString("documento");
				try {
					JSONObject jsonObject; 
					jsonObject = (JSONObject) parser.parse(documento);
					JSONObject jsonDocumento = new JSONObject();
					jsonDocumento.put("_id", objBadges.getString("_id"));
					jsonDocumento.put("nome", jsonObject.get("nome"));
					jsonDocumento.put("id", jsonObject.get("id"));
				    jsonDocumento.put("descricao", jsonObject.get("descricao"));
				    jsonDocumento.put("tags", jsonObject.get("tags"));
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

}
