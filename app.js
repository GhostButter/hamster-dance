var defalt = document.getElementById('text');
var hamster = document.getElementById("hamster");
document.onkeydown=function(event){
	switch(event.keyCode){
		case 38 :
		hamster.src = "images/top.png";	 
		break;
		case 40 :
		hamster.src = "images/down.png";
		break;
		case 37 :
		hamster.src = "images/left.png";
		break;
		case 39 :
		hamster.src = "images/right.png";
		break;
		default:
		console.log(err)
	}

}