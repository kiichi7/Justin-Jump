#pragma strict
private var yourScore = 0.0;

function Start () {

}

function Update () {

	if ((transform.position.y - 1.55003) > yourScore) yourScore = transform.position.y - 1.55003;

}

function OnGUI () {

	GUI.Label (Rect(10, 10, 300, 20), "Justin Jump: Jump as high as you can");
	GUI.Label (Rect(Screen.width - 150, 10, 300, 20), "Your score: " + yourScore);
	GUI.Label(Rect( 10, Screen.height - 40, 300, 100),"http://inpla.net/thread-4957-1-1.html");
	GUI.Label(Rect(Screen.width - 200, Screen.height - 40, 300, 100),"Made by 吸血喵 and pengbitao");

}