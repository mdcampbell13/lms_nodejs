let movegen = 0;
let wzip = 0;

/* fetch weather forecast from zipcode selected */
function fetWeather() {
fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${wzip}&appid=d3404c340f42bda4f9be14c227fc8af5&units=imperial`)
  .then(response => response.json())
  .then(data => alert(JSON.stringify(data.list[0].main)))
}

 
/* fetch movie list from genre selected */
function fetMovie() {  
  movegen = document.getElementById("movGenre").value;
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=a95b2ef6f451da51c4293ac94fc9d5ae&with_genres=${movegen}`)
  .then(response => response.json())
  .then(data2 => alert(JSON.stringify(data2.results[0].title)))
  } 

  // function to validate weather zip
function checkWeatherZip() {
  wzip = document.getElementById("weatherZip").value;
  if (isNaN(wzip) || wzip.length !== 5) {
    alert("Please enter a valid zip code.");
    document.getElementById("weatherZip").value = "";
  } 
}



function checkScrRes() {

  var scrResDate = document.getElementById("scrDate").value;
  
  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

  var date = new Date();

  var futureDate = date.addDays(3);
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(futureDate);
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(futureDate);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(futureDate);
  

    if(new Date(scrResDate) < new Date(futureDate)) {
    alert(`Sorry. Reservations must be made 4 days in advance. Please enter a date after ${mo}-${da}-${ye}.`);
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

document.getElementById("movspin").onclick = function () {
  fetMovie();
}

document.getElementById("wForecast").onclick = function () {
  checkWeatherZip();
  fetWeather();
}

document.getElementById("wForecast").addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    checkWeatherZip();
    fetWeather();
  }
});

document.getElementById("weatherZip").addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    checkWeatherZip();
  }
});

document.getElementById("scrSubmit").onclick = function () {
  checkScrRes();
  validateScrZip()
}

