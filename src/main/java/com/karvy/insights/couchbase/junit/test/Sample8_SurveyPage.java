package com.karvy.insights.couchbase.junit.test;

import java.net.URI;
import java.util.LinkedList;
import java.util.List;

import com.couchbase.client.CouchbaseClient;
import com.karvy.insights.couchbase.config.CouchbaseClientConfigurationWithOutN1QL;



public class Sample8_SurveyPage {

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
 
        	/*SurveyPage surveyPage = new SurveyPage();
        	surveyPage.setHeader("header_section_java");
        	surveyPage.setFooter("copy_rights_java");
        	surveyPage.setMenu("menu_links_java");
        	surveyPage.setContent("displayed_content_java");
    		
            Gson json = new Gson(); 
            
            String jsonString = json.toJson(surveyPage); 
            cb.set("surveyPageDoc_123", jsonString); 
            System.out.println("GSON object : "+cb.get("surveyPageDoc_123"));
            //cb.shutdown(10, TimeUnit.SECONDS);
*/            
            CouchbaseClientConfigurationWithOutN1QL.couchBaseClientShutdown();
 
        } catch (Exception e) { 
            System.err.println("Error connecting to Couchbase: " + e.getMessage()); 
        } 
 
    } 

}
