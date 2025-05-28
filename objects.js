// Deklaracja
let user1 = new Object();
let user2 = {};

// Właściwości - ang. property, properties (pl)
let user3 = {
    name: "John",
    age: 30,
    languages: ["C#", "SQL", "HTML"],
    certificates: [
        {
            issuer: "Microsoft",
            topic: "Administering SQL Server"
        },
        {
            issueName: "Apple",
            issueAddress: "Cupertino",
            subject: "Making juice"
        }
    ]
};

// Czytanie właściwości obiektu
console.log(user3.name); // John
console.log(user3.age); // 30
console.log(user3.certificates[0].issuer);
console.log(user3.certificates[0].issueName);

// Dodawanie właściwości
user3.isAdmin = true;

// Usuwanie właściwości
delete user3.age;

// Można, ale lepiej unikać:
let user4 = {
    name: "John",
    age: 30,
    "likes birds": true
};
user4["likes birds"] = true;
delete user4["likes birds"];

// Funkcja zwracająca obiekt:
function makeUser(name, age) {
    return { // Configuration
        name: name,
        age: age,
        // ...inne
    };
}
let x = makeUser("Gerard", "Jaryczewski");

// DRY: Don't Repeat Yourself (*)
// Convention Over Configuration
// (*) Dwa razy to nie jest powtórzenie

// Powyższe można skrócić:
function makeUser2(name, age) {
    return { name, age }; // Convention
}

// Sprawdzenie, czy obiekt posiada właściwość:
let key = "age";
if (key in user4) {
    console.log(user4[key]);
}
// TODO console.log(user4[key] ?? "(n/a)"); // Not Available

// Przeglądanie wszystkich właściwości obiektu
let user5 = {
    name: "John",
    age: 30,
    isAdmin: true
};
for (let kij in user5) {
    // keys
    console.log(kij);  // name, age, isAdmin
    // values for the keys
    console.log(user5[kij]); // John, 30, true
}

// Referencje:
let simpleUser = { name: 'John' };
let admin = simpleUser;
admin.name = 'Pete';
console.log(simpleUser.name); // 'Pete'

// W przypadku prymitywnych typów danych jest tak w porównaniu:
let x1 = "Gerard";
let x2 = "Gerard";
if (x1 == x2)
    console.log("som ruwne");

// Porównanie obiektów:
let a = {};
let b = a; // kopiowanie referencji
console.log(a == b); // true
let c = {};
let d = {};
console.log(c == d); // false

// Klonowanie wartosci (nie: kopiowanie referencji)
let user6 = {
    name: "John",
    age: 30
};
let clone = {};
for (let key in user6) {
    clone[key] = user6[key];
}

// Metody (funkcje obiektu):
let user7 = {
    name: "John",
    age: 30,
    sayHi: function () {
        console.log("Hello!");
    }
};
user7.sayHi(); // Hello!

// Powyższe można skrócić:
let user8 = {
    name: "John",
    age: 30,
    sayHi() {
        console.log("Hello!");
    }
};
user8.sayHi(); // Hello!

// Czytanie właściwości w metodzie:
let user9 = {
    name: "John",
    age: 30,

    sayHi() {
        console.log(this.name); // this = ten konkretnie obiekt, user9
    }
};

// Funkcja jest obiektem
let reallyStrange = function () {
    console.log("Strange!");
}
reallyStrange();
reallyStrange.level = 7;
console.log(reallyStrange.level);