package com.karvy.insights.couchbase.junit.test;

import java.io.IOException;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;

public class App {

  public static void main(String[] args) throws IOException {
  
	  String view = "{\"language\":\"javascript\",\"views\":{\""
            + "dev_testview\":{\"map\":\"function (doc) {  "
            + "emit(doc._id, 1)}\",\"reduce\":\"_sum\" }}}";

    System.out.println("Result of load is " + loadDesignDoc(view, "default","dev_userlogin"));//(view, "default","dev_testview")); // do not use leading dev_ if you want a full cluster dataset view
  }

  public static boolean loadDesignDoc(String doc, String bucketname,
        String viewname) throws IOException {

    HttpClient httpclient = new DefaultHttpClient();
    //HttpPut httpput = new HttpPut("http://192.168.84.167:8092/" + bucketname+ "/_design/" + viewname); // use any one node in your cluster

    //HttpPut httpput = new HttpPut("http://192.168.84.167:8092/default/_design/dev_testview/_view/testview?stale=false&inclusive_end=true&connection_timeout=60000&limit=10&skip=0");
    
    HttpPut httpput = new HttpPut("http://192.168.84.167:8091/index.html#sec=views&viewsBucket=default&spatialFilter=stale%3Dfalse%26connection_timeout%3D60000&viewsFilter=inclusive_end%3Dtrue%26stale%3Dfalse%26connection_timeout%3D60000&viewsDDocId=_design%2Fdev_userlogin&viewsViewName=userlogin");
    
    
    StringEntity reqEntity = new StringEntity(doc);


    httpput.setEntity(reqEntity);

    HttpResponse response = httpclient.execute(httpput);

    System.out.println("View loading result is "  + response.getStatusLine());

    if (response.getStatusLine().getStatusCode() < 300) {
      return true;
    } else {
      return false;
    }
  }
}
