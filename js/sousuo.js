// JavaScript Document
function sousuo(a){
	if(a == "1"||a == 1){
		var guanjianzi = document.getElementById('sousuo1').value;
	}else if(a == "2"||a == 2){
		var guanjianzi = document.getElementById('sousuo2').value;
	}
	if(guanjianzi == ""||guanjianzi == null||guanjianzi == undefined||guanjianzi =="undefined"){
		alert("请输入搜索内容");
		return false;
	}else{
		var guanjianzi = guanjianzi.replace(/[\s　]{2,}/g, ' ');
		var regex = /[^\u4e00-\u9fa5\w]/g;
		var guanjianzi = guanjianzi.replace(regex, ' ');//替换所有特殊符号
		var guanjianzi = guanjianzi.replace(/[0-9]/ig," ");
		var guanjianzi = guanjianzi.replace(/—/, ' ');
		var guanjianzi = guanjianzi.replace(/＋/, ' ');
		var guanjianzi = guanjianzi.replace(/×/, ' ');
		var guanjianzi = guanjianzi.replace(/÷/, ' ');
		var regex2 = /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/g;
		var guanjianzi = guanjianzi.replace(regex2, ' ');//替换所有中文标点
		var regex3 = /关于|的|中华人民共和国|中国|通知|发布|年|月|日|征求|转发/g
		var guanjianzi = guanjianzi.replace(regex3, ' ');
		var guanjianzi = guanjianzi.replace(/\s+/g, ' ');//多个空格替换成一个
		var guanjianzi = guanjianzi.replace(/^\s+|\s+$/g,'');
		var guanjianzi = guanjianzi.replace(/(^\s*)|(\s*$)/g,'');
		if(guanjianzi == ""||guanjianzi == null||guanjianzi == undefined||guanjianzi =="undefined"||guanjianzi ==" "){
			alert("请输入搜索内容，不允许输入纯数字或空格");
			return false;
		}
	}
	window.open("/sousuo.asp?guanjianzi="+escape(guanjianzi));
	var str_guanjianzi = guanjianzi.split(" ");
	for(i=0;i<str_guanjianzi.length;i++){
		if(window.XMLHttpRequest){
			xmlhttp=new XMLHttpRequest();
		}// code for IE7+, Firefox, Chrome, Opera, Safari
		else{
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}// code for IE6, IE5
		xmlhttp.open("GET","/asp/sousuo.asp?guanjianzi="+escape(str_guanjianzi[i]),true);
		xmlhttp.send();
	}
}	
document.onkeydown=function(event){
	var e = event || window.event || arguments.callee.caller.arguments[0];
	var sousuo2 = document.getElementById('sousuo2');
	if (sousuo2 == document.activeElement){
		if(e && e.keyCode==13){
			sousuo("2");
		}
	}
	var sousuo1 = document.getElementById('sousuo1');
	if (sousuo1 == document.activeElement){
		if(e && e.keyCode==13){
			sousuo("1");
		}
	}
}