package com.karvy.insights.couchbase.junit.test;

import com.couchbase.client.java.Bucket;
import com.couchbase.client.java.Cluster;
import com.couchbase.client.java.CouchbaseCluster;
import com.couchbase.client.java.document.JsonDocument;
import com.couchbase.client.java.document.json.JsonObject;
import com.couchbase.client.java.env.CouchbaseEnvironment;
import com.couchbase.client.java.env.DefaultCouchbaseEnvironment;
import com.karvy.insights.couchbase.config.CouchbaseClientConfigurationWithN1QL;

public class Sample {

	public static void main(String[] args) {
		
		
		CouchbaseEnvironment env = DefaultCouchbaseEnvironment
			    .builder()
			    .connectTimeout(9*60000)
			    .managementTimeout(9*60000)
			    .computationPoolSize(5)
			    .build();
		
		//1 MINUTES	= 60000 MILLISECONDS
		
		//Cluster cluster = CouchbaseClientConfigurationWithN1QL.getCluster(); //CouchbaseCluster.create(env,"192.168.203.17");//(env,"49.205.154.139");
		
		Cluster cluster = CouchbaseCluster.create(env,"192.168.203.114");//(env,"49.205.154.139");
		
		Bucket bucket = cluster.openBucket("default", "");
		
		System.out.println("Sample  Sample  Sample  Sample");
		
		// Create a JSON document and store it with the ID "helloworld"
		JsonObject content = JsonObject.create().put("hello", "world");
		
		JsonDocument inserted = bucket.upsert(JsonDocument.create("helloworld", content));
		System.out.println("inserted "+inserted);
		// Read the document and print the "hello" field
		JsonDocument found = bucket.get("helloworld");
		System.out.println("Couchbase is the best database in the " + found.content().getString("hello"));
		
		
		cluster.disconnect();
	}
	
	
}
