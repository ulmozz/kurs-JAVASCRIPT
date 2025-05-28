// Deklaracja obiektu i wlasciwosci
let user = {
    name: "Dariusz",
    age: 38,
    email: "dariusz@example.com",
    courses: ["JavaScript","SQL"],
    sayHi: function () {
        console.log(`Hello! Moje imie to ${this.name}`);
    }
}

// Wypisuje pojedynczo wlasciwosci obiektu
console.log(user.name);
console.log(user.age);
console.log(user.email);
console.log(user.courses[0]);
console.log(user.courses[1]);

//Wypisuje cała strukture obiektu
for (let key in user) {
    console.log(key);
    console.log(user[key]);
}

// Wyświetl user.email, ale jeśli jest undefined lub null, to zamiast tego wyświetl (n/a)
console.log(user.email ?? "n/a");

// Dodawanie i usuwanie wlasciwosci obiektu
user.isPremium = true;
delete user.email;

console.log(user.email ?? "n/a");

user.certificates = [
    {name: "JavaScript", issuer: "Udemy"},
    {name: "SQL Basics", issuer: "Coursera"}
]

console.log(user.certificates[1].name);
console.log(user.certificates[1].issuer);
console.log("-------");

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}

// Definicja funkcji tworzacej usera
console.log("-------");
function createUser (name, age) {
    return {
        name: name,
        age: age,
        registered: true
    }
}

// Wypisuje wszystkie właściwosci obiektu
function WypiszObiekt(user)
{
    for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}
}

let dulma = createUser("Dariusz", 38);
WypiszObiekt(dulma);
let paula = createUser("Paulina", 35);
WypiszObiekt(paula);

console.log("-------");

// // Tworzy klon uzytkownika user - shallow copy
// let kopia_user = {};
// for (let key in user) {
//     kopia_user[key] = user[key];
// }

// Tworzy klon uzytkownika user - deep copy
let kopia_user = JSON.parse(JSON.stringify(user));

WypiszObiekt(user);
WypiszObiekt(kopia_user);

kopia_user.name = "Michał";
WypiszObiekt(user);
WypiszObiekt(kopia_user);

user.sayHi();

console.log("-------");
console.log(user.certificates[1].name);
console.log(kopia_user.certificates[1].name);

kopia_user.certificates[1].name = "Dupa";
console.log(user.certificates[1].name);
console.log(kopia_user.certificates[1].name);