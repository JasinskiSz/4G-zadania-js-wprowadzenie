const a = parseInt(prompt("Podaj pierwszą liczbę"))
const b = parseInt(prompt("Podaj drugą liczbę"))

const operacja = prompt("Podaj operację (+, -, *, /)")

if (operacja === "+") {
    console.log(a + b)
}

if (operacja === "-") {
    console.log(a - b)
}

// const a = 1
// a == 1 // true
// a === 1 // true

// const b = "1"
// b == 1 // true
// b === 1 // false

