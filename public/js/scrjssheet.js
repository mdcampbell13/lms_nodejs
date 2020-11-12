let movegen = 0;
let wzip = 0;
let mPick = {};
let data2 = {};
 
function checkScrResDate() {

  var scrResDate = document.getElementById("scrDate").value;
  
  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

  var date = new Date();

  var futureDate = date.addDays(6);
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(futureDate);
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(futureDate);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(futureDate);
  

    if(new Date(scrResDate) < new Date(futureDate)) {
    alert(`Sorry. Reservations must be made one week in advance. Please enter a date after ${mo}-${da}-${ye}.`);
    document.getElementById("scrDate").value = null;
    }
}

// function to validate reservation zip
function validateScrZip() {
  sczip = document.getElementById("scrZip").value;
  if (isNaN(sczip) || sczip.length !== 5) {
    alert("Please enter a valid zip code.");
    document.getElementById("scrZip").value = "";
  } 
}


document.getElementById("scrSubmit").onclick = function () {
  checkScrResDate();
  validateScrZip()
}