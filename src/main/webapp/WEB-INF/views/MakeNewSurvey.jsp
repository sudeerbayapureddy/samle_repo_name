<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link href="../resources/css/form_builder/_all.min.css" rel="stylesheet" type="text/css">
<link href="../resources/css/form_builder/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="../resources/css/form_builder/bootstrap-theme.min.css" rel="stylesheet" type="text/css">
<link href="../resources/css/form_builder/css" rel="stylesheet" type="text/css">
<link href="../resources/css/form_builder/css(1)" rel="stylesheet" type="text/css">
<link href="../resources/css/form_builder/font-awesome.min.css" rel="stylesheet" type="text/css">
<link href="../resources/css/form_builder/formbuilder-min.css" rel="stylesheet" type="text/css">
<link href="../resources/css/form_builder/jquery-ui.css" rel="stylesheet" type="text/css">
<link href="../resources/css/form_builder/vendor-min.css" rel="stylesheet" type="text/css">

<!-- <script src="../resources/js/form_builder/analytics.js" type="text/javascript"></script>
<script src="../resources/js/form_builder/bootstrap.min.js" type="text/javascript"></script>
<script src="../resources/js/form_builder/formbuilder-min.js" type="text/javascript"></script>
<script src="../resources/js/form_builder/jquery-2.0.3.min.js" type="text/javascript"></script>
<script src="../resources/js/form_builder/vendor-min.js" type="text/javascript"></script> -->

</head>
<body>
<form name="surveyMakingForm" id="surveyMakingFormId">
	<div class="main">
		<div class="main-inner">
			<div class="container">
				<div class="content">

					<div class="document-title">
						<h1>Home</h1>
						<ul class="breadcrumb">
							<li><a href="./home">Home</a></li>
							<li><a href="#">Make New Survey</a></li>
						</ul>
					</div>
<div id="jsonFormBuilderId"></div>
	<div class="container main">

		<div class="container">

			<div class="fb-main">
				
			</div>
<style type="text/css">
.main, .fb-main {
	border-radius: 0px;
	background-color: #F2F5F8;
}

.fb-right {
	padding: 28px;
	background-color: white;
}

.fb-tabs li.active a {
	border: 1px solid #ccc;
	margin-bottom: -1px;
	border-bottom-color: #F2F5F8;
}

.container {
	width: 100%;
}

.fb-field-wrapper:hover .subtemplate-wrapper {
	border-color: #2ECC71;
}
</style>
		</div>
	</div>

	<script async="" src="../resources/js/form_builder/analytics.js" type="text/javascript"></script>
	<script async="" src="../resources/js/form_builder/jquery-2.0.3.min.js" type="text/javascript"></script>
	<script async="" src="../resources/js/form_builder/bootstrap.min.js" type="text/javascript"></script>
	<!-- icon selector Modal -->
	<div class="modal fade" id="iconsModal" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel">
		<div class="modal-dialog" role="document">
			<div class="modal-content">

				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">×</span>
					</button>
					<h4 class="modal-title">Click to select an icon</h4>
				</div>

				<div class="modal-body">

					<div id="icon-list">

						<div id="bootstrap icons">
							<h4>Bootstrap icons</h4>
							<i class="glyphicon glyphicon-asterisk"></i> <i
								class="glyphicon glyphicon-plus"></i> <i
								class="glyphicon glyphicon-euro"></i> <i
								class="glyphicon glyphicon-eur"></i> <i
								class="glyphicon glyphicon-minus"></i> <i
								class="glyphicon glyphicon-cloud"></i> <i
								class="glyphicon glyphicon-envelope"></i> <i
								class="glyphicon glyphicon-pencil"></i> <i
								class="glyphicon glyphicon-glass"></i> <i
								class="glyphicon glyphicon-music"></i> <i
								class="glyphicon glyphicon-search"></i> <i
								class="glyphicon glyphicon-heart"></i> <i
								class="glyphicon glyphicon-star"></i> <i
								class="glyphicon glyphicon-star-empty"></i> <i
								class="glyphicon glyphicon-user"></i> <i
								class="glyphicon glyphicon-film"></i> <i
								class="glyphicon glyphicon-th-large"></i> <i
								class="glyphicon glyphicon-th"></i> <i
								class="glyphicon glyphicon-th-list"></i> <i
								class="glyphicon glyphicon-ok"></i> <i
								class="glyphicon glyphicon-remove"></i> <i
								class="glyphicon glyphicon-zoom-in"></i> <i
								class="glyphicon glyphicon-zoom-out"></i> <i
								class="glyphicon glyphicon-off"></i> <i
								class="glyphicon glyphicon-signal"></i> <i
								class="glyphicon glyphicon-cog"></i> <i
								class="glyphicon glyphicon-trash"></i> <i
								class="glyphicon glyphicon-home"></i> <i
								class="glyphicon glyphicon-file"></i> <i
								class="glyphicon glyphicon-time"></i> <i
								class="glyphicon glyphicon-road"></i> <i
								class="glyphicon glyphicon-download-alt"></i> <i
								class="glyphicon glyphicon-download"></i> <i
								class="glyphicon glyphicon-upload"></i> <i
								class="glyphicon glyphicon-inbox"></i> <i
								class="glyphicon glyphicon-play-circle"></i> <i
								class="glyphicon glyphicon-repeat"></i> <i
								class="glyphicon glyphicon-refresh"></i> <i
								class="glyphicon glyphicon-list-alt"></i> <i
								class="glyphicon glyphicon-lock"></i> <i
								class="glyphicon glyphicon-flag"></i> <i
								class="glyphicon glyphicon-headphones"></i> <i
								class="glyphicon glyphicon-volume-off"></i> <i
								class="glyphicon glyphicon-volume-down"></i> <i
								class="glyphicon glyphicon-volume-up"></i> <i
								class="glyphicon glyphicon-qrcode"></i> <i
								class="glyphicon glyphicon-barcode"></i> <i
								class="glyphicon glyphicon-tag"></i> <i
								class="glyphicon glyphicon-tags"></i> <i
								class="glyphicon glyphicon-book"></i> <i
								class="glyphicon glyphicon-bookmark"></i> <i
								class="glyphicon glyphicon-print"></i> <i
								class="glyphicon glyphicon-camera"></i> <i
								class="glyphicon glyphicon-font"></i> <i
								class="glyphicon glyphicon-bold"></i> <i
								class="glyphicon glyphicon-italic"></i> <i
								class="glyphicon glyphicon-text-height"></i> <i
								class="glyphicon glyphicon-text-width"></i> <i
								class="glyphicon glyphicon-align-left"></i> <i
								class="glyphicon glyphicon-align-center"></i> <i
								class="glyphicon glyphicon-align-right"></i> <i
								class="glyphicon glyphicon-align-justify"></i> <i
								class="glyphicon glyphicon-list"></i> <i
								class="glyphicon glyphicon-indent-left"></i> <i
								class="glyphicon glyphicon-indent-right"></i> <i
								class="glyphicon glyphicon-facetime-video"></i> <i
								class="glyphicon glyphicon-picture"></i> <i
								class="glyphicon glyphicon-map-marker"></i> <i
								class="glyphicon glyphicon-adjust"></i> <i
								class="glyphicon glyphicon-tint"></i> <i
								class="glyphicon glyphicon-edit"></i> <i
								class="glyphicon glyphicon-share"></i> <i
								class="glyphicon glyphicon-check"></i> <i
								class="glyphicon glyphicon-move"></i> <i
								class="glyphicon glyphicon-step-backward"></i> <i
								class="glyphicon glyphicon-fast-backward"></i> <i
								class="glyphicon glyphicon-backward"></i> <i
								class="glyphicon glyphicon-play"></i> <i
								class="glyphicon glyphicon-pause"></i> <i
								class="glyphicon glyphicon-stop"></i> <i
								class="glyphicon glyphicon-forward"></i> <i
								class="glyphicon glyphicon-fast-forward"></i> <i
								class="glyphicon glyphicon-step-forward"></i> <i
								class="glyphicon glyphicon-eject"></i> <i
								class="glyphicon glyphicon-chevron-left"></i> <i
								class="glyphicon glyphicon-chevron-right"></i> <i
								class="glyphicon glyphicon-plus-sign"></i> <i
								class="glyphicon glyphicon-minus-sign"></i> <i
								class="glyphicon glyphicon-remove-sign"></i> <i
								class="glyphicon glyphicon-ok-sign"></i> <i
								class="glyphicon glyphicon-question-sign"></i> <i
								class="glyphicon glyphicon-info-sign"></i> <i
								class="glyphicon glyphicon-screenshot"></i> <i
								class="glyphicon glyphicon-remove-circle"></i> <i
								class="glyphicon glyphicon-ok-circle"></i> <i
								class="glyphicon glyphicon-ban-circle"></i> <i
								class="glyphicon glyphicon-arrow-left"></i> <i
								class="glyphicon glyphicon-arrow-right"></i> <i
								class="glyphicon glyphicon-arrow-up"></i> <i
								class="glyphicon glyphicon-arrow-down"></i> <i
								class="glyphicon glyphicon-share-alt"></i> <i
								class="glyphicon glyphicon-resize-full"></i> <i
								class="glyphicon glyphicon-resize-small"></i> <i
								class="glyphicon glyphicon-exclamation-sign"></i> <i
								class="glyphicon glyphicon-gift"></i> <i
								class="glyphicon glyphicon-leaf"></i> <i
								class="glyphicon glyphicon-fire"></i> <i
								class="glyphicon glyphicon-eye-open"></i> <i
								class="glyphicon glyphicon-eye-close"></i> <i
								class="glyphicon glyphicon-warning-sign"></i> <i
								class="glyphicon glyphicon-plane"></i> <i
								class="glyphicon glyphicon-calendar"></i> <i
								class="glyphicon glyphicon-random"></i> <i
								class="glyphicon glyphicon-comment"></i> <i
								class="glyphicon glyphicon-magnet"></i> <i
								class="glyphicon glyphicon-chevron-up"></i> <i
								class="glyphicon glyphicon-chevron-down"></i> <i
								class="glyphicon glyphicon-retweet"></i> <i
								class="glyphicon glyphicon-shopping-cart"></i> <i
								class="glyphicon glyphicon-folder-close"></i> <i
								class="glyphicon glyphicon-folder-open"></i> <i
								class="glyphicon glyphicon-resize-vertical"></i> <i
								class="glyphicon glyphicon-resize-horizontal"></i> <i
								class="glyphicon glyphicon-hdd"></i> <i
								class="glyphicon glyphicon-bullhorn"></i> <i
								class="glyphicon glyphicon-bell"></i> <i
								class="glyphicon glyphicon-certificate"></i> <i
								class="glyphicon glyphicon-thumbs-up"></i> <i
								class="glyphicon glyphicon-thumbs-down"></i> <i
								class="glyphicon glyphicon-hand-right"></i> <i
								class="glyphicon glyphicon-hand-left"></i> <i
								class="glyphicon glyphicon-hand-up"></i> <i
								class="glyphicon glyphicon-hand-down"></i> <i
								class="glyphicon glyphicon-circle-arrow-right"></i> <i
								class="glyphicon glyphicon-circle-arrow-left"></i> <i
								class="glyphicon glyphicon-circle-arrow-up"></i> <i
								class="glyphicon glyphicon-circle-arrow-down"></i> <i
								class="glyphicon glyphicon-globe"></i> <i
								class="glyphicon glyphicon-wrench"></i> <i
								class="glyphicon glyphicon-tasks"></i> <i
								class="glyphicon glyphicon-filter"></i> <i
								class="glyphicon glyphicon-briefcase"></i> <i
								class="glyphicon glyphicon-fullscreen"></i> <i
								class="glyphicon glyphicon-dashboard"></i> <i
								class="glyphicon glyphicon-paperclip"></i> <i
								class="glyphicon glyphicon-heart-empty"></i> <i
								class="glyphicon glyphicon-link"></i> <i
								class="glyphicon glyphicon-phone"></i> <i
								class="glyphicon glyphicon-pushpin"></i> <i
								class="glyphicon glyphicon-usd"></i> <i
								class="glyphicon glyphicon-gbp"></i> <i
								class="glyphicon glyphicon-sort"></i> <i
								class="glyphicon glyphicon-sort-by-alphabet"></i> <i
								class="glyphicon glyphicon-sort-by-alphabet-alt"></i> <i
								class="glyphicon glyphicon-sort-by-order"></i> <i
								class="glyphicon glyphicon-sort-by-order-alt"></i> <i
								class="glyphicon glyphicon-sort-by-attributes"></i> <i
								class="glyphicon glyphicon-sort-by-attributes-alt"></i> <i
								class="glyphicon glyphicon-unchecked"></i> <i
								class="glyphicon glyphicon-expand"></i> <i
								class="glyphicon glyphicon-collapse-down"></i> <i
								class="glyphicon glyphicon-collapse-up"></i> <i
								class="glyphicon glyphicon-log-in"></i> <i
								class="glyphicon glyphicon-flash"></i> <i
								class="glyphicon glyphicon-log-out"></i> <i
								class="glyphicon glyphicon-new-window"></i> <i
								class="glyphicon glyphicon-record"></i> <i
								class="glyphicon glyphicon-save"></i> <i
								class="glyphicon glyphicon-open"></i> <i
								class="glyphicon glyphicon-saved"></i> <i
								class="glyphicon glyphicon-import"></i> <i
								class="glyphicon glyphicon-export"></i> <i
								class="glyphicon glyphicon-send"></i> <i
								class="glyphicon glyphicon-floppy-disk"></i> <i
								class="glyphicon glyphicon-floppy-saved"></i> <i
								class="glyphicon glyphicon-floppy-remove"></i> <i
								class="glyphicon glyphicon-floppy-save"></i> <i
								class="glyphicon glyphicon-floppy-open"></i> <i
								class="glyphicon glyphicon-credit-card"></i> <i
								class="glyphicon glyphicon-transfer"></i> <i
								class="glyphicon glyphicon-cutlery"></i> <i
								class="glyphicon glyphicon-header"></i> <i
								class="glyphicon glyphicon-compressed"></i> <i
								class="glyphicon glyphicon-earphone"></i> <i
								class="glyphicon glyphicon-phone-alt"></i> <i
								class="glyphicon glyphicon-tower"></i> <i
								class="glyphicon glyphicon-stats"></i> <i
								class="glyphicon glyphicon-sd-video"></i> <i
								class="glyphicon glyphicon-hd-video"></i> <i
								class="glyphicon glyphicon-subtitles"></i> <i
								class="glyphicon glyphicon-sound-stereo"></i> <i
								class="glyphicon glyphicon-sound-dolby"></i> <i
								class="glyphicon glyphicon-sound-5-1"></i> <i
								class="glyphicon glyphicon-sound-6-1"></i> <i
								class="glyphicon glyphicon-sound-7-1"></i> <i
								class="glyphicon glyphicon-copyright-mark"></i> <i
								class="glyphicon glyphicon-registration-mark"></i> <i
								class="glyphicon glyphicon-cloud-download"></i> <i
								class="glyphicon glyphicon-cloud-upload"></i> <i
								class="glyphicon glyphicon-tree-conifer"></i> <i
								class="glyphicon glyphicon-tree-deciduous"></i> <i
								class="glyphicon glyphicon-cd"></i> <i
								class="glyphicon glyphicon-save-file"></i> <i
								class="glyphicon glyphicon-open-file"></i> <i
								class="glyphicon glyphicon-level-up"></i> <i
								class="glyphicon glyphicon-copy"></i> <i
								class="glyphicon glyphicon-paste"></i> <i
								class="glyphicon glyphicon-alert"></i> <i
								class="glyphicon glyphicon-equalizer"></i> <i
								class="glyphicon glyphicon-king"></i> <i
								class="glyphicon glyphicon-queen"></i> <i
								class="glyphicon glyphicon-pawn"></i> <i
								class="glyphicon glyphicon-bishop"></i> <i
								class="glyphicon glyphicon-knight"></i> <i
								class="glyphicon glyphicon-baby-formula"></i> <i
								class="glyphicon glyphicon-tent"></i> <i
								class="glyphicon glyphicon-blackboard"></i> <i
								class="glyphicon glyphicon-bed"></i> <i
								class="glyphicon glyphicon-apple"></i> <i
								class="glyphicon glyphicon-erase"></i> <i
								class="glyphicon glyphicon-hourglass"></i> <i
								class="glyphicon glyphicon-lamp"></i> <i
								class="glyphicon glyphicon-duplicate"></i> <i
								class="glyphicon glyphicon-piggy-bank"></i> <i
								class="glyphicon glyphicon-scissors"></i> <i
								class="glyphicon glyphicon-bitcoin"></i> <i
								class="glyphicon glyphicon-btc"></i> <i
								class="glyphicon glyphicon-xbt"></i> <i
								class="glyphicon glyphicon-yen"></i> <i
								class="glyphicon glyphicon-jpy"></i> <i
								class="glyphicon glyphicon-ruble"></i> <i
								class="glyphicon glyphicon-rub"></i> <i
								class="glyphicon glyphicon-scale"></i> <i
								class="glyphicon glyphicon-ice-lolly"></i> <i
								class="glyphicon glyphicon-ice-lolly-tasted"></i> <i
								class="glyphicon glyphicon-education"></i> <i
								class="glyphicon glyphicon-option-horizontal"></i> <i
								class="glyphicon glyphicon-option-vertical"></i> <i
								class="glyphicon glyphicon-menu-hamburger"></i> <i
								class="glyphicon glyphicon-modal-window"></i> <i
								class="glyphicon glyphicon-oil"></i> <i
								class="glyphicon glyphicon-grain"></i> <i
								class="glyphicon glyphicon-sunglasses"></i> <i
								class="glyphicon glyphicon-text-size"></i> <i
								class="glyphicon glyphicon-text-color"></i> <i
								class="glyphicon glyphicon-text-background"></i> <i
								class="glyphicon glyphicon-object-align-top"></i> <i
								class="glyphicon glyphicon-object-align-bottom"></i> <i
								class="glyphicon glyphicon-object-align-horizontal"></i> <i
								class="glyphicon glyphicon-object-align-left"></i> <i
								class="glyphicon glyphicon-object-align-vertical"></i> <i
								class="glyphicon glyphicon-object-align-right"></i> <i
								class="glyphicon glyphicon-triangle-right"></i> <i
								class="glyphicon glyphicon-triangle-left"></i> <i
								class="glyphicon glyphicon-triangle-bottom"></i> <i
								class="glyphicon glyphicon-triangle-top"></i> <i
								class="glyphicon glyphicon-console"></i> <i
								class="glyphicon glyphicon-superscript"></i> <i
								class="glyphicon glyphicon-subscript"></i> <i
								class="glyphicon glyphicon-menu-left"></i> <i
								class="glyphicon glyphicon-menu-right"></i> <i
								class="glyphicon glyphicon-menu-down"></i> <i
								class="glyphicon glyphicon-menu-up"></i>
						</div>

						<div id="fontawesome icons">
							<h4>Font awesome icons</h4>
							<i class="fa fa-bluetooth"></i> <i class="fa fa-bluetooth-b"></i>
							<i class="fa fa-codiepie"></i> <i class="fa fa-credit-card-alt"></i>
							<i class="fa fa-edge"></i> <i class="fa fa-fort-awesome"></i> <i
								class="fa fa-hashtag"></i> <i class="fa fa-mixcloud"></i> <i
								class="fa fa-modx"></i> <i class="fa fa-pause-circle"></i> <i
								class="fa fa-pause-circle-o"></i> <i class="fa fa-percent"></i>
							<i class="fa fa-product-hunt"></i> <i class="fa fa-reddit-alien"></i>
							<i class="fa fa-scribd"></i> <i class="fa fa-shopping-bag"></i> <i
								class="fa fa-shopping-basket"></i> <i class="fa fa-stop-circle"></i>
							<i class="fa fa-stop-circle-o"></i> <i class="fa fa-usb"></i> <i
								class="fa fa-adjust"></i> <i class="fa fa-anchor"></i> <i
								class="fa fa-archive"></i> <i class="fa fa-area-chart"></i> <i
								class="fa fa-arrows"></i> <i class="fa fa-arrows-h"></i> <i
								class="fa fa-arrows-v"></i> <i class="fa fa-asterisk"></i> <i
								class="fa fa-at"></i> <i class="fa fa-automobile"></i> <i
								class="fa fa-balance-scale"></i> <i class="fa fa-ban"></i> <i
								class="fa fa-bank"></i> <i class="fa fa-bar-chart"></i> <i
								class="fa fa-bar-chart-o"></i> <i class="fa fa-barcode"></i> <i
								class="fa fa-bars"></i> <i class="fa fa-battery-0"></i> <i
								class="fa fa-battery-1"></i> <i class="fa fa-battery-2"></i> <i
								class="fa fa-battery-3"></i> <i class="fa fa-battery-4"></i> <i
								class="fa fa-battery-empty"></i> <i class="fa fa-battery-full"></i>
							<i class="fa fa-battery-half"></i> <i
								class="fa fa-battery-quarter"></i> <i
								class="fa fa-battery-three-quarters"></i> <i class="fa fa-bed"></i>
							<i class="fa fa-beer"></i> <i class="fa fa-bell"></i> <i
								class="fa fa-bell-o"></i> <i class="fa fa-bell-slash"></i> <i
								class="fa fa-bell-slash-o"></i> <i class="fa fa-bicycle"></i> <i
								class="fa fa-binoculars"></i> <i class="fa fa-birthday-cake"></i>
							<i class="fa fa-bluetooth"></i> <i class="fa fa-bluetooth-b"></i>
							<i class="fa fa-bolt"></i> <i class="fa fa-bomb"></i> <i
								class="fa fa-book"></i> <i class="fa fa-bookmark"></i> <i
								class="fa fa-bookmark-o"></i> <i class="fa fa-briefcase"></i> <i
								class="fa fa-bug"></i> <i class="fa fa-building"></i> <i
								class="fa fa-building-o"></i> <i class="fa fa-bullhorn"></i> <i
								class="fa fa-bullseye"></i> <i class="fa fa-bus"></i> <i
								class="fa fa-cab"></i> <i class="fa fa-calculator"></i> <i
								class="fa fa-calendar"></i> <i class="fa fa-calendar-check-o"></i>
							<i class="fa fa-calendar-minus-o"></i> <i
								class="fa fa-calendar-o"></i> <i class="fa fa-calendar-plus-o"></i>
							<i class="fa fa-calendar-times-o"></i> <i class="fa fa-camera"></i>
							<i class="fa fa-camera-retro"></i> <i class="fa fa-car"></i> <i
								class="fa fa-caret-square-o-down"></i> <i
								class="fa fa-caret-square-o-left"></i> <i
								class="fa fa-caret-square-o-right"></i> <i
								class="fa fa-caret-square-o-up"></i> <i
								class="fa fa-cart-arrow-down"></i> <i class="fa fa-cart-plus"></i>
							<i class="fa fa-cc"></i> <i class="fa fa-certificate"></i> <i
								class="fa fa-check"></i> <i class="fa fa-check-circle"></i> <i
								class="fa fa-check-circle-o"></i> <i class="fa fa-check-square"></i>
							<i class="fa fa-check-square-o"></i> <i class="fa fa-child"></i>
							<i class="fa fa-circle"></i> <i class="fa fa-circle-o"></i> <i
								class="fa fa-circle-o-notch"></i> <i class="fa fa-circle-thin"></i>
							<i class="fa fa-clock-o"></i> <i class="fa fa-clone"></i> <i
								class="fa fa-close"></i> <i class="fa fa-cloud"></i> <i
								class="fa fa-cloud-download"></i> <i class="fa fa-cloud-upload"></i>
							<i class="fa fa-code"></i> <i class="fa fa-code-fork"></i> <i
								class="fa fa-coffee"></i> <i class="fa fa-cog"></i> <i
								class="fa fa-cogs"></i> <i class="fa fa-comment"></i> <i
								class="fa fa-comment-o"></i> <i class="fa fa-commenting"></i> <i
								class="fa fa-commenting-o"></i> <i class="fa fa-comments"></i> <i
								class="fa fa-comments-o"></i> <i class="fa fa-compass"></i> <i
								class="fa fa-copyright"></i> <i class="fa fa-creative-commons"></i>
							<i class="fa fa-credit-card"></i> <i class="fa fa-crop"></i> <i
								class="fa fa-crosshairs"></i> <i class="fa fa-cube"></i> <i
								class="fa fa-cubes"></i> <i class="fa fa-cutlery"></i> <i
								class="fa fa-dashboard"></i> <i class="fa fa-database"></i> <i
								class="fa fa-desktop"></i> <i class="fa fa-diamond"></i> <i
								class="fa fa-dot-circle-o"></i> <i class="fa fa-download"></i> <i
								class="fa fa-edit"></i> <i class="fa fa-ellipsis-h"></i> <i
								class="fa fa-ellipsis-v"></i> <i class="fa fa-envelope"></i> <i
								class="fa fa-envelope-o"></i> <i class="fa fa-envelope-square"></i>
							<i class="fa fa-eraser"></i> <i class="fa fa-exchange"></i> <i
								class="fa fa-exclamation"></i> <i
								class="fa fa-exclamation-circle"></i> <i
								class="fa fa-exclamation-triangle"></i> <i
								class="fa fa-external-link"></i> <i
								class="fa fa-external-link-square"></i> <i class="fa fa-eye"></i>
							<i class="fa fa-eye-slash"></i> <i class="fa fa-eyedropper"></i>
							<i class="fa fa-fax"></i> <i class="fa fa-feed"></i> <i
								class="fa fa-female"></i> <i class="fa fa-fighter-jet"></i> <i
								class="fa fa-file-archive-o"></i> <i class="fa fa-file-audio-o"></i>
							<i class="fa fa-file-code-o"></i> <i class="fa fa-file-excel-o"></i>
							<i class="fa fa-file-image-o"></i> <i class="fa fa-file-movie-o"></i>
							<i class="fa fa-file-pdf-o"></i> <i class="fa fa-file-photo-o"></i>
							<i class="fa fa-file-picture-o"></i> <i
								class="fa fa-file-powerpoint-o"></i> <i
								class="fa fa-file-sound-o"></i> <i class="fa fa-file-video-o"></i>
							<i class="fa fa-file-word-o"></i> <i class="fa fa-file-zip-o"></i>
							<i class="fa fa-film"></i> <i class="fa fa-filter"></i> <i
								class="fa fa-fire"></i> <i class="fa fa-fire-extinguisher"></i>
							<i class="fa fa-flag"></i> <i class="fa fa-flag-checkered"></i> <i
								class="fa fa-flag-o"></i> <i class="fa fa-flash"></i> <i
								class="fa fa-flask"></i> <i class="fa fa-folder"></i> <i
								class="fa fa-folder-o"></i> <i class="fa fa-folder-open"></i> <i
								class="fa fa-folder-open-o"></i> <i class="fa fa-frown-o"></i> <i
								class="fa fa-futbol-o"></i> <i class="fa fa-gamepad"></i> <i
								class="fa fa-gavel"></i> <i class="fa fa-gear"></i> <i
								class="fa fa-gears"></i> <i class="fa fa-gift"></i> <i
								class="fa fa-glass"></i> <i class="fa fa-globe"></i> <i
								class="fa fa-graduation-cap"></i> <i class="fa fa-group"></i> <i
								class="fa fa-hand-grab-o"></i> <i class="fa fa-hand-lizard-o"></i>
							<i class="fa fa-hand-paper-o"></i> <i class="fa fa-hand-peace-o"></i>
							<i class="fa fa-hand-pointer-o"></i> <i class="fa fa-hand-rock-o"></i>
							<i class="fa fa-hand-scissors-o"></i> <i
								class="fa fa-hand-spock-o"></i> <i class="fa fa-hand-stop-o"></i>
							<i class="fa fa-hashtag"></i> <i class="fa fa-hdd-o"></i> <i
								class="fa fa-headphones"></i> <i class="fa fa-heart"></i> <i
								class="fa fa-heart-o"></i> <i class="fa fa-heartbeat"></i> <i
								class="fa fa-history"></i> <i class="fa fa-home"></i> <i
								class="fa fa-hotel"></i> <i class="fa fa-hourglass"></i> <i
								class="fa fa-hourglass-1"></i> <i class="fa fa-hourglass-2"></i>
							<i class="fa fa-hourglass-3"></i> <i class="fa fa-hourglass-end"></i>
							<i class="fa fa-hourglass-half"></i> <i class="fa fa-hourglass-o"></i>
							<i class="fa fa-hourglass-start"></i> <i class="fa fa-i-cursor"></i>
							<i class="fa fa-image"></i> <i class="fa fa-inbox"></i> <i
								class="fa fa-industry"></i> <i class="fa fa-info"></i> <i
								class="fa fa-info-circle"></i> <i class="fa fa-institution"></i>
							<i class="fa fa-key"></i> <i class="fa fa-keyboard-o"></i> <i
								class="fa fa-language"></i> <i class="fa fa-laptop"></i> <i
								class="fa fa-leaf"></i> <i class="fa fa-legal"></i> <i
								class="fa fa-lemon-o"></i> <i class="fa fa-level-down"></i> <i
								class="fa fa-level-up"></i> <i class="fa fa-life-bouy"></i> <i
								class="fa fa-life-buoy"></i> <i class="fa fa-life-ring"></i> <i
								class="fa fa-life-saver"></i> <i class="fa fa-lightbulb-o"></i>
							<i class="fa fa-line-chart"></i> <i class="fa fa-location-arrow"></i>
							<i class="fa fa-lock"></i> <i class="fa fa-magic"></i> <i
								class="fa fa-magnet"></i> <i class="fa fa-mail-forward"></i> <i
								class="fa fa-mail-reply"></i> <i class="fa fa-mail-reply-all"></i>
							<i class="fa fa-male"></i> <i class="fa fa-map"></i> <i
								class="fa fa-map-marker"></i> <i class="fa fa-map-o"></i> <i
								class="fa fa-map-pin"></i> <i class="fa fa-map-signs"></i> <i
								class="fa fa-meh-o"></i> <i class="fa fa-microphone"></i> <i
								class="fa fa-microphone-slash"></i> <i class="fa fa-minus"></i>
							<i class="fa fa-minus-circle"></i> <i class="fa fa-minus-square"></i>
							<i class="fa fa-minus-square-o"></i> <i class="fa fa-mobile"></i>
							<i class="fa fa-mobile-phone"></i> <i class="fa fa-money"></i> <i
								class="fa fa-moon-o"></i> <i class="fa fa-mortar-board"></i> <i
								class="fa fa-motorcycle"></i> <i class="fa fa-mouse-pointer"></i>
							<i class="fa fa-music"></i> <i class="fa fa-navicon"></i> <i
								class="fa fa-newspaper-o"></i> <i class="fa fa-object-group"></i>
							<i class="fa fa-object-ungroup"></i> <i class="fa fa-paint-brush"></i>
							<i class="fa fa-paper-plane"></i> <i class="fa fa-paper-plane-o"></i>
							<i class="fa fa-paw"></i> <i class="fa fa-pencil"></i> <i
								class="fa fa-pencil-square"></i> <i
								class="fa fa-pencil-square-o"></i> <i class="fa fa-percent"></i>
							<i class="fa fa-phone"></i> <i class="fa fa-phone-square"></i> <i
								class="fa fa-photo"></i> <i class="fa fa-picture-o"></i> <i
								class="fa fa-pie-chart"></i> <i class="fa fa-plane"></i> <i
								class="fa fa-plug"></i> <i class="fa fa-plus"></i> <i
								class="fa fa-plus-circle"></i> <i class="fa fa-plus-square"></i>
							<i class="fa fa-plus-square-o"></i> <i class="fa fa-power-off"></i>
							<i class="fa fa-print"></i> <i class="fa fa-puzzle-piece"></i> <i
								class="fa fa-qrcode"></i> <i class="fa fa-question"></i> <i
								class="fa fa-question-circle"></i> <i class="fa fa-quote-left"></i>
							<i class="fa fa-quote-right"></i> <i class="fa fa-random"></i> <i
								class="fa fa-recycle"></i> <i class="fa fa-refresh"></i> <i
								class="fa fa-registered"></i> <i class="fa fa-remove"></i> <i
								class="fa fa-reorder"></i> <i class="fa fa-reply"></i> <i
								class="fa fa-reply-all"></i> <i class="fa fa-retweet"></i> <i
								class="fa fa-road"></i> <i class="fa fa-rocket"></i> <i
								class="fa fa-rss"></i> <i class="fa fa-rss-square"></i> <i
								class="fa fa-search"></i> <i class="fa fa-search-minus"></i> <i
								class="fa fa-search-plus"></i> <i class="fa fa-send"></i> <i
								class="fa fa-send-o"></i> <i class="fa fa-server"></i> <i
								class="fa fa-share"></i> <i class="fa fa-share-alt"></i> <i
								class="fa fa-share-alt-square"></i> <i
								class="fa fa-share-square"></i> <i class="fa fa-share-square-o"></i>
							<i class="fa fa-shield"></i> <i class="fa fa-ship"></i> <i
								class="fa fa-shopping-bag"></i> <i class="fa fa-shopping-basket"></i>
							<i class="fa fa-shopping-cart"></i> <i class="fa fa-sign-in"></i>
							<i class="fa fa-sign-out"></i> <i class="fa fa-signal"></i> <i
								class="fa fa-sitemap"></i> <i class="fa fa-sliders"></i> <i
								class="fa fa-smile-o"></i> <i class="fa fa-soccer-ball-o"></i> <i
								class="fa fa-sort"></i> <i class="fa fa-sort-alpha-asc"></i> <i
								class="fa fa-sort-alpha-desc"></i> <i
								class="fa fa-sort-amount-asc"></i> <i
								class="fa fa-sort-amount-desc"></i> <i class="fa fa-sort-asc"></i>
							<i class="fa fa-sort-desc"></i> <i class="fa fa-sort-down"></i> <i
								class="fa fa-sort-numeric-asc"></i> <i
								class="fa fa-sort-numeric-desc"></i> <i class="fa fa-sort-up"></i>
							<i class="fa fa-space-shuttle"></i> <i class="fa fa-spinner"></i>
							<i class="fa fa-spoon"></i> <i class="fa fa-square"></i> <i
								class="fa fa-square-o"></i> <i class="fa fa-star"></i> <i
								class="fa fa-star-half"></i> <i class="fa fa-star-half-empty"></i>
							<i class="fa fa-star-half-full"></i> <i class="fa fa-star-half-o"></i>
							<i class="fa fa-star-o"></i> <i class="fa fa-sticky-note"></i> <i
								class="fa fa-sticky-note-o"></i> <i class="fa fa-street-view"></i>
							<i class="fa fa-suitcase"></i> <i class="fa fa-sun-o"></i> <i
								class="fa fa-support"></i> <i class="fa fa-tablet"></i> <i
								class="fa fa-tachometer"></i> <i class="fa fa-tag"></i> <i
								class="fa fa-tags"></i> <i class="fa fa-tasks"></i> <i
								class="fa fa-taxi"></i> <i class="fa fa-television"></i> <i
								class="fa fa-terminal"></i> <i class="fa fa-thumb-tack"></i> <i
								class="fa fa-thumbs-down"></i> <i class="fa fa-thumbs-o-down"></i>
							<i class="fa fa-thumbs-o-up"></i> <i class="fa fa-thumbs-up"></i>
							<i class="fa fa-ticket"></i> <i class="fa fa-times"></i> <i
								class="fa fa-times-circle"></i> <i class="fa fa-times-circle-o"></i>
							<i class="fa fa-tint"></i> <i class="fa fa-toggle-down"></i> <i
								class="fa fa-toggle-left"></i> <i class="fa fa-toggle-off"></i>
							<i class="fa fa-toggle-on"></i> <i class="fa fa-toggle-right"></i>
							<i class="fa fa-toggle-up"></i> <i class="fa fa-trademark"></i> <i
								class="fa fa-trash"></i> <i class="fa fa-trash-o"></i> <i
								class="fa fa-tree"></i> <i class="fa fa-trophy"></i> <i
								class="fa fa-truck"></i> <i class="fa fa-tty"></i> <i
								class="fa fa-tv"></i> <i class="fa fa-umbrella"></i> <i
								class="fa fa-university"></i> <i class="fa fa-unlock"></i> <i
								class="fa fa-unlock-alt"></i> <i class="fa fa-unsorted"></i> <i
								class="fa fa-upload"></i> <i class="fa fa-user"></i> <i
								class="fa fa-user-plus"></i> <i class="fa fa-user-secret"></i> <i
								class="fa fa-user-times"></i> <i class="fa fa-users"></i> <i
								class="fa fa-video-camera"></i> <i class="fa fa-volume-down"></i>
							<i class="fa fa-volume-off"></i> <i class="fa fa-volume-up"></i>
							<i class="fa fa-warning"></i> <i class="fa fa-wheelchair"></i> <i
								class="fa fa-wifi"></i> <i class="fa fa-wrench"></i> <i
								class="fa fa-hand-grab-o"></i> <i class="fa fa-hand-lizard-o"></i>
							<i class="fa fa-hand-o-down"></i> <i class="fa fa-hand-o-left"></i>
							<i class="fa fa-hand-o-right"></i> <i class="fa fa-hand-o-up"></i>
							<i class="fa fa-hand-paper-o"></i> <i class="fa fa-hand-peace-o"></i>
							<i class="fa fa-hand-pointer-o"></i> <i class="fa fa-hand-rock-o"></i>
							<i class="fa fa-hand-scissors-o"></i> <i
								class="fa fa-hand-spock-o"></i> <i class="fa fa-hand-stop-o"></i>
							<i class="fa fa-thumbs-down"></i> <i class="fa fa-thumbs-o-down"></i>
							<i class="fa fa-thumbs-o-up"></i> <i class="fa fa-thumbs-up"></i>
							<i class="fa fa-ambulance"></i> <i class="fa fa-automobile"></i>
							<i class="fa fa-bicycle"></i> <i class="fa fa-bus"></i> <i
								class="fa fa-cab"></i> <i class="fa fa-car"></i> <i
								class="fa fa-fighter-jet"></i> <i class="fa fa-motorcycle"></i>
							<i class="fa fa-plane"></i> <i class="fa fa-rocket"></i> <i
								class="fa fa-ship"></i> <i class="fa fa-space-shuttle"></i> <i
								class="fa fa-subway"></i> <i class="fa fa-taxi"></i> <i
								class="fa fa-train"></i> <i class="fa fa-truck"></i> <i
								class="fa fa-wheelchair"></i> <i class="fa fa-genderless"></i> <i
								class="fa fa-intersex"></i> <i class="fa fa-mars"></i> <i
								class="fa fa-mars-double"></i> <i class="fa fa-mars-stroke"></i>
							<i class="fa fa-mars-stroke-h"></i> <i
								class="fa fa-mars-stroke-v"></i> <i class="fa fa-mercury"></i> <i
								class="fa fa-neuter"></i> <i class="fa fa-transgender"></i> <i
								class="fa fa-transgender-alt"></i> <i class="fa fa-venus"></i> <i
								class="fa fa-venus-double"></i> <i class="fa fa-venus-mars"></i>
							<i class="fa fa-file"></i> <i class="fa fa-file-archive-o"></i> <i
								class="fa fa-file-audio-o"></i> <i class="fa fa-file-code-o"></i>
							<i class="fa fa-file-excel-o"></i> <i class="fa fa-file-image-o"></i>
							<i class="fa fa-file-movie-o"></i> <i class="fa fa-file-o"></i> <i
								class="fa fa-file-pdf-o"></i> <i class="fa fa-file-photo-o"></i>
							<i class="fa fa-file-picture-o"></i> <i
								class="fa fa-file-powerpoint-o"></i> <i
								class="fa fa-file-sound-o"></i> <i class="fa fa-file-text"></i>
							<i class="fa fa-file-text-o"></i> <i class="fa fa-file-video-o"></i>
							<i class="fa fa-file-word-o"></i> <i class="fa fa-file-zip-o"></i>
							<i class="fa fa-circle-o-notch"></i> <i class="fa fa-cog"></i> <i
								class="fa fa-gear"></i> <i class="fa fa-refresh"></i> <i
								class="fa fa-spinner"></i> <i class="fa fa-check-square"></i> <i
								class="fa fa-check-square-o"></i> <i class="fa fa-circle"></i> <i
								class="fa fa-circle-o"></i> <i class="fa fa-dot-circle-o"></i> <i
								class="fa fa-minus-square"></i> <i class="fa fa-minus-square-o"></i>
							<i class="fa fa-plus-square"></i> <i class="fa fa-plus-square-o"></i>
							<i class="fa fa-square"></i> <i class="fa fa-square-o"></i> <i
								class="fa fa-cc-amex"></i> <i class="fa fa-cc-diners-club"></i>
							<i class="fa fa-cc-discover"></i> <i class="fa fa-cc-jcb"></i> <i
								class="fa fa-cc-mastercard"></i> <i class="fa fa-cc-paypal"></i>
							<i class="fa fa-cc-stripe"></i> <i class="fa fa-cc-visa"></i> <i
								class="fa fa-credit-card"></i> <i class="fa fa-credit-card-alt"></i>
							<i class="fa fa-google-wallet"></i> <i class="fa fa-paypal"></i>
							<i class="fa fa-area-chart"></i> <i class="fa fa-bar-chart"></i>
							<i class="fa fa-bar-chart-o"></i> <i class="fa fa-line-chart"></i>
							<i class="fa fa-pie-chart"></i> <i class="fa fa-bitcoin"></i> <i
								class="fa fa-btc"></i> <i class="fa fa-cny"></i> <i
								class="fa fa-dollar"></i> <i class="fa fa-eur"></i> <i
								class="fa fa-euro"></i> <i class="fa fa-gbp"></i> <i
								class="fa fa-gg"></i> <i class="fa fa-gg-circle"></i> <i
								class="fa fa-ils"></i> <i class="fa fa-inr"></i> <i
								class="fa fa-jpy"></i> <i class="fa fa-krw"></i> <i
								class="fa fa-money"></i> <i class="fa fa-rmb"></i> <i
								class="fa fa-rouble"></i> <i class="fa fa-rub"></i> <i
								class="fa fa-ruble"></i> <i class="fa fa-rupee"></i> <i
								class="fa fa-shekel"></i> <i class="fa fa-sheqel"></i> <i
								class="fa fa-try"></i> <i class="fa fa-turkish-lira"></i> <i
								class="fa fa-usd"></i> <i class="fa fa-won"></i> <i
								class="fa fa-yen"></i> <i class="fa fa-align-center"></i> <i
								class="fa fa-align-justify"></i> <i class="fa fa-align-left"></i>
							<i class="fa fa-align-right"></i> <i class="fa fa-bold"></i> <i
								class="fa fa-chain"></i> <i class="fa fa-chain-broken"></i> <i
								class="fa fa-clipboard"></i> <i class="fa fa-columns"></i> <i
								class="fa fa-copy"></i> <i class="fa fa-cut"></i> <i
								class="fa fa-dedent"></i> <i class="fa fa-eraser"></i> <i
								class="fa fa-file"></i> <i class="fa fa-file-o"></i> <i
								class="fa fa-file-text"></i> <i class="fa fa-file-text-o"></i> <i
								class="fa fa-files-o"></i> <i class="fa fa-floppy-o"></i> <i
								class="fa fa-font"></i> <i class="fa fa-header"></i> <i
								class="fa fa-indent"></i> <i class="fa fa-italic"></i> <i
								class="fa fa-link"></i> <i class="fa fa-list"></i> <i
								class="fa fa-list-alt"></i> <i class="fa fa-list-ol"></i> <i
								class="fa fa-list-ul"></i> <i class="fa fa-outdent"></i> <i
								class="fa fa-paperclip"></i> <i class="fa fa-paragraph"></i> <i
								class="fa fa-paste"></i> <i class="fa fa-repeat"></i> <i
								class="fa fa-rotate-left"></i> <i class="fa fa-rotate-right"></i>
							<i class="fa fa-save"></i> <i class="fa fa-scissors"></i> <i
								class="fa fa-strikethrough"></i> <i class="fa fa-subscript"></i>
							<i class="fa fa-superscript"></i> <i class="fa fa-table"></i> <i
								class="fa fa-text-height"></i> <i class="fa fa-text-width"></i>
							<i class="fa fa-th"></i> <i class="fa fa-th-large"></i> <i
								class="fa fa-th-list"></i> <i class="fa fa-underline"></i> <i
								class="fa fa-undo"></i> <i class="fa fa-unlink"></i> <i
								class="fa fa-angle-double-down"></i> <i
								class="fa fa-angle-double-left"></i> <i
								class="fa fa-angle-double-right"></i> <i
								class="fa fa-angle-double-up"></i> <i class="fa fa-angle-down"></i>
							<i class="fa fa-angle-left"></i> <i class="fa fa-angle-right"></i>
							<i class="fa fa-angle-up"></i> <i class="fa fa-arrow-circle-down"></i>
							<i class="fa fa-arrow-circle-left"></i> <i
								class="fa fa-arrow-circle-o-down"></i> <i
								class="fa fa-arrow-circle-o-left"></i> <i
								class="fa fa-arrow-circle-o-right"></i> <i
								class="fa fa-arrow-circle-o-up"></i> <i
								class="fa fa-arrow-circle-right"></i> <i
								class="fa fa-arrow-circle-up"></i> <i class="fa fa-arrow-down"></i>
							<i class="fa fa-arrow-left"></i> <i class="fa fa-arrow-right"></i>
							<i class="fa fa-arrow-up"></i> <i class="fa fa-arrows"></i> <i
								class="fa fa-arrows-alt"></i> <i class="fa fa-arrows-h"></i> <i
								class="fa fa-arrows-v"></i> <i class="fa fa-caret-down"></i> <i
								class="fa fa-caret-left"></i> <i class="fa fa-caret-right"></i>
							<i class="fa fa-caret-square-o-down"></i> <i
								class="fa fa-caret-square-o-left"></i> <i
								class="fa fa-caret-square-o-right"></i> <i
								class="fa fa-caret-square-o-up"></i> <i class="fa fa-caret-up"></i>
							<i class="fa fa-chevron-circle-down"></i> <i
								class="fa fa-chevron-circle-left"></i> <i
								class="fa fa-chevron-circle-right"></i> <i
								class="fa fa-chevron-circle-up"></i> <i
								class="fa fa-chevron-down"></i> <i class="fa fa-chevron-left"></i>
							<i class="fa fa-chevron-right"></i> <i class="fa fa-chevron-up"></i>
							<i class="fa fa-exchange"></i> <i class="fa fa-hand-o-down"></i>
							<i class="fa fa-hand-o-left"></i> <i class="fa fa-hand-o-right"></i>
							<i class="fa fa-hand-o-up"></i> <i class="fa fa-long-arrow-down"></i>
							<i class="fa fa-long-arrow-left"></i> <i
								class="fa fa-long-arrow-right"></i> <i
								class="fa fa-long-arrow-up"></i> <i class="fa fa-toggle-down"></i>
							<i class="fa fa-toggle-left"></i> <i class="fa fa-toggle-right"></i>
							<i class="fa fa-toggle-up"></i> <i class="fa fa-arrows-alt"></i>
							<i class="fa fa-backward"></i> <i class="fa fa-compress"></i> <i
								class="fa fa-eject"></i> <i class="fa fa-expand"></i> <i
								class="fa fa-fast-backward"></i> <i class="fa fa-fast-forward"></i>
							<i class="fa fa-forward"></i> <i class="fa fa-pause"></i> <i
								class="fa fa-pause-circle"></i> <i class="fa fa-pause-circle-o"></i>
							<i class="fa fa-play"></i> <i class="fa fa-play-circle"></i> <i
								class="fa fa-play-circle-o"></i> <i class="fa fa-random"></i> <i
								class="fa fa-step-backward"></i> <i class="fa fa-step-forward"></i>
							<i class="fa fa-stop"></i> <i class="fa fa-stop-circle"></i> <i
								class="fa fa-stop-circle-o"></i> <i class="fa fa-youtube-play"></i>
							<i class="fa fa-500px"></i> <i class="fa fa-adn"></i> <i
								class="fa fa-amazon"></i> <i class="fa fa-android"></i> <i
								class="fa fa-angellist"></i> <i class="fa fa-apple"></i> <i
								class="fa fa-behance"></i> <i class="fa fa-behance-square"></i>
							<i class="fa fa-bitbucket"></i> <i class="fa fa-bitbucket-square"></i>
							<i class="fa fa-bitcoin"></i> <i class="fa fa-black-tie"></i> <i
								class="fa fa-bluetooth"></i> <i class="fa fa-bluetooth-b"></i> <i
								class="fa fa-btc"></i> <i class="fa fa-buysellads"></i> <i
								class="fa fa-cc-amex"></i> <i class="fa fa-cc-diners-club"></i>
							<i class="fa fa-cc-discover"></i> <i class="fa fa-cc-jcb"></i> <i
								class="fa fa-cc-mastercard"></i> <i class="fa fa-cc-paypal"></i>
							<i class="fa fa-cc-stripe"></i> <i class="fa fa-cc-visa"></i> <i
								class="fa fa-chrome"></i> <i class="fa fa-codepen"></i> <i
								class="fa fa-codiepie"></i> <i class="fa fa-connectdevelop"></i>
							<i class="fa fa-contao"></i> <i class="fa fa-credit-card-alt"></i>
							<i class="fa fa-css3"></i> <i class="fa fa-dashcube"></i> <i
								class="fa fa-delicious"></i> <i class="fa fa-deviantart"></i> <i
								class="fa fa-digg"></i> <i class="fa fa-dribbble"></i> <i
								class="fa fa-dropbox"></i> <i class="fa fa-drupal"></i> <i
								class="fa fa-edge"></i> <i class="fa fa-empire"></i> <i
								class="fa fa-expeditedssl"></i> <i class="fa fa-facebook"></i> <i
								class="fa fa-facebook-f"></i> <i class="fa fa-facebook-official"></i>
							<i class="fa fa-facebook-square"></i> <i class="fa fa-firefox"></i>
							<i class="fa fa-flickr"></i> <i class="fa fa-fonticons"></i> <i
								class="fa fa-fort-awesome"></i> <i class="fa fa-forumbee"></i> <i
								class="fa fa-foursquare"></i> <i class="fa fa-ge"></i> <i
								class="fa fa-get-pocket"></i> <i class="fa fa-gg"></i> <i
								class="fa fa-gg-circle"></i> <i class="fa fa-git"></i> <i
								class="fa fa-git-square"></i> <i class="fa fa-github"></i> <i
								class="fa fa-github-alt"></i> <i class="fa fa-github-square"></i>
							<i class="fa fa-gittip"></i> <i class="fa fa-google"></i> <i
								class="fa fa-google-plus"></i> <i
								class="fa fa-google-plus-square"></i> <i
								class="fa fa-google-wallet"></i> <i class="fa fa-gratipay"></i>
							<i class="fa fa-hacker-news"></i> <i class="fa fa-houzz"></i> <i
								class="fa fa-html5"></i> <i class="fa fa-instagram"></i> <i
								class="fa fa-internet-explorer"></i> <i class="fa fa-ioxhost"></i>
							<i class="fa fa-joomla"></i> <i class="fa fa-jsfiddle"></i> <i
								class="fa fa-lastfm"></i> <i class="fa fa-lastfm-square"></i> <i
								class="fa fa-leanpub"></i> <i class="fa fa-linkedin"></i> <i
								class="fa fa-linkedin-square"></i> <i class="fa fa-linux"></i> <i
								class="fa fa-maxcdn"></i> <i class="fa fa-meanpath"></i> <i
								class="fa fa-medium"></i> <i class="fa fa-mixcloud"></i> <i
								class="fa fa-modx"></i> <i class="fa fa-odnoklassniki"></i> <i
								class="fa fa-odnoklassniki-square"></i> <i
								class="fa fa-opencart"></i> <i class="fa fa-openid"></i> <i
								class="fa fa-opera"></i> <i class="fa fa-optin-monster"></i> <i
								class="fa fa-pagelines"></i> <i class="fa fa-paypal"></i> <i
								class="fa fa-pied-piper"></i> <i class="fa fa-pied-piper-alt"></i>
							<i class="fa fa-pinterest"></i> <i class="fa fa-pinterest-p"></i>
							<i class="fa fa-pinterest-square"></i> <i
								class="fa fa-product-hunt"></i> <i class="fa fa-qq"></i> <i
								class="fa fa-ra"></i> <i class="fa fa-rebel"></i> <i
								class="fa fa-reddit"></i> <i class="fa fa-reddit-alien"></i> <i
								class="fa fa-reddit-square"></i> <i class="fa fa-renren"></i> <i
								class="fa fa-safari"></i> <i class="fa fa-scribd"></i> <i
								class="fa fa-sellsy"></i> <i class="fa fa-share-alt"></i> <i
								class="fa fa-share-alt-square"></i> <i
								class="fa fa-shirtsinbulk"></i> <i class="fa fa-simplybuilt"></i>
							<i class="fa fa-skyatlas"></i> <i class="fa fa-skype"></i> <i
								class="fa fa-slack"></i> <i class="fa fa-slideshare"></i> <i
								class="fa fa-soundcloud"></i> <i class="fa fa-spotify"></i> <i
								class="fa fa-stack-exchange"></i> <i
								class="fa fa-stack-overflow"></i> <i class="fa fa-steam"></i> <i
								class="fa fa-steam-square"></i> <i class="fa fa-stumbleupon"></i>
							<i class="fa fa-stumbleupon-circle"></i> <i
								class="fa fa-tencent-weibo"></i> <i class="fa fa-trello"></i> <i
								class="fa fa-tripadvisor"></i> <i class="fa fa-tumblr"></i> <i
								class="fa fa-tumblr-square"></i> <i class="fa fa-twitch"></i> <i
								class="fa fa-twitter"></i> <i class="fa fa-twitter-square"></i>
							<i class="fa fa-usb"></i> <i class="fa fa-viacoin"></i> <i
								class="fa fa-vimeo"></i> <i class="fa fa-vimeo-square"></i> <i
								class="fa fa-vine"></i> <i class="fa fa-vk"></i> <i
								class="fa fa-wechat"></i> <i class="fa fa-weibo"></i> <i
								class="fa fa-weixin"></i> <i class="fa fa-whatsapp"></i> <i
								class="fa fa-wikipedia-w"></i> <i class="fa fa-windows"></i> <i
								class="fa fa-wordpress"></i> <i class="fa fa-xing"></i> <i
								class="fa fa-xing-square"></i> <i class="fa fa-y-combinator"></i>
							<i class="fa fa-y-combinator-square"></i> <i class="fa fa-yahoo"></i>
							<i class="fa fa-yc"></i> <i class="fa fa-yc-square"></i> <i
								class="fa fa-yelp"></i> <i class="fa fa-youtube"></i> <i
								class="fa fa-youtube-play"></i> <i class="fa fa-youtube-square"></i>
							<i class="fa fa-ambulance"></i> <i class="fa fa-h-square"></i> <i
								class="fa fa-heart"></i> <i class="fa fa-heart-o"></i> <i
								class="fa fa-heartbeat"></i> <i class="fa fa-hospital-o"></i> <i
								class="fa fa-medkit"></i> <i class="fa fa-plus-square"></i> <i
								class="fa fa-stethoscope"></i> <i class="fa fa-user-md"></i> <i
								class="fa fa-wheelchair"></i>
						</div>

					</div>

				</div>
				<div class="modal-footer">
					<label>Search: <input type="text" id="queryIcon" value=""></label>
					&nbsp; <label class="selectedIcon" style="display: none;"><i
						id="selectedIcon" class=""></i> <input type="text"
						id="txtIconSearch" class="hide" value="" readonly="true"
						placeholder="readonly"></label>&nbsp; <input type="hidden"
						class="iconName" value="">
					<button type="button" class="btn btn-primary ok">Confirm</button>
				</div>
			</div>
		</div>
	</div>

	<style type="text/css">
#txtIconSearch {
	width: 280px;
}

#icon-list i, #selectedIcon {
	width: 32px;
	height: 32px;
	font-size: 26px;
	color: #555555;
	padding: 3px;
}

#selectedIcon {
	margin-right: 16px;
}

#icon-list i:hover {
	background-color: #DA4453;
	color: #ffffff;
}

#iconsModal .modal-body {
	height: 400px;
	overflow: auto;
}
</style>


	<script type="text/javascript">
	function setIcon(e){
		var $t = $(this), name = $t.prop('class');
		$('#txtIconSearch').val( name );
    $('label.selectedIcon').show();
    $('#selectedIcon').prop( 'class', name );
	};
  function showIconName(e){
    var $t = $(this);
    $('#iconsModal .modal-title').text( $t.prop('class') );
  };
	$('#icon-list').on( {
		click: setIcon
    //mouseover: showIconName
	}, 'i');

  function searchIcon(){
    var q = $('#queryIcon').val();
    if( q == '' ){
      $('#icon-list i').show();
      return;  
    };

    $('#icon-list i:not([class*="' + q + '"])').hide();
    $('#icon-list i[class*="' + q + '"]').show();
  };

  $('#queryIcon').keyup( searchIcon );

  $('#iconsModal').on('shown.bs.modal', function (e) {
    var $btn = $(e.relatedTarget), iconName = $btn.data('iconname'), 
    $modal = $(this);
    $modal.find('input.iconName').val( iconName );
    $modal.focus();
    console.log($btn.data());
  });

  $('#iconsModal .modal-footer button.ok').click( function(){
    var iconVal = $('#txtIconSearch').val(),
    iconName = $('#iconsModal').find('input.iconName').val(); 
    if( iconVal ){
      Formbuilder.rf.set(iconName, iconVal );
    };
    $('#iconsModal').modal('hide');
  });
</script>

	<link rel="stylesheet" href="../resources/css/form_builder/vendor-min.css">
	<script src="../resources/js/form_builder/vendor-min.js"></script>
	<script	src="../resources/js/form_builder/formbuilder-min.js"></script>

	<link rel="stylesheet" href="../resources/css/form_builder/font-awesome.min.css">
	<link href="../resources/css/form_builder/_all.min.css"	rel="stylesheet">
	<link rel="stylesheet" href="../resources/css/form_builder/jquery-ui.css">

	<style>
ul.navInline li a.create-form {
	background-color: #da4453;
}

.fb-response-fields.iCheck .checkbox label, .fb-response-fields.iCheck .radio label
	{
	padding-left: 2px;
}
</style>

	<script>
  var bootstrapData;
    $(function(){
	
    //var number = 9999 + Math.floor(Math.random() * 100);
    var c='';
    for(c = ''; c.length < 5;) 
    	c += Math.random().toString(36).substr(2, 1)
    	
    bootstrapData = {"formId":"jqueryform-"+c,"email":{"to":"bayapureddysudeer@gmail.com","cc":"","bcc":"","subject":"subject testinh","template":""},"admin":{"users":"admin:86434","dataDelivery":"emailAndFile"},"thankyou":{"url":"","message":"","seconds":"10"},"seo":{"trackerId":"","title":"","description":"","keywords":"","author":""},"mailer":"local","smtp":{"host":"","user":"","password":""},"mailgun":{"domain":"","apiKey":"","fromEmail":"","fromName":""},"styles":{"iCheck":{"enabled":true,"skin":"flat","colorScheme":"black"},"Select2":{"enabled":true}},"logics":[],"fields":[{"label":"Submit Button","field_type":"submit","required":true,"field_options":{"images":{"urls":"","slideshow":false}},"labelHide":true,"submit":{"label":"","icon":"","checkRequiredFields":""},"cid":"c100"}]}; 

     //bootstrapData = {"formId":"jqueryform-"+c,"logics":[],"fields":[{}]};
      $(document).trigger('formConfig:ready', bootstrapData);

    });
  </script>

	<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-571040-11', 'auto');
  ga('send', 'pageview');

</script>

	<div
		class="ui-dialog ui-widget ui-widget-content ui-corner-all ui-front ui-dialog-buttons ui-draggable"
		tabindex="-1" role="dialog" aria-describedby="selectFieldsDialog"
		aria-labelledby="ui-id-1" style="display: none;">
		<div
			class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix ui-draggable-handle">
			<span id="ui-id-1" class="ui-dialog-title">Select Field(s)</span>
			<button type="button"
				class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ui-dialog-titlebar-close"
				role="button" title="Close">
				<span class="ui-button-icon-primary ui-icon ui-icon-closethick"></span><span
					class="ui-button-text">Close</span>
			</button>
		</div>
		
		<div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
			<div class="ui-dialog-buttonset">
				<button type="button"
					class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"
					role="button">
					<span class="ui-button-text">Confirm</span>
				</button>
			</div>
		</div>
	</div>
	<input type="button" name="pdfDownload" value="Submit Survey"  class="btn btn-primary pull-right" onclick="javascript:makeNewSurvey();"/>
				</div>
			</div>
		</div>
	</div>
	</form>
</body>
</html>