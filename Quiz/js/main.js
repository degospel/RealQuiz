function closemenu() {
    document.getElementById("navbar").style.height = "0%"
}

function openmenu() {
    document.getElementById("navbar").style.height = "100%"
}

function summit() {
    let s  
    s = document.getElementById("s").value;
    if(s == "C"){
      document.getElementById("gut").innerHTML="Correct!";
      document.getElementById("gut").style.backgroundColor="green";
    }
    else{
      document.getElementById("gut").innerHTML="Incorrect!";
      document.getElementById("gut").style.backgroundColor="Red";
    }
  }
  
  function flex() {
    let p 
    p = document.getElementById("p").value;
    if(p == "B"){
      document.getElementById("out").innerHTML="Correct!";
      document.getElementById("out").style.backgroundColor="green";
    }
    else{
      document.getElementById("out").innerHTML="Incorrect!";
      document.getElementById("out").style.backgroundColor="Red";
    }
  }
  
  function wex() {
    let t 
    t = document.getElementById("t").value;
    if(t == "A"){
      document.getElementById("put").innerHTML="Correct!";
      document.getElementById("put").style.backgroundColor="green";
    }
    else{
      document.getElementById("put").innerHTML="Incorrect!";
      document.getElementById("put").style.backgrundColor="Red";
    }
  }
  
  function fex() {
    let n 
    n = document.getElementById("n").value;
    if(n == "A"){
      document.getElementById("dut").innerHTML="Correct!";
      document.getElementById("dut").style.backgroundColor="green";
    }
    else{
      document.getElementById("dut").innerHTML="Incorrect!";
      document.getElementById("dut").style.backgroundColor="Red";
    }
  }
  
  function rex() {
    let g 
    g = document.getElementById("g").value;
    if(g == "B"){
      document.getElementById("dus").innerHTML="Correct!";
      document.getElementById("dus").style.backgroundColor="green";
    }
    else{
      document.getElementById("dus").innerHTML="Incorrect!";
      document.getElementById("dus").style.backgroundColor="Red";
    }
  }