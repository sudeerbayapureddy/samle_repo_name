package com.karvy.insights.couchbase.junit.test;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.UUID;

import com.couchbase.client.java.Bucket;
import com.couchbase.client.java.Cluster;
import com.couchbase.client.java.CouchbaseCluster;
import com.couchbase.client.java.env.CouchbaseEnvironment;
import com.couchbase.client.java.env.DefaultCouchbaseEnvironment;

public class Sample5_Login_Check {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		CouchbaseEnvironment env = DefaultCouchbaseEnvironment.builder().queryEnabled(true).connectTimeout(9 * 60000)
				.managementTimeout(9 * 60000).computationPoolSize(5).build();

		// 1 MINUTES = 60000 MILLISECONDS

		Cluster cluster = CouchbaseCluster.create(env, "192.168.203.17");// (env,"49.205.154.139");

		Bucket bucket = cluster.openBucket("sync_gateway", "");

		

		try {
			SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

			UUID uuid = UUID.randomUUID();
			Calendar calendar = GregorianCalendar.getInstance();
			long currentTime = calendar.getTimeInMillis();
			String currentTimeString = dateFormatter.format(calendar.getTime());

			String id = currentTime + "-" + uuid.toString();
			
			String username = "sudeerbayapureddy@gmail.com";

			/*JsonObject user = JsonObject.empty()
					.put("_id", id)
					.put("userId", username)
					.put("password","123456")
					.put("active", true)
					.put("created_at", currentTimeString);*/
			
			/*User user = new User();
			user.setUserId("vamsi@gmail.com");
			user.setPassword("123456");
			user.setMobileNo("9949218569");
			user.setIsActive("true");
			
			JsonObject temp = JsonObject.create().put("user_key_111", user.toString());

			Gson gsonObject = new Gson();
			String gsonToJSONString = gsonObject.toJson(user);
			
			bucket.upsert(JsonDocument.create("user::"+username, temp));

			JsonDocument doc = bucket.get("user::" + username);
			
			System.out.println("get doc "+doc.content().getString("userId")+" "+doc.content().getString("created_at"));*/

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		cluster.disconnect();
	}

}
