const url = "https://api.github.com/users/aluminumchassis/repos"
const Http = new XMLHttpRequest();
Http.open("GET", url);
Http.send();
Http.onreadystatechange = function() {
	e=JSON.parse(this.responseText.replace("AluminumChassis.github.io","Ciccarelli.me"))
	console.log(e)
	for (var i =0; i < e.length; i++ ){
		console.log(e[i].name)
		document.getElementById("hexGrid").innerHTML+='<li class="hex"><div class="hexIn"><a class="hexLink" href="'+e[i].html_url+'"><h1>'+e[i].name+'</h1><p>'+e[i].description+'</p></a></div></li>'
	}
}