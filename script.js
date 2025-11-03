// do zmiennych można przypisać wartości

// const lub let - tworzymy zmienne
const imie = "Jan" // string

// nie można tego zrobić:
// imie = "Janek"

// stworzenie zmiennej
let wiek // undefined

// przypisanie wartości do zmiennej
wiek = 15 // number

let waga = 67.8 // number

console.log(imie)
console.log("jakiś mój tekst wpisany ręcznie")
console.log(wiek)
console.log("Waga to: " + waga)

// wypisz w konsoli wartość przyjętą przez usera
// const userInput = prompt("Wpisz liczbę")
// console.log(userInput)

// console.log(prompt("Wpisz liczbę"))

// tworzenie funkcji
function zrobCos(tekst) { // zrobCos - Camel Case
    const input = prompt(tekst)
    // console.log(tekst)
    console.log(input)
}

const mojTekst = "Podaj jakiś tekst"

// użycie funkcji
// zrobCos(mojTekst)
// console.log(tekst)
// let tekst = "Podaj jakiś tekst"

// pierwsze zadanie:
// stwórz funkcję, która po wciśnięciu przycisku doda
// ze sobą dwie liczby podane przez usera

// const liczba = prompt("podaj pierwszą liczbę") // string
// const liczba = parseInt(prompt("podaj pierwszą liczbę")) // number

// drugie zadanie:
// github.com/JasinskiSz/zadania
// programowanie -> javascript -> zadanie0

const mojeImie = "Szymon"
const mojeNazwisko = "Jasiński"

function wyswietlImieINazwisko() {
    alert(mojeImie)
    console.log(mojeNazwisko)
}

function pobierzIWyswietl() {
    const userImie = prompt("Podaj swoje imie")
    const userNazwisko = prompt("Podaj swoje nazwisko")
    const userNumer = prompt("Podaj swój numer z dziennika")

    console.log(userImie, userNazwisko, userNumer)
}




// trzecie zadanie
// Stwórz licznik, który zlicza kliknęcia przycisku