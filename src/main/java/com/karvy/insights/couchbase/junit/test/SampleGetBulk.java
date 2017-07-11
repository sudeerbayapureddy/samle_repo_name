package com.karvy.insights.couchbase.junit.test;

import java.net.URI;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import com.couchbase.client.CouchbaseClient;
import com.karvy.insights.couchbase.remote.entities.User;


public class SampleGetBulk {


    private static CouchbaseClient cb = null;


    public static void main(String[] args) {

        List<URI> uris = new LinkedList<URI>();
        uris.add(URI.create("http://192.168.203.114:8091/pools"));

        try {
            cb = new CouchbaseClient(uris, "default", "");
            
            List<String> keyList = new ArrayList<String>();
            keyList.add("doc-0");//("1071adb4-75b6-44cc-9fa3-63bbc26a529c");
            keyList.add("doc-1");//("166e52c5-e3ac-485a-aa82-b26cb1a6a0f0");
            keyList.add("doc-2");//("1ee29705-ec83-4cf6-b7c0-92a33724c59b");
            
            
            Map<String,Object> keyvalues = cb.getBulk(keyList);
            
        	System.out.println("first key value \t"+keyvalues.get("doc-0"));//("1071adb4-75b6-44cc-9fa3-63bbc26a529c"));
        	System.out.println("second key value \t"+keyvalues.get("doc-1"));//get("166e52c5-e3ac-485a-aa82-b26cb1a6a0f0"));
        	System.out.println("third key value \t"+keyvalues.get("doc-2"));//get("1ee29705-ec83-4cf6-b7c0-92a33724c59b"));
        	
        	
        	/*String jsonStringFromCouchbase = cb.get("takeSurvey::question_1").toString();
        	JSONParser parser = new JSONParser();
            Object obj = parser.parse(jsonStringFromCouchbase);
            JSONObject jsonObject = (JSONObject)obj;
            System.out.println("jsonObject.get questionType "+jsonObject.get("questionType"));//("questionId"));//("questionType"));
          
            User userDoc = json.fromJson(jsonStringFromCouchbase,User.class);
            
            System.out.println("Doc details :"+ userDoc.getUserEmailId() +" "+userDoc.getPassword()+" "+userDoc.getMobileNumber()); 
           */ 
            
            cb.shutdown(10, TimeUnit.SECONDS);

        } catch (Exception e) {
            System.err.println("Error : " + e.getMessage());
        }

    }

}
