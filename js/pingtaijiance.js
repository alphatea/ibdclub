<!--手机监测控件 -->
function pingtaijiance(){//电脑端和手机端的显示内容
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
		document.getElementById('cebiandaohang').style.display = "";
		if(document.getElementById('xuanchuan_03')!=undefined){
			document.getElementById('xuanchuan_03').hidden = "hidden";
		}
		if(document.getElementById('xuanchuan_04')!=undefined){
			document.getElementById('xuanchuan_04').style.display = "";
		}
		var kuandu = document.body.clientWidth;
		var zhengwenkuan = Math.min(parseInt(kuandu)*0.55,900);
		if(document.getElementById('jibenxinxi')!=undefined){
			document.getElementById('jibenxinxi').style.width = zhengwenkuan + "px";
		}
		if(document.getElementById('zhengwen')!=undefined){
			document.getElementById('zhengwen').style.width = zhengwenkuan + "px";
		}
	}else{//手机访问
		if(document.getElementById('dayinquyu')!=undefined){
			document.getElementById('dayinquyu').style.display = "none";
		}
		if(document.getElementById('xuanchuan_01')!=undefined){
			document.getElementById('xuanchuan_01').hidden = "";
		}
		if(document.getElementById('xuanchuan_03')!=undefined){
			document.getElementById('xuanchuan_03').hidden = "";
		}
		if(document.getElementById('xuanchuan_04')!=undefined){
			document.getElementById('xuanchuan_04').style.display = "none";
		}
		document.getElementById('cebiandaohang').style.display = "none";
		var kuandu = document.body.clientWidth;
		var zhengwenkuan = parseInt(kuandu)*0.90;
		if(document.getElementById('zhengwen')!=undefined){
			document.getElementById('zhengwen').style.width = zhengwenkuan + "px";
		}
		if(document.getElementById('jibenxinxi')!=undefined){
			document.getElementById('jibenxinxi').style.width = zhengwenkuan + "px";
		}
		document.getElementById('dingduansousuo').hidden = "hidden";
		document.getElementById('dingbu').hidden = "hidden";
		document.getElementById('dangqianweizhi').hidden = "hidden";
		document.getElementById('jieshao').style.display = "none";
	}
}