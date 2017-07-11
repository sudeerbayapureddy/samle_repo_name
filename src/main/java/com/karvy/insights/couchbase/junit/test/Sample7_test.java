package com.karvy.insights.couchbase.junit.test;

import java.net.URI;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.LinkedList;
import java.util.List;
import java.util.UUID;

import com.couchbase.client.CouchbaseClient;
import com.couchbase.client.java.document.json.JsonObject;
import com.karvy.insights.couchbase.config.CouchbaseClientConfigurationWithOutN1QL;

public class Sample7_test {

	public static void main(String[] args) { 
		 
        System.out.println("--------------------------------------------------------------------------"); 
        System.out.println("\tCouchbase JSON Document Storage Operations"); 
        System.out.println("--------------------------------------------------------------------------"); 
 
 
        List<URI> uris = new LinkedList<URI>(); 
 
        uris.add(URI.create("http://192.168.203.17:8091/pools")); 
 
        CouchbaseClient cb = null; 
        
        try { 
           // cb = CouchbaseClientConfigurationWithOutN1QL.getCouchbaseClient();//new CouchbaseClient(uris, "default", ""); 
 
        	cb = new CouchbaseClient(uris, "aussie-coins-bucket", ""); 
 
            SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

    	    UUID uuid = UUID.randomUUID();
    	    Calendar calendar = GregorianCalendar.getInstance();
    	    long currentTime = calendar.getTimeInMillis();
    	    String currentTimeString = dateFormatter.format(calendar.getTime());

    	    String id = currentTime + "-" + uuid.toString();
    	    
            JsonObject user = JsonObject.empty()
    	    	    .put("_id", id)
    	    	    .put("_rev", "rev_id")
    	    	    .put("text", "testing -id and rev")
    	    	    .put("check", Boolean.FALSE)
    	    	    .put("created_at",currentTimeString);
    	    
            cb.set("doc99",user.toString());
            System.out.println("Stored value :"+ cb.get("doc99") ); 
            System.out.println();
 
 
            System.out.println("\n\n"); 
 
            //cb.shutdown(10, TimeUnit.SECONDS);
            
            CouchbaseClientConfigurationWithOutN1QL.couchBaseClientShutdown();
 
        } catch (Exception e) { 
            System.err.println("Error connecting to Couchbase: " + e.getMessage()); 
        } 
 
    } 

}
