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
	//creer un evenement
	
	//recuprer le context de canvas
	var ctx=canvas.getContext("2d");
	document.addEventListener("keydown",interaction);
	/*proprieter serpent */
	var colorSerpent="blue";
	var taileSerpent=30;
	//position canvas horizental
	var Xserp=canvasWidth/2;
	//position canvas vertical 
	 var Yserp=canvasHeight/2;
	 //le point d'intial x et y 
	 var deplX=0;
	 var deplY=0;
	 //body de serpent
	 var tailleBody=5;
	 var bodySerp=[];
	 //creation pour deplacer le serpant l'infinter
	 var intervalId=setInterval(game,1000);
	 //fonction qui lance le jeu 
	 	function game()
	 	{
	 		desinerSerp();

	 	}
	 /*fonction qui gére la position de serpent*/
	 function gestionPositionSerpent(){
	 	Xserp=Xserp+deplX*taileSerpent;
	 	Yserp=Yserp+deplY*taileSerpent;
	 	bodySerp.push({x:Xserp,y:Yserp});
	 	while(bodySerp.length>tailleBody)
	 	{
	 		bodySerp.shift();
	 	}
	 }
	 /*fonction qui dessine le serpent */
	 function desinerSerp(){
	 	ctx.clearRect(0,0,canvasWidth,canvasHeight);
	 	gestionPositionSerpent()
	 	//boucle pour préciser la taile de serpent
	 		for (var i =0; i<bodySerp.length; i++) {
	 			ctx.fillRect(bodySerp[i].x,bodySerp[i].y, taileSerpent-1,taileSerpent-1);
	 		}
	 	
	 	ctx.fillStyle=colorSerpent;
	 
	 }
	 function interaction(event)
	 {
	 	console.log(event.keyCode);
	 	switch(event.keyCode)
	 	{	
	 		case 71:
	 		//la touche gauche
	 		deplX=-1;
	 		deplY=0;
	 		break;
	 		case 68:
	 		//la touche droite
	 		deplX=1;
	 		deplY=0; 
	 		break;
	 		case 72:
	 		//vers l'haut
	 		deplX=0;
	 		deplY=-1;
	 		break;
	 		case 66:
	 		//vers le bas 
	 		deplX=0;
	 		deplY=1;
	 		break;
	 		case 32:
	 		//click sur la touche espace
	 		deplX=0;
	 		deplY=0; 
	 		break;
	 		default:

	 	}
	 }

}