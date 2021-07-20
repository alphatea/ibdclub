function chuanneirong(){
	if (window.location.pathname==null||window.location.pathname==""||window.location.pathname=="undefined"||window.location.pathname==undefined){
		baocuo("5");
		return false;
	}else{
		var dizhi = window.location.pathname;
	}
	if (document.getElementById('neirong')==null){
		baocuo("3");
		return false;
	}else{
		var neirong = document.getElementById('neirong').innerText+"";
	}
	var changdu = neirong.length;
	var a =  Math.ceil(changdu/16384);
	var i = 1;
	for (1;i<=a;i++){
		var benduanneirong = neirong.substr(16384*(i-1),16384);//拆分段落
		var h = 1;
		var b = Math.min(64,Math.ceil(benduanneirong.length/256));
		for(1;h<=b;h++){
			var shangchuanneirong = benduanneirong.substr(256*(h-1),256);
			if(window.XMLHttpRequest){
				xmlhttp=new XMLHttpRequest();
			}else{
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}// code for IE6, IE5
			xmlhttp.onreadystatechange=function(){
				if(xmlhttp.readyState==4 && xmlhttp.status==200){//初次判断是否已存在，若存在不再继续上传
					var fanhuizhi = xmlhttp.responseText+"";
					if(fanhuizhi != "100" && fanhuizhi != 100){
	baocuo("7");
					}
				}
			}
			xmlhttp.open("POST","/asp/mulu_ziliao/neirong.asp?shangchuanneirong="+escape(shangchuanneirong)+"&duanluo="+escape(i)+"&dizhi="+dizhi+"&h="+escape(h),true);
			xmlhttp.send();
		}
	}
}
function shixiao(){
	var date = new Date();
	var tianjiazhi = ""
	if (document.getElementById('shixiao')==null){
		return false;
	}else{
		var shixiao = document.getElementById('shixiao').innerText+"";
		document.title = document.title + '（' + shixiao + '起失效）';
		var shixiao = shixiao.replace(/年/g,"/");
		var shixiao = shixiao.replace(/月/g,"/");
		var shixiao = shixiao.replace(/日/g,"");
		var shixiao = shixiao.replace(/\./g,"/");
		var shixiao = new Date(shixiao);
		if(date > shixiao){
			var tianjiazhi = "<font color='red'>（已失效）</font>"
		}else{
			var tianjiazhi = "<font color='red'>（即将失效）</font>"
		}
		document.getElementById('mingcheng').innerHTML = document.getElementById('mingcheng').innerHTML + tianjiazhi;
	}
}