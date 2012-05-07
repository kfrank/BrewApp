<?php
$link = mysql_connect('localhost', 'root', 'root');
if (!$link) { 
    die('Could not connect: ' . mysql_error()); 
} 
mysql_select_db(brews);
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
		$result = mysql_query("SELECT * FROM brew ORDER BY id");
		$rows = array();

		while($item = mysql_fetch_array( $result )) {
			$ele = array();
			$ele['id'] = $item['id'];
			$ele['name'] = $item['name'];
			$rows[] = $ele;
		}

		echo 'window.brewList='. json_encode( $rows ) .';';
	?>
	</script>
</head>

<body>

<h1 class="hidden"><a href="index.html">One Two Brew</a></h1>
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
	<h1><a href="#">One Two Brew</a></h1>

	<a href="recipe.php">New Recipe</a>
</header>

<section id="content" class="clearfix">
<div class="container">
	<a class="brew new" href="recipe.php">
		<figure>
			<img src="_/img/beers/new.jpg" alt="brew name">
		</figure>
		<figcaption>
			<h2>Add A Brew</h2>
			<h3>Start something tasty</h3>
		</figcaption>
	</a><!-- /new brew -->
	
<!-- // template for saved brews -->
	<div data-bind="foreach:brews">
	<a class="brew" data-bind="attr:{href:'recipe.php?id='+ id}">
		<figure>
			<img src="_/img/beers/a-cold-day-in-helles.jpg" alt="A Cold Day in Helles">
		</figure>
		<figcaption>
			<h2 data-bind="text:name">A Cold Day in Helles</h2>
			<h3>A Beer That Needs More Data</h3>
		</figcaption>
	</a><!-- /new brew -->
	</div>
</div>
</section>

<footer>

</footer>
</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
	<script src="_/js/knockout-2.0.0.js"></script>
    <script type="text/javascript">
	var BrewList = function(list) {
		this.brews = ko.observableArray(list);
	};
	
	ko.applyBindings(new BrewList( window.brewList ));
	</script>
</body>
</html>