let alea = (Math.random(1)*100).toFixed(0);
//alert(alea);
let nombre = prompt("Choississez un nombre entre 1 et 100 ");

if (alea==nombre){
    alert("Vous avez trouvé le nombre aléatoire ! Félicitations !");
}
else alert("Essayez encore ! Courage !");
