<?php
$link = mysql_connect('localhost', 'root', 'root');
if (!$link) { 
    die('Could not connect: ' . mysql_error()); 
} 
mysql_select_db(brews);

if ($_SERVER['REQUEST_METHOD'] == GET) {
	
	if (isset($_GET['id'])) {
		$id = $_GET['id'];
		$result = mysql_query("SELECT data FROM brew WHERE id=$id");
		while($item = mysql_fetch_array( $result )) {
			echo $item['data'];
		}
	}
	
} else if ($_SERVER['REQUEST_METHOD'] == POST) {
	
	$id = $_POST['id'];
	$name = $_POST['name'];
	$data = $_POST['data'];
	
	if ($_POST['id'] != '') {
		// HAS ID. Update Record.
		$result = mysql_query("UPDATE brew SET name='$name',data='$data' WHERE id=$id");
		
	} else {
		// NO ID. Create Record.
		$result = mysql_query("INSERT INTO brew (name, data) VALUES ('$name', '$data')");
		$id = mysql_insert_id();
	}
}

header("Location: view.php?id=$id");
?>