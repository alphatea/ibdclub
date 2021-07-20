window.onscroll=function(){
	var cebiandaohang=document.getElementById("cebiandaohang");
    if(cebiandaohang.clientHeight-document.documentElement.scrollTop<=-120||cebiandaohang.clientHeight-document.body.scrollTop<=-120){
		document.getElementById("shudaohang").style.top = "20px";
		document.getElementById("shudaohang").style.maxHeight = "80%";
	}
	else{
		document.getElementById("shudaohang").style.top = "";
		document.getElementById("shudaohang").style.maxHeight = "70%";
	}
}