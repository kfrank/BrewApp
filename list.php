<?php
$link = mysql_connect('localhost', 'root', 'root');
if (!$link) { 
    die('Could not connect: ' . mysql_error()); 
} 
mysql_select_db(brews);

$result = mysql_query("SELECT * FROM brew ORDER BY id");
$rows = array();

while($item = mysql_fetch_array( $result )) {
	$ele = array();
	$ele['id'] = $item['id'];
	$ele['name'] = $item['name'];
	$ele['color'] = $item['color'];
	$rows[] = $ele;
}

echo json_encode( $rows );
?>