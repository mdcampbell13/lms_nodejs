function checkPaRes() {

  let paResDate = document.getElementById("paDate").value;


  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

  let date = new Date();

  let futureDate = date.addDays(6);
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(futureDate);
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(futureDate);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(futureDate);

    if(new Date(paResDate) < new Date(futureDate)) {
    alert(`Sorry. Reservations must be made one week in advance. Please enter a date after ${mo}-${da}-${ye}.`);
    document.getElementById("paDate").value = null;
    }
}

// function to validate reservation zip
function validateAddZip() {
  pzip = document.getElementById("paZip").value;
  if (isNaN(pzip) || pczip.length !== 5) {
    alert("Please enter a valid zip code.");
    document.getElementById("paZip").value = "";
  } 
}


document.getElementById("paRequest").onclick = function () {
  checkPaRes();
  validateAddZip();
}