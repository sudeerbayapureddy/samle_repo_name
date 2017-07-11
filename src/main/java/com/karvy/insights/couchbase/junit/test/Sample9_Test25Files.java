package com.karvy.insights.couchbase.junit.test;

import java.net.URI;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import com.couchbase.client.CouchbaseClient;
import com.google.gson.Gson;
//import com.karvy.insights.couchbase.entity.PollSurvey;
//import com.karvy.insights.couchbase.entity.PollSurvey;



public class Sample9_Test25Files {

	public static void main(String[] args) { 
		 
        System.out.println("--------------------------------------------------------------------------"); 
        System.out.println("\tCouchbase JSON Document Storage Operations"); 
        System.out.println("--------------------------------------------------------------------------"); 
 
 
        List<URI> uris = new LinkedList<URI>(); 
 
        uris.add(URI.create("http://192.168.203.17:8091/pools")); 
 
        CouchbaseClient cb = null; 
        
        try { 
 
        	cb = new CouchbaseClient(uris, "aussie-coins-bucket", ""); 
        	
                System.out.println(" Store simple JSON");
                
            	//SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
            	//Calendar calendar = GregorianCalendar.getInstance();
         	    //String currentTimeString = dateFormatter.format(calendar.getTime());
         	    
                /*PollSurvey pollSurvey = new PollSurvey();
            	pollSurvey.setPollQuestion("Who will win the Twenty-20 world cup ?");
            	//pollSurvey.setOptions(new String[]{"INDIA","SA","AUS"});
            	pollSurvey.setIsActive("true");
            	pollSurvey.setActivityId(new Long(22));
            	//pollSurvey.setTimestamp(new Date(currentTimeString));
        		
                Gson json = new Gson(); 
                
                String jsonString = json.toJson(pollSurvey); 
                cb.set("pollSurveyDoc::"+pollSurvey.getActivityId(), jsonString); 
                System.out.println("GSON object : "+cb.get("pollSurveyDoc::"+pollSurvey.getActivityId()));*/
                
                //cb.set("mydoc", "{\"doctype\":\"test\", \"name\":\"John Smith\"}"); 
                //System.out.println("Stored value :"+ cb.get("1c62b4eb-2d4d-4023-be01-2894634dd357") ); 
                
           cb.shutdown(10, TimeUnit.SECONDS);
           System.out.println(" couchbase client dis-connected");
 
        } catch (Exception e) { 
            System.err.println("Error connecting to Couchbase: " + e.getMessage()); 
        } 
 
    } 

}
