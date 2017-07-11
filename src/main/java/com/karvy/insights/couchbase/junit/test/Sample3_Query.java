package com.karvy.insights.couchbase.junit.test;

import static com.couchbase.client.java.query.Select.select;
import static com.couchbase.client.java.query.dsl.Expression.s;
import static com.couchbase.client.java.query.dsl.Expression.x;

import java.net.URI;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import com.couchbase.client.CouchbaseClient;
import com.couchbase.client.java.Bucket;
import com.couchbase.client.java.Cluster;
import com.couchbase.client.java.CouchbaseCluster;
import com.couchbase.client.java.query.N1qlQuery;
import com.couchbase.client.java.query.N1qlQueryResult;
import com.couchbase.client.java.query.N1qlQueryRow;
import com.couchbase.client.java.query.Statement;

public class Sample3_Query {

	public static void main(String[] args) { 
		 
		System.setProperty("viewmode", "development"); // before the connection to Couchbase
		 
        System.out.println("--------------------------------------------------------------------------"); 
        System.out.println("\tCouchbase JSON Document Storage Operations"); 
        System.out.println("--------------------------------------------------------------------------"); 
 
 
        List<URI> uris = new LinkedList<URI>(); 
 
        uris.add(URI.create("http://192.168.84.167:8091/pools")); 
 
        CouchbaseClient cb = null;
        
        
        
        try { 
        	//cb = new CouchbaseClient(uris, "default", ""); 
        	
        	// Connect to localhost
        	Cluster cluster = CouchbaseCluster.create();

        	// Open the default bucket and the "beer-sample" one
        	Bucket defaultBucket = cluster.openBucket();//bucket
        	Bucket beerSampleBucket = cluster.openBucket("default");
        	
        	//import static com.couchbase.client.java.query.Select.*;
        	//import static com.couchbase.client.java.query.dsl.Expression.*;
        	Statement statement = select("*").from("default").where(x("type").eq(s("user")));
        	//SELECT * FROM default WHERE type = "blog";
        	
        	
        	N1qlQuery query = N1qlQuery.simple(statement);
        	N1qlQueryResult result = defaultBucket.query(query);
        	System.out.println("Hello, users in their fifties: ");
        	for (N1qlQueryRow row : result)
        	{ 
        		
        		//String userId = row.value().getString("userid");
        	System.out.println("N1QL userId : "+row + "!"); }
        	
            System.out.println("\n\n view created successfully"); 
 
            cb.shutdown(10, TimeUnit.SECONDS);
            
           // CouchbaseClientConfigurationWithOutN1QL.couchBaseClientShutdown();
 
        } catch (Exception e) { 
            System.err.println("Error connecting to Couchbase: " + e.getMessage()); 
        } 
 
    } 

}
