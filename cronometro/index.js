let hr = 0
let sec = 0
let min = 0
let p = 0


function twoDigits(digit){
    if(digit < 10){
        return ("0"+digit)
    } else {
        return(digit)
    }
}


function start(){
    time()
    p = setInterval(time,1000)
}

function pause(){
    clearInterval(p)
}

function stop(){
    clearInterval(p)
    hr = 0
    sec = 0
    min = 0
    document.getElementById("time").innerHTML = "00:00:00"

}

function time(){
    sec++
    if(sec == 60){
        min++
        sec = 0
        if(min == 60){
            hr++
            min = 0
        }
    } 
    document.getElementById("time").innerHTML = twoDigits(hr)+":"+twoDigits(min)+":"+twoDigits(sec)
}