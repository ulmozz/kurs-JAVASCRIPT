// Produkty moga byc w lodowce lub moga byc zamowione (czekamy na dostawe)
let lodowka = ['jajka', 'bekon', 'ryba'];
let zamowione = ['chleb', 'maslo', 'wedlina', 'cebula'];

// Skladniki w przepisie na sniadanie
let sniadanie = ['jajka', 'bekon', 'cebula'];

function czyZjemy(skladniki, produkty) {
  // Przyjmujemy pesymistycznie, ze NIE zjemy...
  for (let s = 0; s < skladniki.length; s++) {
    let zjemy = false; // ...i dla kazdego skladnika sprawdzamy to zalozenie osobno
    for (let p = 0; p < produkty.length; p++) {
      if (produkty[p] == skladniki[s]) { // Sprawdzamy, czy skladnik jest wsrod produktow
        zjemy = true;
      }
    }
    if (zjemy == false) return false; // Jesli choc jednego skladnika nie ma, to nie zjemy
  }
  return true; // Zostalismy zaskoczeni, wszystkie skladniki znalezione
}

console.log("Czy zjemy sniadanie tylko z produktow w lodowce, nie czekajac na dostawe?");
console.log(czyZjemy(sniadanie, lodowka));
console.log("Czy zjemy sniadanie, jesli poczekamy na dostawe?");
console.log(czyZjemy(sniadanie, [...lodowka, ...zamowione])); // W ten sposob laczymy dwie tablice w jedna
