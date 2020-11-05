let screenOrderNumber = "";
let screenOrderNumber2 = "";

document.getElementById("ScreenOrderReq").onclick = function () {
    screenOrderNumber = document.getElementById("screenOrderNumber").value;
    screenOrderNumber2 = `screenRentalOrder/${screenOrderNumber}`;
    if(screenOrderNumber != "") {
      document.getElementById("whereScreenOrder").innerHTML = `<a href="${screenOrderNumber2}"><button type="submit" class="btn btn-danger" id="ScreenOrderReq">Check Order Status</button></a>`;
    }
    document.getElementById("ScreenOrderReq").click();
  }