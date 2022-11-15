// Powołujemy następujący Zespół Deweloperski:

//  - Scrum Masterem jest Agaton Biały
//  - Programiści: Cezary Drążek, Ewelina Faworek, Gerwazy Harcerz
//  - Testerzy: Izydor Jabłkowski, Karolina Ludmiła Młynarz
//  - DevOps: Natalia Oreo-Przegródka
//  - Analityk: Roch Studzienny

function ZwalidujOsobe(osoba) // definicja funckji
{

}

function PowolajDewelopera(osoba)
{
    ZwalidujOsobe(osoba); // wywołanie funkcja
}

// const pi = 3.14;

// let inflation = 0.24;
// inflation = 0.26;

function SprawdzCertyfikatScrum(osoba)
{
    const pi = 5.14;
    console.log(pi);
}

// x = 4 // przypisanie
// if (x == y) // porównanie

// String "Gerard Jaryczewski"
// String 'Gerard Jaryczewski'
// Number 1 2 3 2.4 4.3 4n
// Boolean true false
// Object 
// Symbol

function PowolajScrumMastera(osoba)
{
    WalidujScrumMastera(osoba);
}

function WalidujScrumMastera(osoba)
{
    if (osoba == undefined)
    {
        console.log("WTF?");
        return;
    }

    if (osoba == "Gerard Jaryczewski")
        ZgodzSie();
    else
        NieZgodzSie();
}

function ZgodzSie()
{
    console.log("Zgadzam się.");
}

function NieZgodzSie()
{
    console.log("You shall not pass!");
}

const pi = 3.14;

let kandydat = "Gerard Jaryczewski";
PowolajScrumMastera(kandydat);

kandydat = "Gerard Krzysztof Jaryczewski"
PowolajScrumMastera(kandydat);

kandydat = 7;
PowolajScrumMastera(kandydat);

kandydat = true;
PowolajScrumMastera(kandydat);

let kandydaci =
[
    "Jakub Drzazga",
    "Grzegorz Iwanek",
    "Jerzy Cieśliński"
];

// PowolajScrumMastera(kandydaci[0]);
// PowolajScrumMastera(kandydaci[1]);
// PowolajScrumMastera(kandydaci[2]);
// PowolajScrumMastera(kandydaci[3]);

for (let i = 0; i < kandydaci.length; i++)
{
    PowolajScrumMastera(kandydaci[i]);
}

// Właścicielem Produktu jest Urszula Wał-Złocista.

// Celem projektu jest zbudowanie nowej webowej aplikacji onboardingowej dla organizacji.

// Termin wdrożenia projektu: 2023-01-31

// Budżet projektu: 100 000 PLN

// UWAGA! Zmiany budżetu wymagają zgody kierownictwa.

// Do główych zadań zatwierdzonych w Backlogu Produktu należą:

// 1. Definiowanie kompetencji
// 2. Rejestrowanie artykułów wiedzy
// 3. Rejestrowanie trenerów
// 4. Przypisywanie kompetencji do trenerów
// 5. Rejestrowanie użytkowników
// 6. Wybór treningów kompetencji przez użytkowników
// 7. Listy kontrolne realizacji zadań onboardingu

// Główe zadania będą dekomponowane na zadania szczegółowe zgodnie z decyzjami Zespołu.

// Reguły pracy wytwórczej definiuje framework Scrum.

// Ustalamy 2-tygodniowy sprint.

// Zgodnie z frameworkiem Scrum, schemat cyklu pracy w sprincie jest następujący:

// - W dniu 1 Sprintu odbywa się spotkanie Planning.
// - W dniach od 2 do 9 Sprintu odbywa się spotkanie Daily.
// - W dniu 10 odbywa się spotkanie Review oraz Retrospctive.

// Kolejne sprinty rozpoczynają się automatycznie po sobie.

// Jeżeli w toku dowolnego spotkania Właściciel Produktu stwierdza, że dalsza praca nie ma uzasadnienia biznesowego, przerywamy projekt.

// Projekt może zostać przerwany w przypadku przekroczenia terminu danego przez zarząd lub przekroczenia budżetu.

// Jeśli projekt nie zostanie przerwany, zakończy się po realizacji wszystkich głównych zadań.

// Happy end!