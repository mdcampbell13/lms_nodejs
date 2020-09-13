document.getElementById("scrSubmit").onclick = function () {
  let scrFirstName = "";
  let scrLastName = "";
  let sPackEmail = "";
  let scrSize = "";
  let scrAddress = "";
  let scrAddress2 = "";
  let scrCity = "";
  let scrState = "";
  let scrZip = 0;
  let scrDate = "";
  let scrnReq = "";
  let scrIncident = {};

  scrFirstName = document.getElementById("scrFirstName").value;
  scrLastName = document.getElementById("scrLastName").value;
  scrTel = document.getElementById("scrTel").value;  
  sPackEmail = document.getElementById("scrEmail").value;
  scrAddress = document.getElementById("scrAddress").value;
  scrAddress2 = document.getElementById("scrAddress2").value;
  scrCity = document.getElementById("scrCity").value;
  scrState = document.getElementById("scrState").value;
  scrZip = document.getElementById("scrZip").value;
  scrSize = document.getElementById("screenOptions").value;
  scrDate = document.getElementById("scrDate").value;
  scrnReq = document.getElementById("srequests").value;

  scrIncident = {
    first_name: scrFirstName,
    last_name: scrLastName,
    email: sPackEmail,
    phone: scrTel,
    address: scrAddress,
    address2: scrAddress2,
    city: scrCity,
    state: scrState,
    zip: scrZip,
    screenSize: scrSize,
    resDate: scrDate,
    screenReq: scrnReq,
  };

  scrString = JSON.stringify(scrIncident);
  alert(scrString);
  alert("Thank You! You're reservation has been sent.");
  location.reload(true); 
};