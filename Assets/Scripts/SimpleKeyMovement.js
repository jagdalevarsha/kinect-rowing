﻿#pragma strict

var speed : float = 0.7;
var multiplier : float = 2;
function Update () {
	
	if (Input.GetKey("w")){
		this.transform.position.z += this.speed*multiplier;
		}
	
	if (Input.GetKey("s")){
		this.transform.position.x -= this.speed*multiplier;
		}
	
	if (Input.GetKey("a")){
		this.transform.position.z -= this.speed*multiplier;
		}
		
	if (Input.GetKey("d")){
		this.transform.position.x += this.speed*multiplier;
		}


}