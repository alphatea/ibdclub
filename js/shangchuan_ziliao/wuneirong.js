function chuanshu(){
	if (document.getElementById('mingcheng')==null){
		baocuo("1");
		return false;
	}else{
		var mingcheng = document.getElementById('mingcheng').innerText+"";
		var mingcheng = mingcheng.replace(/（已失效）/g,"");
		var mingcheng = mingcheng.replace(/（即将失效）/g,"");
		var mingcheng = mingcheng.replace(/（即将生效）/g,"");
	}
	if (document.getElementById('mingcheng2')==null){
		var mingcheng2 = "";
	}else{
		var mingcheng2 = document.getElementById('mingcheng2').innerText+"";
	}
	if (document.getElementById('leibie')==null){
		var leibie = "";
	}else{
		var leibie = document.getElementById('leibie').innerText+"";
	}
	if (document.getElementById('gengxin')==null){
		baocuo("4");
		return false;
	}else{
		var gengxin1 = document.getElementById('gengxin').innerText+"";
		var gengxin = gengxin1.replace(/（/, "");
		var gengxin = gengxin.replace(/本页面最后更新于/, "");
		var gengxin = gengxin.replace(/更新/, "");
		var gengxin = gengxin.replace(/）/, "");
		var gengxin = gengxin.replace(/\./g, "-");
		var gengxin = gengxin.replace(/年/, "-");
		var gengxin = gengxin.replace(/月/, "-");
		var gengxin = gengxin.replace(/日/, "");
		var gengxin = gengxin.substr(0,gengxin.indexOf("，"));
	}
	if (window.location.pathname==null||window.location.pathname==""||window.location.pathname=="undefined"||window.location.pathname==undefined){
		baocuo("5");
		return false;
	}else{
		var dizhi = window.location.pathname;
	}
	if (document.getElementById('zuozhe')==null){
		var zuozhe = "";
	}else{
		var zuozhe = document.getElementById('zuozhe').innerText+"";
	}
	if (document.getElementById('bianhao')==null){
		var bianhao = "";
	}else{
		var bianhao = document.getElementById('bianhao').innerText+"";
	}
	if (document.getElementById('fabu')==null){
		var fabu = "";
	}else{
		var fabu = document.getElementById('fabu').innerText+"";
		var fabu = fabu.replace(/年/, "-");
		var fabu = fabu.replace(/月/, "-");
		var fabu = fabu.replace(/日/, "");
		var fabu = fabu.replace(/\./g, "-");
	}
	if (document.getElementById('shengxiao')==null){
		var shengxiao = fabu;
	}else{
		var shengxiao = document.getElementById('shengxiao').innerText+"";
		var shengxiao = shengxiao.replace(/年/, "-");
		var shengxiao = shengxiao.replace(/月/, "-");
		var shengxiao = shengxiao.replace(/日/, "");
		var shengxiao = shengxiao.replace(/\./g, "-");
	}
	if (document.getElementById('xiugai')==null){
		var xiugai = "";
	}else{
		var xiugai = document.getElementById('xiugai').innerText+"";
		var xiugai = xiugai.replace(/年/, "-");
		var xiugai = xiugai.replace(/月/, "-");
		var xiugai = xiugai.replace(/日/, "");
		var xiugai = xiugai.replace(/\./g, "-");
	}
	if (document.getElementById('xiugaiwenjian')==null){
		var xiugaiwenjian = "";
	}else{
		var xiugaiwenjian = document.getElementById('xiugaiwenjian').innerText;
	}
	if (document.getElementById('shixiao')==null){
		var shixiao = "";
	}else{
		var shixiao = document.getElementById('shixiao').innerText+"";
		var shixiao = shixiao.replace(/年/, "-");
		var shixiao = shixiao.replace(/月/, "-");
		var shixiao = shixiao.replace(/日/, "");
		var shixiao = shixiao.replace(/\./g, "-");
	}
	if(leibie == "6" || leibie == 6){
			var feizhi = document.getElementById('feizhi').innerText;
			var feizhiwenjian = document.getElementById('feizhiwenjian').innerText;
	}else{
		if (document.getElementById('feizhi')==null){
			var feizhi = "";
			var feizhiwenjian = "";
		}else{
			var feizhi = document.getElementById('feizhi').getAttribute("href");
			var feizhiwenjian = document.getElementById('feizhi').innerText;
		}
	}
	if(leibie == "6" || leibie == 6){
			var zuixin = document.getElementById('zuixin').innerText;
			var zuixinwenjian = document.getElementById('zuixinwenjian').innerText;
	}else{
		if (document.getElementById('zuixin')==null){
			var zuixin = "";
			var zuixinwenjian = "";
		}else{
			var zuixin = document.getElementById('zuixin').getAttribute("href");
			var zuixinwenjian = document.getElementById('zuixin').innerText;
		}
	}
	var neirong = document.getElementById('neirong').innerText+"";
	var changdu = neirong.length;
	var a =  Math.ceil(changdu/16384);
	if(window.XMLHttpRequest){
		xmlhttp=new XMLHttpRequest();
	}// code for IE7+, Firefox, Chrome, Opera, Safari
	else{
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}// code for IE6, IE5
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){//初次判断是否已存在，若存在不再继续上传
			var fanhuizhi = xmlhttp.responseText+"";
			if(fanhuizhi == "100"||fanhuizhi == 100){
				chuanneirong();
			}
			else{
				chuanneirong();
				baocuo("6");
			}
		}
	}
	xmlhttp.open("POST","/asp/mulu_ziliao/shangchuan.asp?mingcheng="+escape(mingcheng)+"&mingcheng2="+escape(mingcheng2)+"&leibie="+escape(leibie)+"&gengxin="+escape(gengxin)+"&dizhi="+dizhi+"&zuozhe="+escape(zuozhe)+"&bianhao="+escape(bianhao)+"&fabu="+escape(fabu)+"&shengxiao="+escape(shengxiao)+"&xiugai="+escape(xiugai)+"&xiugaiwenjian="+escape(xiugaiwenjian)+"&shixiao="+escape(shixiao)+"&feizhi="+escape(feizhi)+"&feizhiwenjian="+escape(feizhiwenjian)+"&zuixin="+escape(zuixin)+"&zuixinwenjian="+escape(zuixinwenjian)+"&a="+escape(a),true);
	xmlhttp.send();
}