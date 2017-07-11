package com.karvy.insights.couchbase.junit.test;

import com.couchbase.client.java.Bucket;
import com.couchbase.client.java.Cluster;
import com.couchbase.client.java.CouchbaseCluster;
import com.couchbase.client.java.env.CouchbaseEnvironment;
import com.couchbase.client.java.env.DefaultCouchbaseEnvironment;
import com.couchbase.client.java.view.ViewQuery;
import com.couchbase.client.java.view.ViewResult;

public class Sample13_Remote_Couchbase_View_Login_Check2 {

	public static void main(String[] args) {

		try {

			CouchbaseEnvironment env = DefaultCouchbaseEnvironment.builder().queryEnabled(true)
					.connectTimeout(9 * 60000).managementTimeout(9 * 60000).computationPoolSize(5).build();

			// 1 MINUTES = 60000 MILLISECONDS

			Cluster cluster = CouchbaseCluster.create(env, "srv-kdms-cbase");

			Bucket bucket = cluster.openBucket("default", "");

			System.out.println("Sample  Sample13_Remote_Couchbase_View_Login_Check2 ");

			// Perform the ViewQuery
			ViewQuery query = ViewQuery.from("dev_userlogin", "userlogin");
			//query.key("[%22sudeer.bayapureddy@karvy.com%22,%22123456%22,%229949218569%22]");
			
			//JsonArray keys = JsonArray.create().add("user").add("::").add("sudeer.bayapureddy@karvy.com");
			//query.keys(keys);
			
			
			 //JsonArray keys = JsonArray.create().add("sudeer.bayapureddy@karvy.com").add("123456").add("9949218569");
		     ////String keysJson = keys.toString();
		     //query.keys(keys);
			
			//query.startKeyDocId("1");//("user::sudeer.bayapureddy@karvy.com");
			
			//query.key("['sudeer.bayapureddy@karvy.com','123456','9949218569']");
			
			//query.key("sudeer.bayapureddy@karvy.com");
			//query.key("123456");
			//query.key("9949218569");
			
			//query.key("user::sudeer.bayapureddy@karvy.com");
			//query.key("['sudeer.bayapureddy@karvy.com','123456','9949218569']");

			// query.key("user::sudeer.bayapureddy@karvy.com");
			// .key("user::sudeer.bayapureddy@karvy.com"));
			// .key("['sudeer.bayapureddy@karvy.com','123456','9949218569']"));
			// ).key("sudeer.bayapureddy@karvy.com").key("123456").key("9949218569"));

			System.out.println("query : " + query);

			ViewResult result = bucket.query(query);
			System.out.println("result : " + result);

			// Iterate through the returned ViewRows
			for (com.couchbase.client.java.view.ViewRow row : result) {
				// User userLogIn_Remote_Jar = (User) row.getClass();
				System.out.println("row information : " +row+" "+ row.document().content());
				//row.document().
			}

			cluster.disconnect();

		} catch (Exception e) {
			System.err.println("Error connecting to Couchbase: " + e.getMessage());
		}

	}

}
