<!--手机监测控件 -->
function pdftiaozhuan(a){
	var a = escape(a);
	window.open("/pdfwenjian.asp?wendangdizhi="+a);
}
window.onload = function(){
	var wendangdizhi = getQueryString("wendangdizhi")+"";
	if (wendangdizhi != null){
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
	//跳转语句，如果是手机访问就自动跳转到wap.baidu.com页面
		if(system.win||system.mac||system.xll){//电脑访问
			var neirong = document.getElementById("neirong").innerHTML;
			var kuandu = window.screen.width;
			var shiyongkuandu = parseInt(kuandu) * 0.9;
			var gaodu = window.screen.width;
			var shiyonggaodu = parseInt(gaodu);
			document.getElementById("neirong").innerHTML = "<iframe src=\""+wendangdizhi+"\" style=\"width:"+shiyongkuandu+"px; height: "+shiyonggaodu+"px; height: "+shiyonggaodu+"px;\"></iframe>"
		}
	}
}