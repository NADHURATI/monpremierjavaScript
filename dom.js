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
// Récuperer plusieurs éléments appartenant à la classe. ma
console.log(" Ma Deuxième liste", maListe);


let maListeIntegrale = document.querySelectorAll(".maListe");
console.log("Ma liste Intégrale: ", maListeIntegrale);

 for(let i = 0; i < maListeIntegrale.length; i++) {
    console.log(maListeIntegrale[i]);
 }

let monParagraphe = document.querySelector("#paragraphe1");
console.log(" Mon paragraphe" , monParagraphe)

// Modifier un élément du DOM

let elementImage = document.querySelector("#premiereImage");
elementImage.setAttribute("class", "photoModifiee");

elementImage.setAttribute("alt", "Mon image doit s'afficher" );
console.log("Mon image Avant de modification :", elementImage );

elementImage.classListe.add("nouvelleClasse");
console.log("ajout nouvelle classe:", elementImage);

elementImage.classList.remove("photo");

// Créer un nouvel élément dans la page
// on utilise la méthode createElement()
let nouvelDiv = document.createElement("div");
let nouveauTitre = document.createElement("h3");

// <h3> Mon titre de section niveau 3 </h3>
nouveauTitre.textContent = "Mon titre de section niveau 3";

// Sélectionner l'élément body
let body = document.querySelector('body');
body.appendChild(nouveauDiv);

let monDiv = document.querySelector("div");
monDiv.appendChild(nouveauTitre);

/* <body>
        <div> => body.apprendChild(nouveauDiv);
            <h3> Mon titre de section niveau 3 </h3>
        
        
        </div>

</body>

*/



