package com.karvy.insights.couchbase.junit.test;

import java.net.URI;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import com.couchbase.client.CouchbaseClient;

import net.spy.memcached.CASResponse;
import net.spy.memcached.CASValue;

public class SampleCAS {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		List<URI> uris = new LinkedList<URI>(); 
		 
        uris.add(URI.create("http://192.168.84.167:8091/pools")); 
 
        CouchbaseClient cb = null; 

		System.out.println("Sample  Sample  Sample  Sample");

		try {

			cb = new CouchbaseClient(uris, "default", "");
			
			CASValue<Object> cas = cb.gets("user::sudeer.bayapureddy@karvy.com");
			System.out.println(cas.getCas()+" \n "+cas.getClass()+" \n "+cas.getValue());
			
			CASResponse casr = cb.cas("user::sudeer.bayapureddy@karvy.com", cas.getCas(), "{\"doctype\":\"test\", \"name\":\"John Smith\"}");
			if (casr.equals(CASResponse.OK)) {
				System.out.println("Value was updated");
			} else if (casr.equals(CASResponse.NOT_FOUND)) {
				System.out.println("Value is not found");
			} else if (casr.equals(CASResponse.EXISTS)) {
				System.out.println("Value exists, but CAS didn't match");
			}
			
			cb.shutdown(10, TimeUnit.SECONDS);
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
