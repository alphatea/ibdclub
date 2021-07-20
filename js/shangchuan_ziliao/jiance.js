<!--上传文件内容 -->
function jiance(){
	if (document.getElementById('mingcheng')==null){
		baocuo("1");
		return false;
	}else{
		var mingcheng = document.getElementById('mingcheng').innerText+"";
	}
	if (document.getElementById('leibie')==null){
		var leibie = "";
	}else{
		var leibie = document.getElementById('leibie').innerText+"";
	}
	if (document.getElementById('neirong')==null){
		baocuo("3");
		return false;
	}else{
		var neirong = document.getElementById('neirong').innerText+"";
	}
	if (document.getElementById('gengxin')==null){
		baocuo("4");
		return false;
	}else{
		var gengxin1 = document.getElementById('gengxin').innerText+"";
		var gengxin1 = gengxin1.replace(/）/g, "");
		var gengxin = gengxin1.replace(/（/, "");
		var gengxin = gengxin.replace(/本页面最后更新于/, "");
		var gengxin = gengxin.replace(/更新/, "");
		var gengxin = gengxin.replace(/）/, "");
		var gengxin = gengxin.replace(/\./g, "-");
		var gengxin = gengxin.replace(/年/, "-");
		var gengxin = gengxin.replace(/月/, "-");
		var gengxin = gengxin.replace(/日/, "");
	}
	if (window.location.pathname==null||window.location.pathname==""||window.location.pathname=="undefined"||window.location.pathname==undefined){
		baocuo("5");
		return false;
	}else{
		var dizhi = window.location.pathname;
	}
	if(window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}// code for IE7+, Firefox, Chrome, Opera, Safari
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}// code for IE6, IE5
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){//初次判断是否已存在，若存在不再继续上传
			var fanhuizhi = xmlhttp.responseText+"";
			var shuju = fanhuizhi.substr(0, 3);
			var dianji = fanhuizhi.substr(fanhuizhi.indexOf("T")+1,fanhuizhi.length);
			document.getElementById('gengxin').innerText = gengxin1+"，"+dianji+"人阅读）";
			if(shuju != "100" && shuju != 100){
				chuanshu();
			}
		}
	}
	xmlhttp.open("GET","/asp/mulu_ziliao/gengxin.asp?mingcheng="+escape(mingcheng)+"&gengxin="+escape(gengxin)+"&dizhi="+dizhi,true);
	xmlhttp.send();
}