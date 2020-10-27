// list of available zip codes
const zip = [
  40014,
  40023,
  40041,
  40047,
  40059,
  40109,
  40118,
  40177,
  40202,
  40203,
  40204,
  40205,
  40206,
  40207,
  40208,
  40209,
  40210,
  40211,
  40212,
  40213,
  40214,
  40215,
  40216,
  40217,
  40218,
  40219,
  40220,
  40222,
  40223,
  40228,
  40229,
  40241,
  40242,
  40243,
  40245,
  40258,
  40272,
  40291,
  40293,
  40299,
  40014,
  40026,
  40056,
  40229,
  40109,
];

let czip2 = 0;

// function to match zip input to an element in zip array and to validate field
function checkZip() {
  czip2 = document.getElementById("czip").value;
  wt_zip = false;
  if (isNaN(czip2) || czip2.length !== 5) {
    alert("Please enter a valid zip code.");
    document.getElementById("czip").value = "";
  } else {
    for (i = 0; i < zip.length; i++)
      if (zip[i] == czip2) {
        wt_zip = true;
      }
    if (wt_zip === true) {
      alert(`Great! ${czip2} is in our service area`);
    } else if (wt_zip === false) {
      alert(`We're sorry. ${czip2} is not in our service area.`);
    }
    document.getElementById("czip").value = "";
  }
}

document.getElementById("basic-addon2").onclick = function () {
  checkZip();
}

document.getElementById("czip").addEventListener("keydown", function(e) {
  if (e.key === 'Enter') {
    checkZip();
  }
});