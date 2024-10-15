/*
Les Tableaux
*/

let monTableau = ["Said", "Amina", "Bao"];

// Je veux afficher les éléments du tableau monTableau

console.log("J'ai trouvé", monTableau[0]); 
// J'ai trouvé Said

console.log("J'ai trouvé ", monTableau[1]);
// J'ai trouvé Amina

console.log("J'ai trouvé ", monTableau[2]);
// J'ai trouvé Bao

// Je déclare mon objet 'client'
let client = {
    nom: "Ali",
    prenom: "Yanis",
    numeroClient: 134,
    adresse: "12 Rue de la vie - mayotte",
    celibataire: false
};

// Avec console.log(), afficher le nom et prénom du client
console.log("Mon client s'appelle ", client.nom, client.prenom);
