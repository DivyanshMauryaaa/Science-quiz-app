
let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let n3 = document.querySelector("#n3");
let n4 = document.querySelector("#n4");
let n5 = document.querySelector("#n5");
let n6 = document.querySelector("#n6");
let n7 = document.querySelector("#n7");
let n8 = document.querySelector("#n8");
let n9 = document.querySelector("#n9");
let n10 = document.querySelector("#n10");

let button = document.querySelector("#button");


button.addEventListener("click", function() {
    let score = 0;  
    if (n1.value.toLowerCase() == "photosynthesis") score += 1;
    if (n2.value.toLowerCase() == "melting ice") score += 1;
    if (n3.value.toLowerCase() == "to transport oxygen and nutrients") score += 1;
    if (n4.value.toLowerCase() == "solid") score += 1;
    if (n5.value.toLowerCase() == "gravity") score += 1;
    if (n6.value.toLowerCase() == "coal") score += 1;
    if (n7.value.toLowerCase() == "To absorb water") score += 1;
    if (n8.value.toLowerCase() == "Iron rusting") score += 1;
    if (n9.value.toLowerCase() == "Evaporation") score += 1;
    if (n10.value.toLowerCase() == "Wind") score += 1;
   
    let scoreMessage = "Your total score is: " + score;
    document.querySelector("#scoreMessage").innerText = scoreMessage;

    
    let dialog = document.querySelector("#scoreDialog");
    dialog.showModal();
});
