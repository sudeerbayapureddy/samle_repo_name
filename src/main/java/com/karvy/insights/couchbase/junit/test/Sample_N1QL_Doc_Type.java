package com.karvy.insights.couchbase.junit.test;

import com.couchbase.client.java.Bucket;
import com.couchbase.client.java.Cluster;
import com.couchbase.client.java.CouchbaseCluster;
import com.couchbase.client.java.document.json.JsonObject;
import com.couchbase.client.java.env.CouchbaseEnvironment;
import com.couchbase.client.java.env.DefaultCouchbaseEnvironment;
import com.couchbase.client.java.view.ViewQuery;
import com.couchbase.client.java.view.ViewResult;

public class Sample_N1QL_Doc_Type {

	public static void main(String[] args) {

		CouchbaseEnvironment env = DefaultCouchbaseEnvironment.builder().queryEnabled(true).connectTimeout(9 * 60000)
				.managementTimeout(9 * 60000).computationPoolSize(5).build();

		// 1 MINUTES = 60000 MILLISECONDS

		Cluster cluster = CouchbaseCluster.create(env, "192.168.84.167");

		Bucket bucket = cluster.openBucket("default", "");

		System.out.println("Sample  Sample Sample Sample Sample");

		// Perform the ViewQuery
		ViewResult result = bucket.query(ViewQuery.from("dev_usertype", "usertype"));//(design_type,view_type)

		// Iterate through the returned ViewRows
		int count = 0;
		for (com.couchbase.client.java.view.ViewRow row : result) {
			count = count +1;
		    System.out.println(count + " inside for loop key " + row.key()+"\tid\t"+row.id()+"\tvalue\t"+row.value());
		    
		    JsonObject  jsonObject = (JsonObject) row.value();
		    System.out.println("userType "+jsonObject.get("docType"));
		}
		
		cluster.disconnect();
	}

}
