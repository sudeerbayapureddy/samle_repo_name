package com.karvy.insights.couchbase.junit.test;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.InputStream;
import java.net.URI;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import javax.imageio.ImageIO;

import com.couchbase.client.CouchbaseClient;


public class SampleStoreImage {


    private static CouchbaseClient cb = null;


    public static void main(String[] args) {

        List<URI> uris = new LinkedList<URI>();
        uris.add(URI.create("http://192.168.84.167:8091/pools"));

        try {
            cb = new CouchbaseClient(uris, "default", "");

            saveImageInCouchbase();
            extractImageFromCouchbase();

            cb.shutdown(10, TimeUnit.SECONDS);

        } catch (Exception e) {
            System.err.println("Error : " + e.getMessage());
        }

    }

    private static void saveImageInCouchbase() throws Exception {
        BufferedImage image = ImageIO.read(new File("C:/Users/sudeer.bayapureddy/Downloads/SGS-Teaser-Talk.jpg"));
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write( image, "png", baos );
        baos.flush();
        byte[] bytes = baos.toByteArray();
        baos.close();
        cb.set("myimage", bytes).get();
    }

    private static void extractImageFromCouchbase() throws Exception {
        byte[] bytes = (byte[])cb.get("myimage");
        InputStream in = new ByteArrayInputStream(bytes);
        BufferedImage buffImage = ImageIO.read(in);
        ImageIO.write(buffImage, "png", new File( "C:/Users/sudeer.bayapureddy/Downloads/SGS-TEMP.png"  ));

    }

}
