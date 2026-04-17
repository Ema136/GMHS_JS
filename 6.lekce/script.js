let number = 10;
let message;

    if (number > 0){
        message = "Kladné číslo";
    }else{
        message = "Není kladné";
    }
    console.log (message)

    //řešení pomocí ternárního operátoru

    let nember2 = 10;
    let message2 = (number2 > 0 ? "Kladné číslo" : "Není kladné číslo");

    console.log(message2)

    let age = 20;
    if (   age >= 18 ){
        console.log("můžeš řídit")
    }else{
        console.log("Jsi moc mladý/á na řízení")
    }

    //řešení pomocí ternárního operátoru
    let age2 = 16;
    console.log(age >= 16 ? "můžeš řídit" : "nemůžeš řídit");

    let podmínka =!false;

    podmínka = true && false;

    podmínka = true || false;

    console.log(podmínka);  