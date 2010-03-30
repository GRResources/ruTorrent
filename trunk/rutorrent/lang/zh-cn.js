﻿/*
 * WebUI - The WEB interface for uTorrent - http://www.utorrent.com
 * NO COPYCATS of language update
 * 
 * == BEGIN LICENSE ==
 * 
 * Licensed under the terms of any of the following licenses at your
 * choice:
 * 
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    http://www.gnu.org/licenses/gpl.html
 * 
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 * 
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    http://www.mozilla.org/MPL/MPL-1.1.html
 * 
 * == END LICENSE ==
 * 
 * File Name: cn.js
 * 	Chinese Simplified language file.
 * 
 * File Author:
 * 		skevin (skevin@china.com)
 */
 
 var theUILang =
 {
 //all used
 kbs				: "kB/s",
 
 
 //Settings window
 
 General			: "常规",
 Downloads			: "下载",
 Connection			: "连接",
 BitTorrent			: "任务",
 Queueing			: "队列",
 Scheduler			: "计划",
 Advanced			: "高级",
 Disk_Cache			: "缓存",
 Enable_Web_Interface : "启用网页界面",
 Authent			: "访问验证",
 Username			: "用户",
 Password			: "密码",
 Enable_Guest_acc	: "启用访客帐户所使用的用户名",
 Connectivity		: "连接设置",
 Alt_list_port		: "可选监听端口(默认为 BitTorrent 端口)",
 Rest_access		: "限制下列 IP 地址的访问(多个实例请用 '','' 分隔)",
 User_Interface		: "界面",
 Confirm_del_torr	: "删除 Torrent 时要求确认",
 Update_GUI_every	: "每次更新 GUI ",
 ms					: "ms",
 Alt_list_bckgnd	: "交替显示列表背景色",
 Show_speed			: "显示速度",
 Don_t				: "不显示",
 In_status_bar		: "在状态栏",
 In_title_bar		: "在标题栏",
 Show_cat_start		: "启动时显示类别",
 Show_det_start		: "启动时显示详情",
 Restor_def			: "恢复默认",
 When_add_torrent	: "添加任务时",
 Dnt_start_down_auto: "不要自动开始下载",
 Other_sett			: "其他设置",
 Append_ut_incompl	: "未完成文件添加 .!ut 后缀",
 Prealloc_all_files	: "预先分配磁盘空间",
 Prev_stnd_w_act_con: "任务活动时避免进入待机状态",
 Listening_Port		: "监听端口",
 Port_f_incom_conns	: "传入连接所使用的端口",
 Random_Port		: "随机端口",
 Rnd_port_torr_start: "每次 rTorrent 启动时使用随机端口",
 En_UPnP_mapp		: "启用 UPnP 端口映射",
 Add_torr_mustdie_f	: "添加 rTorrent 到系统防火墙的例外规则 (Windows XP SP2 或更高版本)",
 Proxy_Server		: "代理服务",
 Type				: "类型",
 none				: "(无)",
 Proxy				: "代理",
 Port				: "端口",
 Use_proxy_4_p2p_con: "使用点对点连接代理服务器",
 Bandwidth_Limiting : "带宽限制",
 Global_max_upl		: "全局最大上传速度",
 unlimited			: "无限制",
 Alt_down_r_downl	: "无下载时切换上传速度为",
 Glob_max_downl		: "全局最大下载速度",
 Num_of_conn		: "连接数值",
 Glob_max_conn		: "全局最大连接数量",
 Max_conn_peer_torr	: "每个 Torrent 的最大连接数",
 Num_upl_slots		: "每个 Torrent 的上传通道数",
 Extra_ulslots		: "使用额外的上传通道如果上传速度 < 90%",
 Add_bittor_featrs	: "其他功能选项s",
 En_DHT_ntw			: "启用 DHT 网络",
 Ask_scrape			: "向 Tracker 查询状态信息",
 En_DHT_new_torrs	: "新建 Torrent 时启用 DHT",
 Peer_exch			: "用户交换",
 Ip_report_track	: "向 Tracker 提交的 IP 地址/主机名",
 Protocol_enc		: "协议加密",
 Outgoing			: "传出连接",
 Disabled			: "禁用",
 Enabled			: "启用",
 Forced				: "强制",
 All_inc_legacy_conn: "允许传入旧式连接",
 Queue_sett			: "队列设置",
 Max_n_act_torrs	: "最大的活动任务数(上传或下载)",
 Max_num_act_downl	: "最大的活动下载数",
 Seed_while			: "做种目标 [默认]",
 Ratio_is			: "分享率",
 or_time_is			: "% 或做种时间达到",
 Ignore				: "(忽略)",
 nin_min			: "90 分钟",
 two_h				: "2 小时",
 three_h			: "3 小时",
 four_h				: "4 小时",
 five_h				: "5 小时",
 six_h				: "6 小时",
 seven_h			: "7 小时",
 eight_h			: "8 小时",
 nine_h				: "9 小时",
 ten_h				: "10 小时",
 twelve_h			: "12 小时",
 sixteen_h			: "16 小时",
 twenty_h			: "20 小时",
 tw_four_h			: "24 小时",
 thirty_h			: "30 小时",
 thirty_six_h		: "36 小时",
 forty_eight_h		: "48 小时",
 sixty_h			: "60 小时",
 sev_two_h			: "72 小时",
 nin_six_h			: "96 小时",
 Seed_prior			: "做种任务的优先级高于下载任务",
 When_torr_reach	: "当 Torrent 达到做种目标时",
 Limit_upl_rate		: "限制上传速度为: [0: 停止]",
 En_shedul			: "启用计划任务",
 Shed_sett			: "计划任务设置",
 Lim_upl_rate		: "限制上传速度为",
 Lim_dow_rate		: "限制下载速度为",
 Dis_DHT_when_t_off	: "关闭时禁用 DHT 网络",
 Disc_cahe			: "磁盘缓存",
 Disc_cahe_bla_bla	: "磁盘缓存的作用是将用户频繁访问的数据保存在内存中，从而减少读写硬盘的次数。 rTorrent 通常自动管理缓存，但您可以通过修改以下设置更改其操作模式。",
 Overwr_d_cahe_au	: "手动指定缓存大小以覆盖自动设置的缓存大小",
 MB					: "MB",
 Red_mem_usage		: "不需要缓存时减少内存的使用量",
 Adv_cache_sett		: "高级缓存设置",
 En_cach_disc		: "启用磁盘写入缓存",
 Wr_out_ever_2_min	: "每 2 分钟写入未使用的区块",
 Wr_immed			: "立即写入已下载完毕的区块",
 En_cah_disc_read	: "启用磁盘读取缓存",
 Turn_off_w_read	: "如果上传速度较低则关闭读取缓存",
 Rem_old_from_cahe	: "从读取缓存中移除较旧的缓存区块",
 Increase_autom_cach: "缓存超负荷时增加自动缓存的大小",
 Advanced			: "高级",
 Advanced_label		: "高级选项 [警告: 请勿修改！]",
 Cancel				: "取消",
 uTorrent_settings	: "rTorrent 设置",
 
// Main window
 Doesnt_support		: "这个 ruTorrent 不支持你使用的浏览器.",
 Name				: "名称",
 Status				: "状态",
 Size				: "大小",
 Done				: "完成率",
 Downloaded			: "已下载",
 Uploaded			: "已上传",
 Ratio				: "分享率",
 DL					: "下载速度",
 UL					: "上传速度",
 ETA				: "剩余时间",
 Label				: "标签",
 Peers				: "用户数量",
 Seeds				: "种子数量",
 Avail				: "健康度",
 Remaining			: "剩余时间",
 Priority			: "优先级",
 Download			: "下载",
 Upload				: "上传",
 Not_torrent_file	: "该文件不是有效的 torrent 文件.",
 Pausing			: "暂停中",
 Seeding			: "做种中",
 Downloading		: "下载中",
 Checking			: "检查中",
 Error				: "错误",
 Queued				: "排队中",
 Finished			: "已完成",
 Stopped			: "已停止",
 Request_timed_out	: "请求 rTorrent 超时.",
 
 Force_Start		: "强制开始",
 Start				: "开始",
 Pause				: "暂停",
 Stop				: "停止",
 Force_recheck		: "强制重新检查",
 New_label			: "新建标签...",
 Remove_label		: "移除标签",
 Labels				: "标签",
 Remove				: "移除",
 Delete_data		: "删除下载的数据",
 Remove_and			: "移除并",
 Details			: "详情...",
 Properties			: "属性...",
 of					: "的", 		//this two creates line 
 connected			: "已连接",	//  XX of YY connected
 High_priority		: "较高优先级",
 Normal_priority	: "正常优先级",
 Low_priority		: "较低优先级",
 Dont_download		: "不要下载",
 Shure_restore_UI	: "你确定你要恢复的用户界面?",
 Reloading			: "载入中...",
 Name				: "名称",
 Date_				: "日期",
 Files				: "文件",
 Logger				: "日志",
 
 s					: "s",    // part of "KB/s"
 bytes				: "bytes",
 KB					: "KB",
 MB					: "MB",
 GB					: "GB",
 TB					: "TB",
 PB					: "PB",
 
 // main WND s
 Loading			: "加载中...",
 Torrent_file		: "Torrent 文件",
 Torrent_URL		: "Torrent 链接",
 Cookies			: "Cookies",
 RSS_Downloader		: "RSS 下载器",
 Torrent_properties	: "Torrent 属性",
 Trackers			: "Tracker",
 Max_down_rate		: "最大下载速度",
 Max_upl_rate		: "最大上传速度",
 Bandwidth_sett		: "带宽设置",
 Number_ul_slots	: "上传通道数",
 Override_default	: "替代默认设置",
 Initial_seed		: "初始做种",
 Enable_DHT			: "启用 DHT",
 Peer_ex			: "用户交换",
 About				: "关于",
 Enter_label_prom	: "为选定的 Torrent 输入新的标签",
 Remove_torrents	: "移除 Torrent(s)",
 Rem_torrents_prompt: "您确定要移除选定的 Torrent 吗?",
 All				: "全部",
 Active				: "活动",
 Inactive			: "停止",
 No_label			: "其他",
 Transfer			: "传输",
 Time_el			: "已用时间",
 Remaining			: "剩余时间",
 Share_ratio		: "分享比率",
 Down_speed			: "下载速度",
 Down_limit			: "下载限制",
 Ul_speed			: "上传速度",
 Ul_limit			: "上传限制",
 Wasted				: "丢弃数据",
 Tracker			: "Tracker",
 Track_URL			: "Tracker 链接",
 Track_status		: "Tracker 状态",
 Update_in			: "剩余更新时间",
 DHT_status			: "DHT 连接状态",
 Save_as			: "文件位置",
 Tot_size			: "总计大小",
 Created_on			: "创建时间",
 Comment			: "制作说明",
 
 
 //buttons
 add_button			: "添加文件",
 add_url			: "添加链接",
 ok				: "   OK   ",
 Cancel				: "  取消  ",
 no				: "   否   ",
 
 mnu_add			: "添加 Torrent",
 mnu_remove			: "移除",
 mnu_start			: "开始",
 mnu_pause			: "暂停",
 mnu_stop			: "停止",
 mnu_rss			: "RSS 下载器",
 mnu_settings			: "设置",
 mnu_search			: "搜索",
 mnu_lang			: "选用语言",
 
 //Other variables added by spide
 torrent_add			: "添加 Torrent", /*Caption of torrent add box*/
 time_w				: "w ", /*for x weeks*/
 time_d				: "d ", /*for x days remaining*/
 time_h				: "h ", /*for x hours remaining*/
 time_m				: "m ", /*for x minutes remaining*/
 time_s				: "s ", /*for x seconds remaining*/

 //Novik's addition
 Base_directory    		: "Directory",
 Number_Peers_min		: "Minimum number of peers",
 Number_Peers_max		: "Maximum number of peers",
 Tracker_Numwant		: "Wished number of peers",
 Number_Peers_For_Seeds_min	: "Minimum number of seeds",
 Number_Peers_For_Seeds_max	: "Maximum number of seeds",
 Enable_port_open		: "Open listening port",
 dht_port			: "UDP port to use for DHT",
 Ather_Limiting			: "Other limitations",
 Number_dl_slots		: "Number of download slots",
 Glob_max_memory		: "Maximum memory usage",
 Glob_max_files			: "Maximum number of open files",
 Glob_max_http			: "Maximum number of open http connections",
 Glob_max_sockets		: "Maximum number of open sockets",
 Ather_sett			: "Other",
 Directory_For_Dl		: "Default directory for downloads",
 Check_hash			: "Check hash after download",
 Hash				: "Hash",
 IsOpen				: "Open",
 DisableTracker			: "Disable",
 EnableTracker			: "Enable",
 ClientVersion			: "Client",
 Flags				: "Flags",
 ReqTimeout			: "Request timeout",
 GetTrackerMessage		: "Receive messages from tracker",
 Help				: "Help",
 PHPDoesnt_enabled		: "Your Web-server does not support PHP. Correct this and try again.",
 Speed				: "Speed",
 Dont_add_tname			: "Don't add torrent's name to path", 
 Free_Disk_Space		: "Free disk space",
 badXMLRPCVersion		: "rTorrent is compiled with incorrect version of xmlrpc-c library, without i8 support. Version must be >= 1.11. Some functionality will be unavailable.",
 badLinkTorTorrent		: "Bad link to rTorrent. Check if it is really running. Check $scgi_port and $scgi_host settings in config.php and scgi_port in rTorrent configuration file.",
 badUploadsPath			: "Web-server can't access torrents directory for read/write/execute. You can't add torrents through ruTorrent.",
 badSettingsPath		: "Web-server can't access settings directory for read/write/execute. ruTorrent can't save own settings.",
 mnu_help			: "About",
 badUploadsPath2		: "rTorrent's user can't access torrents directory for read/execute. You can't add torrents through ruTorrent.",
 View				: "View",
 AsList				: "as list",
 AsTree				: "as tree",
 Group				: "Group",
 SuperSeed			: "Super-seed",
 badTestPath			: "rTorrent's user can't access file ./test.sh for read/execute. ruTorrent will not work.",
 badSettingsPath2		: "rTorrent's user can't access settings directory for read/write/execute. ruTorrent will not work.",
 scrapeDownloaded		: "Downloaded",
 badSessionPath			: "Web-server can't access rTorrent's session directory for read. ruTorrent will not work.",
 Total				: "Total",
 PCRENotFound			: "PHP module PCRE is not installed. ruTorrent will not work.",
 addTorrentSuccess		: "torrent was successfully passed to rTorrent.",
 addTorrentFailed		: "Error: torrent wasn't passed to rTorrent.",
 pnlState			: "State",
 newLabel			: "New Label",
 enterLabel			: "Enter Label",
 UIEffects			: "Show effects for UI elements",
 Plugins			: "Plugins",
 plgName			: "Name",
 plgStatus			: "Status",
 plgLoaded			: "Loaded",
 plgDisabled			: "Disabled",
 plgVersion			: "Version",
 plgAuthor			: "Author",
 plgDescr			: "Description",
 mnu_go				: "Go",
 pluginCantStart		: "plugin can't start for unknown reason.",
 doFastResume			: "Fast resume",
 innerSearch			: "Local torrents",
 removeTeg			: "Remove tag",
 errMustBeInSomeHost		: "ruTorrent and rTorrent must be installed on the same host. Plugin will not work.",
 warnMustBeInSomeHost		: "ruTorrent and rTorrent must be installed on the same host. Some functionality will be unavailable.",
 plgShutdown			: "Shutdown",
 limit				: "Limit",
 speedList			: "Speed popup list (comma-separated)",
 ClearButton			: "Clear",
 dontShowTimeouts		: "Ignore message about timeouts",
 fullTableRender		: "Full render of large tables",
 showScrollTables		: "Show table contents while scrolling",
 idNotFound			: "rTorrent's user can't access 'id' program. Some functionality will be unavailable."
 };
