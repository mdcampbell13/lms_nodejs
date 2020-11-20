let forecastZip = ""
let fhtml = ""

function validateForecastZip() {
    fzip = document.getElementById("fzip").value
    if (isNaN(fzip) || fzip.length !== 5) {
      alert("Please enter a valid zip code.")
      document.getElementById("fzip").value = ""
    } 
  }
  

document.getElementById("getForeCast").onclick = function () {
    validateForecastZip()
    forecastZip = document.getElementById("fzip").value
    fhtml = `weatherForecast/${forecastZip}`
    if(forecastZip != ""){
        document.getElementById("forecastSpan").innerHTML = `<a href="${fhtml}"><button type="submit" class="btn btn-danger" id="getForeCast">Get Forecast</button></a>`
        document.getElementById("getForeCast").click()
    }
}

document.getElementById("fzip").addEventListener("keydown", function(e) {
    if (e.key === 'Enter') {
        validateForecastZip()
        forecastZip = document.getElementById("fzip").value
        e.preventDefault()
        fhtml = `weatherForecast/${forecastZip}`
        if(forecastZip != ""){
            href=`${fhtml}`
            document.getElementById("getForeCast").click()
        }
    }
})