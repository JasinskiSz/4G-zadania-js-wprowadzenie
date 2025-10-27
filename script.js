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