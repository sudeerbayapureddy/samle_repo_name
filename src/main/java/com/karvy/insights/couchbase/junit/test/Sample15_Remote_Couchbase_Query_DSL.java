package com.karvy.insights.couchbase.junit.test;

import static com.couchbase.client.java.query.Select.select;
import static com.couchbase.client.java.query.dsl.Expression.s;
import static com.couchbase.client.java.query.dsl.Expression.x;

import com.couchbase.client.java.Bucket;
import com.couchbase.client.java.Cluster;
import com.couchbase.client.java.CouchbaseCluster;
import com.couchbase.client.java.env.CouchbaseEnvironment;
import com.couchbase.client.java.env.DefaultCouchbaseEnvironment;
import com.couchbase.client.java.query.N1qlQueryResult;
import com.couchbase.client.java.query.N1qlQueryRow;

public class Sample15_Remote_Couchbase_Query_DSL {

	public static void main(String[] args) {

		CouchbaseEnvironment env = DefaultCouchbaseEnvironment.builder().queryEnabled(true).connectTimeout(9 * 60000)
				.managementTimeout(9 * 60000).computationPoolSize(5).build();

		// 1 MINUTES = 60000 MILLISECONDS

		Cluster cluster = CouchbaseCluster.create(env, "192.168.84.167");

		Bucket bucket = cluster.openBucket("default", "");

		System.out.println("Sample  Sample15_Remote_Couchbase_Query_DSL");

		// using the DSL
		//N1qlQueryResult result = bucket.query(select("*").from("`travel-sample`"));//WORKING fine
		
		N1qlQueryResult result = bucket.query(select("*").from("`travel-sample`").where(x("type").eq(s("airport")).add("AND").x("city").eq(s("Reno"))));////WORKING fine
		
		System.out.println("result " + result);

		System.out.println("Query status: " + (result.finalSuccess() ? "OK" : "ERRORS"));
		
		System.out.println("result.errors() " + result.errors());
		
		for (N1qlQueryRow row : result) {
			System.out.println("row information " + row.value());
		}

		
		
		
		cluster.disconnect();
	}

}
