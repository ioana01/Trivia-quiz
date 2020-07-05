var myVar;
var t1 = document.getElementById("rotita");
var t2 = document.getElementById("text");
var bara = document.getElementById("bara");
var q0 = document.getElementById("qu0");
var q1 = document.getElementById("qu1");
var q2 = document.getElementById("qu2");
var q3 = document.getElementById("qu3");
var q4 = document.getElementById("qu4");


function Timer() 
{
    myVar = setTimeout(showPage, 2000);
}

function showPage() 
{
    window.location = 'test.html';
    // document.getElementById("rotita").style.display = "none";
    // t1.style.display = "none";
    // t2.style.display = "none";
}

// window.onload = function()
// {
//     bara.style.display = "block";
//     q0.style.display = "block";
//     q1.style.display = "block";
//     q2.style.display = "block";
//     q3.style.display = "block";
//     q4.style.display = "block";
// }