package com.karvy.insights.couchbase.junit.test;

import java.net.InetSocketAddress;
import java.util.Date;

import net.spy.memcached.MemcachedClient;

public class CreateMemcacheClient {
	public static void main(String[] args) throws Exception {
		MemcachedClient memcacheClient = new MemcachedClient(new InetSocketAddress("192.168.84.167", 11211));

		Object objectToCache = new Object();
		memcacheClient.set("keyObject", 3600, objectToCache);

		Date startDate = new Date();
		memcacheClient.set("keyDate", 3600, startDate);

		Object fetchedObject = memcacheClient.get("keyName");
		Date fetchedDate = (Date) memcacheClient.get("keyDate");
	}
}
