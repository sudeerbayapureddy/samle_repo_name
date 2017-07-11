/**
 * 
 */
package com.karvy.insights.couchbase.junit.test;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * @author sudeer.bayapureddy
 *
 */
public class SampleReadAndStoreAudio {

	/**
	 * @param args
	 */
	public static void main(String[] args) throws FileNotFoundException, IOException {
		File file = new File("C:\\Users\\sudeer.bayapureddy\\Downloads\\Blockbuster.mp3");

		FileInputStream fis = new FileInputStream(file);
		// System.out.println(file.exists() + "!!");
		// InputStream in = resource.openStream();
		ByteArrayOutputStream bos = new ByteArrayOutputStream();
		byte[] buf = new byte[1024];
		try {
			for (int readNum; (readNum = fis.read(buf)) != -1;) {
				bos.write(buf, 0, readNum); // no doubt here is 0
				// Writes len bytes from the specified byte array starting at
				// offset off to this byte array output stream.
				System.out.println("read " + readNum + " bytes,");
			}
		} catch (Exception ex) {
			//System.out.println(ex.printStackTrace());
			
		}
		byte[] bytes = bos.toByteArray();

		// below is the different part
		File someFile = new File("C:\\Users\\sudeer.bayapureddy\\Downloads\\BlockbusterTemp.mp3");
		FileOutputStream fos = new FileOutputStream(someFile);
		fos.write(bytes);
		fos.flush();
		fos.close();
	}
}
