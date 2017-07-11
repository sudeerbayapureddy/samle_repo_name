package com.karvy.insights.couchbase.config;

import java.net.URI;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import com.couchbase.client.CouchbaseClient;
import com.google.gson.Gson;
import com.karvy.insights.couchbase.constant.Constants;

public class CouchbaseClientConfigurationWithOutN1QL {

	public static CouchbaseClient couchbaseClient = null;
	
	public static List<URI> uris = null;
	
	public static Gson gson = null;
	
	public static CouchbaseClient getCouchbaseClient() {
		
		try {

			uris = new LinkedList<URI>();

			uris.add(URI.create(Constants.COUCHBASE_WITH_OUT_JAVA_NODE_1));
			//uris.add(URI.create(Constants.COUCHBASE_WITH_OUT_JAVA_NODE_2));

			if (couchbaseClient == null) {
				//with out SSL
				couchbaseClient = new CouchbaseClient(uris, Constants.COUCHBASE_BUCKET_NAME, "");
				//with SSL Certification
				//couchbaseClient = new CouchbaseClient(uris, Constants.COUCHBASE_BUCKET_NAME+"?", "");
			}

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return couchbaseClient;
	}
	
	public static void couchBaseClientShutdown(){
		
		couchbaseClient.shutdown(10, TimeUnit.SECONDS); 
		
	}

	public static Gson getGSON() {

		if (gson == null) {
			gson = new Gson();
		}
		return gson;
	}
	
}
