function logo(){
    window.location.href = "../index.html"
}
function subMenu(){
    if(document.getElementById("subMenu").className == "subMenu1"){
        document.getElementById("subMenu").className = "subMenu2"
        document.getElementById("expand").src = "img/expand-up-2x.png"
        document.getElementById("ulti").className = "principal ultimo"
        document.getElementById("cabeca").className = "espaco1"
    }
    else{
        document.getElementById("subMenu").className = "subMenu1"
        document.getElementById("expand").src = "img/expand-down-2x.png"
        document.getElementById("ulti").className = "principal"
        document.getElementById("cabeca").className = "espaco"
    }
}

function dropResp(){
    if(document.getElementById("navTop").className == "w1"){
        document.getElementById("navTop").className = "w2"
        document.getElementById("cabeca").className = "espaco"
    }
    else{
        document.getElementById("navTop").className = "w1"
        document.getElementById("cabeca").className = ""
        document.getElementById("ulti").className = "principal"
        document.getElementById("subMenu").className = "subMenu1"
        document.getElementById("expand").src = "img/expand-down-2x.png"
    }
}