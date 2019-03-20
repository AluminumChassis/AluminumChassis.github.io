if(window.location != "https://ciccarelli.me/") {
	//window.location = "https://ciccarelli.me/"
}
const url = "https://api.github.com/users/aluminumchassis/repos"
const Http = new XMLHttpRequest();
Http.open("GET", url);
Http.send();
var e
Http.onreadystatechange = function() {
	e=JSON.parse(this.responseText.replace("AluminumChassis.github.io","Ciccarelli.me"))
	
}
function projects() {
	overlay = document.getElementById('overlay')
	overlay.style.display = "block"
	overlay.style = "animation-play-state: running;";
	setTimeout(function(){
		document.getElementById("bg").style.backgroundImage= "none"
		document.getElementById("bg").style.backgroundColor= "#111"

		document.getElementById("projectButton").style.display = "none"
		document.getElementById("skills").style.display = "block"
		document.getElementById("titleSlide").style.marginTop = "5%"
		document.getElementById("title").innerText = "Projects"
		for (var i =0; i < e.length; i++ ){
			e[i].language = e[i].language.replace("JavaScript", "JS").replace("Python", "Py")
			
			document.getElementById("projects").innerHTML+='<a target="_blank" href="'+e[i].html_url+'"><h1>'+e[i].name+' - '+ e[i].language+ '</h1>'+e[i].description+'</a>'
		}
		
		setTimeout(function(){
			overlay.style.display = "none"
		},1500)
			
		
	},700)
}