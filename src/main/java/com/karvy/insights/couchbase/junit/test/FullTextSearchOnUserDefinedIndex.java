/**
 * 
 */
package com.karvy.insights.couchbase.junit.test;

import com.couchbase.client.java.Bucket;
import com.couchbase.client.java.Cluster;
import com.couchbase.client.java.CouchbaseCluster;
import com.couchbase.client.java.search.SearchQuery;
import com.couchbase.client.java.search.queries.MatchQuery;
import com.couchbase.client.java.search.result.SearchQueryResult;
import com.couchbase.client.java.search.result.SearchQueryRow;

/**
 * @author sudeer.bayapureddy
 *
 */
public class FullTextSearchOnUserDefinedIndex {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//we'll use that Cluster and Bucket for the remainder of the examples
		Cluster cluster = CouchbaseCluster.create("192.168.203.45");//("127.0.0.1");
		Bucket bucket = cluster.openBucket("survey");//("beer-sample");

		//we use a simple form of query:
		SearchQuery ftq = MatchQuery.on("survey_fti").match("role").limit(3).build();

		//we fire the query and look at results
		SearchQueryResult result = bucket.query(ftq);
		//System.out.println("totalHits: " + result.totalHits());
		for (SearchQueryRow row : result) {
		    System.out.println(row);
		}
		
		bucket.close();
}

}
