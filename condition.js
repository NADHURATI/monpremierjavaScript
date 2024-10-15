// LES CONDITIONS
/*
Si A existe,
   alors B s'affiche.
*/

// On utilise le mot-clé if() pour créer une condition 

let age = 57
// Je veux vérifier si la personne est majeure
if(age > 18) {
    //alert("La personne est majeur.");
}

// Je veux vérifier si la personne est mineure
if(age < 18) {
    //alert("la personne est mineure.");
}

/* Si la note est 5, on affiche insuffisant
     si la note est 10, on affiche moyen
     si la note est 12, on affiche assez-bien
     si la note est 15, on affiche bien
     si la note est 18, on affiche très bien
*/


/* Lecture et analyse le besoin
Si la note est EGALE 5, on affiche insuffisant
J'ai besoin d'utiliser une variable nommée note pour stocker la note de l'évève
Ensuite, je code la condition.
*/

let note1 = 15;
if(note1 == 5) {
    //alert("insuffisant.");
}

/* Lecture et analyse le besoin
Si la note est EGALE 10, on affiche insuffisant
J'ai besoin d'utiliser une variable nommée note pour stocker la note de l'évève
Ensuite, je code la condition.
*/

let note = 9;
if(note > 10){ // S'il il est VRAI que la note est supérieure à 10
    // Alors j'affiche le message "Bravo! Vous êtes admis!"
    console.log("Bravo! vous êtes admis!");
} else { // Sinon 
     console.log("Désolé! Vous n'avez pas été admis.");
}



