function xiangguanwenjian(a){
	var ming =  document.getElementById(a).innerText;
	if(ming == "隐藏相关内容"){
		document.getElementById(a+'_1').hidden = "hidden";
		document.getElementById(a).innerText = "查看相关内容";
	}else{
		document.getElementById(a+'_1').hidden = "";
		document.getElementById(a).innerText = "隐藏相关内容";
	}
}
function wenjianqueshi(){
	alert("文件缺失，欢迎补充！")
}