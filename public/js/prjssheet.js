document.getElementById("raRequest").onclick = function () {  

  raValidate = function() {
    document.getElementById("servicesReservation").reset();
    if(raFirstName == "") {alert("You must provide a first name.");};
    if(raLastName == "") {alert("You must provide a last name.")};
    if (regexEmail.test(raEmail) == false) {alert("You must provide a valid email address.")};
    if(raTel == "") {alert("You must provide a valid phone number.")};
    if (regexTel.test(raTel) == false) {alert("You must provide a valid phone number.")};
    if(raAddress == "") {alert("You must provide a valid address.")};
    if(raCity == "") {alert("You must provide a valid City.")};
    if((isNaN(raZip) || raZip.length !== 5)) {alert("Please enter a valid zip code.");}
    if(raDate == "") {alert("You must provide a valid Date.")};
} 
  const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  const regexTel = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
  let raFirstName = "";
  let raLastName = "";
  let raEmail = "";
  let raTel = "";
  let raProj = false;
  let raScr = false;
  let raS150 = false;
  let raS1000 = false;
  let raS17 = false;
  let raFMT = false;
  let raFMR = false;
  let raBR = false;
  let ra2KGen = false;
  let ra4KGen = false;
  let raPP = false;
  let raLabor = false;
  let raAddress = "";
  let raAddress2 = "";
  let raCity = "";
  let raState = "";
  let raZip = 0;
  let raDate = "";
  let raReq = "";
  let raIncident = {};

  raFirstName = document.getElementById("raFirstName").value;
  raLastName = document.getElementById("raLastName").value;  
  raEmail = document.getElementById("raEmail").value;
  raTel = document.getElementById("raTel").value;
  raProj = document.getElementById("raprojectorCheck").checked;
  raScr = document.getElementById("screen100Check").checked;
  raS150 = document.getElementById("sound150Check").checked;
  raS1000 = document.getElementById("sound1000Check").checked;
  raS17 = document.getElementById("screen17Check").checked;
  raS24 = document.getElementById("screen24Check").checked;
  raFMT = document.getElementById("fmTransmitCheck").checked;
  raFMR = document.getElementById("fmReceiveCheck").checked;
  raBR = document.getElementById("bRayCheck").checked;
  ra2KGen = document.getElementById("gen2000Check").checked;
  ra4KGen = document.getElementById("gen4000Check").checked;
  raPP = document.getElementById("powerPointCheck").checked;
  raLabor = document.getElementById("laborCheck").checked;
  raAddress = document.getElementById("raAddress").value;
  raAddress2 = document.getElementById("raAddress2").value;
  raCity = document.getElementById("raCity").value;
  raState = document.getElementById("raState").value;
  raZip = document.getElementById("raZip").value;
  raDate = document.getElementById("resDate").value;
  raReq = document.getElementById("prequests").value;

  raValidate();

  raIncident = {
    first_name: raFirstName,
    last_name: raLastName,
    email: raEmail,
    phone: raTel,
    address: raAddress,
    address2: raAddress2,
    city: raCity,
    state: raState,
    zip: raZip,
    projector: raProj,
    screen100in: raScr,
    sound150: raS150,
    sound1000: raS1000,
    screen17ft: raS17,
    scree24ft: raS24,
    FMTrans: raFMT,
    FMRecieve50: raFMR,
    blueray: raBR,
    gen2K: ra2KGen,
    gen4K: ra4KGen,
    powerpoint: raPP,
    Labor: raLabor,
    reserveDate: raDate,
    addrequests: raReq,
  };

  raString = JSON.stringify(raIncident);
  alert(raString);
  alert("Thank You! You're reservation has been sent.");
};