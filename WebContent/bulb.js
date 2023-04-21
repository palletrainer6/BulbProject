function bulb()
{
	debugger;
	var v = document.getElementById('imgBulb').src;
	
	if(v == "file:///E:/eclipse-workspace-webtech/BulbOnOffJsSample/WebContent/bulbOff.png")
	{
		document.getElementById('imgBulb').src = "file:///E:/eclipse-workspace-webtech/BulbOnOffJsSample/WebContent/bulbOn.png"
	}
	else{
		document.getElementById('imgBulb').src = "file:///E:/eclipse-workspace-webtech/BulbOnOffJsSample/WebContent/bulbOff.png"
	}
	
}
