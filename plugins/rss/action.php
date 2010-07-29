<?php
require_once('rss.php');

ob_start();
ignore_user_abort(true);
set_time_limit(0);
$val = null;
$cmd = "get";
if(isset($_REQUEST['mode']))
	$cmd = $_REQUEST['mode'];
$errorsReported = false;
$dataType="application/json";
$mngr = new rRSSManager();
switch($cmd)
{
	case "getintervals":
	{
		$val = $mngr->getIntervals();
		break;
	}
	case "add":
	{
		$lbl = null;
		if(isset($_REQUEST['label']))
			$lbl = $_REQUEST['label'];
		if(isset($_REQUEST['url']))
			$mngr->add($_REQUEST['url'],$lbl);
		break;
	}
	case "edit":
	{
		$lbl = null;
		if(isset($_REQUEST['label']))
			$lbl = $_REQUEST['label'];
		if(isset($_REQUEST['rss']) && isset($_REQUEST['url']))
			$mngr->change($_REQUEST['rss'],$_REQUEST['url'],$lbl);
		break;
	}
	case "clearhistory":
	{
		$mngr->clearHistory();
		break;
	}
	case "refresh":
	{
		if(isset($_REQUEST['rss']))
		{
			$mngr->updateRSS($_REQUEST['rss']);
		}
		else
			$mngr->update(true);
		break;
	}
	case "toggle":
	{
		if(isset($_REQUEST['rss']))
		{
			$mngr->toggleStatus($_REQUEST['rss']);
		}
		break;
	}
	case "remove":
	{
		if(isset($_REQUEST['rss']))
		{
			$mngr->remove($_REQUEST['rss']);
		}
		break;
	}
	case "getfilters":
	{
		$val = $mngr->getFilters();
		break;
	}
	case "checkfilter":
	{
		$hash = null;
		$pattern = '';
		$exclude = '';
		$checkTitle = 0;
		$checkDesc = 0;
		$checkLink = 0;
		if(isset($_REQUEST['rss']))
			$hash = $_REQUEST['rss'];
		if(isset($_REQUEST['pattern']))		
			$pattern = trim($_REQUEST['pattern']);
		if(isset($_REQUEST['exclude']))		
			$exclude = trim($_REQUEST['exclude']);
		if(isset($_REQUEST['chktitle']))
			$checkTitle = $_REQUEST['chktitle'];
		if(isset($_REQUEST['chkdesc']))
			$checkDesc = $_REQUEST['chkdesc'];
		if(isset($_REQUEST['chklink']))
			$checkLink = $_REQUEST['chklink'];
		$filter = new rRSSFilter( '', $pattern, $exclude, 1, '', 0, 1, null, '', $checkTitle, $checkDesc, $checkLink );
        	$val = $mngr->testFilter($filter,$hash);
        	$errorsReported = true;
		break;
	}
	case "setfilters":
	{
		if(!isset($HTTP_RAW_POST_DATA))
			$HTTP_RAW_POST_DATA = file_get_contents("php://input");
		$flts = new rRSSFilterList();
		$flt = null;
		if(isset($HTTP_RAW_POST_DATA))
		{
			$vars = explode('&', $HTTP_RAW_POST_DATA);
			foreach($vars as $var)
			{
				$parts = explode("=",$var);
				if($parts[0]=="name")
				{
					if($flt)
						$flts->add($flt);
					$flt = new rRSSFilter(rawurldecode($parts[1]));
				}
				else
				if($parts[0]=="pattern")
				{
					if($flt)
						$flt->pattern = trim(rawurldecode($parts[1]));
				}
				else
				if($parts[0]=="exclude")
				{
					if($flt)
						$flt->exclude = trim(rawurldecode($parts[1]));
				}
				else
				if($parts[0]=="enabled")
				{
					if($flt)
						$flt->enabled = $parts[1];
				}
				else
				if($parts[0]=="no")
				{
					if($flt)
						$flt->no = $parts[1];
				}
				else
				if($parts[0]=="interval")
				{
					if($flt)
						$flt->interval = $parts[1];
				}
				else
				if($parts[0]=="hash")
				{
					if($flt)
						$flt->rssHash = $parts[1];
				}
				else
				if($parts[0]=="throttle")
				{
					if($flt)
						$flt->throttle = $parts[1];
				}
				else
				if($parts[0]=="ratio")
				{
					if($flt)
						$flt->ratio = $parts[1];
				}
				else
				if($parts[0]=="start")
				{
					if($flt)
						$flt->start = $parts[1];
				}
				if($parts[0]=="addPath")
				{
					if($flt)
						$flt->addPath = $parts[1];
				}
				else
				if($parts[0]=="dir")
				{
					if($flt)
						$flt->directory = rawurldecode($parts[1]);
				}
				else
				if($parts[0]=="label")
				{
					if($flt)
						$flt->label = rawurldecode($parts[1]);
				}
				else
				if($parts[0]=="chktitle")
				{
					if($flt)
						$flt->titleCheck = $parts[1];
				}
				else
				if($parts[0]=="chkdesc")
				{
					if($flt)
						$flt->descCheck = $parts[1];
				}
				else
				if($parts[0]=="chklink")
				{
					if($flt)
						$flt->linkCheck = $parts[1];
				}
  	                }
			if($flt)
				$flts->add($flt);
			$mngr->setFilters($flts);
		}
		break;
	}
	case "clearfiltertime":
	{
	        if(isset($_REQUEST['no']))
			$mngr->clearFilterTime( $_REQUEST['no'] );
		$val = '';
		break;
	}
	case "getdesc":
	{
		$dataType="text/xml";
		$val = '';
	        if(isset($_REQUEST['rss']) && isset($_REQUEST['href']))
			$val = $mngr->getDescription($_REQUEST['rss'],$_REQUEST['href']);
		break;
	}
	case "mark":
	{
		if(!isset($HTTP_RAW_POST_DATA))
			$HTTP_RAW_POST_DATA = file_get_contents("php://input");
		if(isset($HTTP_RAW_POST_DATA) && isset($_REQUEST['state']))
		{
			$urls = array();
			$vars = explode('&', $HTTP_RAW_POST_DATA);
			foreach($vars as $var)
			{
				$parts = explode("=",$var);
				if($parts[0]=="url")
					$urls[] = rawurldecode($parts[1]);
			}
			$mngr->setHistoryState( $urls, $_REQUEST['state'] );
		}
		break;
	}
	case "loadtorrents":
	{
		if(!isset($HTTP_RAW_POST_DATA))
			$HTTP_RAW_POST_DATA = file_get_contents("php://input");
		if(isset($HTTP_RAW_POST_DATA))
		{
			set_time_limit(0);
			$vars = explode('&', $HTTP_RAW_POST_DATA);
			$lbl = null;
			$dir = null;
			$isStart = true; 
			$isAddPath = true;
			$curRSS = null;
			$rssArray = array();
			foreach($vars as $var)
			{
				$parts = explode("=",$var);
				if($parts[0]=="torrents_start_stopped")
					$isStart = false;
				else
				if($parts[0]=="not_add_path")
					$isAddPath = false;
				else
				if($parts[0]=="dir_edit")
					$dir = rawurldecode($parts[1]);
				else
				if($parts[0]=="label")
					$lbl = rawurldecode($parts[1]);
				else
				if($parts[0]=="rss")
					$curRSS = $parts[1];
				else
				if(($parts[0]=="url") && $curRSS)
				{
					if(!array_key_exists($curRSS,$rssArray) || !is_array($rssArray[$curRSS]))
						$rssArray[$curRSS] = array();
					$rssArray[$curRSS][] = rawurldecode($parts[1]);
				}
			}
			foreach($rssArray as $hash=>$urls)
			{
				$rss = new rRSS();
				$rss->hash = $hash;
				if($mngr->cache->get($rss))
				{
					foreach($urls as $url)
					{
						$mngr->getTorrents( $rss, $url, $isStart, $isAddPath, $dir, $lbl, null, null, false );
						if(WAIT_AFTER_LOADING)
							sleep(WAIT_AFTER_LOADING);
					}
				}
			}
			$mngr->saveHistory();
		}
		break;
	}
}
if($val===null)
{
	$val = $mngr->get();
	$errorsReported = true;
}
if($dataType=="text/xml")
	$content = '<?xml version="1.0" encoding="UTF-8"?><data><![CDATA['.$val.']]></data>';
else
	$content = $val;

cachedEcho($content,$dataType,true,false);

ob_flush();
flush();

if(connection_aborted())
{
	if($mngr->isErrorsOccured())
		$mngr->saveState(false);
}
else
{
	if($errorsReported && $mngr->hasErrors())
	{
		$mngr->clearErrors();
		$mngr->saveState(false);
	}
}

?>