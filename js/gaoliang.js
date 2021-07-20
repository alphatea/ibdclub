function gaoliang(){
	var guanjianzi = getQueryString("guanjianzi")+"";
	if(guanjianzi == null||guanjianzi == ""||guanjianzi == undefined||guanjianzi == "undefined"){
		return false;
	}
	var str_guanjianzi = guanjianzi.split(" ");
	for(l=0;l<str_guanjianzi.length;l++){
		var zhengwenneirong = document.getElementById('ddd').innerHTML;
		var fengefu = Math.floor(Math.random()*1000)+"";
		while(zhengwenneirong.indexOf(fengefu) != -1){
			var fengefu = Math.floor(Math.random()*1000)+"";
		}
		var zhengwenneirong = zhengwenneirong.replace(/\</g,fengefu+"\<");
		var zhengwenneirong = zhengwenneirong.replace(/\>/g,"\>"+fengefu);
		var zhengwenfenge = zhengwenneirong.split(fengefu);
		for(m=0;m<zhengwenfenge.length;m++){
			if(zhengwenfenge[m].indexOf("<")==-1 && zhengwenfenge[m].indexOf(">")==-1){
				if(m==0){
					var xinzhengwen = zhengwenfenge[m].replace(new RegExp(str_guanjianzi[l],"g"),"<font style='background-color:#0FF'>"+str_guanjianzi[l]+"</font>");
				}else{
					var xinzhengwen = xinzhengwen + zhengwenfenge[m].replace(new RegExp(str_guanjianzi[l],"g"),"<font style='background-color:#0FF'>"+str_guanjianzi[l]+"</font>");
				}
			}else{
				if(m==0){
					var xinzhengwen = zhengwenfenge[m];
				}else{
					var xinzhengwen =xinzhengwen + zhengwenfenge[m];
				}
			}
		}
		document.getElementById('ddd').innerHTML = xinzhengwen;
	}
}
function yinhao(){
	var zhengwenneirong = document.getElementById('ddd').innerHTML;
	var zhengwenneirong = zhengwenneirong.replace(/“/g,"\<font face=\"楷体\"\>“\<\/font\>");
	var zhengwenneirong = zhengwenneirong.replace(/”/g,"\<font face=\"楷体\"\>”\<\/font\>");
	var zhengwenneirong = zhengwenneirong.replace(/‘/g,"\<font face=\"楷体\"\>‘\<\/font\>");
	var zhengwenneirong = zhengwenneirong.replace(/’/g,"\<font face=\"楷体\"\>’\<\/font\>");
	var zhengwenneirong = zhengwenneirong.replace(/·/g,"\<font face=\"楷体\"\>·\<\/font\>");
	document.getElementById('ddd').innerHTML = zhengwenneirong;
}
function kaoyou(){
	var kaoyou = document.getElementsByClassName("zhengwen");
	for(i=0;i<kaoyou.length;i++){
		var yuanpianxiang = kaoyou[i].align +"";
		if(yuanpianxiang == "right"){
			var zhengwenid = "zhengwen_"+i;
			kaoyou[i].setAttribute("id",zhengwenid);
			document.getElementById(zhengwenid).style.textAlign = "right";
		}
	}
}