<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"  
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link href="http://fonts.googleapis.com/css?family=Nunito:300,400,700"	rel="stylesheet" type="text/css">
<link href="../resources/css/font-awesome/css/font-awesome.min.css"	rel="stylesheet" type="text/css">
<link href="../resources/css/ki-default.css" rel="stylesheet" type="text/css">
<link href="../resources/css/jquery.datetimepicker.css" rel="stylesheet" type="text/css">
<link rel="shortcut icon" type="image/x-icon"	href="../resources/images/favicon.ico">

<title><tiles:insertAttribute name="title" ignore="true" /></title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<!-- <script src="../resources/js/jquery.js" type="text/javascript"></script> -->
<script src="../resources/js/collapse.js" type="text/javascript"></script>
<script src="../resources/js/transition.js" type="text/javascript"></script>
<script src="../resources/js/dropdown.js" type="text/javascript"></script>

</head>
<body>

<div class="page-wrapper">
	
		<tiles:insertAttribute name="header" />
	

	
		<tiles:insertAttribute name="menu" />
	

	
		<tiles:insertAttribute name="body" />
	

	
		<tiles:insertAttribute name="footer" />
	</div>

</body>
</html>
