<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
	<head>
		<title>Update Conflict</title>
		<link href="/resources/styles/grid.css" type="text/css" rel="stylesheet" media="screen"/>
		<link href="/resources/styles/components.css" type="text/css" rel="stylesheet" media="screen"/>		
	</head>
	<body>
		<div class="row">
		<header id="blog_hd" class="column grid_9">
			<h1 style="color: red;">Update Conflict</h1>
			<a href="<c:url value="/blog/posts/"/>">Home</a>
		</header>
		</div>
		<div class="row">
			<div class="column grid_9">
				<p>The blogpost with title <strong>${param.title}</strong> has been changed since you started to edit it.</p>
				<h3>Here's your text:</h3>
				<div>${param.body}</div>
				<h3>Here's the existing text:</h3>
				<jsp:include page="post_form.jspf"/>
			</div>	
		</div>
	</body>
</html>