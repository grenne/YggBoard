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
@Path("/carreiras")

public class Rest_Carreira {

	@SuppressWarnings("unchecked")
	@Path("/obter")	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public JSONObject ObterCarreira(@QueryParam("carreira") String carreira) throws UnknownHostException, MongoException {
		Mongo mongo = new Mongo();
		DB db = (DB) mongo.getDB("documento");
		DBCollection collection = db.getCollection("carreiras");
		BasicDBObject searchQuery = new BasicDBObject("documento.mail", carreira);
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
	public Response IncluirCarreiras(Carreira carreiras)  {
		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("carreiras");
			Gson gson = new Gson();
			String jsonDocumento = gson.toJson(carreiras);
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
	public Response AtualizarDocumento(Carreira doc) throws MongoException, JsonParseException, JsonMappingException, IOException {
		String nome = doc.documento.nome;
		Mongo mongo = new Mongo();
		DB db = (DB) mongo.getDB("documento");
		DBCollection collection = db.getCollection("carreiras");
		Gson gson = new Gson();
		String jsonDocumento = gson.toJson(doc);
		Map<String,String> mapJson = new HashMap<String,String>();
		ObjectMapper mapper = new ObjectMapper();
		mapJson = mapper.readValue(jsonDocumento, HashMap.class);
		JSONObject documento = new JSONObject();
		documento.putAll(mapJson);
		BasicDBObject update = new BasicDBObject("$set", new BasicDBObject(documento));
		BasicDBObject searchQuery = new BasicDBObject("documento.mail", nome);
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
	public JSONArray ObterCarreiras() {

		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");

			DBCollection collection = db.getCollection("carreiras");
			
			DBCursor cursor = collection.find();
			JSONArray documentos = new JSONArray();
			while (((Iterator<DBObject>) cursor).hasNext()) {
				JSONParser parser = new JSONParser(); 
				BasicDBObject objCarreiras = (BasicDBObject) ((Iterator<DBObject>) cursor).next();
				String documento = objCarreiras.getString("documento");
				try {
					JSONObject jsonObject; 
					jsonObject = (JSONObject) parser.parse(documento);
					JSONObject jsonDocumento = new JSONObject();
					jsonDocumento.put("_id", objCarreiras.getString("_id"));
					jsonDocumento.put("nome", jsonObject.get("nome"));
					jsonDocumento.put("industria", jsonObject.get("industria"));
				    jsonDocumento.put("descricao", jsonObject.get("descricao"));
				    jsonDocumento.put("tarefas", jsonObject.get("tarefas"));
				    jsonDocumento.put("salarioMinimo", jsonObject.get("salarioMinimo")); 
				    jsonDocumento.put("salarioMedio", jsonObject.get("salarioMedio"));
				    jsonDocumento.put("salarioMaximo", jsonObject.get("salarioMaximo"));
				    jsonDocumento.put("funcao", jsonObject.get("funcao"));
				    jsonDocumento.put("necessarios", jsonObject.get("necessarios")); 
				    jsonDocumento.put("recomendados", jsonObject.get("recomentados"));
				    jsonDocumento.put("tags", jsonObject.get("tags"));
			    	ArrayList arrayListNecessarios = new ArrayList(); 
			    	arrayListNecessarios = (ArrayList) jsonObject.get("necessarios");
			    	Object arrayNecessarios[] = arrayListNecessarios.toArray(); 
					int w = 0;
					JSONArray necessariosArray = new JSONArray();
					while (w < arrayNecessarios.length) {
						Mongo mongoHabilidade = new Mongo();
						DB dbHabilidade = (DB) mongoHabilidade.getDB("documento");
						DBCollection collectionHabilidade = dbHabilidade.getCollection("habilidades");
						BasicDBObject searchQueryHabilidade = new BasicDBObject("documento.idHabilidade", arrayNecessarios[w]);
						DBObject cursorHabilidade = collectionHabilidade.findOne(searchQueryHabilidade);
						if (cursorHabilidade != null){
							BasicDBObject obj = (BasicDBObject) cursorHabilidade.get("documento");
							JSONObject jsonNecessarios = new JSONObject();
							jsonNecessarios.put("idHabilidade", arrayNecessarios[w]);
							jsonNecessarios.put("name", obj.get("name"));
							jsonNecessarios.put("classes", obj.get("classes"));
							jsonNecessarios.put("parent", obj.get("parent"));
							necessariosArray.add (jsonNecessarios);
						}
						mongoHabilidade.close();
						++w;
					};
					jsonDocumento.put("arrayNecessarios", necessariosArray);
			    	ArrayList arrayListRecomendados = new ArrayList(); 
			    	arrayListRecomendados = (ArrayList) jsonObject.get("recomendados");
			    	Object arrayRecomendados[] = arrayListRecomendados.toArray(); 
					w = 0;
					JSONArray recomendadosArray = new JSONArray();
					while (w < arrayRecomendados.length) {
						Mongo mongoHabilidade = new Mongo();
						DB dbHabilidade = (DB) mongoHabilidade.getDB("documento");
						DBCollection collectionHabilidade = dbHabilidade.getCollection("habilidades");
						BasicDBObject searchQueryHabilidade = new BasicDBObject("documento.idHabilidade", arrayRecomendados[w]);
						DBObject cursorHabilidade = collectionHabilidade.findOne(searchQueryHabilidade);
						if (cursorHabilidade != null){
							BasicDBObject obj = (BasicDBObject) cursorHabilidade.get("documento");
							JSONObject jsonRecomendados = new JSONObject();
							jsonRecomendados.put("idHabilidade", arrayRecomendados[w]);
							jsonRecomendados.put("name", obj.get("name"));
							jsonRecomendados.put("classes", obj.get("classes"));
							jsonRecomendados.put("parent", obj.get("parent"));
							recomendadosArray.add (jsonRecomendados);
						}
						mongoHabilidade.close();
						++w;
					};
					jsonDocumento.put("arrayRecomendados", recomendadosArray);
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
