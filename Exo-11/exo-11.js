let reponse = prompt("De quelle couleur est le soleil?");

let repPara =document.getElementById("p1");

if (reponse=="jaune"){
    repPara.innerHTML = "C'est la bonne réponse";
}
else if(reponse!="jaune") {
    repPara.innerHTML = "Mauvaise réponse !";
}