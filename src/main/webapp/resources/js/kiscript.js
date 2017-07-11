var globalVariable;

function isNumberKey(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		alert("Enter Numarics Only");
		return false;
	}

	return true;
}

function enableEducationLevel() {
	document.getElementById("educationlevelID").style.display = "block";
}

function disableEducationLevel() {
	document.getElementById("educationlevelID").style.display = "none";
}

function enableAndDisableOccupation(currentOccupation) {
	if (currentOccupation == "SalariedProfessional") {
		document.getElementById("salariedProfessionalID").style.display = "block";
		document.getElementById("SelfEmployedProfessionalID").style.display = "none";
		document.getElementById("BusinessTraderShopOwnerID").style.display = "none";
	} else if (currentOccupation == "SelfEmployedProfessional") {
		document.getElementById("salariedProfessionalID").style.display = "none";
		document.getElementById("SelfEmployedProfessionalID").style.display = "block";
		document.getElementById("BusinessTraderShopOwnerID").style.display = "none";
	} else if (currentOccupation == "BusinessTraderShopOwner") {
		document.getElementById("salariedProfessionalID").style.display = "none";
		document.getElementById("SelfEmployedProfessionalID").style.display = "none";
		document.getElementById("BusinessTraderShopOwnerID").style.display = "block";
	}else{
		document.getElementById("salariedProfessionalID").style.display = "none";
		document.getElementById("SelfEmployedProfessionalID").style.display = "none";
		document.getElementById("BusinessTraderShopOwnerID").style.display = "none";
	}
}


function enableAndDisableKids(kidsStatus) {
	//alert("kidsStatus "+kidsStatus);
	if (kidsStatus == "Marriedwithkids") {
		document.getElementById("familyStatusMarriedwithkids").style.display = "block";
		document.getElementById("noOfKids").options[0].selected = true;
	}else{
		document.getElementById("familyStatusMarriedwithkids").style.display = "none";
		document.getElementById("kidssection").style.display = "none";
	}
}


function dobCheckingForAgeUnder18Years(selectedDate) {
	alert("selectedDate "+selectedDate);
}


function kidsCount(noofKids) {
			
	var noOfKidsInformation="";
	
	for(var i=1; i<=noofKids; i++){
		
		var jspKidsTotalInformation='<div class="form-group1 col-xs-4"> <span class="withchaild"><input type="radio" name="gender'+i+'" checked="checked" value="male" style="display:block;" />Male</span>';
		
		jspKidsTotalInformation+='<span class="withchaild"><input type="radio" name="gender'+i+'" value="female"  style="display:block;" />Female</span>';
		jspKidsTotalInformation+='<b class="agegroup">Age Group</b>';
		jspKidsTotalInformation+='<select name="agegroup'+i+'" class="form-control">'; 
		jspKidsTotalInformation+='<option value="SELECT">SELECT</option>';
		jspKidsTotalInformation+='<option value="0-5years">0-5 years</option>';
		jspKidsTotalInformation+='<option value="6-8years">6-8 years</option>';
		jspKidsTotalInformation+='<option value="9-12years">9-12 years</option>';
		jspKidsTotalInformation+='<option value="13-15years">13-15 years</option>';
		jspKidsTotalInformation+='<option value="16-18years">16-18 years</option>';
		jspKidsTotalInformation+='<option value="Morethan18years">More than18 years</option>';
		jspKidsTotalInformation+='</select> </div>';	
		
		noOfKidsInformation+=jspKidsTotalInformation;
		
	}
	
	document.getElementById("kidssection").innerHTML = "";
	document.getElementById("kidssection").innerHTML = noOfKidsInformation;
}

function enableOnlineVisit() {
	document.getElementById("onlinevisitID").style.display = "block";
	enableAndDisableSites(firstSurveyForm.elements["visitingSites"].value);
}

function disableOnlineVisit() {
	document.getElementById("onlinevisitID").style.display = "none";
	document.getElementById("visitingSitesBrowsefew").style.display = "none";
}

function enableMobileApps() {
	document.getElementById("mobileappsID").style.display = "block";
}

function disableMobileApps() {
	document.getElementById("mobileappsID").style.display = "none";
}

function enableAndDisableSites(sitesVisiting) {
	if (sitesVisiting == "Browsefew") {
		document.getElementById("visitingSitesBrowsefew").style.display = "block";
	}else if (sitesVisiting == "Browsemostly") {
		document.getElementById("visitingSitesBrowsefew").style.display = "block";
	}else if(sitesVisiting == "Browseno"){ 
		document.getElementById("visitingSitesBrowsefew").style.display = "none";
	} 
}


function enableAndDisableVehicle(vehicle) {
	if(vehicle=="Car"){
		document.getElementById("vehicleCar").style.display = "block";
		document.getElementById("vehicleBikeScooter").style.display="none";
		
	}else if(vehicle== "Both"){
		document.getElementById("vehicleCar").style.display = "block";
		document.getElementById("vehicleBikeScooter").style.display="block";
	}else if(vehicle=="Bike"){
		document.getElementById("vehicleCar").style.display = "none";
		document.getElementById("vehicleBikeScooter").style.display="block";
	}else{
		firstSurveyForm.elements["car"].value="";
		firstSurveyForm.elements["carModel"].value="";
		firstSurveyForm.elements["bike"].value="";
		firstSurveyForm.elements["bikeModel"].value="";
		document.getElementById("vehicleCar").style.display = "none";
		document.getElementById("vehicleBikeScooter").style.display="none";
	}
	
}

function confirmChangesFirstSurveyFirstPart() {
	
	//alert("dob "+document.getElementById("demo1").value);
	
	var dobAgeDifferenceOne = getAge(document.getElementById("demo1").value);
	
	var dobAgeDifferenceTwo = getAge(document.getElementById("demo2").value);
	
	//alert("dobAgeDifferenceTwoooooo  "+dobAgeDifferenceTwo);
	
	if(dobAgeDifferenceOne < 0){
		document.getElementById("fsdemo1message").innerHTML="<font color='red'>Please dont select future date</font>";
		return false;
	}
	
	if(dobAgeDifferenceTwo < 0){
		document.getElementById("fsdemo2message").innerHTML="<font color='red'>Please dont select future date</font>";
		return false;
	}
	
		var r = confirm("Do you want to proceed");
		if (r) {
			var availableHomeApplications = aboutYouForm.elements["availableHomeApplications"];
			var availableHomeApplicationsLength = availableHomeApplications.selectedOptions.length;
			for ( var i = 0; i < availableHomeApplicationsLength; i++) {
				homeApplicationsGlobal[i]=(availableHomeApplications.selectedOptions[i].value);
				}
			localStorage.setItem("homeApplicationsStorage", homeApplicationsGlobal);
			//alert("homeApplicationsGlobal array "+homeApplicationsGlobal);
			return true;
		} else {
			return false;
		}
	
}

var homeApplicationsGlobal = new Array();

function confirmChangesAboutYou() {

	//alert("dob "+document.getElementById("demo1").value);
	//alert("getAge  "+getAge(document.getElementById("demo1").value));
	
	var dobAgeDifference = getAge(document.getElementById("demo1").value);
	//alert("dobAgeDifferenceeeeeeee  "+dobAgeDifference);
	if(dobAgeDifference < 0){
		alert("Please dont select date of birth as future date.");
		return false;
	}
	
	if(aboutYouForm.elements["noOfKids"].value != "SELECT"){
		for(var z=1;z<=aboutYouForm.elements["noOfKids"].value;z++){
			if(aboutYouForm.elements["agegroup"+z].value == "SELECT" ){
				document.getElementById("kidsSectionErrorMessage").innerHTML="<font color='red'>Please select age group of kids</font>";
				return false;
			}
		}
	}
	
	if(aboutYouForm.elements["dob"].value.length > 0 && getAge(aboutYouForm.elements["dob"].value) < 18 ) {
		
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var actualEmailValue = aboutYouForm.elements["guardianEmailId"].value+"";

	    if (!filter.test(actualEmailValue)) {
		    alert("Please provide a valid guardian email address");
		    return false;
	    }
	    
	    
	    var phoneno = /^\d{10}$/;
		  if ((aboutYouForm.elements["guardianMobileNo"].value.match(phoneno))) {
			return true;
		} else {
			 alert("Please enter valid guardian mobile number");
			return false;
		}
	}
	
		for ( var i = 0; i < availableHomeApplicationsLength; i++) {
			homeApplicationsGlobal[i]=(availableHomeApplications.selectedOptions[i].value);
			}
		localStorage.setItem("homeApplicationsStorage", homeApplicationsGlobal);
		//alert("homeApplicationsGlobal array "+homeApplicationsGlobal);
		
		var r = confirm("Do you want to proceed");
		if (r) {
			var availableHomeApplications = aboutYouForm.elements["availableHomeApplications"];
			var availableHomeApplicationsLength = availableHomeApplications.selectedOptions.length;
			for ( var i = 0; i < availableHomeApplicationsLength; i++) {
				homeApplicationsGlobal[i]=(availableHomeApplications.selectedOptions[i].value);
				}
			localStorage.setItem("homeApplicationsStorage", homeApplicationsGlobal);
			//alert("homeApplicationsGlobal array "+homeApplicationsGlobal);
			document.getElementById("aboutYouSubmit").disabled=true;
			return true;
		} else {
			return false;
		}
	
}

function checkEmptyValues() {
	 
	var emailIdTemp = document.getElementById("emailId").value;
	var passwordTemp = document.getElementById("password").value
	var mobileNumberTemp = document.getElementById("mobileNumber").value
	
	if(emailIdTemp == "" || passwordTemp == "" || mobileNumberTemp == ""){
		document.getElementById("checkemptyvalues").innerHTML="<font color='red'><h3>Please enter valid credentials</h3></font>";
		return false;
	}else{
		return true;
	}
	
}

function customOnLoadAboutYou(){
	
	//alert("customOnLoadAboutYou "+aboutYouForm.elements["dob"].value+" "+getAge(aboutYouForm.elements["dob"].value));
	/*var str = window.location+"";
	
	if(str.indexOf("loginSuccess") !=-1){
		
		$(document).ready(function() { 
		        $.blockUI({ 
		            message: 'Thank you for successfully confirming your participation in the KI Panel.Kindly take 5 minutes of your valuable time to complete the form below.<br/><br/> These are required so that we can send you profile appropriate surveys.<br/> <br/>Please submit this form to start getting surveys.', 
		            timeout: 2000 
		        }); 
		});
		
	} */

	/*alert(aboutYouForm.elements["guardianEmailId"].value+" "+aboutYouForm.elements["guardianMobileNo"].value);
	
	if(aboutYouForm.elements["dob"].value.length > 0 && getAge(aboutYouForm.elements["dob"].value) < 18 ) {
		
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var actualEmailValue = aboutYouForm.elements["guardianEmailId"].value+"";

	    if (!filter.test(actualEmailValue)) {
		    alert("Please provide a valid email address");
		    return false;
	    }
		
		var mobileBooleanStatus = phonenumber(aboutYouForm.elements["guardianMobileNo"].value);
		if(!mobileBooleanStatus){
			  alert("You have entered an invalid mobile number")
			return false;
		}
	}*/
	
	if(aboutYouForm.elements["educationlevel"].value!="SELECT"){
		document.getElementById("educationlevelID").style.display = "block";
	}
	
	if(aboutYouForm.elements["dob"].value.length > 0 && getAge(aboutYouForm.elements["dob"].value) < 18 ) {
		document.getElementById("ageDifferenceId").style.display = "block";
	}
	
	if(aboutYouForm.elements["familyStatus"].value!=""){
		document.getElementById("familyStatusMarriedwithkids").style.display = "block";
	}
	
	if(aboutYouForm.elements["noOfKids"].value!="SELECT"){
		kidsCount(aboutYouForm.elements["noOfKids"].value);
	}
	
		if (aboutYouForm.elements["occupation"].value != "") {
			if (aboutYouForm.elements["occupation"].value == "SalariedProfessional") {
				document.getElementById("salariedProfessionalID").style.display = "block";
			}
			if (aboutYouForm.elements["occupation"].value == "SelfEmployedProfessional") {
				document.getElementById("SelfEmployedProfessionalID").style.display = "block";
			}
			if (aboutYouForm.elements["occupation"].value == "BusinessTraderShopOwner") {
				document.getElementById("BusinessTraderShopOwnerID").style.display = "block";
			}
	}
		
		//alert(localStorage.getItem("homeApplicationsStorage"))
		if(localStorage.getItem("homeApplicationsStorage")!=null){
			//alert("inside not null");
			var homeApplicationsGlobalValues = localStorage.getItem("homeApplicationsStorage");
			//alert(aboutYouForm.elements["availableHomeApplications"].length);
			for ( var i = 0; i < aboutYouForm.elements["availableHomeApplications"].length; i++) {
					var str_array = homeApplicationsGlobalValues.split(',');
					//alert("str_array.length "+str_array.length);
					for(var k = 0; k < str_array.length; k++) {
						   if(aboutYouForm.elements["availableHomeApplications"][i].value == str_array[k]){
							   document.getElementById("availableHomeApplications").options[i].selected = true;
							   //alert("matcheddddddd");
						   }
						}
				}
		}
}



/*function customOnLoad(){
	$(document).ready(function() { 
		$.blockUI({
		     message: 'Thank you for successfully confirming your participation in the KI Panel.Kindly take 5 minutes of your valuable time to complete the form below.<br/> These are required so that we can send you profile appropriate surveys.Please submit this form to start getting surveys.</p>',
		     fadeIn: 700,
		     fadeOut: 700,
		     timeout: 9999,
		     showOverlay: false,
		     centerY: false,
		     css: {
		         width: '350px',
		         top: '10px',
		         left: '',
		         right: '10px',
		         border: 'none',
		         padding: '5px',
		         backgroundColor: '#000',
		             '-webkit-border-radius': '10px',
		             '-moz-border-radius': '10px',
		         opacity: .6,
		         color: '#fff'
		     }
		 });
	}); 
}*/


/*function customOnLoad(){
	$(document).ready(function() { 
		 $.blockUI({ 
	            theme:     true, 
	            title:    'This is your title', 
	            message:  '<p>Thank you for successfully confirming your participation in the KI Panel.Kindly take 5 minutes of your valuable time to complete the form below.<br/> These are required so that we can send you profile appropriate surveys.Please submit this form to start getting surveys.</p>', 
	            timeout:   9999 
	        }); 
	}); 
}*/


function customOnLoadFirstSurvey(){
	
	/*var str = window.location+"";
	
	if(str.indexOf("aboutYouSuccess") !=-1){
		
		$(document).ready(function() { 
		        $.blockUI({ 
		            message: 'Thank you for completing the registration. We will sent your first survey invitation mail within 48 hours. <br/><br/>Looking forward for a long and rewarding relationship with you. For members below 18 years of age, display Thank you for completing the registration. <br/><br/>We have send a consent form to your guardian for your participation. Once she/he gives a confirmation to us, we will send your first survey invitation mail within next 48 hours.', 
		            timeout: 5000 
		        }); 
		});
		
	}*/
	
	if(firstSurveyForm.elements["connectionTime"].value.length > 0) {
		document.getElementById("previousServiceProvider").style.display = "block";
	}
	
	
	if(firstSurveyForm.elements["mobileAppsStatus"].value == "Y") {
		document.getElementById("mobileappsID").style.display = "block";
	}
	
	if(firstSurveyForm.elements["vehicle"].value == "Car"){
			document.getElementById("vehicleCar").style.display = "block";
	}
	
	if(firstSurveyForm.elements["vehicle"].value == "Bike") {
		document.getElementById("vehicleBikeScooter").style.display = "block";
	}
	
	if(firstSurveyForm.elements["vehicle"].value == "Both"){
		document.getElementById("vehicleCar").style.display = "block";
		document.getElementById("vehicleBikeScooter").style.display = "block";
	}
}

function dobOnChange(dob) {
	//alert("dob.length "+dob.length);
	if(dob.length>0){
		//alert("getAge "+getAge(dob));
		var ageDifference=getAge(dob);
		if(ageDifference<18){
			document.getElementById("ageDifferenceId").style.display="block";
		}else{
			document.getElementById("ageDifferenceId").style.display="none";
		}
	}
	
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}


function connectionOnChange(dob) {
	//alert("dob.length "+dob.length);
	if(dob.length>0){
		//alert("getAge "+getAge(dob));
		var ageDifference=getAge(dob);
		if(ageDifference<2){
			document.getElementById("previousServiceProvider").style.display="block";
		}else{
			document.getElementById("previousServiceProvider").style.display="none";
		}
	}
	
}

function removeStorageInJavascript(){
	if(localStorage.getItem("homeApplicationsStorage")!=null){
		localStorage.removeItem("homeApplicationsStorage");
	}
}

/*function ValidateEmail(mail) 
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(mail.value.match(mailformat))
	{
    return (true);
	}
    return (false);
}

function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
	  if ((inputtxt.value.match(phoneno))) {
		return true;
	} else {
		return false;
	}
}*/



function checkEmail(emailValue) {
   
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(emailValue)) {
	    //alert('Please provide a valid email address');
	    //email.focus;
	    return false;
 }
}

function makeNewSurvey() {
	//alert("makeNewSurvey");
	   var requiredJSONInformation = JSON.stringify(Formbuilder.formSettingModel.toJSON());//JSON.stringify(Formbuilder.formSettingModel.toJSON());
	   //alert("requiredJSONInformation "+requiredJSONInformation);
	   var result = $.parseJSON(requiredJSONInformation);
	   var loopCount = 0;
	   $.each(result, function(k, v) {
	       //alert(k + ' issss ' + v);
	       if (k=="email" || k=="admin" || k=="thankyou" || k=="seo" || k=="smtp" || k=="mailgun" || k=="styles" || k=="mailer") {
	    	   delete result[k];
	       }
	       if(k=="fields"){
	    	   //alert("k.length "+k.length+"  v.length="+v.length +"  v="+JSON.stringify(v));
	    	   var newSubmitInformation = JSON.stringify(v);
	    	   var newSubmitInformationResult = $.parseJSON(newSubmitInformation);
	    	   var lengthOfFields = newSubmitInformationResult.length;
	    	   var z=0;
	    	   $.each(newSubmitInformationResult, function(k, v) {
		    	  if(z==(lengthOfFields-1)){
	    		   delete newSubmitInformationResult[z];
		    	  }
		    	  z=z+1;
	    	   });
	    	   result[k]=newSubmitInformationResult;   
	       }
	   });
	   var finalModifiedJSONString = JSON.stringify(result);
	   //alert("finalModifiedJSONString "+finalModifiedJSONString);
	   document.getElementById("jsonFormBuilderId").innerHTML="";
	   document.getElementById("jsonFormBuilderId").innerHTML = finalModifiedJSONString;
	   
	   $.ajax({
		      type: "POST",
		      contentType : 'application/json',
		      dataType : 'json',
		      url: "././savenewsurvey",
		      data: JSON.stringify(result), // Note it is important
		      success :function(response) {
		       // do what ever you want with data
		     }
	});
}


function checkingOTPValidation() {
	
	var confirmedOTPValueInScript = document.getElementById('confirmedOTPValue').value;
	
    	//alert("checkingOTPValidation "+confirmedOTPValueInScript);
    	if (/^\d{6}$/.test(confirmedOTPValueInScript)) {
    		return true;
    	} else {
    	    document.getElementById("otpErrorMessageFromJavascript").innerHTML = "";
    		document.getElementById("otpErrorMessageFromJavascript").innerHTML = "<font color='red'>Please enter valid 6 digits OTP number given by Karvy</font>";
    	    return false;
    	}
    	return false;
}
    
   
