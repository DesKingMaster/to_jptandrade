 var x = setInterval(function() {
        loadData("data.txt",updateData)
    }, 1000);

function loadData(url, callback){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            callback.apply(xhttp);
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send();
}

function updateData(){
    document.getElementById("data").innerHTML = this.responseText;
}

function req(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "move_test", true);
    xhttp.send();
}
/*
function req2(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "10_passosf", true);
    xhttp.send();
} 

function req3(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "positions", true);
    xhttp.send();
}
*/

function umfrentepasso(){
    document.getElementById("move_test").onclick = req;
}

document.addEventListener("DOMContentLoaded", umfrentepasso)

/*
function dezfrentepasso(){
    document.getElementById("10_passosf").onclick = req2;
}

document.addEventListener("DOMContentLoaded", dezfrentepasso) 

function positional(){
    document.getElementById("positions").onclick = req3;
}

document.addEventListener("DOMContentLoadedf", positional)
*/ 
