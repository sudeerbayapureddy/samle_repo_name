package com.karvy.insights.couchbase.junit.test;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import com.couchbase.client.java.Bucket;
import com.couchbase.client.java.Cluster;
import com.couchbase.client.java.CouchbaseCluster;
import com.couchbase.client.java.document.JsonDocument;
import com.couchbase.client.java.document.json.JsonObject;
import com.couchbase.client.java.env.CouchbaseEnvironment;
import com.couchbase.client.java.env.DefaultCouchbaseEnvironment;

public class Sample4_Sync_Gateway {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		CouchbaseEnvironment env = DefaultCouchbaseEnvironment.builder().queryEnabled(true).connectTimeout(9 * 60000)
				.managementTimeout(9 * 60000).computationPoolSize(5).build();

		// 1 MINUTES = 60000 MILLISECONDS

		Cluster cluster = CouchbaseCluster.create(env, "192.168.203.17");// (env,"49.205.154.139");

		Bucket bucket = cluster.openBucket("sync_gateway", "");

		System.out.println("Sample  Sample  Sample  Sample");

		try {
			createGroceryItem("sampeljavatext",bucket);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		/*// Create a JSON document and store it with the ID "helloworld"
		JsonObject content = JsonObject.create().put("hello", "world");

		JsonDocument inserted = bucket.upsert(JsonDocument.create("helloworld", content));

		// Read the document and print the "hello" field
		JsonDocument found = bucket.get("helloworld");*/
		
		//System.out.println("Couchbase is the best database in the " + found.content().getString("hello"));

		cluster.disconnect();
	}
	
	private static void createGroceryItem(String text,Bucket bucket) throws Exception {

	    SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

	    UUID uuid = UUID.randomUUID();
	    Calendar calendar = GregorianCalendar.getInstance();
	    long currentTime = calendar.getTimeInMillis();
	    String currentTimeString = dateFormatter.format(calendar.getTime());

	    String id = currentTime + "-" + uuid.toString();

	   // Document document = bucket.createDocument();

	    /*Map<String, Object> properties = new HashMap<String, Object>();
	    properties.put("_id", id);
	    properties.put("text", text);
	    properties.put("check", Boolean.FALSE);
	    properties.put("created_at", currentTimeString);
	    */
	    
	    JsonObject user = JsonObject.empty()
	    	    .put("_id", id)
	    	    .put("text", text)
	    	    .put("check", Boolean.FALSE)
	    	    .put("created_at",currentTimeString);
	    
	    bucket.upsert(JsonDocument.create("java_id_123", user));
	    
	    System.out.println("inserted from java");

	    //Log.d(TAG, "Created new grocery item with id: %s", document.getId());

	    //return document;
	}



}
