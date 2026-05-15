function ahoj(){

    console.log("Ahoj");
    console.log("Ahoj")
}
ahoj();

let greeting = "Nazdárek";

function showGreeting (){
console.log (greeting);
}
showGreeting();

function funkcoUvnitř(){
let cislo = 123;
console.log(cislo);

} 
funkcoUvnitř();
//Parametr a Argument

function test(name){
    console.log("Ahoj" + name);
}

test("Tomáš");
test("Ali");
test(123);

function scitani(num1, num2){
    console.log(num1 + num2)
}
scitani(4,6)

function násobení(num1,num2){
    console.log(num1 * num2)
}
násobení(2,3)

function dělení(num1,num2){
    console.log(num1 / num2)
}
dělení(14,7)
function odcitani(num1,num2){
    console.log(num1-num2)
}
odcitani(13,8)

//Napiš funci printRange, která vypíše do
// konzole všechna čísla od parametru start až po end
//postup:
//1) deklarace funkce
//2)definování parametru
//3)for smyčka
//4)vyvolání funkce a argumentu