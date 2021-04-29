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
	var nombreBlockParWidth=canvasWidth/taileSerpent;
	var nombreBlockParHeight=canvasHeight/taileSerpent;
	 //body de serpent un example
	 var tailleBody=5;
	 var bodySerp=[];
	 //propriter Pomme
	 var colorPome='red';
	 var xPome=Math.trunc(Math.random()*nombreBlockParWidth)*taileSerpent;
	 var yPomme=Math.trunc(Math.random()*nombreBlockParHeight)*taileSerpent;
	var rayonPome=taileSerpent/2;	
	 //creation pour deplacer le serpant l'infinter
	 var intervalId=setInterval(game,1000);
	 //fonction qui lance le jeu 
	 	function game()
	 	{
	 		desinerSerp();
	 		dessinePome();

	 	}


	 	/*fonction qui dessine la pomme */
	 	function dessinePome(){
	 		ctx.beginPath();
	 		ctx.arc(xPome+rayonPome,yPomme+rayonPome,rayonPome,0,2*Math.PI);
	 		ctx.fillStyle=colorPome;
	 		ctx.fill();
	 		ctx.font="15px Arial";
	 		ctx.fillStyle="green";
	 		ctx.fillRect("V",xPome+3,yPomme+3);
	 		ctx.closePath();
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
	 	ctx.fillStyle=colorSerpent;
	 	gestionPositionSerpent()
	 	//boucle pour préciser la taile de serpent
	 	for (var i =0; i<bodySerp.length; i++) {
	 	ctx.fillRect(bodySerp[i].x,bodySerp[i].y, taileSerpent-1,taileSerpent-1);
	 		
	 		}
	 	
	 	
	 
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