function tupian(){
	var kuandu = document.body.clientWidth;
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
	if(system.win||system.mac||system.xll){
		var tupiankuan = Math.min(parseInt(kuandu)*0.50,980);
	}else{
		var tupiankuan = parseInt(kuandu)*0.9;
	}
	var tupian = document.getElementsByTagName("img");
	for(i=0;i<tupian.length;i++){
		var tupianid = "kuandu_"+i;
		tupian[i].setAttribute("id",tupianid);
		var yuantukuan = document.getElementById(tupianid).width + "";
		var yuantukuanshu = parseInt(yuantukuan);
		if(yuantukuan>tupiankuan){
			document.getElementById(tupianid).width = tupiankuan;
		}
	}
	var tupian2 = document.getElementsByClassName("tupian");
	for(i=0;i<tupian2.length;i++){
		var tupian2id = "tupian2_"+i;
		tupian2[i].setAttribute("id",tupian2id);
		document.getElementById(tupian2id).width = tupiankuan;
	}
}