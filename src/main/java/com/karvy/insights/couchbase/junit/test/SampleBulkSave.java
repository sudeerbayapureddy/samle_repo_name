package com.karvy.insights.couchbase.junit.test;

import java.util.ArrayList;
import java.util.List;

import com.couchbase.client.java.Bucket;
import com.couchbase.client.java.Cluster;
import com.couchbase.client.java.CouchbaseCluster;
import com.couchbase.client.java.document.JsonDocument;
import com.couchbase.client.java.document.json.JsonObject;
import com.couchbase.client.java.env.CouchbaseEnvironment;
import com.couchbase.client.java.env.DefaultCouchbaseEnvironment;

import rx.Observable;
import rx.functions.Func1;

public class SampleBulkSave {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		CouchbaseEnvironment env = DefaultCouchbaseEnvironment.builder().connectTimeout(9 * 60000)
				.managementTimeout(9 * 60000).computationPoolSize(5).build();

		// 1 MINUTES = 60000 MILLISECONDS

		Cluster cluster = CouchbaseCluster.create(env, "192.168.203.114");

		final Bucket bucket = cluster.openBucket("default", "");

		System.out.println("Sample  Sample  Sample  Sample");

		try {
			
			// Generate a number of dummy JSON documents
			int docsToCreate = 10;//int docsToCreate = 100;
			List<JsonDocument> documents = new ArrayList<JsonDocument>();
			for (int i = 0; i < docsToCreate; i++) {
			    JsonObject content = JsonObject.create()
			        .put("counter", i)
			        .put("name", "Couchbase Bulk Save "+i);
			    documents.add(JsonDocument.create("doc-"+i, content));
			}

			// Insert them in one batch, waiting until the last one is done.
			Observable
			    .from(documents)
			    .flatMap(new Func1<JsonDocument, Observable<JsonDocument>>() {
			        public Observable<JsonDocument> call(final JsonDocument docToInsert) {
			            return bucket.async().insert(docToInsert);
			        }
			    })
			    .last()
			    .toBlocking()
			    .single();
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		cluster.disconnect();
	}
}
