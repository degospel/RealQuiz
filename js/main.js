let k=prompt("What is your name?");
document.getElementById("div1").innerHTML="Welcome" + " " + k 



function closemenu() {
    document.getElementById("navbar").style.height = "0%"
}

function openmenu() {
    document.getElementById("navbar").style.height = "100%"
}