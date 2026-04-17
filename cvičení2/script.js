let number = 10;
let message;

if (number>0){

    message = "Kladné číslo";
}else{

message = "Není kladné číslo";
}
console.log (message)

// řešení pomocí ternárního operátoru

let number2 = 10;
let message2 = (number2 > 0) ? "Kladné číslo" : "Není kladné číslo";

console.log (message2)

let age = 2;
if ( age >= 17){
console.log ("Můžeš řídit")
}else{
    console.log ("Jsi moc mladý/á na řízení")
}
 age = 17
 console.log ( age >= 17 ? "Můžes řídit" : "Nemůžeš řídit");

 let podminka = !false;

 podminka = true && false;

 podminka = true || false;

 console.log(podminka);