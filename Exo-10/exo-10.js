let x = parseInt(prompt("Quelle est la valeur de x ?"));
let y = parseInt(prompt("Quelle est la valeur de y ?"));

let p1Para = document.getElementById("p1");

if (x > y) {
    p1Para.innerHTML = "x est plus grand que y";
}
else if (x <= y) {
    p1Para.innerHTML = "y est égal ou plus grand que x";
}


