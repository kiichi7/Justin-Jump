#pragma strict
var newJustin : Transform;
private var creatTimer = 0.0;
private var justinNumber = 0;

function Start () {

}

function Update () {

	if (justinNumber > 49) Destroy(gameObject);
	creatTimer += Time.deltaTime;		
	if (creatTimer > 1) {
		transform.eulerAngles.y = Random.Range(0 , 360);
		Instantiate(newJustin, transform.position, transform.rotation);
		creatTimer = 0;
		justinNumber ++;
	}

}