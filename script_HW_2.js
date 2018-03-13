"use strict";

function receiver (model) {   // constructor
		  
		this._model  = model;
        this._state  = 'off';
		this._channel = 1;	 
		this._volume = 20;
						
this.model = function () {
      return this._model;
   }
this.power = function () {
      if (this._state === 'on') {
		 this._state = 'off'; 
	  }else {
		  this._state = 'on';
	  }
	}

this.state = function () {
      return this._state;
	}	
this.increaseVolume = function () {
      this._volume = this._volume + 10;
	if (this._volume > 100) {
		this._volume = 100;
	}
		}
this.decreaseVolume = function () {
      this._volume = this._volume - 10;
	if (this._volume < 0) {
		this._volume = 0;
	}
		}	
this.Volume = function () {
	return this._volume ;
}
this.increaseChannel = function () {
      this._channel = this._channel + 1;
	if (this._channel > 100) {
		this._channel = 100;
	}
		}
this.decreaseChannel = function  () {
      this._channel = this._channel - 1;
	if (this._channel < 1) {
		this._channel = 1;
	}
		}	
this.Channel = function () {
	return this._channel ;
	}
}



function climat (model) {   // constructor
		  
		this._model  = model;
        this._state  = 'off';
		this._temp = 22;	 
						
this.model = function () {
      return this._model;
   }
this.on = function () {
      this._state = 'on';
	}
this.off = function () {
      this._state = 'off';
	}
this.state = function () {
      return this._state;
	}	
this.increaseTemp = function () {
      this._temp = this._temp + 1;
	if (this._temp > 29){
		this._temp = 29
	}
	}
this.decreaseTemp  = function () {
      this._temp = this._temp - 1;
	if (this._temp < 18){
		this._temp = 18
	}
	}	
this.Temp = function () {
	return this._temp ;
	}

}


function switchable (model) {   // constructor
		 
		this._model  = model;
        this._state  = 'off';
								
this.model = function () {
      return this._model;
   }
this.on = function () {
      this._state = 'on';
	}
this.off = function () {
      this._state = 'off';
	}
this.state = function () {
      return this._state;
	}	

}


//// end  constructors section

// create lamp

var roomLamp = new switchable ('ЛАМПА');

//console.log (roomLamp.model ());
//roomLamp.on()
//console.log (roomLamp.state ());


function roomLampStateCheck () {
	
	document.getElementById("light_on").onclick = function(){
	roomLamp.on ();
	roomLampView ()
	}
	document.getElementById("light_off").onclick = function(){
	roomLamp.off ();
	roomLampView ()
	}
}
	
roomLampStateCheck ();


function roomLampView () {
	
	if (roomLamp.state () === 'on') {
	var lampState = ' ВКЛ ';
	document.getElementById('light').style.backgroundColor = 'white';	
	} else {
	var lampState = ' ВЫКЛ ';
	document.getElementById('light').style.backgroundColor = 'black';	
	}
	
	document.getElementById('light').innerHTML =` название = ${roomLamp.model ()} <br> состояние = ${lampState} `;
}	
	


///////    end of lamp




var heater = new climat ('BOSCH'); /// create heater

//console.log (heater);


function heaterStateCheck () {
	
	document.getElementById("heat_on").onclick = function(){
	heater.on ();
	heaterView ()
	}
	document.getElementById("heat_off").onclick = function(){
	heater.off ();
	heaterView ()
	}
	document.getElementById("temp_up").onclick = function(){
	heater.increaseTemp ();
	heaterView ()
	}
	document.getElementById("temp_down").onclick = function(){
	heater.decreaseTemp ();
	heaterView ()
	}
	
}
	
heaterStateCheck ();
	

function heaterView (){
	
	if (heater.state () === 'on') {
	var showState = ' ВКЛ ';
	document.getElementById('heater').style.backgroundColor = 'red';	
	} else {
	var showState = ' ВЫКЛ';
	document.getElementById('heater').style.backgroundColor = 'grey';	
	}
	
	document.getElementById('heater').innerHTML =` название = ${heater.model ()} <br>
	состояние = ${showState} <br> уст. температура = ${heater.Temp()}`;
		
	//document.getElementById('heater').innerHTML =` название = ${heater.model ()} <br>
	//состояние = ${heater.state()} <br> уст. температура = ${heater.Temp()}`;
	}



/// tvset



var tvSet = new receiver ('SONY');


function tvSetStateCheck () {
	
	document.getElementById("tv_power").onclick = function(){
	tvSet.power ();
	tvSetView ()
	}
	document.getElementById("tv_ch_up").onclick = function(){
	tvSet.increaseChannel ();
	tvSetView ()
	}
	document.getElementById("tv_ch_down").onclick = function(){
	tvSet.decreaseChannel ();
	tvSetView ()
	}
	
	document.getElementById("tv_vol_down").onclick = function(){
	tvSet.decreaseVolume();
	tvSetView ()
	}
	document.getElementById("tv_vol_up").onclick = function(){
	tvSet.increaseVolume ();
	tvSetView ()
	}
	
	
}

tvSetStateCheck ();



function tvSetView (){
	
	if (tvSet.state () === 'on') {
	var showtvSetState = ' ВКЛЮЧЕНО ';
	document.getElementById('tvset').style.backgroundColor = '#E6FEFF' ;	
	} else {
	var showtvSetState = ' ВЫКЛЮЧЕНО ';
	document.getElementById('tvset').style.backgroundColor = 'black';	
	}
	
	document.getElementById('tvset').innerHTML =` название = ${tvSet.model ()} <br>
	состояние = ${showtvSetState} <br> канал = ${tvSet.Channel()} <br> громкость = ${tvSet.Volume()} `;
		
	
	}





document.body.onload = function () {
roomLampView ();
heaterView ();
tvSetView ();	
}
