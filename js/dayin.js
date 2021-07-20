<!--打印控件 -->
function printdiv(printpage)
{
	var as = document.links;
	for(var i = 0; i < as.length; i++ ) {
		as[i].style.color = "black"; // 例：as[i].style.color = "#F00";
	}
	var headstr = "<html><head><title></title></head><body>";
	var footstr = "</body>";
	var newstr = document.all.item(printpage).innerHTML;
	var oldstr = document.body.innerHTML;
	document.body.innerHTML = headstr+newstr+footstr;
	window.print(); 
	document.body.innerHTML = oldstr;
	window.location.reload();
}
function dayin(){
	var tupiankuan = "700px";
	document.getElementById('jibenxinxi').style.width = 713+"px";
	document.getElementById('zhengwen').style.width = 713+"px";
	document.getElementById('gengxin').hidden = "hidden";
	document.getElementById('xuanchuan_01').hidden = "hidden";
	document.getElementById('xuanchuan_02').hidden = "";
	document.getElementById('jieshao').hidden = "";
	document.getElementById('guanggaoqu').hidden = "hidden";
	printdiv('ddd');
}
