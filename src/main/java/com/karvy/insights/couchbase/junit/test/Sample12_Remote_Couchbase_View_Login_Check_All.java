package com.karvy.insights.couchbase.junit.test;

import com.couchbase.client.java.Bucket;
import com.couchbase.client.java.Cluster;
import com.couchbase.client.java.CouchbaseCluster;
import com.couchbase.client.java.env.CouchbaseEnvironment;
import com.couchbase.client.java.env.DefaultCouchbaseEnvironment;
import com.couchbase.client.java.view.ViewQuery;
import com.couchbase.client.java.view.ViewResult;

public class Sample12_Remote_Couchbase_View_Login_Check_All {

public static void main(String[] args) {
		
	try{	
	
		CouchbaseEnvironment env = DefaultCouchbaseEnvironment
			    .builder()
			    .connectTimeout(9*60000)
			    .computationPoolSize(5)
			    .build();
		
		//1 MINUTES	= 60000 MILLISECONDS
		
		Cluster cluster = CouchbaseCluster.create(env,"srv-kdms-cbase");//(env,"49.205.154.139");//http://srv-kdms-cbase:8091/pools
		
		Bucket bucket = cluster.openBucket("default", "");
		
		System.out.println("Sample  Sample  Sample  Sample");
		
		
		// Perform the ViewQuery
		ViewResult result = bucket.query(ViewQuery.from("dev_getuserDesign","getuserView"));//("dev_users", "users"));

		// Iterate through the returned ViewRows
		for (com.couchbase.client.java.view.ViewRow row : result) {
		    System.out.println("inside for loop "+row);
		}
		
		
		cluster.disconnect();
	}catch(Exception e){
		e.printStackTrace();
	}
	} 

}
