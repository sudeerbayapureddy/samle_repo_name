package com.karvy.insights.couchbase.junit.test;

import java.net.URI;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import com.couchbase.client.CouchbaseClient;

public class SampleGetAndTouch {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		List<URI> uris = new LinkedList<URI>(); 
		 
        uris.add(URI.create("http://192.168.84.167:8091/pools")); 
 
        CouchbaseClient cb = null; 

		System.out.println("Sample  Sample  Sample  Sample");

		try {

			cb = new CouchbaseClient(uris, "default", "");
			
			System.out.println("first time "+cb.getAndTouch("user::sudeer.bayapureddy@karvy.com",30).toString());
			
            cb.shutdown(10, TimeUnit.SECONDS);
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
