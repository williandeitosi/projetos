

let lamp = document.getElementById("lamp")

let turnOnOff = document.getElementById("turnOnOff")

turnOnOff.addEventListener("click", lampOnOff)

lamp.addEventListener("mouseover", lampOn)
lamp.addEventListener("mouseleave", lampOff)
lamp.addEventListener("dblclick", lampBroken)


function verificar() {
    return lamp.src.indexOf ("quebrada") > -1
}


function lampOn() {
    
    if (!verificar()) {

        lamp.src = "./imagens/ligada.jpg"
        turnOnOff.textContent = "Desligar"
    }
    
}

function lampOff() {

    if (!verificar()) {

        lamp.src = "./imagens/desligada.jpg"
        turnOnOff.textContent = "Ligar"
    } 
}

function lampBroken() {

    lamp.src = "./imagens/quebrada.jpg"
}

function lampOnOff() {
    if(turnOnOff.textContent == "Ligar"){
        lampOn()
        turnOnOff.textContent = "Desligar"
    }else {
        lampOff()
        turnOnOff.textContent = "Ligar"
    }
    
}