<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script type="text/javascript" src="../resources/js/kiscript.js"> </script>
</head>
<body>

	<div class="main">
        <div class="main-inner">
            <div class="content">
                <div class="mt-150">
    <div class="hero-image">
    <div class="hero-image-inner" style="background-image: url('../resources/images/tmp/checkpoint-banner.jpg');">
        <div class="hero-image-content">
            <div class="container">
                <h1> Karvy Insights</h1>

                <p>OUR NAME KI IS INSPIRED BY THE INDIAN PRANA AND DENOTES <br>THE CIRCULATING LIFE ENERGY/ VITAL FORCE <br>
				We help discover, facilitate, enhance, develop and <br>
				evolve different facets of life by understanding and developing <br>strategies based on all its nuances, detail<br> and complexities.

				</p>
               
            </div><!-- /.container -->
        </div><!-- /.hero-image-content -->

        <div class="hero-image-form-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 col-sm-offset-8 col-lg-4 col-lg-offset-7">
                      <form:form method="post" commandName="loginForm" action="./loginSuccess" onsubmit="return checkEmptyValues();"> 
                      <%--  <form:form method="post" action="./loginSuccess"> --%>
							<div class="block-head"><div id="checkemptyvalues"></div>
							<font color="red"><h3>${loginStatus}</h3></font>
                            <h2>Login</h2>
							</div>
							
							     <div class="hero-image-userid form-group">

                                <form:input path="emailId" type="text" class="form-control" placeholder="Enter User Id" id="emailId" size="30" autocomplete="off" value="sudeer.bayapureddy@karvy.com" />
								<form:errors path="emailId" cssStyle="color: #f8bb03" />
                                
                            </div><!-- /.form-group -->


                            <div class="hero-image-password form-group">
                            
                            <form:input path="password" type="password"	class="form-control" placeholder="Enter Password" id="password" size="30" autocomplete="off" value="123456"/> 
									<form:errors path="password" cssStyle="color: #f8bb03" />
									    
                            </div><!-- /.form-group -->
			    
			    <div class="hero-image-mobilenumber form-group">

                                 <form:input path="mobileNumber" type="text" class="form-control" placeholder="Enter Mobile No"
									id="mobileNumber" maxlength="10" size="26" autocomplete="off" value="9949218569"/>
									 <form:errors path="mobileNumber" cssStyle="color:#f8bb03" />
									 
                            </div><!-- /.form-group -->
							<br/>
                            <button type="submit" class="btn btn-primary btn-block">Login</button>
                        </form:form>
                    </div><!-- /.col-* -->
                </div><!-- /.row -->
            </div><!-- /.container -->
        </div><!-- /.hero-image-form-wrapper -->
    </div><!-- /.hero-image-inner -->
</div><!-- /.hero-image -->

</div>
				<div class="container">
		<div class="page-header">
		<div class="block-head center">
		<h1>About INSIGHTS</h1>
		</div>
		<p>Karvy is an integrated financial services company that straddles multiple spaces ranging from stock and commodities broking, transaction processing, data management, lending etc. While its focus has been in providing services in the financial sector, it also provides services in the banking, insurance, telecom and government spaces. The Karvy Group has over 12000 people spread across 480 branches in India, and every 6th Indian is serviced by Karvy.</p>
		<br/>
	</div><!-- /.page-header -->
	
		
	
		<div class="block background-white background-transparent-image fullwidth">
        <div class="page-header block-head center">
    <h1>Mobile App</h1>
    
</div><!-- /.page-header -->

<div class="mobileapp-wrapper">
    <div class="row">
        <div class="col-sm-8">
            <div class="row">
                <div class="col-sm-12">
                  <h3 style="margin:0px; padding:0px;">Download KARVY INSIGHTS Android app</h3> <br>
					<p>
						<a target="_blank" href="#"><img alt="Get it on Google Play" src="../resources/images/en_generic_rgb_wo_45.png" border="0" ></a>
					</p>
                </div><!-- /.col-* -->
            </div><!-- /.row -->

        </div><!-- /.col-* -->

        <div class="col-sm-4">
            <div class="mobileapp mobileapp-tall" style="text-align:right;">
                <img src="../resources/images/mobile_app_screen.jpg" class="img-responsive"/>
            </div><!-- /.card -->
        </div><!-- /.col-* -->
    </div><!-- /.row -->
</div>
	</div>
            </div><!-- /.content -->
        </div><!-- /.main-inner -->
    </div><!-- /.main -->

  

</div><!-- /.page-wrapper -->

	
</body>
</html>