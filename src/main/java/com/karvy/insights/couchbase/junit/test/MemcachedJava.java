package com.karvy.insights.couchbase.junit.test;

import java.net.InetSocketAddress;
import java.util.concurrent.Future;

import net.spy.memcached.MemcachedClient;

public class MemcachedJava {
	public static void main(String[] args) {

		try {
			// Connecting to Memcached server on localhost
			MemcachedClient mcc = new MemcachedClient(new InetSocketAddress("192.168.84.167", 11211));
			System.out.println("Connection to server sucessful.");

			// now set data into memcached server
			Future fo = mcc.set("tutorialspoint", 900, "Free Education");

			// print status of set method
			System.out.println("set status:" + fo.get());

			// retrieve and check the value from cache
			System.out.println("tutorialspoint value in cache - " + mcc.get("tutorialspoint"));

			// Shutdowns the memcached client
			mcc.shutdown();

		} catch (Exception ex) {
			System.out.println(ex.getMessage());
		}
	}
}
