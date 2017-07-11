package com.karvy.insights.couchbase.junit.test;

import java.net.URI;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import com.couchbase.client.CouchbaseClient;
import com.google.gson.Gson;
import com.karvy.insights.couchbase.remote.entities.User;

public class SampleGetAndLock {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		List<URI> uris = new LinkedList<URI>(); 
		 
        uris.add(URI.create("http://192.168.203.114:8091/pools")); 
 
        CouchbaseClient cb = null; 

		System.out.println("Sample  Sample  Sample  Sample");

		try {

			cb = new CouchbaseClient(uris, "default", "");
			
			System.out.println("first time "+cb.getAndLock("user::sudeer.bayapureddy@karvy.com",30).toString());
			
			User user = new User();
    		user.setUserEmailId("sai@karvy.com");
    		user.setPassword("123");
    		user.setMobileNumber("9949218569");
    		user.setIsActive("true");
    		
            Gson json = new Gson(); 
            
            String jsonString = json.toJson(user); 
            
            cb.set("user::sudeer.bayapureddy@karvy.com", jsonString); 
			
            cb.shutdown(10, TimeUnit.SECONDS);
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
