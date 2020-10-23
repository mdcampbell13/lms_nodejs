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

/* fetch movie list from genre selected */
function fetMovie() {  
  movegen = document.getElementById("movGenre").value;
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=a95b2ef6f451da51c4293ac94fc9d5ae&with_genres=${movegen}`)
  .then(response => response.json())
  .then(data2 => generateMovieList(data2.results))
  .catch(error => new Error(error));
  }

  function generateMovieList(data2) {
    mPick = data2[Math.floor(Math.random()*data2.length)];
    
    { 
      const newLocal = `
      <!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <title>Movie Picker</title>
  </head>
  <header>
  </header>
  <body class="bg-dark container mt-5">
  <div class="d-flex justify-content-center">
  <div class="card-deck">
  <div class="flex-column">
  <div class="card border-dark bg-dark align-items-center mb-4">
    <img style="max-width: 100%; height: auto" src="https://image.tmdb.org/t/p/w500/${mPick.poster_path}" width="426" height="640" alt="">
    </div>
    </div>
    </div>
    </div>
    <div class="flex-column mt-auto mb-auto">
  <div class="card bg-dark text-light text-center border-dark">
  <div class="display-3">${mPick.title}</div>
    </div>
  </div>
    </div>
  <div class="card mt-5 border-dark bg-dark text-light">
  <h1 class="h3 pt-4 mb-3">Overview</h1>
  <p class="lead d-inline-block" id="lost-para mt-5">${mPick.overview}</p></div>
  </div>
</div>
</div>
<br mt-5 mb-5"></br>
<div class="text-center">
<a href="screenRentals"><button class="btn-lg btn-danger mb-5">Back to Screen Packages</button></a>
</div>
  </body>
<!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </body>
</html>
      `;
      document.write(newLocal); 
    } 
  }



document.getElementById("movspin").onclick = function () {
  fetMovie();
  generateMovieList(data2)
  document.getElementById("movGenre").value = "";
}

document.getElementById("scrSubmit").onclick = function () {
  checkScrResDate();
  validateScrZip()
}

