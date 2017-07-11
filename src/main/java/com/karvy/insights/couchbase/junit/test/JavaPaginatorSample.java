package com.karvy.insights.couchbase.junit.test;

import java.net.URI;
import java.util.LinkedList;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import java.util.logging.ConsoleHandler;
import java.util.logging.Handler;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.couchbase.client.CouchbaseClient;
import com.couchbase.client.protocol.views.Paginator;
import com.couchbase.client.protocol.views.Query;
import com.couchbase.client.protocol.views.View;
import com.couchbase.client.protocol.views.ViewResponse;
import com.couchbase.client.protocol.views.ViewRow;

public class JavaPaginatorSample {

	public static void main(String[] args) {

		configure();
		System.out.println("--------------------------------------------------------------------------");
		System.out.println("\tCouchbase - Paginator");
		System.out.println("--------------------------------------------------------------------------");

		List<URI> uris = new LinkedList<URI>();
		uris.add(URI.create("http://192.168.84.167:8091/pools"));

		CouchbaseClient cb = null;
		try {
			cb = new CouchbaseClient(uris, "default", "");
			System.out.println("--------------------------------------------------------------------------");
			System.out.println("Breweries (by_name) with docs & JSON parsing");
			View view = cb.getView("dev_users", "users");//("test", "by_country");//("dev_userlogin", "userlogin")
			Query query = new Query();
			int docsPerPage = 2;

			Paginator paginatedQuery = cb.paginatedQuery(view, query, docsPerPage);
			int pageCount = 0;
			while (paginatedQuery.hasNext()) {
				pageCount++;
				System.out.println(" -- Page " + pageCount + " -- ");
				ViewResponse response = paginatedQuery.next();
				for (ViewRow row : response) {
					System.out.println(row.getKey() + " : " + row.getId());
				}
				System.out.println(" -- -- -- ");
			}

			System.out.println("\n\n");
			cb.shutdown(10, TimeUnit.SECONDS);
		} catch (Exception e) {
			System.err.println("Error connecting to Couchbase: " + e.getMessage());
		}
	}

	private static void configure() {

		for (Handler h : Logger.getLogger("com.couchbase.client").getParent().getHandlers()) {
			if (h instanceof ConsoleHandler) {
				h.setLevel(Level.OFF);
			}
		}
		Properties systemProperties = System.getProperties();
		systemProperties.put("net.spy.log.LoggerImpl", "net.spy.memcached.compat.log.SunLogger");
		System.setProperties(systemProperties);

		Logger logger = Logger.getLogger("com.couchbase.client");
		logger.setLevel(Level.OFF);
		for (Handler h : logger.getParent().getHandlers()) {
			if (h instanceof ConsoleHandler) {
				h.setLevel(Level.OFF);
			}
		}
	}

}