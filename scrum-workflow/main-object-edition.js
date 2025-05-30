//Powołuje Zespół Deweloperski
//Funkcja realizuje następujące wymaganie:
//Powołujemy następujący Zespół Deweloperski:
//  - Scrum Masterem jest Agaton Biały
//  - Programiści: Cezary Drążek, Ewelina Faworek, Gerwazy Harcerz
//  - Testerzy: Izydor Jabłkowski, Karolina Ludmiła Młynarz
//  - DevOps: Natalia Oreo-Przegródka
//  - Analityk: Roch Studzienny

function PowolajZespolDeweloperski(scrumMaster, programisci, testerzy, devopsi, analitycy)
{
   PowolajScrumMastera(scrumMaster);

   for (let i=0; i <= programisci.length; i++)
   {
       PowolajProgramiste(programisci[i]);
   }

   for (let i=0; i <= testerzy.length; i++)
   {
       PowolajTestera(testerzy[i]);
   }

   for (let i=0; i <= devopsi.length; i++)
   {
       PowolajDevOpsa(devopsi[i]);
   }

   for (let i=0; i <= analitycy.length; i++)
   {
       PowolajAnalityka(analitycy[i]);
   }
}

let scrumMaster = "Agaton Biały";
let programisci = ["Cezary Drążek", "Ewelina Faworek", "Gerwazy Harcerz"];
let testerzy = ["Izydor Jabłkowski", "Karolina Ludmiła Młynarz"];
let devopsi = ["Natalia Oreo-Przegródka"];
let analitycy = ["Roch Studzienny"];

// Cwiczenie gdzie tworzymy obiekt, który ma wlasciwosci i w srodku metody powolujące poszczegolnych czlonkow zespolu  
let zespolDeweloperski = {
    scrumMaster:"Agaton Biały",
    programisci:["Cezary Drążek", "Ewelina Faworek", "Gerwazy Harcerz"],
    testerzy:["Izydor Jabłkowski", "Karolina Ludmiła Młynarz"],
    devopsi:["Natalia Oreo-Przegródka"],
    analitycy:["Roch Studzienny"],

    powolajScrumMastera()
    {
        console.log("Scrum master:");
        console.log(this.scrumMaster);
    },

    powolajProgramiste(programista)
    {
        console.log("Programista:");
        console.log(programista);
    },

    powolajProgramistow()
    {
        for (let i=0; i < this.programisci.length; i++)
        {
            this.powolajProgramiste(this.programisci[i]);
        }
    }
    

}


zespolDeweloperski.powolajScrumMastera();
zespolDeweloperski.powolajProgramistow();
// ^^ Tu się kończy modelowanie obiektowe tego przykładu


function PowolajScrumMastera(scrumMaster)
{
    console.log("Scrum master:");
    console.log(scrumMaster);
}

function PowolajProgramiste(programista)
{
    console.log("Programista:");
    console.log(programista);
}

function PowolajTestera(tester)
{
    console.log("Tester:");
    console.log(tester);
}

function PowolajDevOpsa(devops)
{
    console.log("DevOps:");
    console.log(devops);
}

function PowolajAnalityka(analityk)
{
    console.log("Analityk:");
    console.log(analityk);
}

// Mianuje Właściciela Produktu

// Funkcja realizuje następujące wymaganie:

// Właścicielem Produktu jest Urszula Wał-Złocista.

function MianujWlascicielaProduktu(wlasciciel)
{
    console.log("Właścicielem produktu jest:");
    console.log(wlasciciel);
}

let wlasciciel = "Urszula Wał-Złocista";

// Definiuje cel projektu
// Funkcja realizuje następujące wymaganie:
// Celem projektu jest zbudowanie nowej webowej aplikacji onboardingowej dla organizacji.

function DefiniujCelProjektu(cel)
{
    console.log("Celem projektu jest:")
    console.log(cel);
}
 
let cel = "Celem projektu jest zbudowanie nowej webowej aplikacji onboardingowej dla organizacji";

// Definiuje termin wdrożenia projektu
// Funkcja realizuje następujące wymaganie:
// Termin wdrożenia projektu: 2023-01-31

function DefiniujTerminProjektu(termin)
{
    console.log("Terminem projektu jest:")
    console.log(termin);
}

let termin = "2023-01-31";



// Definiuje budżet projektu
// Funkcja realizuje następujące wymaganie:
// Budżet projektu: 100 000 PLN

function DefiniujBudżetProjektu(kwota, waluta)
{
    console.log("Budżet projektu to:")
    console.log(kwota);
    console.log(waluta);
}

let kwota = 100000;
let waluta = "PLN";

// Przypisuje zadania do backlogu
// Funkcja realizuje następujące wymaganie:
// Do główych zadań zatwierdzonych w Backlogu Produktu należą:
// 1. Definiowanie kompetencji
// 2. Rejestrowanie artykułów wiedzy
// 3. Rejestrowanie trenerów
// 4. Przypisywanie kompetencji do trenerów
// 5. Rejestrowanie użytkowników
// 6. Wybór treningów kompetencji przez użytkowników
// 7. Listy kontrolne realizacji zadań onboardingu

function PrzypiszZadanieDoBacklogu(zadanie, backlog)
{
    let x = backlog.length;
    backlog[x] = zadanie;
    backlogStatus[x] = false;
}

let backlog = 
[
    "Definiowanie kompetencji",
    "Rejestrowanie artykułów wiedzy",
    "Rejestrowanie trenerów",
    "Przypisywanie kompetencji do trenerów",
    "Rejestrowanie użytkowników",
    "Wybór treningów kompetencji przez użytkowników",
    "Listy kontrolne realizacji zadań onboardingu"
];

let backlogStatus = 
[
    false,
    false,
    false,
    false,
    false,
    false,
    false
];

// Konczy zadanie
function ZakonczZadanie(idZadania, backlogStatus)
{
    backlogStatus[idZadania] = true;
}

// Dokomponuje zadanie
// Funkcja realizuje następujące wymaganie:
// Główe zadania będą dekomponowane na zadania szczegółowe zgodnie z decyzjami Zespołu.

function DekomponujZadania(zadanie)
{
    console.log("Dekomponuj zadanie:")
    console.log(zadanie);
}

// Wybiera motode wytwórczą 
// Funkcja realizuje następujące wymaganie:
// Reguły pracy wytwórczej definiuje framework Scrum.

function WybierzMetodeWytworcza(metoda)
{
    console.log("Reguły pracy wytwórczej definiuje:")
    console.log(metoda);
}

let metoda = "Scrum";

// Ustala długość sprintu
// Funkcja realizuje następujące wymaganie:
// Ustalamy 2-tygodniowy sprint.

function UstalDlugoscSprintu(dlugosc, jednostka)
{
    console.log("Długość sprintu to:")
    console.log(dlugosc);
    console.log(jednostka);
}

let dlugoscSprintu = 2;
let jednostkaDlugosciSprintu = "tyg";

        //TODO =>
        // Zgodnie z frameworkiem Scrum, schemat cyklu pracy w sprincie jest następujący:

        // - W dniu 1 Sprintu odbywa się spotkanie Planning.
        // - W dniach od 2 do 9 Sprintu odbywa się spotkanie Daily.
        // - W dniu 10 odbywa się spotkanie Review oraz Retrospctive.

        // Kolejne sprinty rozpoczynają się automatycznie po sobie.

// Sprawdza warunki zakonczenia projektu
// Funkcja realizuje następujące wymaganie:
// Jeżeli w toku dowolnego spotkania Właściciel Produktu stwierdza, że dalsza praca nie ma uzasadnienia biznesowego, przerywamy projekt.
// Projekt może zostać przerwany w przypadku przekroczenia terminu danego przez zarząd lub przekroczenia budżetu.
// Jeśli projekt nie zostanie przerwany, zakończy się po realizacji wszystkich głównych zadań.

function SprawdzWarunkiZakonczeniaProjektu(czyKoniec, czyKontynuowac, dzis, termin, koszty, budzet, backlogStatus)
{
    if (czyKontynuowac == false)
    {
        czyKoniec = true;
        return czyKoniec;
    }

    //BUG
    //
    // if (dzis > termin)
    // {
    //     koniecProjektu = true;
    //     return koniecProjektu;
    // }
    
    if (koszty > budzet)
    {
        czyKoniec = true;
        return czyKoniec;
    }

    let zamknieteZadania = 0;
    for (let i=0; i < backlogStatus.length; i++)
    {
        if (backlogStatus[i] == true)
        {
            zamknieteZadania++;
        }
    }
    if (zamknieteZadania == backlogStatus.length)
    {
        czyKoniec = true;
        return czyKoniec;
    }

    return false; // koniecProjektu = false

}


// DEMO

PowolajZespolDeweloperski(scrumMaster, programisci, testerzy, devopsi, analitycy);
MianujWlascicielaProduktu(wlasciciel);
DefiniujCelProjektu(cel);
DefiniujTerminProjektu(termin);
DefiniujBudżetProjektu(kwota, waluta);
PrzypiszZadanieDoBacklogu("Zadania wdrożeniowe", backlog, backlogStatus);
WybierzMetodeWytworcza(metoda);
UstalDlugoscSprintu(dlugoscSprintu, jednostkaDlugosciSprintu);

// Ustalamy stan początkowy
let koniecProjektu = false;
let czyKontynuowac = true;
let dzis = "2023-11-17";
let koszty = 0;
koniecProjektu = SprawdzWarunkiZakonczeniaProjektu(koniecProjektu, czyKontynuowac, dzis, termin, koszty, kwota, backlogStatus);
console.log("Czy koniec projektu?");
console.log(koniecProjektu); // Spodziewam sie false

// Przypadek gdy wlasciciel produkty nie zgadza sie na kontynuowanie projektu
czyKontynuowac = false;
koniecProjektu = SprawdzWarunkiZakonczeniaProjektu(koniecProjektu, czyKontynuowac, dzis, termin, koszty, kwota, backlogStatus);
console.log("Czy koniec projektu?");
console.log(koniecProjektu); // Spodziewam sie true

