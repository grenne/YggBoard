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
			mongo.close();
			return null;
		}
	};
	@SuppressWarnings({ "unchecked", "rawtypes", "unused" })
	@Path("/obter/itens")	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public JSONArray ObterCarreiras(@QueryParam("usuario") String usuario, @QueryParam("item") String item, @QueryParam("elemento") String elemento) throws UnknownHostException, MongoException {
		if (item == null || usuario == null){
			return null;
		};
		Commons commons = new Commons();
		Mongo mongo = new Mongo();
		DB db = (DB) mongo.getDB("documento");
		DBCollection collection = db.getCollection("userPerfil");
		BasicDBObject searchQuery = new BasicDBObject("documento.usuario", usuario);
		DBObject cursor = collection.findOne(searchQuery);
		BasicDBObject obj = (BasicDBObject) cursor.get("documento");
		mongo.close();
		JSONArray documentos = new JSONArray();
		String docUserPerfil = obj.toString();
		JSONObject jsonPerfil; 
		JSONParser parser = new JSONParser(); 
		try {
			jsonPerfil = (JSONObject) parser.parse(docUserPerfil);
			if (item.equals("carreiras") | item.equals("carreiras-interesse") | item.equals("carreiras-sugeridas")){
				ArrayList arrayList = new ArrayList(); 
				if (item.equals("carreiras")){
					arrayList = (ArrayList) jsonPerfil.get("carreiras");
				};
				if (item.equals("carreiras-interesse")){
					arrayList = (ArrayList) jsonPerfil.get("carreirasInteresse");
				};
				if (item.equals("carreiras-sugeridas")){				
					arrayList = (ArrayList) jsonPerfil.get("carreirasSugeridas");
				};
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
					arrayListElementos = (ArrayList) jsonPerfil.get("habilidades");
			    	Object arrayElementos[] = arrayListElementos.toArray(); 
					ArrayList <String> arrayListElementosFaltantes = new ArrayList(); 
				    JSONObject jsonQtdeHabilidades = ObterTotalHabilidades(objCarreiras.get("nome"), arrayElementos, arrayListElementosFaltantes);
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
							ObterCursosNecessarios (arrayListElementosFaltantes.get(z), cursos);
							jsonNecessarios.put("cursos", cursos);
							necessariosArray.add (jsonNecessarios);
						}
						mongoHabilidade.close();
						++z;
					};
					jsonDocumento.put("arrayNecessarios", necessariosArray);
					documentos.add(jsonDocumento);
					mongoCarreiras.close();
					++w;
				};
			};
			if (item.equals("badges") | item.equals("badges-interesse")){
				ArrayList arrayList = new ArrayList(); 
				if (item.equals("badges")){
					arrayList = (ArrayList) jsonPerfil.get("badges");
				}else{
					arrayList = (ArrayList) jsonPerfil.get("badgesInteresse");
				};
		    	Object array[] = arrayList.toArray(); 
				int w = 0;
				while (w < array.length) {
					Mongo mongoBadges = new Mongo();
					DB dbBadges = (DB) mongoBadges.getDB("documento");
					DBCollection collectionBadges = dbBadges.getCollection("badges");
					BasicDBObject searchQueryBadges = new BasicDBObject("documento.nome", array[w]);
					DBObject cursorBadges = collectionBadges.findOne(searchQueryBadges);
					if (cursorBadges != null){
						BasicDBObject objBadges = (BasicDBObject) cursorBadges.get("documento");
						JSONObject jsonDocumento = new JSONObject();
						jsonDocumento.put("_id", objBadges.getString("_id"));
						jsonDocumento.put("nome", objBadges.get("nome"));
						jsonDocumento.put("badge", objBadges.get("badge"));
						jsonDocumento.put("entidadeCertificadora", objBadges.get("entidadeCertificadora"));
					    jsonDocumento.put("descricao", objBadges.get("descricao"));
					    jsonDocumento.put("habilidades", objBadges.get("habilidades")); 
					    jsonDocumento.put("tags", objBadges.get("tags"));
						ArrayList arrayListElementos = new ArrayList(); 
						arrayListElementos = (ArrayList) jsonPerfil.get("habilidades");
				    	Object arrayElementos[] = arrayListElementos.toArray(); 
						ArrayList <String> arrayListElementosFaltantes = new ArrayList();
					    JSONObject jsonQtdeHabilidades = ObterTotalHabilidadesBadges(objBadges.get("nome"), arrayElementos, arrayListElementosFaltantes);
					    jsonDocumento.put("totalHabilidades", jsonQtdeHabilidades.get("totalHabilidades"));
					    jsonDocumento.put("totalPossuiHabilidades", jsonQtdeHabilidades.get("totalPossuiHabilidades"));
				    	ArrayList arrayListHabilidades = new ArrayList(); 
				    	arrayListHabilidades = (ArrayList) objBadges.get("habilidades");
				    	Object arrayHabilidades[] = arrayListHabilidades.toArray(); 
						int z = 0;
						JSONArray habilidadesArray = new JSONArray();
						while (z < arrayListElementosFaltantes.size()) {
							Mongo mongoHabilidade = new Mongo();
							DB dbHabilidade = (DB) mongoHabilidade.getDB("documento");
							DBCollection collectionHabilidade = dbHabilidade.getCollection("habilidades");
							BasicDBObject searchQueryHabilidade = new BasicDBObject("documento.idHabilidade", arrayListElementosFaltantes.get(z));
							DBObject cursorHabilidade = collectionHabilidade.findOne(searchQueryHabilidade);
							if (cursorHabilidade != null){
								BasicDBObject objCarreira = (BasicDBObject) cursorHabilidade.get("documento");
								JSONObject jsonHabilidades = new JSONObject();
								jsonHabilidades.put("idHabilidade", arrayListElementosFaltantes.get(z));
								jsonHabilidades.put("name", objCarreira.get("name"));
								JSONArray cursos = new JSONArray();
								ObterCursosNecessarios (arrayListElementosFaltantes.get(z), cursos);
								jsonHabilidades.put("cursos", cursos);
								habilidadesArray.add (jsonHabilidades);
							}
							mongoHabilidade.close();
							++z;
						};
						jsonDocumento.put("arrayHabilidades", habilidadesArray);
						documentos.add(jsonDocumento);
					};
					mongoBadges.close();
					++w;
				};
				Mongo mongoBadge;
				try {
					mongoBadge = new Mongo();
					DB dbBadge = (DB) mongoBadge.getDB("documento");

					DBCollection collectionBadge = dbBadge.getCollection("badges");
					
					DBCursor cursorBadge = collectionBadge.find();
					while (((Iterator<DBObject>) cursorBadge).hasNext()) {
						BasicDBObject objBadges = (BasicDBObject) ((Iterator<DBObject>) cursorBadge).next();
						String documento = objBadges.getString("documento");
						try {
							JSONObject jsonBadge; 
							jsonBadge = (JSONObject) parser.parse(documento);
							JSONObject jsonDocumento = new JSONObject();
							if (jsonBadge.get("tipo").equals("data")){
								jsonDocumento.put("_id", objBadges.getString("_id"));
								jsonDocumento.put("nome", jsonBadge.get("nome"));
								jsonDocumento.put("badge", jsonBadge.get("badge"));
								jsonDocumento.put("entidadeCertificadora", jsonBadge.get("entidadeCertificadora"));
							    jsonDocumento.put("descricao", jsonBadge.get("descricao"));
							    jsonDocumento.put("habilidades", jsonBadge.get("habilidades")); 
							    jsonDocumento.put("tags", jsonBadge.get("tags"));
							    jsonDocumento.put("totalHabilidades", "");
							    jsonDocumento.put("totalPossuiHabilidades", "");
								jsonDocumento.put("arrayHabilidades", "");
								documentos.add(jsonDocumento);									
							};
							if (jsonBadge.get("tipo").equals("numero")){
								ArrayList arrayListElementos = new ArrayList(); 
								arrayListElementos = (ArrayList) jsonPerfil.get("habilidades");
								if (Integer.valueOf((String) jsonBadge.get("parametro")) < arrayListElementos.size() ){
									jsonDocumento.put("_id", objBadges.getString("_id"));
									jsonDocumento.put("nome", jsonBadge.get("nome"));
									jsonDocumento.put("badge", jsonBadge.get("badge"));
									jsonDocumento.put("entidadeCertificadora", jsonBadge.get("entidadeCertificadora"));
								    jsonDocumento.put("descricao", jsonBadge.get("descricao"));
								    jsonDocumento.put("habilidades", jsonBadge.get("habilidades")); 
								    jsonDocumento.put("tags", jsonBadge.get("tags"));
								    jsonDocumento.put("totalHabilidades", "");
								    jsonDocumento.put("totalPossuiHabilidades", "");
									jsonDocumento.put("arrayHabilidades", "");
									documentos.add(jsonDocumento);									
								};
							};
							if (jsonBadge.get("tipo").equals("numero interesse")){
								ArrayList arrayListElementos = new ArrayList(); 
								arrayListElementos = (ArrayList) jsonPerfil.get("habilidadesInteresse");
								if (Integer.valueOf((String) jsonBadge.get("parametro")) < arrayListElementos.size() ){
									jsonDocumento.put("_id", objBadges.getString("_id"));
									jsonDocumento.put("nome", jsonBadge.get("nome"));
									jsonDocumento.put("badge", jsonBadge.get("badge"));
									jsonDocumento.put("entidadeCertificadora", jsonBadge.get("entidadeCertificadora"));
								    jsonDocumento.put("descricao", jsonBadge.get("descricao"));
								    jsonDocumento.put("habilidades", jsonBadge.get("habilidades")); 
								    jsonDocumento.put("tags", jsonBadge.get("tags"));
								    jsonDocumento.put("totalHabilidades", "");
								    jsonDocumento.put("totalPossuiHabilidades", "");
									jsonDocumento.put("arrayHabilidades", "");
									documentos.add(jsonDocumento);									
								};
							};
						} catch (ParseException e) {
							e.printStackTrace();
						}
					};
					mongoBadge.close();
					return documentos;
				} catch (UnknownHostException e) {
					e.printStackTrace();
				} catch (MongoException e) {
					e.printStackTrace();
				}
			};
			if (item.equals("habilidades") | item.equals("habilidades-interesse") |
				item.equals("cursos-necessarias-habilidades") | item.equals("cursos-interesse-habilidades")){
				ArrayList arrayList = new ArrayList(); 
				if (item.equals("habilidades")){
					arrayList = (ArrayList) jsonPerfil.get("habilidades");
				}else{
					arrayList = (ArrayList) jsonPerfil.get("habilidadesInteresse");
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
							ObterCursosNecessarios (objHabilidades.get("idHabilidade"), documentos);
						}else{
							JSONObject jsonDocumento = new JSONObject();
						    jsonDocumento.put("documento", objHabilidades);
							JSONArray cursos = new JSONArray();
							ObterCursosNecessarios (objHabilidades.get("idHabilidade"), cursos);
							jsonDocumento.put("cursos", cursos);
							documentos.add(jsonDocumento);
						};
					};
					mongoHabilidades.close();
					++w;
				};
			};
			if (item.equals("habilidades-elementos")){
				ArrayList arrayList = new ArrayList(); 
				arrayList = (ArrayList) jsonPerfil.get("habilidades");
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
					arrayList = (ArrayList) jsonPerfil.get("carreiras");
				}else{
					arrayList = (ArrayList) jsonPerfil.get("carreirasInteresse");
				}
		    	Object array[] = arrayList.toArray(); 
				ArrayList arrayListElementos = new ArrayList(); 
				arrayListElementos = (ArrayList) jsonPerfil.get("habilidades");
		    	Object arrayElementos[] = arrayListElementos.toArray(); 
		    	if (!elemento.equals("undefined")){
		    		ObterHabilidadesCursosNecessarias(elemento, arrayElementos, documentos, false);
		    	}else{
					int w = 0;
					while (w < array.length) {
						if (item.equals("habilidades-necessarias-carreiras") | item.equals("habilidades-interesse-carreiras")){
							ObterHabilidadesCursosNecessarias(array[w], arrayElementos, documentos, false);
						}else{
							ObterHabilidadesCursosNecessarias(array[w], arrayElementos, documentos, true);
						};
						++w;
					};
		    	};
			};
			if (item.equals("habilidades-necessarias-badges") | item.equals("habilidades-interesse-badges") |
					item.equals("cursos-necessarias-badges") | item.equals("cursos-interesse-badges") |
					item.equals("habilidades-necessarias-badge")){
				ArrayList arrayList = new ArrayList(); 
				if (item.equals("habilidades-necessarias-badges") | item.equals("cursos-necessarias-badges")){
					arrayList = (ArrayList) jsonPerfil.get("badges");
				}else{
					arrayList = (ArrayList) jsonPerfil.get("badgesInteresse");
				}
		    	Object array[] = arrayList.toArray(); 
				ArrayList arrayListElementos = new ArrayList(); 
				arrayListElementos = (ArrayList) jsonPerfil.get("habilidades");
		    	Object arrayElementos[] = arrayListElementos.toArray(); 
		    	if (!elemento.equals("undefined")){
		    		ObterHabilidadesCursosNecessariasBadge(elemento, arrayElementos, documentos, false);
		    	}else{
					int w = 0;
					while (w < array.length) {
						if (item.equals("habilidades-necessarias-badges") | item.equals("habilidades-interesse-badges")){
							ObterHabilidadesCursosNecessariasBadge(array[w], arrayElementos, documentos, false);
						}else{
							ObterHabilidadesCursosNecessariasBadge(array[w], arrayElementos, documentos, true);
						};
						++w;
					};
		    	};
			};
			if (item.equals("cursos-interesse") | item.equals("cursos-andamento") | item.equals("cursos-inscrito") | item.equals("cursos")){
				ArrayList arrayList = new ArrayList(); 
				if (item.equals("cursos-interesse")){
					arrayList = (ArrayList) jsonPerfil.get("cursosInteresse");
				};
				if (item.equals("cursos-inscrito")){
					arrayList = (ArrayList) jsonPerfil.get("cursosInscrito");
				};
				if (item.equals("cursos-andamento")){
					arrayList = (ArrayList) jsonPerfil.get("cursosAndamento");
				};
				if (item.equals("cursos")){
					arrayList = (ArrayList) jsonPerfil.get("cursos");
				};
		    	Object array[] = arrayList.toArray(); 
				int w = 0;
				while (w < array.length) {
					Mongo mongoCursos = new Mongo();
					DB dbCursos = (DB) mongoCursos.getDB("documento");
					DBCollection collectionCursos = dbCursos.getCollection("cursos");
					BasicDBObject searchQueryCursos = new BasicDBObject();
					JSONObject jsonDocumento = new JSONObject();
					if (item.equals("cursos-inscrito")){
						List arrayInscritos = (List) jsonPerfil.get("cursosInscrito");
						JSONObject  cursoInscrito = (JSONObject) arrayInscritos.get(w);
						String idCurso = cursoInscrito.get("id").toString();
						searchQueryCursos.put("documento.idCurso", idCurso);
						jsonDocumento.put("inscricao", cursoInscrito.get("inscricao").toString());
						jsonDocumento.put("todaysDate", commons.todaysDate("inv_month_number"));
					}else{
						searchQueryCursos = new BasicDBObject("documento.idCurso", array[w]);
					};
					DBObject cursorCursos = collectionCursos.findOne(searchQueryCursos);
					if (cursorCursos != null){
						BasicDBObject objCursos = (BasicDBObject) cursorCursos.get("documento");
						jsonDocumento.put("documento", objCursos);
						documentos.add(jsonDocumento);
					};
					mongoCursos.close();
					++w;
				};
			};
			mongo.close();
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
	@Path("/atualizar/perfil")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response AtualizarPerfil(JSONObject newPerfil) throws MongoException, JsonParseException, JsonMappingException, IOException {
		
		String usuario = newPerfil.get("usuario").toString();	
		Mongo mongo = new Mongo();
		DB db = (DB) mongo.getDB("documento");
		DBCollection collection = db.getCollection("userPerfil");
		BasicDBObject searchQuery = new BasicDBObject("documento.usuario", usuario);
		DBObject cursor = collection.findOne(searchQuery);
		if (cursor != null){
			BasicDBObject objUserPerfil = new BasicDBObject();
			objUserPerfil = (BasicDBObject) cursor.get("documento");
			String tipo = newPerfil.get("tipo").toString();	
			String elemento = newPerfil.get("id").toString();	
			String inout = newPerfil.get("inout").toString();	
			Boolean existente = false;
			List<String> array = (List<String>) objUserPerfil.get(tipo);
			for (int i = 0; i < array.size(); i++) {
				if (elemento == array.get(i).toString()){
					existente = true;
					if (inout.equals("out")){
						array.remove(i);
					};
				};
			};
			if (!existente){
				if (inout.equals("in")){
					array.add(elemento);
					atualizaDependencia(elemento, array);
				};
			};
			objUserPerfil.put(tipo, array);
			BasicDBObject update = new BasicDBObject("$set", new BasicDBObject(objUserPerfil));
			searchQuery = new BasicDBObject("documento.usuario", usuario);
			cursor = collection.findAndModify(searchQuery,
	                null,
	                null,
	                false,
	                update,
	                true,
	                false);
			mongo.close();
			return Response.status(200).build();
		};		
		mongo.close();
		return Response.status(404).build();
	};
	private void atualizaDependencia(String elemento, List<String> array) {
		Mongo mongo;
		try {
			mongo = new Mongo();
			DB db = (DB) mongo.getDB("documento");
			DBCollection collection = db.getCollection("habilidade");
			BasicDBObject searchQuery = new BasicDBObject("documento.idHabilidade", elemento);
			DBObject cursor = collection.findOne(searchQuery);
			if (cursor != null){
				BasicDBObject objHabilidade = (BasicDBObject) cursor.get("documento");
				@SuppressWarnings("unchecked")
				List<String> arrayPreRequisitos = (List<String>) objHabilidade.get("preRequisitos");
				for (int i = 0; i < arrayPreRequisitos.size(); i++) {
					Boolean existente = false;
					for (int w = 0; w < array.size(); w++) {
						if (arrayPreRequisitos.get(i).toString() == array.get(i).toString()){
							existente = true;
						};
					};
					if (!existente){
						array.add(arrayPreRequisitos.get(i).toString());
					};					
				};
			};
			mongo.close();
		} catch (UnknownHostException | MongoException e) {
			e.printStackTrace();
		};
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
	private ArrayList<String> ObterHabilidadesCursosNecessarias(Object carreira, Object[] arrayElementos, JSONArray documentos, Boolean obterCursos) {
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
						ObterCursosNecessarios (arrayHabilidades[w], documentos);
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
	private ArrayList<String> ObterHabilidadesCursosNecessariasBadge(Object badge, Object[] arrayElementos, JSONArray documentos, Boolean obterCursos) {
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
						ObterCursosNecessarios (arrayHabilidades[w], documentos);
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
	private JSONObject ObterTotalHabilidades (Object carreira, Object[] arrayElementos, ArrayList<String> arrayListElementosFaltantes) {
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
	private JSONObject ObterTotalHabilidadesBadges (Object badge, Object[] arrayElementos, ArrayList<String> arrayListElementosFaltantes) {
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
	private ArrayList<String> ObterCursosNecessarios (Object habilidade, JSONArray documentos) {

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
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Path("/cursosSugeridos")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response CursosSugeridos(JSONObject inputCursosSugeridos)  {
		
		Mongo mongo;
			try {
				mongo = new Mongo();
				DB db = (DB) mongo.getDB("documento");
				DBCollection collection = db.getCollection("userPerfil");
				List arrayCursosSugeridos = (List) inputCursosSugeridos.get("cursosSugeridos");
				for (int i = 0; i < arrayCursosSugeridos.size(); i++) {
					JSONObject cursosSugeridos = new JSONObject();
					cursosSugeridos.putAll((Map) arrayCursosSugeridos.get(i));
					String usuario = (String) cursosSugeridos.get("usuario");
					BasicDBObject searchQuery = new BasicDBObject("documento.usuario", usuario);
					DBObject cursor = collection.findOne(searchQuery);
					if (cursor == null){
						mongo.close();
						return Response.status(404).build();
					};
					BasicDBObject objUserPerfil = (BasicDBObject) cursor.get("documento");
					objUserPerfil.remove("cursosSugeridos");
					objUserPerfil.put("cursosSugeridos", cursosSugeridos.get("cursos"));
					BasicDBObject update = new BasicDBObject("$set", new BasicDBObject(objUserPerfil));
					searchQuery = new BasicDBObject("documento.usuario", usuario);
					cursor = collection.findAndModify(searchQuery,
			                null,
			                null,
			                false,
			                update,
			                true,
			                false);
				};
				mongo.close();
				return Response.status(200).build();
			} catch (UnknownHostException e) {
				e.printStackTrace();
			} catch (MongoException e) {
				e.printStackTrace();
			};
			return null;
	};
	
};
