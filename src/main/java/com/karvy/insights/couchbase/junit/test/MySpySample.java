package com.karvy.insights.couchbase.junit.test;

import net.spy.memcached.AddrUtil;
import net.spy.memcached.BinaryConnectionFactory;
import net.spy.memcached.MemcachedClient;

public class MySpySample {
	public static void main(String args[]) {
		MemcachedClient c = null;
		// Connect using the binary protocol
		try {
			c = new MemcachedClient(new BinaryConnectionFactory(), AddrUtil.getAddresses("192.168.84.167:11211"));
		} catch (Exception e) {
		}

		String samplestring = "{\"hello\":\"A sample string\"}";

		// Store a string, setting a timeout of 60 minutes (3600 secs)

		c.set("samplekeyMemCache", 3600, samplestring);

		System.out.println("Saved " + samplestring);

		// Retrieve the stored object

		Object mystored = c.get("samplekeyMemCache");

		System.out.println("Loaded " + (String) mystored);
		
		/*c.set("samplekey", 3600, "A sample string updateddddd");

		Object mystored2 = c.get("samplekey");

		System.out.println("Loaded updated " + (String) mystored2);
		
		System.out.println(" deleted "+c.delete("samplekey"));
		
		Object mystored3 = c.get("samplekey");

		System.out.println("Loaded updated " + (String) mystored3);*/

	}
}
