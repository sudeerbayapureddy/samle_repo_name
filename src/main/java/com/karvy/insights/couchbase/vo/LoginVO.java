package com.karvy.insights.couchbase.vo;


import java.io.Serializable;

import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;

/**
 *
 * @author sudeer.bayapureddy
 */

public class LoginVO implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private String isActive;

	@NotEmpty
	@Email
	private String emailId;
	
	@NotEmpty
	private String password;
	
	@NotEmpty
	@Pattern(regexp = "^\\d{10}", message = "Invalid mobile number, Indian mobile number should be 10 digits")
	private String mobileNumber;
	
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getIsActive() {
		return isActive;
	}
	public void setIsActive(String isActive) {
		this.isActive = isActive;
	}
	
}