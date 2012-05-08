<?php
$link = mysql_connect('localhost', 'root', 'root');
if (!$link) { 
    die('Could not connect: ' . mysql_error()); 
} 
mysql_select_db(brews);

$id = '';
$name = '';
$data = '';
?>

<!DOCTYPE html>

<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en"> <!--<![endif]-->
<head>

	<meta charset="utf-8">
	
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	
	<title>One Two Brew</title>
	
	<!-- boring search engine stuff -->
	<meta name="title" content="One Two Brew">
	<meta name="description" content="">
	
	<meta name="google-site-verification" content="">
	
	<meta name="author" content="Klare Frank">
	<meta name="Copyright" content="Copyright Klare Frank 2012. All Rights Reserved.">
	

	<!-- Uncomment to use; use thoughtfully!
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
	-->

	<link rel="shortcut icon" href="_/img/favicon.ico">
		 
	<link rel="apple-touch-icon" href="_/img/apple-touch-icon.png">
	
	<!-- the fun stuff! -->
    <link rel="stylesheet" href="_/css/foundation.css">
    <link rel="stylesheet" href="_/css/application.css">

    <!--[if gte IE 9]>
     <style type="text/css">
    	header {
       		filter: none;
    	}
  	 </style>
    <![endif]-->
    
	<!-- HTML5 shim, for IE6-8 support of HTML elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <script type="text/javascript">
	<?php
	if (isset($_GET['id'])) {
		$id = $_GET['id'];
		$result = mysql_query("SELECT * FROM brew WHERE id=$id");
		while($item = mysql_fetch_array( $result )) {
			$name = $item['name'];
			$data = $item['data'];
			echo "window.brewId = '$id';";
			echo "window.brewName = \"$name\";";
			echo "window.brewData = $data;";
		}
	}
	?>
	</script>
</head>

<body>

<h1 class="skip"><a href="index.php">One Two Brew</a></h1>
<a href="#content" class="skip">Skip to Content</a>

<!--<nav>
	<ul>
		<li><a href="index.html">Home</a></li>
		<li><a href="history.html">History</a></li>
		<li><a href="recipes.html">Recipes</a></li>
		<li><a href="settings.html">Settings</a></li>
	</ul>
</nav>-->

<div class="main">
<header>
	<!--<a href="#" class="collapse">Navigation</a>-->
	<h1><a href="index.php">One Two Brew</a></h1>
	<a href="index.php">New Recipe</a>
</header>

<section id="content" class="clearfix">
<div class="container">
<form class="form-horizontal">
	<section id="general">
		<h1 data-bind="text:data.brewName"></h1>
		<h2 data-bind="text:data.brewStyle"></h2>
		<div class="row panel">
				<div class="control-group">
					<label class="control-label">Batch Size</label>
					<div class="controls">
						<span data-bind="text:data.batchSize"></span> gallons
					</div>
				</div>
				<div class="control-group">
					<label class="control-label">Boil Volume</label>
					<div class="controls">
						<span data-bind="text:data.boilVolume"></span> gallons
					</div>
				</div>
		</div><!-- /panel -->
	</section><!-- /general -->
	
	<section id="grains" >
		<div class="contain" data-bind="foreach:data.grains">
			<div class="row panel">
				<div class="control-group">
					<div class="controls">
						<span data-bind="text:type"></span>
					</div>
				</div>
				<!--<div class="control-group">
					<label class="control-label">Time</label>
					<div class="controls">
						<input type="text" value="${type}">
						<p class="help-block">in minutes</p>
					</div>
				</div>-->
				<div class="control-group">
					<div class="controls">
						<span data-bind="text:weight"></span> lbs
					</div>
				</div>
				<!--<div class="control-group">
					<label class="control-label">Color</label>
					<div class="controls">
						<input type="text" value="${color}">
					</div>
				</div>-->
			</div><!-- /panel -->
		</div>
		
	</section><!-- /grains -->
	
	<section id="hops">
		<div class="contain">
			<div class="row panel" data-bind="foreach:data.hops">
				<div class="control-group">
					<label class="control-label">Type</label>
					<div class="controls">
						<span data-bind="text:type"></span>
					</div>
				</div>
				<div class="control-group">
					<label class="control-label">Time</label>
					<div class="controls">
						<span data-bind="text:time"></span> minutes
					</div>
				</div>
				<div class="control-group">
					<div class="controls">
						<span data-bind="text:weight"></span> oz
					</div>
				</div>
				<div class="control-group">
					<label class="control-label">Form</label>
					<div class="controls">
						<span data-bind="text:form"></span>
					</div>
				</div>
			</div><!-- /panel -->
		</div>
	</section><!-- /hops -->
	
	<section id="yeast">
		<div class="contain" data-bind="foreach:data.yeasts">
		<div class="row panel">
			<div class="control-group">
				<span data-bind="text:type"></span>
			</div>
	</div><!-- /panel -->
		</div>
	</section><!-- /yeast -->
	
	<ul class="actions">
		<li><a href="edit.php?id=<?php echo $id; ?>">Edit</a></li>
		<li><a href="index.php">Done</a></li>
	</ul>
</form>
</div>
</section>

</div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
    <script src="_/js/knockout-2.0.0.js"></script>
    <script src="_/js/brew.js"></script>
</body>

</html>