// Les gestions de bibliothèque

let totalLivres = 500;

let achat =50;
let jeter =10;
let racheter =5;

let affichageTotalLivres = "le nombre total de livres est de ";

console.log(totalLivres);
/* J'ai acheter 50 livres de plus */
totalLivres += achat;
/* Je jeter 10 */
totalLivres -= jeter;
/* Je racheter 5 des livres jetés */
totalLivres += racheter;

console.log(affichageTotalLivres + totalLivres);


let nombreDeChats = 10;

let affichagenombreDeChats = "le nombre de chats est de";

console.log(nombreDeChats)
nombreDeChats += 5;
nombreDeChats /= 3;
nombreDeChats -= 1;

console.log(affichagenombreDeChats + nombreDeChats);

