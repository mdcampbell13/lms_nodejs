let addOnOrderNumber = "";
let addOnOrderNumber2 = "";

document.getElementById("addOnOrderReq").onclick = function () {
    addOnOrderNumber = document.getElementById("addOnOrderNumber").value;
    addOnOrderNumber2 = `addOnsOrder/${addOnOrderNumber}`;
    if(addOnOrderNumber != "") {
      document.getElementById("whereaddOnOrder").innerHTML = `<a href="${addOnOrderNumber2}"><button type="submit" class="btn btn-danger" id="addOnOrderReq">Check Order Status</button></a>`;
    }
    document.getElementById("addOnOrderReq").click();
  }