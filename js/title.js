if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 500);

}

var x = 0;

var titleText = [ "SFSXSQPGSA","aGWADGZDPK","anWPAFTMNO","antEFAQFBI","antiWXHTAN","antisRSGIJ","antisoYLIS","antisocSAW","antisociOS","antisociaJ","antisocial","antisocial","antisocia","antisoci","antisoc","antiso","antis","anti","ant","an","a","D","SJ","KWP","WAPD","QXYKI","HCDSJM","XSOWASJD","DASJWSOWA","SAJDWASDIK" ];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}