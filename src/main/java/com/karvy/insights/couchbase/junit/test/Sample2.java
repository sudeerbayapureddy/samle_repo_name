package com.karvy.insights.couchbase.junit.test;

import java.net.URI;
import java.util.LinkedList;
import java.util.List;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import com.couchbase.client.CouchbaseClient;
import com.google.gson.Gson;
import com.karvy.insights.couchbase.config.CouchbaseClientConfigurationWithOutN1QL;
import com.karvy.insights.couchbase.remote.entities.User;

public class Sample2 {

	public static void main(String[] args) { 
		 
        System.out.println("--------------------------------------------------------------------------"); 
        System.out.println("\tCouchbase JSON Document Storage Operations"); 
        System.out.println("--------------------------------------------------------------------------"); 
 
 
        List<URI> uris = new LinkedList<URI>(); 
 
        uris.add(URI.create("http://192.168.84.167:8091/pools")); 
 
        CouchbaseClient cb = null; 
        
        try { 
           cb = new CouchbaseClient(uris, "survey", "");// CouchbaseClientConfigurationWithOutN1QL.getCouchbaseClient();//new CouchbaseClient(uris, "default", ""); 
 
        	//cb = new CouchbaseClient(uris,"restful-sample",""); //"aussie-coins-bucket", ""); 
        	
            /*{ 
                System.out.println(" Store simple JSON"); 
                cb.set("mydoc", "{\"doctype\":\"test\", \"name\":\"John Smith\"}"); 
                System.out.println("Stored value :"+ cb.get("mydoc") ); 
                System.out.println(); 
            } */
 
            { 
                System.out.println(" Store simple JSON using GSON parsing"); 
                User user = new User();
        		user.setUserEmailId("sudeer.bayapureddy@karvy.com");
        		user.setPassword("123456");
        		user.setMobileNumber("9949218569");
        		user.setIsActive("true");
        		
                Gson json = new Gson(); 
                
                String jsonString = json.toJson(user); 
                cb.set("user::sudeer.bayapureddy@karvy.com", jsonString); 
                System.out.println("GSON object : "+cb.get("user::sudeer.bayapureddy@karvy.com"));
                
                String jsonStringFromCouchbase = cb.get("user::sudeer.bayapureddy@karvy.com").toString();
                
                JSONParser parser = new JSONParser();
                Object obj = parser.parse(jsonStringFromCouchbase);
                JSONObject jsonObject = (JSONObject)obj;
                System.out.println("jsonObject.get "+jsonObject.get("userEmailId"));//("questionId"));//("questionType"));
                
                User userDoc = json.fromJson(jsonStringFromCouchbase,User.class);
                
                System.out.println("Doc details :"+ userDoc.getUserEmailId() +" "+userDoc.getPassword()+" "+userDoc.getMobileNumber()); 
                
                
 
                System.out.println(""); 
            } 
 
 
            System.out.println("\n\n"); 
 
            //cb.shutdown(10, TimeUnit.SECONDS);
            
            CouchbaseClientConfigurationWithOutN1QL.couchBaseClientShutdown();
 
        } catch (Exception e) { 
            System.err.println("Error connecting to Couchbase: " + e.getMessage()); 
        } 
 
    } 

}
