// Manipuler Le DOM

// Sélectionner un élément
document.head // Récuperer l'élément head
document.title; // Récupérer l'élément title

//console.log(document.title);

// Je récupère le titre du document HTML
// Puis , je stocke le titre dans la variable
// titrePageweb
let titrePageweb = document.title;

console.log(titrePageweb);
console.log(document.li);

 let monSpan = document.querySelector("#paragraphe1 span");
 console.log("mon Span" , monSpan);
// Récupérer les élément grâce au selecteur
let monAgent = document.querySelector("#agent1");
console.log(monAgent);

let maListe = document.querySelector(" .maListe");
console.log(" Ma Deuxième liste", maListe);

let maListeIntegrale = document.querySelectorAll(".maListe");
console.log("Ma liste Intégrale: ", maListeIntegrale);

let monParagraphe = document.querySelector("#paragraphe1");
console.log(" Mon paragraphe" , monParagraphe)




