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
	<title>One Two Brew</title>
	
	<!-- boring search engine stuff -->
	<meta name="title" content="One Two Brew">
	<meta name="description" content="">
	<link rel="shortcut icon" href="_/img/favicon.ico">
	<link rel="apple-touch-icon" href="_/img/apple-touch-icon.png">
	
	<!-- the fun stuff! -->
	<link rel="stylesheet" href="_/css/chosen.css">
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

<h1 class="skip"><a href="#">One Two Brew</a></h1>
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
	<a href="new-recipe.html">New Recipe</a>
</header>

<section id="content" class="clearfix">
<div class="container">
	
<form class="form-horizontal" id="brew-form" action="data.php" method="post">
	<section id="general"> 
		<label class="hidden">Brew Name</label>
		<input type="text" class="backless" placeholder="Brew Name" data-bind='value:data.brewName'/>
		<div class="row panel">
				<div class="control-group">
					<label class="control-label">Style</label>
					<div class="controls">
						<select id="brewStyle" data-bind="options:options.styles, value:brewStyle"></select>
						<p class="help-block">Pick a <a href="#">BJCP</a> style for comparison.</p>
					</div>
				</div>
				<div class="control-group">
					<label class="control-label">Batch Size</label>
					<div class="controls">
						<input type="text" data-bind="value:data.batchSize">
						<p class="help-block">in gallons</p>
					</div>
				</div>
				<div class="control-group">
					<label class="control-label">Type</label>
					<div class="controls">
						<input type="text" data-bind="value:data.brewType">
					</div>
				</div>
				<div class="control-group">
					<label class="control-label">Boil Volume</label>
					<div class="controls">
						<input type="text" data-bind="value:data.boilVolume">
						<p class="help-block">1.25 to 1.5 quarts per pound of grain.</p>
					</div>
				</div>
		</div><!-- /panel -->
	</section><!-- /general -->
	
	<section id="grains" >
		<h2>Grains</h2>

		<button class="add" data-bind="click: addGrain">Add Grains</button>

		<div class="contain" data-bind="foreach:data.grains">
			<div class="panel">
				<div class="row">
				<div class="control-group span4">
					<label class="control-label">Type</label>
					<div class="controls">
						<select data-bind="options:$root.options.grains, optionsText:'name', optionsValue:'name', value:type"></select>
					</div>
				</div>
				<div class="control-group span3">
					<label class="control-label">Weight</label>
					<div class="controls">
						<input type="text" data-bind="value:weight">
						<p class="help-block">in pounds</p>
					</div>
				</div>
				<button class="btn span1" data-bind="click:$root.removeGrain">Remove</button>
				</div>
			</div>
		</div>

		
	</section><!-- /grains -->
	
	<section id="hops">
		<h2>Hops</h2>

		<button class="add" data-bind="click:addHops">Add Hops</button>

		<div class="contain" data-bind="foreach:data.hops">
			<div class="panel">
				<div class="row">
				<div class="control-group span3">
					<label class="control-label">Type</label>
					<div class="controls">
						<select id="brewStyle" data-bind="options:$root.options.hops, optionsText:'name', optionsValue:'name', value:type" data-placeholder="Choose a Hop Variety..."></select>
					</div>
				</div>
				<div class="control-group span2">
					<label class="control-label">Time</label>
					<div class="controls">
						<input type="text" data-bind="value:time">
					</div>
				</div>
				<div class="control-group span2">
					<label class="control-label">Weight</label>
					<div class="controls">
						<input type="text" data-bind="value:weight">
					</div>
				</div>
				<div class="control-group span2">
					<label class="control-label">Form</label>
					<div class="controls">
						<input type="text" data-bind="value:form">
					</div>
				</div>
				<button type="submit" class="btn removeBtn span1" data-bind="click:$root.removeHops">Remove</button>
				</div>
			</div>
		</div>

		
	</section><!-- /hops -->
	
	<section id="yeast">
		<h2>Yeast</h2>

		<button class="add" data-bind="click:addYeast">Add Yeast</button>

		<div class="contain" data-bind="foreach:data.yeasts">
			<div class="panel">
				<div class="row">
				<div class="span4">
					<div class="control-group">
						<select data-bind="options:$root.options.yeasts, value:type"></select>
					</div>
				</div>
				<button type="submit" class="btn span1" data-bind="click:$root.removeYeast">Remove</button>
				</div>
			</div>
		</div>

		
	</section><!-- /yeast -->

	<div class="actions">

		<a data-bind="attr:{href:'stats.php?id='+ data.id}" class="pull-right btn">View</a>
		<input type="hidden" name="id" id="brew-id">
		<input type="hidden" name="name" id="brew-name">
		<input type="hidden" name="style" id="brew-style">
		<input type="hidden" name="data" id="brew-data">
		<input type="submit" class="pull-right" data-bind="click:save" value="Save">

	</div>
	
</form>

</div>
</section>

<footer>
</footer>
</div>

<!-- the other fun stuff! -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
	<script src="_/js/knockout-2.0.0.js"></script>
    <script src="_/js/brew.js"></script>

    <script src="_/js/chosen.jquery.js" type="text/javascript"></script>
  <script type="text/javascript"> $(".chzn-select").chosen(); $(".chzn-select-deselect").chosen({allow_single_deselect:true}); </script>
</body>

</html>