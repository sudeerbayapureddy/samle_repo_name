package com.karvy.insights.couchbase.constant;

import java.io.InputStream;
import java.util.Properties;

import org.apache.log4j.Logger;

/**
 * @author sudeer.bayapureddy
 *
 */

public class Constants {
	
	private final static Logger logger = Logger.getLogger(Constants.class.getName());
	
	private static Properties props = new Properties();
	
	static {

		try {

			ClassLoader loader = Thread.currentThread().getContextClassLoader();
			InputStream is = loader.getResourceAsStream("couchbase.properties");

			props.load(is);
			
			logger.info("Constants static block "+props.getProperty("bucketname")+" "+props.getProperty("COUCHBASE_WITH_OUT_JAVA_NODE_1"));

			//props.getProperty("DB_DRIVER_CLASS");

		} catch (Exception exception) {
			//logger.info("DatabaseInstance creation problem " + exception);
			exception.printStackTrace();
		}

	}
	
	public static final String COUCHBASE_BUCKET_NAME = props.getProperty("bucketname");//"default";
	
	
	public static final String COUCHBASE_WITH_OUT_JAVA_NODE_1 = props.getProperty("COUCHBASE_WITH_OUT_JAVA_NODE_1");//"http://192.168.203.17:8091/pools";
	
	//public static final String COUCHBASE_WITH_OUT_JAVA_NODE_2 = props.getProperty("COUCHBASE_WITH_OUT_JAVA_NODE_2");//"http://127.0.0.1:8091/pools";
	
	
	public static final String COUCHBASE_WITH_JAVA_NODE_1 = props.getProperty("COUCHBASE_WITH_JAVA_NODE_1");//"http://192.168.203.17";
	
	//public static final String COUCHBASE_WITH_JAVA_NODE_2 = props.getProperty("COUCHBASE_WITH_JAVA_NODE_2");//"http://127.0.0.1";
	
	public static final String REDIRECT_CONTROLLER_LOGIN = "/login";
	
	public static final String REDIRECT_CONTROLLER_CONTACT = "/contact";

	public static final String REDIRECT_CONTROLLER_ABOUT_US = "/aboutus";
	
	public static final String LOGIN_SUCCESS_CONTROLLER = "/loginSuccess";
	
	public static final String LOGIN_SUCCESS_MESSAGE = "<strong>Thank you for successfully confirming your participation in the KI Panel.</strong> Kindly take 5 minutes of your valuable time to complete the form below.<br/>These are required so that we can send you profile appropriate surveys.<br/>Please submit this form to start getting surveys.";
	
}
