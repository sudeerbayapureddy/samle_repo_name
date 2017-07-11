package com.karvy.insights.couchbase.junit.test;

import java.net.URI;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import com.couchbase.client.CouchbaseClient;

public class Sample6 {

	public static void main(String[] args) { 
		 
        System.out.println("--------------------------------------------------------------------------"); 
        System.out.println("\tCouchbase JSON Document Storage Operations"); 
        System.out.println("--------------------------------------------------------------------------"); 
 
 
        List<URI> uris = new LinkedList<URI>(); 
 
        uris.add(URI.create("http://192.168.203.17:8091/pools")); 
 
        CouchbaseClient cb = null; 
        
        try { 
            cb = new CouchbaseClient(uris, "aussie-coins-bucket", "admin","123456"); 
            
            System.out.println(" Store simple JSON"); 
            cb.set("mydoc", "{\"doctype\":\"test\", \"name\":\"John Smith\"}"); 
            
            System.out.println("Stored value :"+ cb.get("mydoc") );   
            
            //System.out.println("Stored value :"+ cb.get("0d7fbf29-6e36-42c8-93c4-5d325ad62566")); 
            
                cb.shutdown(10, TimeUnit.SECONDS);
            
 
        } catch (Exception e) { 
            System.err.println("Error connecting to Couchbase: " + e.getMessage()); 
        } 
 
    } 

}
