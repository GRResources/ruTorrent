<?php

require_once( 'util.php' );

$filename = getSettingsPath()."/uisettings.json";
if($w = @fopen($filename, "wb"))
{
	if(isset($_REQUEST['v']))
		fputs($w,$_REQUEST['v']);
	fclose($w);
}
$content = '<?xml version="1.0" encoding="UTF-8"?><data></data>';
header("Content-Length: ".strlen($content));
header("Content-Type: text/xml; charset=UTF-8");
echo $content;

?>
