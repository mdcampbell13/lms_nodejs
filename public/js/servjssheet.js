serviceList2 = []

function CheckServRes() {

  let resDate = document.getElementById("resDate").value


  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf())
    date.setDate(date.getDate() + days)
    return date
}

  let date = new Date();


  let futureDate = date.addDays(6);
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(futureDate)
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(futureDate)
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(futureDate)

    if(new Date(resDate) < new Date(futureDate)) {
    alert(`Sorry. Reservations must be made one week in advance. Please enter a date after ${mo}-${da}-${ye}.`)
    document.getElementById("resDate").value = null
    }
}

// function to validate reservation zip
function validateServiceZip() {
  rzip = document.getElementById("raZip").value
  if (isNaN(rzip) || sczip.length !== 5) {
    alert("Please enter a valid zip code.")
    document.getElementById("raZip").value = ""
  } 
}

// function to create services requested list
function scheck_boxes() {
  let serviceList = []
    $("input").each(function() {
      if ($(this).is(':checked')) {
        let checked = ($(this).val())
        serviceList.push(checked)
      }
    });
    return serviceList
  }

document.getElementById("raRequest").onclick = function () {
  serviceList2 = scheck_boxes()
  document.getElementById("serviceList").value = serviceList2
  CheckServRes()
  validateServiceZip()
}