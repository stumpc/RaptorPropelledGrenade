$( document ).ready( function() {

	function strToColor(inputStr){
		if(inputStr == null){
			return "#000000";
		}

		if(inputStr == "White"){
			return "#FFFFFF";
		} else if (inputStr == "Red"){
			return "#FF0000";
		} else if (inputStr == "Green"){
			return "#00FF00";
		} else if (inputStr == "Blue"){
			return "#0000FF";
		} else if (inputStr == "Yellow"){
			return "#FFFF00";
		} else if (inputStr == "Teal"){
			return "#00FFFF";
		} else if (inputStr == "Purple"){
			return "#FF00FF";
		} else {
			//LED is off
			return "#000000";
		}
	}
	
	$.get("permdata.csv", function(response) { 
		var csv = $.csv.toArrays(response); 
		console.table(csv); 
		$("#ambSens").html(csv[0][0]);
		$("#ambSensStatus").html(csv[0][1]);
		$("#spaSasP1Link").html(csv[1][0]);
		$("#spaSasP1LinkStatus").html(csv[1][1]);
		$("#spaFCPort1").html(csv[2][0]);
		$("#spaFCPort1Status").html(csv[2][1]);
		$("#spaEth4Link").html(csv[3][0]);
		$("#spaEth4LinkStatus").html(csv[3][1]);
		$("#spaEth4Activity").html(csv[4][0]);
		$("#spaEth4ActivityStatus").html(csv[4][1]);
		$("#spaSasP2Link").html(csv[5][0]);
		$("#spaSasP2LinkStatus").html(csv[5][1]);
		$("#spaUnsafeRemove").html(csv[6][0]);
		$("#spaUnsafeRemoveStatus").html(csv[6][1]);
		$("#spaEth3Link").html(csv[7][0]);
		$("#spaEth3LinkStatus").html(csv[7][1]);
		$("#spaEth3Activity").html(csv[8][0]);
		$("#spaEth3ActivityStatus").html(csv[8][1]);
		$("#spaMemFault").html(csv[9][0]);
		$("#spaMemFaultStatus").html(csv[9][1]);
		$("#spaPower").html(csv[10][0]);
		$("#spaPowerStatus").html(csv[10][1]);
		$("#spaFault").html(csv[11][0].concat(" ").concat(csv[11][1]));
		$("#spaFaultStatus").html(csv[11][1]); //this is expressed in Hz
		$("#spaEth1Activity").html(csv[12][0]);
		$("#spaEth1ActivityStatus").html(csv[12][1]);
		$("#spaEth2Link").html(csv[13][0]);
		$("#spaEth2LinkStatus").html(csv[13][1]);
		$("#spaEth2Activity").html(csv[14][0]);
		$("#spaEth2ActivityStatus").html(csv[14][1]);
		$("#spaEth1Link").html(csv[15][0]);
		$("#spaEth1LinkStatus").html(csv[15][1]);
		$("#spaFCPort2").html(csv[16][0]);
		$("#spaFCPort2Status").html(csv[16][1]);
		$("#spbEth1Link").html(csv[17][0]);
		$("#spbEth1LinkStatus").html(csv[17][1]);
		$("#spbEth2Link").html(csv[18][0]);
		$("#spbEth2LinkStatus").html(csv[18][1]);
		$("#spbMemFault").html(csv[19][0]);
		$("#spbMemFaultStatus").html(csv[19][1]);
		$("#spbEth1Activity").html(csv[20][0]);
		$("#spbEth1ActivityStatus").html(csv[20][1]);
		$("#spbEth2Activity").html(csv[21][0]);
		$("#spbEth2ActivityStatus").html(csv[21][1]);
		$("#spbUnsafeRemove").html(csv[22][0]);
		$("#spbUnsafeRemoveStatus").html(csv[22][1]);
		$("#spbFault").html(csv[23][0].concat(" ").concat(csv[23][1]));
		$("#spbFaultStatus").html(csv[23][1]); //this is expressed in Hz
		$("#spbPower").html(csv[24][0]);
		$("#spbPowerStatus").html(csv[24][1]);
		$("#spbEth4Activity").html(csv[25][0]);
		$("#spbEth4ActivityStatus").html(csv[25][1]);
		$("#spbEth3Link").html(csv[26][0]);
		$("#spbEth3LinkStatus").html(csv[26][1]);
		$("#spbEth3Activity").html(csv[27][0]);
		$("#spbEth3ActivityStatus").html(csv[27][1]);
		$("#spbSasP1Link").html(csv[28][0]);
		$("#spbSasP1LinkStatus").html(csv[28][1]);
		$("#spbSasP2Link").html(csv[29][0]);
		$("#spbSasP2LinkStatus").html(csv[29][1]);
		$("#spbEth4Link").html(csv[30][0]);
		$("#spbEth4LinkStatus").html(csv[30][1]);
		$("#spbFCPort1").html(csv[31][0]);
		$("#spbFCPort1Status").html(csv[31][1]);
		$("#spbFCPort2").html(csv[32][0]);
		$("#spbFCPort2Status").html(csv[32][1]);
		
		var color = []; //create empty color array

		for(i = 0; i < 33; i++){
			color[i] = strToColor(csv[i][2]);
		}

		//assign colors to divs in html
		document.querySelector('#ambSens').style.background = color[0];
		document.querySelector('#spaSasP1Link').style.background = color[1];
		document.querySelector('#spaFCPort1').style.background = color[2];
		document.querySelector('#spaEth4Link').style.background = color[3];
		document.querySelector('#spaEth4Activity').style.background = color[4];
		document.querySelector('#spaSasP2Link').style.background = color[5];
		document.querySelector('#spaUnsafeRemove').style.background = color[6];
		document.querySelector('#spaEth3Link').style.background = color[7];
		document.querySelector('#spaEth3Activity').style.background = color[8];
		document.querySelector('#spaMemFault').style.background = color[9];
		document.querySelector('#spaPower').style.background = color[10];
		document.querySelector('#spaFault').style.background = color[11];
		document.querySelector('#spaEth1Activity').style.background = color[12];
		document.querySelector('#spaEth2Link').style.background = color[13];
		document.querySelector('#spaEth2Activity').style.background = color[14];
		document.querySelector('#spaEth1Link').style.background = color[15];
		document.querySelector('#spaFCPort2').style.background = color[16];
		document.querySelector('#spbEth1Link').style.background = color[17];
		document.querySelector('#spbEth2Link').style.background = color[18];
		document.querySelector('#spbMemFault').style.background = color[19];
		document.querySelector('#spbEth1Activity').style.background = color[20];
		document.querySelector('#spbEth2Activity').style.background = color[21];
		document.querySelector('#spbUnsafeRemove').style.background = color[22];
		document.querySelector('#spbFault').style.background = color[23];
		document.querySelector('#spbPower').style.background = color[24];
		document.querySelector('#spbEth4Activity').style.background = color[25];
		document.querySelector('#spbEth3Link').style.background = color[26];
		document.querySelector('#spbEth3Activity').style.background = color[27];
		document.querySelector('#spbSasP1Link').style.background = color[28];
		document.querySelector('#spbSasP2Link').style.background = color[29];
		document.querySelector('#spbEth4Link').style.background = color[30];
		document.querySelector('#spbFCPort1').style.background = color[31];
		document.querySelector('#spbFCPort2').style.background = color[32];
	});
	

});
