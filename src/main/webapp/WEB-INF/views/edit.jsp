<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<title>New Post</title>
		<link href="/resources/styles/grid.css" type="text/css" rel="stylesheet" media="screen"/>
		<link href="/resources/styles/components.css" type="text/css" rel="stylesheet" media="screen"/>
	</head>
	<body>
		<div class="row">
		<header id="blog_hd" class="column grid_9">
			<h1>Relaxed Blog</h1>
			<a href="<c:url value="/blog/posts/"/>">Home</a>
		</header>
		</div>
		<div class="row">
			<div class=" column grid_9">
				<jsp:include page="post_form.jspf"/>
			</div>
		</div>
	</body>
</html>