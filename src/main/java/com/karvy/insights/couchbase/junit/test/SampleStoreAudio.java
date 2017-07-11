package com.karvy.insights.couchbase.junit.test;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.net.URI;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import javax.sound.sampled.AudioFileFormat;
import javax.sound.sampled.AudioFormat;
import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.AudioSystem;

import com.couchbase.client.CouchbaseClient;

public class SampleStoreAudio {

	private static CouchbaseClient cb = null;

	/**
	 * Flag for debugging messages. If true, some messages are dumped to the
	 * console during operation.
	 */
	private static final boolean DEBUG = false;

	/**
	 * The size of the temporary read buffer, in frames.
	 */
	private static final int BUFFER_LENGTH = 1024;

	public static void main(String[] args) {

		List<URI> uris = new LinkedList<URI>();
		uris.add(URI.create("http://192.168.84.167:8091/pools"));

		try {
			cb = new CouchbaseClient(uris, "default", "");

			saveAudioInCouchbase();
			// extractAudioFromCouchbase();

			cb.shutdown(10, TimeUnit.SECONDS);

		} catch (Exception e) {
			System.err.println("Error : " + e.getMessage());
			System.err.println("Error : " + e.getStackTrace());
		}

	}

	private static void saveAudioInCouchbase() throws Exception {

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
			// System.out.println(ex.printStackTrace());

		}
		byte[] bytes = bos.toByteArray();

		 cb.set("myaudio", "{\"myaudio_key\":\""+bytes+"\"}");
	}

}
