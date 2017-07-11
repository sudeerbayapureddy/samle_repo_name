package com.karvy.insights.couchbase.junit.test;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

public class RestClient_Couchbase {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//String url = "http://192.168.203.17:4984/"; //"http://localhost:59840";
		String url = "http://srv-kdms-cbase:8091/index.html#sec=buckets";
		
		
		
		/*String name = "java2novice";
		String password = "Simple4u!";
		String authString = name + ":" + password;
		String authStringEnc = new BASE64Encoder().encode(authString.getBytes());
		System.out.println("Base64 encoded auth string: " + authStringEnc);*/
		
		Client restClient = Client.create();
		WebResource webResource = restClient.resource(url);
		ClientResponse resp = webResource.get(ClientResponse.class);
		
		
		/*ClientResponse resp = webResource.accept("application/json").header("Authorization", "Basic " + authStringEnc)
				.get(ClientResponse.class);*/
		
		if (resp.getStatus() != 200) {
			System.err.println("Unable to connect to the server");
		}
		
		String output = resp.getEntity(String.class);
		System.out.println("response: " + output);
	}

}
