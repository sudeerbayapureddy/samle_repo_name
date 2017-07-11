package com.karvy.insights.couchbase.config;

import java.util.ArrayList;
import java.util.List;

import com.couchbase.client.java.Bucket;
import com.couchbase.client.java.Cluster;
import com.couchbase.client.java.CouchbaseCluster;
import com.couchbase.client.java.document.json.JsonObject;
import com.couchbase.client.java.env.CouchbaseEnvironment;
import com.couchbase.client.java.env.DefaultCouchbaseEnvironment;
import com.karvy.insights.couchbase.constant.Constants;

public class CouchbaseClientConfigurationWithN1QL {

	public static CouchbaseEnvironment env = DefaultCouchbaseEnvironment.builder().queryEnabled(true)
			.connectTimeout(9 * 60000).managementTimeout(9 * 60000).computationPoolSize(5).build();

	// 1 MINUTES = 60000 MILLISECONDS

	public static Cluster cluster = CouchbaseCluster.create(env, getCouchBaseListOfNodes());// (env,"49.205.154.139");

	public static Bucket bucket = cluster.openBucket(Constants.COUCHBASE_BUCKET_NAME, "");// default

	public static JsonObject json = null;

	public static List<String> getCouchBaseListOfNodes() {

		List<String> uris = new ArrayList<String>();

		uris.add(Constants.COUCHBASE_WITH_JAVA_NODE_1);
		// uris.add(Constants.COUCHBASE_WITH_JAVA_NODE_2);

		return uris;

	}

	public static Cluster getCluster() {

		return cluster;

	}

	public static Bucket getBucket() {

		return bucket;

	}

	public static JsonObject getJSONObject() {
		
		if (json == null) {
			json = JsonObject.create();
		}
		return json;
	}
}
