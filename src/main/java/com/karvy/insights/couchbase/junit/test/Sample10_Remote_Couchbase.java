package com.karvy.insights.couchbase.junit.test;

import java.net.URI;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.LinkedList;
import java.util.List;
import java.util.UUID;

import com.couchbase.client.CouchbaseClient;
import com.karvy.insights.couchbase.config.CouchbaseClientConfigurationWithOutN1QL;

public class Sample10_Remote_Couchbase {

	public static void main(String[] args) { 
		 
        System.out.println("--------------------------------------------------------------------------"); 
        System.out.println("\tCouchbase JSON Document Storage Operations"); 
        System.out.println("--------------------------------------------------------------------------"); 
 
 
        List<URI> uris = new LinkedList<URI>(); 
 
        uris.add(URI.create("http://srv-kdms-cbase:8091/pools")); //srv-kdms-cbase.karvy.com/192.168.84.167:11210,
        
        //uris.add(URI.create("http://srv-kdms-cbase.karvy.com:8091/pools"));
 
        CouchbaseClient cb = null; 
        
        try { 
           // cb = CouchbaseClientConfigurationWithOutN1QL.getCouchbaseClient();//new CouchbaseClient(uris, "default", ""); 
 
        	cb = new CouchbaseClient(uris, "default", ""); 
 
            SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    	    UUID uuid = UUID.randomUUID();
    	    Calendar calendar = GregorianCalendar.getInstance();
    	    long currentTime = calendar.getTimeInMillis();
    	    String currentTimeString = dateFormatter.format(calendar.getTime());

    	    /*String id = currentTime + "-" + uuid.toString();
    	    
            JsonObject user = JsonObject.empty()
    	    	    .put("text", "sample text from java")
    	    	    .put("check", Boolean.FALSE)
    	    	    .put("created_at",currentTimeString);*/
    	    
    	    String userEmailId="sudeer.bayapureddy@karvy.com";
    	    
    	   /* User remoteEntityUser = new User();
    	    remoteEntityUser.setUserEmailId(userEmailId);
    	    remoteEntityUser.setPassword("123456");
    	    remoteEntityUser.setMobileNumber("9949218569");
    	    remoteEntityUser.setIsActive("true");
    	    
    	    Gson json = new Gson(); 
            
            String jsonString = json.toJson(remoteEntityUser); 
    	    
            cb.set("user::"+userEmailId,jsonString);
            System.out.println("Stored value :"+ cb.get("user::"+userEmailId) ); */
            System.out.println();
 
 
            System.out.println("\n\n"); 
 
            //cb.shutdown(10, TimeUnit.SECONDS);
            
            CouchbaseClientConfigurationWithOutN1QL.couchBaseClientShutdown();
 
        } catch (Exception e) { 
            System.err.println("Error connecting to Couchbase: " + e.getMessage()); 
        } 
 
    } 

}
