document.getElementById("paRequest").onclick = function () {
  let paFirstName = "";
  let paLastName = "";
  let paEmail = "";
  let paTel = "";
  let paFMT = false;
  let paFMR = false;
  let pa2WG = false;
  let pa4WG = false;
  let paAddress = "";
  let paAddress2 = "";
  let paCity = "";
  let paState = "";
  let paZip = 0;
  let paDate = "";
  let paReq = "";
  let paIncident = {};

  paFirstName = document.getElementById("paFirstName").value;
  paLastName = document.getElementById("paLastName").value;  
  paEmail = document.getElementById("paEmail").value;
  paTel = document.getElementById("paTel").value;
  paFMT = document.getElementById("fmTransmitterCheck1").checked;
  paFMR = document.getElementById("fmReceiversCheck1").checked;
  pa2WG = document.getElementById("2000WattGenCheck1").checked;
  pa4WG = document.getElementById("4000WattGenCheck1").checked;
  paAddress = document.getElementById("paAddress").value;
  paAddress2 = document.getElementById("paAddress2").value;
  paCity = document.getElementById("paCity").value;
  paState = document.getElementById("paState").value;
  paZip = document.getElementById("paZip").value;
  paDate = document.getElementById("paDate").value;
  paReq = document.getElementById("paRequests").value;

  paIncident = {
    first_name: paFirstName,
    last_name: paLastName,
    email: paEmail,
    phone: paTel,
    address: paAddress,
    address2: paAddress2,
    city: paCity,
    state: paState,
    zip: paZip,
    FMTransmit: paFMT,
    FMReceive: paFMR,
    IIKWGen: pa2WG,
    IVKWGen: pa4WG,
    addDateReq: paDate,
    PARequest: paReq,
  };

  paString = JSON.stringify(paIncident);
  alert(paString);
  alert("Thank You! You're reservation has been sent.");
  location.reload(true);
};
