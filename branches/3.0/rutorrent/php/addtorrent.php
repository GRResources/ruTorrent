<?php

require_once( 'util.php' );
require_once( 'Snoopy.class.inc');

$uploaded_file = '';
$success = false;

if(isset($_FILES['torrent_file']))
{
	$uploaded_file = getUploadsPath().'/'.md5($_FILES['torrent_file']['name']).'.torrent';
	$success = move_uploaded_file($_FILES['torrent_file']['tmp_name'],$uploaded_file);
}
else
	if(isset($_REQUEST['url']))
	{
		$url = $_REQUEST['url'];
		$cli = new Snoopy();
		$cli->agent = HTTP_USER_AGENT;
		$cli->read_timeout = HTTP_TIME_OUT;
		$cli->use_gzip = HTTP_USE_GZIP;
		$pos = strpos($url,':COOKIE:');
		if($pos!==false)
		{
			$tmp = explode(";",substr($url,$pos+8));
			foreach($tmp as $item)
			{
				list($name,$val) = explode("=",$item);
				$cli->cookies[$name] = $val;
			}
			$url = substr($url,0,$pos);
		}
		set_time_limit(0);
		if(@$cli->fetch($url) && $cli->status>=200 && $cli->status<300)
		{
			$uploaded_file = getUploadsPath()."/".md5($url).".torrent";
			$f = @fopen($uploaded_file,"w");
			if($f!==false)
			{
				@fwrite($f,$cli->results,strlen($cli->results));
				fclose($f);
				$success = true;
			}
		}
	}
if($success)
{
	@chmod($uploaded_file,0666);
	$uploaded_file = realpath($uploaded_file);
	$label = null;
	if(isset($_REQUEST['label']))	
		$label = trim($_REQUEST['label']);
	$dir_edit = null;
	if(isset($_REQUEST['dir_edit']))	
		$dir_edit = trim($_REQUEST['dir_edit']);
	if(sendFile2rTorrent($uploaded_file,
		false,
		!isset($_REQUEST['torrents_start_stopped']),
		!isset($_REQUEST['not_add_path']),
		$dir_edit,$label)===false)
	{
                unlink($uploaded_file);
                $success = false;
	}
}
$content = 'log(WUILang.addTorrent'. ($success ? 'Success' : 'Failed') . ');';
header("Content-Length: ".strlen($content));
header("Content-Type: text/html");
echo $content;

?>
