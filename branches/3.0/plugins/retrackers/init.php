<?php

require_once( '../plugins/retrackers/retrackers.php');

$needStart = true;
if($do_diagnostic)
{
	if(!$pathToPHP || ($pathToPHP==""))
		findRemoteEXE('php',"thePlugins.get('retrackers').showError('theUILang.retrackersPHPNotFound');",$remoteRequests);
	@chmod($rootPath.'/plugins/retrackers/run.sh',0755);
	@chmod($rootPath.'/plugins/retrackers/update.php',0644);
	if(!isUserHavePermission($theSettings->uid,$theSettings->gid,$rootPath.'/plugins/retrackers/run.sh',0x0005))
	{
		$jResult.="plugin.disable(); plugin.showError('theUILang.retrackersRunNotAvailable');";
		$needStart = false;
	}
	if(!isUserHavePermission($theSettings->uid,$theSettings->gid,$rootPath.'/plugins/retrackers/update.php',0x0004))
	{
		$jResult.="plugin.disable(); plugin.showError('theUILang.retrackersUpdaterNotAvailable');";
		$needStart = false;
	}
}
if($needStart)
{
	if($theSettings->iVersion<0x804)
		$cmd = new rXMLRPCCommand('on_insert');
	else
        	$cmd = new rXMLRPCCommand('system.method.set_key','event.download.inserted_new');
	$cmd->addParameters( array('add_trackers'.getUser(),
		'branch=$not=$d.get_custom3=,"execute={'.$rootPath.'/plugins/retrackers/run.sh'.','.getPHP().',$d.get_hash=,'.getUser().'}" ; d.set_custom3='));
	$req = new rXMLRPCRequest($cmd);
	if($req->run() && !$req->fault)
	{
		$theSettings->registerPlugin("retrackers");
		$trks = rRetrackers::load();
		$jResult.=$trks->get();
	}
	else
		$jResult .= "plugin.disable(); log('retrackers: '+theUILang.pluginCantStart);";
}
?>
