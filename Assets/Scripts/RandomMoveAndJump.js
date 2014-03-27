#pragma strict
var myScale = 1;
private var randomForece = 1;
private var randomTorque = 1;
private var lastEulerAngleY = 0.0;
private var turnTimer = 0.0;

function Start () {

	myScale = Random.Range(1.0,10.0);
	transform.localScale = myScale * Vector3(1,1,1);;
	randomForece = Random.Range(1,11);
	randomTorque = Random.Range(1,11);

}

function Update () {

	//if (Input.anyKey) constantForce.relativeForce.y = 20;
	//else constantForce.relativeForce.y = 0;

	constantForce.relativeForce.z += Time.deltaTime * Random.Range(-randomForece*myScale*10.0, randomForece*myScale*10.0);
	constantForce.relativeForce.z = Mathf.Clamp(constantForce.relativeForce.z, 0, randomForece*myScale*2);

	constantForce.relativeTorque.y += Time.deltaTime * Random.Range(-100.0, 100.0);
	constantForce.relativeTorque.y = Mathf.Clamp(constantForce.relativeTorque.y, -randomTorque, randomTorque);


	if (turnTimer > 5) {
		transform.eulerAngles.y += 180;
		turnTimer = 0;
	}
	else {
		if (Mathf.Abs(transform.eulerAngles.y - lastEulerAngleY) < 0.5) turnTimer += Time.deltaTime;
		else turnTimer = 0;
		lastEulerAngleY = transform.eulerAngles.y;

	}
	
	//Debug.Log(transform.eulerAngles.y - lastEulerAngleY);
	//Debug.Log(turnTimer);
	
	
	
}