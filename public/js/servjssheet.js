function CheckServRes() {

  let resDate = document.getElementById("resDate").value;


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

    if(new Date(resDate) < new Date(futureDate)) {
    alert(`Sorry. Reservations must be made one week in advance. Please enter a date after ${mo}-${da}-${ye}.`);
    document.getElementById("resDate").value = null;
    } else {
    alert(`Your Reservation for ${resDate} was made. Thank You!`);
  }


}

document.getElementById("raRequest").onclick = function () {
  CheckServRes();
}