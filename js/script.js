/*const url = "https://api.github.com/users/aluminumchassis/repos"
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
		document.getElementById("titleSlide").style.display = "none"
		document.getElementById("secondSlide").style.display = "block"
		for (var i =0; i < e.length; i++ ){
			document.getElementById("projects").innerHTML+='<a target="_blank" href="'+e[i].html_url+'"><h1>' + e[i].name + '</h1>'+e[i].description+'</a>'
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
		document.getElementById("titleSlide").style.display = "block"
		document.getElementById("secondSlide").style.display = "none"
		document.getElementById("projects").innerHTML = ""

		setTimeout(function(){
			document.getElementById("back").style.visibility = "hidden"
			document.getElementById("projectButton").style.display = "block"
			//overlay.style.display = "none"
		},1000)
	},700)
}*/

fetch('/nav.html')
	.then(function(response) {
		return response.text();
	})
	.then(function(body) {
		document.getElementById("menuHolder").innerHTML = body;
		doSignOut = document.getElementById('signOut')
	});