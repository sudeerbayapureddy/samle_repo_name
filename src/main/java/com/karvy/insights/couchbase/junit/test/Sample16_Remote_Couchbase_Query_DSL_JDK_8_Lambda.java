package com.karvy.insights.couchbase.junit.test;

import static com.couchbase.client.java.query.Select.select;

import com.couchbase.client.java.Bucket;
import com.couchbase.client.java.Cluster;
import com.couchbase.client.java.CouchbaseCluster;
import com.couchbase.client.java.env.CouchbaseEnvironment;
import com.couchbase.client.java.env.DefaultCouchbaseEnvironment;

public class Sample16_Remote_Couchbase_Query_DSL_JDK_8_Lambda {

	public static void main(String[] args) {

		CouchbaseEnvironment env = DefaultCouchbaseEnvironment.builder().build();

		// 1 MINUTES = 60000 MILLISECONDS

		Cluster cluster = CouchbaseCluster.create(env, "192.168.84.167");

		Bucket bucket = cluster.openBucket("default", "");

		System.out.println("Sample  Sample16_Remote_Couchbase_Query_DSL_JDK_8_Lambda");

		/*bucket.async()
		.query(select("*").from("`travel-sample`"))
		.subscribe(result -> {
		    result.errors()
		        .subscribe(
		            e -> System.err.println("N1QL Error/Warning: " + e),
		            runtimeError -> runtimeError.printStackTrace()
		        );
		    result.rows()
		        .map(row -> row.value())
		        .subscribe(
		        		 rowContent -> System.out.println("rowContent : "+rowContent),
		                 runtimeError -> runtimeError.printStackTrace()
		        );
		    }
		);*/
		
		cluster.disconnect();
	}

}
