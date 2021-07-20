<!--调整目录的高度及在手机状态的大小 -->
function gaodu(){
	var gaodu = document.getElementsByClassName("gaodu");
	for(i=0;i<gaodu.length;i++){
		var gaoduid = "gaodu_"+i;
		gaodu[i].setAttribute("id",gaoduid);
		var gaoduneirong = gaodu[i].innerHTML + "";
		var gaodufenge = gaoduneirong.replace(/<br \/>/,"<br/>")
		var gaodufenge = gaoduneirong.replace(/<br\/>/,"<br>")
		var gaodufenge = gaoduneirong.split("<br>");
		var system ={
			win : false,
			mac : false,
			xll : false
		};
		//检测平台
		var p = navigator.platform;
		system.win = p.indexOf("Win") == 0;
		system.mac = p.indexOf("Mac") == 0;
		system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
		if(system.win||system.mac||system.xll){//电脑访问
			var gaodushu = 20 + parseInt(gaodufenge.length)*15;
			document.getElementById(gaoduid).style.height = gaodushu + "px";
		}else{
			var gaodushu = 20 + parseInt(gaodufenge.length)*15;
			document.getElementById(gaoduid).style.height = gaodushu + "px";
			var gaoduneirong = gaoduneirong.replace(/class=\"mulu\"/,"class=\"mulu\" style=\"font-size:32px\" ");
			var gaoduneirong = gaoduneirong.replace(/face=\"楷体\"/,"face=\"楷体\" style=\"font-size:26px\" ");
			var gaoduneirong = gaoduneirong.replace(/size=\"-1\"/,"size=\"+2\"");
			gaodu[i].innerHTML = gaoduneirong;
		}
	}
	var system ={
		win : false,
		mac : false,
		xll : false
	};
	//检测平台
	var p = navigator.platform;
	system.win = p.indexOf("Win") == 0;
	system.mac = p.indexOf("Mac") == 0;
	system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
	if(system.win||system.mac||system.xll){//电脑访问
		return false;
	}else{
		var biaoti3 = document.getElementsByClassName("biaoti3");
		for(i=0;i<biaoti3.length;i++){
			var biaoti3id = "biaoti3_"+i;
			biaoti3[i].setAttribute("id",biaoti3id);
			document.getElementById(biaoti3id).style.fontSize = "40px";
		}
		var wenjianwaibiaoti = document.getElementsByClassName("wenjianwaibiaoti");
		for(i=0;i<wenjianwaibiaoti.length;i++){
			var wenjianwaibiaotiid = "wenjianwaibiaoti_"+i;
			wenjianwaibiaoti[i].setAttribute("id",wenjianwaibiaotiid);
			document.getElementById(wenjianwaibiaotiid).style.fontSize = "34px";
		}
		var wenjianzhongbiaoti = document.getElementsByClassName("wenjianzhongbiaoti");
		for(i=0;i<wenjianzhongbiaoti.length;i++){
			var wenjianzhongbiaotiid = "wenjianzhongbiaoti_"+i;
			wenjianzhongbiaoti[i].setAttribute("id",wenjianzhongbiaotiid);
			document.getElementById(wenjianzhongbiaotiid).style.fontSize = "32px";
		}
	}
}