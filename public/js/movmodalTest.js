let mgen4 = "";
let mhtml = "";

document.getElementById("movspin2").onclick = function () {
    mgen4 = document.getElementById("movGenre").value;
    mhtml = `movieRoulette/${mgen4}`
    if(mgen4 != ""){
        document.getElementById("moveRoulle2Span").innerHTML = `<a href="${mhtml}"><button type="submit" class="btn btn-danger" id="movspin2">SPIN!</button></a>`;
    }
    document.getElementById("movspin2").click();
}
