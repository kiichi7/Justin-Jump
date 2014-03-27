#pragma strict
var sound : AudioClip[];
private var soundChoose : int;
function Start () {

	audio.clip = sound[Random.Range(0 , 9)];
	audio.pitch = Random.Range(0.5 , 3.0);

}

function Update () {

	audio.pitch = 4.08 - 0.36 * GetComponent(RandomMoveAndJump).myScale; 
	if (audio.isPlaying == false) {
		audio.Play();
	}

}