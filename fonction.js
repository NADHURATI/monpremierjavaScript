// LES FONCTIONS
/* Les fonctions sont des opérations qui effectuent 
des calculs et retournent un résultat.
L'avantage des fonctions sont réutilisable.
*/

let prix = 5 + 4;
let prix2 = 40 + 43;
let prix4 = 5 + 7;
let prix5 = 3 + 5;

// Quelle action va être effectuée dans ma fonction
// Que doit retourner ma fonctions?
function mafonctionAddition(nombreA, nombreB) {
    let total = nombreA + nombreB;
    return total;
}

 /* 1. je déclare un fonction qui a pour
 tâche d'additionner deux chiffres 
 et de retourner le résultat */
function calculaddition (chiffre1, chiffre2) {
    let resultat = chiffre1 + chiffre2;
    return resultat;
}
// 2. Ensuite, j'appelle la fonction calculaddition()
let prix3 = calculaddition(40,43);

//alert(prix3)
let âge = 2002 - 2004
let âge2 = 2024 - 2025

/* 3. je déclare un fonction pour calculer l'âge*/
function calculage (age1, age2) {
    let resultat = age1 - age2;
    return resultat
}

let age = calculage (50,20);
alert (age);

/* Fonction pour multiplier deux chiffres ou deux nombres entiers
La fonction doit retourner le résultat de la multiplication.
*/

function calculMultiplication(parametre1, parametre2, parametre3) {
    // Je décris les instructions et les opérations
    /* je multiplie les trois parametre,
    et je stocke le résultat dans le variable 'produitObtenu'
    */
    let produitObtenu = parametre1 * parametre2 * parametre3;
    return produitObtenu;
}

let totalProduit = calculMultiplication(2, 3, 4);

let nombre1;
let nombre2;

function multiplication (nombre1, nombre2){
    let resultat = nombre1 + nombre2;
    return resultat;
}

let produit = multiplication (45, 4);
let afficheresultat = "Le résultat est de";
console.log(afficheresultat, produit);


