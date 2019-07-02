// highlights function definitions and embedding values
// using template literals (bacticks )
function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0"+cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) { 
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
};
console.log("FarmInventory1\n===");
printFarmInventory(7,6);

// Is this easily extendable?? we could copy the for lines
// again, but that would be messy... a novice solution
// would be like that below.
function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`)
}
function printFarmInvenotry2(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}
console.log("Farminventory2\n===");
printFarmInvenotry2(7,8,9);

// a better solution is to take isolate the consept; zeropadding
function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory3(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}
console.log("Farm inventory 3\n===");
printFarmInventory3(9,10,11);