let neoInstr = document.getElementById("neocitiesInstructies");
let lijst = document.getElementById("lijst");
let lijstSrc = document.getElementById("lijstSrc").innerHTML;
let lijstKlik = document.getElementById("lijstKlik");
let niKlik = document.getElementById("niKlik");
niKlik.addEventListener("click", diplayNeocitiesInstructies);
lijstKlik.addEventListener("click", diplayLijst);



//initialize all li tags with deelopdrachten with event listeners
for (let i = 1; i <= 6; i++) {
    let liTag = document.getElementById("opdr" + i);
    liTag.addEventListener("click", diplayDeelopdracht);
}


function diplayNeocitiesInstructies() {
    if (neoInstr.style.display == "none")
        neoInstr.style.display = "block";
    else
        neoInstr.style.display = "none";
}

function diplayLijst() {
    if (lijst.innerHTML == "")
        lijst.innerHTML = lijstSrc;
    else lijst.innerHTML = "";
}


function diplayDeelopdracht(evt) {

    let id = evt.currentTarget.getAttribute("id");
    let el = document.getElementById(id + "desc");
    let src = document.getElementById(id + "descSrc").innerHTML;

    if (el.innerHTML == "")
        el.innerHTML = src;
    else el.innerHTML = "";
}
