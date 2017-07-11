package com.karvy.insights.couchbase.junit.test;

import com.couchbase.client.CouchbaseClient;
import com.google.gson.Gson;
import com.karvy.insights.couchbase.config.CouchbaseClientConfigurationWithOutN1QL;
import com.karvy.insights.couchbase.vo.LoginVO;

public class Karvy_insight_bucket_testing {

	public static void main(String[] args) {
		
		try{
		
		CouchbaseClient couchbaseClient = CouchbaseClientConfigurationWithOutN1QL.getCouchbaseClient();

		System.out.println("Sample  Sample  Sample  Sample");
		
		/*SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

		UUID uuid = UUID.randomUUID();
		Calendar calendar = GregorianCalendar.getInstance();
		long currentTime = calendar.getTimeInMillis();
		String currentTimeString = dateFormatter.format(calendar.getTime());

		String id = currentTime + "-" + uuid.toString();
		
		String username = "sudeer.bayapureddy@karvy.com";

		LoginVO user = new LoginVO();
 		 user.setEmailId(username);
 		 user.setPassword("123456");
 		 user.setMobileNumber("9949218569");
 		 user.setIsActive("true");
 		 
         Gson json = new Gson(); 
         
         String jsonString = json.toJson(user); 
         
         couchbaseClient.set("user::"+username, jsonString); */
         
         System.out.println("GSON object : "+couchbaseClient.get("user::"+"sudeer.bayapureddy@karvy.com"));
		
        //couchbaseClient.get("user::"+"sudeer.bayapureddy@karvy.com".toString(),LoginVO.class);
        
        Gson json = new Gson(); 
        
        LoginVO loginvo = json.fromJson(couchbaseClient.get("user::"+"sudeer.bayapureddy@karvy.com").toString(),LoginVO.class); 
         
         System.out.println("GSON loginvo "+loginvo.getEmailId());

         CouchbaseClientConfigurationWithOutN1QL.couchBaseClientShutdown();
         
         System.out.println("couchBaseClientShutdown ");
         
		}catch(Exception e){
			e.printStackTrace();
		}
	}

}
