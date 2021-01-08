function swapStyleSheet(sheet) {
    document.getElementById("style").setAttribute("href", sheet);  
}

function initate() {
    var style1 = document.getElementById("stylesheet1");
    var style2 = document.getElementById("stylesheet2");

    style1.onclick = function(){swapStyleSheet("light.css")};
    style2.onclick = function (){swapStyleSheet("dark.css")};
}

window.onload = initate;

/*
function switchModes(){
    let lightMode = document.getElementById("stylesheet1");
    let darkMode = document.getElementById("stylesheet2");
    if (window.matchMedia("(prefers-color-scheme: dark)")){
    lightMode.style.backgroundColor = "white";
    lightMode.style.color = "black";
    }

    else {darkMode.style.backgroundColor = "#1c1c1e";
    darkMode.style.color = "darkgray";
    darkMode.style.filter = "brightness(.8) contrast(1.2)";
}
}
window.onload = initate;
*/