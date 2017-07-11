package com.karvy.insights.couchbase.junit.test;

import com.couchbase.client.java.Bucket;
import com.couchbase.client.java.Cluster;
import com.couchbase.client.java.CouchbaseCluster;
import com.couchbase.client.java.env.CouchbaseEnvironment;
import com.couchbase.client.java.env.DefaultCouchbaseEnvironment;
import com.couchbase.client.java.query.N1qlQuery;
import com.couchbase.client.java.query.N1qlQueryResult;
import com.couchbase.client.java.query.N1qlQueryRow;

public class Sample14_Remote_Couchbase_N1QL {

	public static void main(String[] args) {

		CouchbaseEnvironment env = DefaultCouchbaseEnvironment.builder().queryEnabled(true).connectTimeout(9 * 60000)
				.managementTimeout(9 * 60000).computationPoolSize(5).build();

		// 1 MINUTES = 60000 MILLISECONDS

		Cluster cluster = CouchbaseCluster.create(env, "192.168.84.167");

		Bucket bucket = cluster.openBucket("default", "");

		System.out.println("Sample  Sample14_Remote_Couchbase_N1QL");

		// String statement = "SELECT * FROM `travel-sample`";// WORKING FINE
		String statement = "SELECT airportname, city, country FROM `travel-sample` WHERE type=\"airport\" AND city=\"Reno\"";
		N1qlQuery query = N1qlQuery.simple(statement);

		System.out.println("Results from a simple statement: " + statement);
		
		N1qlQueryResult result = bucket.query(query);
		
		for (N1qlQueryRow row : result) {
			System.out.println("row " + row.value());
		}
		
		String statement_update = "UPDATE `travel-sample` SET airportname='Reno Tahoe Intl' WHERE city=\"Reno\"";
		N1qlQuery query_update = N1qlQuery.simple(statement_update);

		System.out.println("Results from a simple statement_update : " + statement_update);
		
		N1qlQueryResult result_update = bucket.query(query_update);
		
		for (N1qlQueryRow row_update : result_update) {
			System.out.println("row_update " + row_update.value());
		}
		
		String statement_insert = "INSERT INTO `travel-sample` (KEY, VALUE) VALUES ('odwalla-juice1-insert-key',{'productId': 'odwalla-juice1', 'unitPrice': 4.40, 'type': 'product', 'color':'green'})";
		N1qlQuery query_insert = N1qlQuery.simple(statement_insert);

		System.out.println("Results from a simple statement_insert: " + statement_insert);
		
		N1qlQueryResult result_insert = bucket.query(query_insert);
		
		for (N1qlQueryRow row_insert : result_insert) {
			System.out.println("row_insert " + row_insert.value());
		}
		
		String statement_delete = "DELETE FROM `travel-sample` WHERE productId='odwalla-juice1'";
		N1qlQuery query_delete = N1qlQuery.simple(statement_delete);

		System.out.println("Results from a simple statement_delete : " + statement_delete);
		
		N1qlQueryResult result_delete = bucket.query(query_delete);
		
		for (N1qlQueryRow row_delete : result_delete) {
			System.out.println("row_delete " + row_delete.value());
		}

		cluster.disconnect();
	}

}
