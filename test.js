var i, pas;
// var visit = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var ok;
var nr = 0;
var ans = [0, 0, 0, 0, 0];
var randNumbers = [0, 0, 0, 0, 0];

window.onload = function() 
    { 
        for(i=0; i<5; i++)
        {
            ok = 0;
            while(ok == 0)
            {
                pas = Math.floor((Math.random() * 15));
                
                // if(visit[pas] == 0)
                if(randNumbers.includes(pas) == false)
                {
                    // visit[pas] = 1;
                    ok = 1;
                    randNumbers[i] = pas;
                }
            }

            y = document.getElementById(question[i].q);
            y.innerHTML = myOBJ[pas].Q;

            y = document.getElementById(question[i].a);
            y.innerHTML = myOBJ[pas].A;
            
            y = document.getElementById(question[i].b);
            y.innerHTML = myOBJ[pas].B;

            y = document.getElementById(question[i].c);
            y.innerHTML = myOBJ[pas].C;

            y = document.getElementById(question[i].d);
            y.innerHTML = myOBJ[pas].D;
        }
    }

var text = document.getElementById("btn");
// var myVar;

// function Timer() 
// {
//     myVar = setTimeout(showPage, 2000);
// }

// function showPage() 
// {
//     window.location = 'loader.html';
//     // document.getElementById("rotita").style.display = "none";
//     // t1.style.display = "none";
//     // t2.style.display = "none";
// }

function buttnCheck(th ,name)
{
    document.getElementById(th).checked = true;
    
    if(ans.includes(name) == false)
    {
        ans[nr] = name;
        nr = nr + 1;
    }
}

function checkAddress(ph, name)
{
    if (document.getElementById(ph).checked)
    {
        
        if(ans.includes(name) == false)
        {
            ans[nr] = name;
            nr = nr + 1;
        } 
    }
}

var bara = document.getElementById("bara");
var q0 = document.getElementById("qu0");
var q1 = document.getElementById("qu1");
var q2 = document.getElementById("qu2");
var q3 = document.getElementById("qu3");
var q4 = document.getElementById("qu4");
var pop = document.getElementById("result");

function checkR()
{
    result();

    if(nr >= 5)
        pop.style.display = "block";
    else 
        pop.style.display = "none";

    final();
}

var scorePercent = 0;
var total = document.getElementById("percent");

function result() {
    var score = 0;
    score += parseInt(getSelectedRadioValue("q0")) || 0;
    score += parseInt(getSelectedRadioValue("q1")) || 0;
    score += parseInt(getSelectedRadioValue("q2")) || 0;
    score += parseInt(getSelectedRadioValue("q3")) || 0;
    score += parseInt(getSelectedRadioValue("q4")) || 0;

    scorePercent = score * 20;
    // bara.style.display = "none";
    // q0.style.display = "none";
    // q1.style.display = "none";
    // q2.style.display = "none";
    // q3.style.display = "none";
    // q4.style.display = "none";
    // text.style.display = "none";   
    // alert("Result: " + scorePercent + "%");
  }
  
  
function getSelectedRadioValue(name) {
    var radios = document.getElementsByName(name);
    
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        return radios[i].value;
      }
    }
}

function final()
{
    total.innerHTML = "Results: " + scorePercent + "%";
} 

var res = document.getElementById("result");

function resultBox()
{
    res.style.display = "none";
    bara.style.display = "block";
    q0.style.display = "block";
    q1.style.display = "block";
    q2.style.display = "block";
    q3.style.display = "block";
    q4.style.display = "block";
    text.style.display = "block"; 
}
