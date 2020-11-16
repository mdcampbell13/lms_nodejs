let rserviceOrderNumber = ""
let srserviceOrderNumber = ""

document.getElementById("serveOrderReq").onclick = function () {
    rserviceOrderNumber = document.getElementById("serviceOrderNumber").value
    srserviceOrderNumber = `serviceOrder/${rserviceOrderNumber}`
    if(rserviceOrderNumber != ""){
      document.getElementById("whereOrder").innerHTML = `<a href="${srserviceOrderNumber}"><button type="submit" class="btn btn-danger" id="serveOrderReq">Check Order Status</button></a>`
    }
    document.getElementById("serveOrderReq").click()
  }