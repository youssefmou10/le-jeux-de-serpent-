//quand la page est chargée
window.onload=function () {
	//creer un element HTML
	var canvas=document.createElement("canvas");
	canvas.width=900;
	canvas.height=600;
	canvas.style.border="2px solid black";
	document.body.appendChild(canvas);
	var canvasWidth=canvas.width;
	var canvasHeight=canvas.height;
	//recuprer le context de canvas
	var ctx=canvas.getContext("2d");
	/*proprieter serpent */
	var colorSerpent="blue";
	var taileSerpent=30;
	//position canvas horizental
	var Xserp=canvasWidth/2;
	//position canvas vertical 
	 var Yserp=canvasHeight/2;
	 /*fonction qui dessine le serpent */
	 function desinerSerp(){
	 	ctx.fillStyle=colorSerpent;
	 	ctx.fillRect(Xserp,Yserp, taileSerpent, taileSerpent);
	 }
	 desinerSerp();

}