for (let ligne = 0; ligne <= 10; ligne++) {
    console.log ("ligne n° "+ligne)
    
}

let nbLigne = prompt("Quel est le nombre de Lignes ?");
alert(nbLigne);

if (nbLigne >= 100){
    alert ("On ne peux utiliser plus de 100 lignes");
}
alert("Le nombre de Lignes est : "+nbLigne);
