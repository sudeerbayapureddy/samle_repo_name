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

public class CouchbaseSSLSecurityCertificate {

	/*public static void Main(string[] args)
        {
            //Note: change the IP's below to your own cluster's IP's to run
            var config = new ClientConfiguration
            {
                Servers = new List<Uri>
                {
                    new Uri("http://192.168.56.101:8091/pools"),
                    new Uri("http://192.168.56.102:8091/pools"),
                    new Uri("http://192.168.56.103:8091/pools"),
                    new Uri("http://192.168.56.104:8091/pools"),
                },
                UseSsl = false,
                BucketConfigs = new Dictionary<string, BucketConfiguration>
                {
                    {"default", new BucketConfiguration
                    {
                        BucketName = "default",
                        UseSsl = true,
                        Password = "",
                        PoolConfiguration = new PoolConfiguration
                        {
                            MaxSize = 10,
                            MinSize = 5
                        }
                    }}
                }
            };

            using (var cluster = new Cluster(config))
            {
                IBucket bucket = null;
                try
                {
                    bucket = cluster.OpenBucket();
                    //use the bucket here
                }
                finally
                {
                    if (bucket != null)
                    {
                        cluster.CloseBucket(bucket);
                    }
                }
            }
        }*/
}
