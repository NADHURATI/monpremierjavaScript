// BOUCLE
// Une boucle sert à répéter la même opération suivante une condition
// La boucle WHITE
// La boucle WHITE; WHITE signifie TANT QUE
//
// La syntaxe d'utilisation de la boucle WHITE
/*white(condition)
    // opération à exécuter
}*/

let numero = 0;

while(numero < 9){ // Tant que la valeur de la variable numero est plus petit que 9
    // Alors on exécute les opérations suivantes
    console.log("PASSAGE ", numero , "========");
    console.log("Numero AVANT l'ajout de + 4, Numero est:", numero);
    numero = numero + 4;

    console.log("Numero APRES l'ajout de + 4", numero);
}

// Boucle FOR
/* La boucle FOR permet d'exécuter un code un certain nombre de fois en
en précisant manuellement l'intervalle pour laquelle on souhaite faire la boucle
*/
for (let compteur = 0; compteur < 3; compteur++) { // compteur++, signifie j'ajoute +1 à la variable compteur
/* (let compteur = 0; compteur < 3; compteur++)
let compteur = 0; Je déclare la variable compteur avec la valeur 0
compteur++ A chaque fois que je fais la boucle , j'incrémente de +1 la valeur de la
variable compteur.
compteur < 3; Je teste si la valeur de la variable compteur est plus petite que 3
*/
// L'opération à exécuter 
console.log("Le compteur est : " + compteur); // afficher le compteur
}

// Utiliser la boucle FOR pour manipuler un tableau
let tableauEleves = ["Fazati","Dominique Jean", "Kaniza", "Nadhurati", "Ben", "Ben Ikbal", "Dalya", "Jasmine", "Akramal", "Faiz", "Faoula", "Kyara", "Soihiroudine", "Tatyana", "Said", "Nicia", "Izad", "Ambdil", "Thouaibat"];

console.log("Taille de mon tableau : ", tableauEleves.length);
// Récupérer les élève sans utiliser la boucle FOR
console.log(tableauEleves[0]);
console.log(tableauEleves[1]);
console.log(tableauEleves[2]);

console.log("=== Avant la boucle FOR ===");
for(let i = 0; i < tableauEleves.length; i++){

    console.log(tableauEleves[i]);
}