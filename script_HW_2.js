"use strict";

function receiver (model) {   // constructor
		this._model  = model;
        this._state  = 'off';
		this._channel = 1;	 
		this._volume = 20;
}				
receiver.prototype.model = function () {
      return this._model;
   }
receiver.prototype.power = function () {
      if (this._state === 'on') {
		 this._state = 'off'; 
	  }else {
		  this._state = 'on';
	  }
	}

receiver.prototype.state = function () {
      return this._state;
	}	
receiver.prototype.increaseVolume = function () {
      this._volume = this._volume + 10;
	if (this._volume > 100) {
		this._volume = 100;
	}
		}
receiver.prototype.decreaseVolume = function () {
      this._volume = this._volume - 10;
	if (this._volume < 0) {
		this._volume = 0;
	}
		}	
receiver.prototype.Volume = function () {
	return this._volume ;
}
receiver.prototype.increaseChannel = function () {
      this._channel = this._channel + 1;
	if (this._channel > 100) {
		this._channel = 100;
	}
		}
receiver.prototype.decreaseChannel = function  () {
      this._channel = this._channel - 1;
	if (this._channel < 1) {
		this._channel = 1;
	}
		}	
receiver.prototype.Channel = function () {
	return this._channel ;
	}




function climat (model) {   // constructor
		this._model  = model;
        this._state  = 'off';
		this._temp = 22;	 
}				
climat.prototype.model = function () {
      return this._model;
   }
climat.prototype.on = function () {
      this._state = 'on';
	}
climat.prototype.off = function () {
      this._state = 'off';
	}
climat.prototype.state = function () {
      return this._state;
	}	
climat.prototype.increaseTemp = function () {
      this._temp = this._temp + 1;
	if (this._temp > 29){
		this._temp = 29
	}
	}
climat.prototype.decreaseTemp  = function () {
      this._temp = this._temp - 1;
	if (this._temp < 18){
		this._temp = 18
	}
	}	
climat.prototype.Temp = function () {
	return this._temp ;
	}



function switchable (model, id) {   // constructor
		this._model  = model;
        this._state  = 'off';
		this._id = id;
}						
switchable.prototype.model = function () {
      return this._model;
   }
switchable.prototype.on = function () {
      this._state = 'on';
	}
switchable.prototype.off = function () {
      this._state = 'off';
	}
switchable.prototype.state = function () {
      return this._state;
	}	

switchable.prototype.id = function () {
      return this._id;
   }



//// end  constructors section

// create lamp


    var lampsArray = [];
	var name = ' ЛАМПА MAXUS ';
	var id;     /// for future use ))) should not be visible by the user )
	
	id = 'lampId=' + lampsArray.length;
	lampsArray[lampsArray.length] = new switchable (name, id);


function lampStateChange () {
		
	
	document.getElementById("light_on").onclick = function(){
	
	for (var z = 0 ; z < lampsArray.length; z++) {
		lampsArray[z].on();
	};
	lampView ();
};
		
	document.getElementById("light_off").onclick = function(){
	
	for (var j = 0 ; j < lampsArray.length; j++) {
		lampsArray[j].off();
	};
	lampView ();
};
	
	document.getElementById("add_lamp").onclick = function(){
	    
	var id;
	id = 'lampId=' + lampsArray.length;
	lampsArray[lampsArray.length] = new switchable (name, id);
	
	lampView ();
	
	}
	
	document.getElementById("del_lamp").onclick = function(){
	lampsArray.splice((lampsArray.length - 1 ), 1);
		
	lampView ();
	}
	
}

	
lampStateChange ();


function lampView () {
		
	var arrDelelems = document.querySelectorAll('.light');
		
	if (arrDelelems[0] !== undefined) {
	
		for( let k = 0; k < arrDelelems.length ; k++) { //arrDelelems.length
		let tempElem = arrDelelems[k];
		tempElem.parentNode.removeChild(tempElem);
		}
	}
		
		
	for ( let i = 0 ; i < lampsArray.length ; i++ ) {
			     
		if (lampsArray[i].state () === 'on') {
			var lampState = ' ВКЛ ';
			var bdColor = '#F0E68C';
				} else {
					var lampState = ' ВЫКЛ ';
					var bdColor = 'black';
	}
	
  
  var lampDiv = document.createElement('div');
  lampDiv.className = 'light';
  lampDiv.title = 'redheat';
  lampDiv.style.backgroundColor = bdColor ;
  lampDiv.accessKey = 'lampa'; ///
  lampDiv.innerHTML = `${lampsArray[i].model ()} <br>  ${lampsArray[i].id ()} <br> ${lampState} `;
  document.body.appendChild(lampDiv);
 	
		
	console.log (lampsArray[i]); // так красивее
	}
	console.log ( ' === --- === ');
	  	
	
};
	


///////    end of lamp




var heater = new climat ('BOSCH'); /// create heater


function heaterStateCheck () {
	
	document.getElementById("heat_on").onclick = function(){
	heater.on ();
	heaterView ();
	}
	document.getElementById("heat_off").onclick = function(){
	heater.off ();
	heaterView ();
	}
	document.getElementById("temp_up").onclick = function(){
	heater.increaseTemp ();
	heaterView ();
	}
	document.getElementById("temp_down").onclick = function(){
	heater.decreaseTemp ();
	heaterView ();
	}
	
}
	
heaterStateCheck ();
	

function heaterView (){
	
	if (heater.state () === 'on') {
	var showState = ' ВКЛ ';
	document.getElementById('heater').style.backgroundColor = '#B22222';	
	} else {
	var showState = ' ВЫКЛ';
	document.getElementById('heater').style.backgroundColor = '#0A0A0A';	
	}
	
	document.getElementById('heater').innerHTML =` название = ${heater.model ()} <br>
	состояние = ${showState} <br> уст. температура = ${heater.Temp()}`;
		
	
	}



/// tvset



var tvSet = new receiver ('SONY');


function tvSetStateCheck () {
	
	document.getElementById("tv_power").onclick = function(){
	tvSet.power ();
	tvSetView ();
	}
	document.getElementById("tv_ch_up").onclick = function(){
	tvSet.increaseChannel ();
	tvSetView ();
	}
	document.getElementById("tv_ch_down").onclick = function(){
	tvSet.decreaseChannel ();
	tvSetView ();
	}
	
	document.getElementById("tv_vol_down").onclick = function(){
	tvSet.decreaseVolume();
	tvSetView ();
	}
	document.getElementById("tv_vol_up").onclick = function(){
	tvSet.increaseVolume ();
	tvSetView ();
	}
	
	
}

tvSetStateCheck ();



function tvSetView (){
	
	if (tvSet.state () === 'on') {
	var showtvSetState = ' ВКЛЮЧЕНО ';
	document.getElementById('tvset').style.backgroundColor = '#87CEEB' ;	
	} else {
	var showtvSetState = ' ВЫКЛЮЧЕНО ';
	document.getElementById('tvset').style.backgroundColor = 'black';	
	}
	
	document.getElementById('tvset').innerHTML =` название = ${tvSet.model ()} <br>
	состояние = ${showtvSetState} <br> канал = ${tvSet.Channel()} <br> громкость = ${tvSet.Volume()} `;
		
	
	}

	

document.body.onload = function () {
lampView ();
heaterView ();
tvSetView ();	
}
