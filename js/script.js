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
	overlay.style = "animation-name: slide; animation-play-state: running;";
	document.getElementById("projectButton").disabled = true
	setTimeout(function(){
		document.getElementById("bg").style.display="none"

		document.getElementById("projectButton").style.display = "none"
		document.getElementById("skills").style.display = "block"
		document.getElementById("projects").style.display = "block"
		document.getElementById("titleSlide").style.marginTop = "5%"
		document.getElementById("title").innerText = "Projects"
		for (var i =0; i < e.length; i++ ){
			if(!document.getElementById(e[i].language)) {
				document.getElementById("projects").innerHTML+='<div id="'+e[i].language+'" class="lang"><h1>'+e[i].language+'<arrow>></arrow></h1></div>'
			}
		}
		for (var i =0; i < e.length; i++ ){
			document.getElementById(e[i].language).innerHTML+='<a target="_blank" href="'+e[i].html_url+'"><h1>' + e[i].name + '</h1>'+e[i].description+'</a>'
		}
			
		var l = document.getElementsByClassName("lang")
		for (var i = 0; i < l.length; i++) {
			l[i].onmouseover = function(){
				this.style = "height: "+(25*Math.ceil(this.childElementCount/4)+10)+"vh"
			};
			l[i].onmouseout = function(){
				console.log("hello")
				this.style = "height: 10vh";
			};
		}
		
		setTimeout(function(){
			overlay.style.display = "none"

			document.getElementById("back").style.visibility = "visible"
		},1500)
			
		
	},700)
}
function mainPage() {

	document.getElementById("projectButton").disabled = false
	overlay = document.getElementById('overlay')
	overlay.style.display = "block"
	overlay.style = "animation-name: slideBack; animation-play-state: running;";
	setTimeout(function(){
		document.getElementById("bg").style.display="block"

		document.getElementById("skills").style.display = "none"
		document.getElementById("titleSlide").style.marginTop = "15%"
		document.getElementById("title").innerHTML = "Hello, I'm Benjamin Ciccarelli<p> I'm a programmer from Arizona.</p>"
		document.getElementById("projects").innerHTML = ""
		setTimeout(function(){
			overlay.style.display = "none"
			document.getElementById("back").style.visibility = "hidden"
			document.getElementById("projectButton").style.display = "block"
		},1500)
	},700)
}