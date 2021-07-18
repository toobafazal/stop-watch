// var count = 0;
// var interval;
// function timer(){
//     count++
//     console.log(count)
// }
// interval = setInterval(timer,1000)
// setTimeout(function(){
//     clearInterval(interval)
// },5000)

var hour =0;
var minute =0;
var seconds=0;
var miliseconds = 0;

var hourHeading =document.getElementById("hour");
var minHeading =document.getElementById("minute");
var secHeading =document.getElementById("seconds");
var miliHeading =document.getElementById("miliseconds");
var interval;
var lap_stop = document.getElementById("lapstop").disabled=true;

function timer(){
    miliseconds++
    miliHeading.innerHTML = miliseconds;
    if(miliseconds >= 100){
        seconds++
        secHeading.innerHTML = seconds;
        miliseconds=0;
    }
    else if(seconds >= 60){
        minute++;
        seconds =0
        minHeading.innerHTML= minute;
    }
    else if(minute >= 60){
        hour++;
        hourHeading.innerHTML = hour;
        minute =0;
    }
}
function start(){
    interval =setInterval(timer,10);
    document.getElementById("start").disabled = true;
    document.getElementById("lapstop").disabled=false;

}
function stop(){
    clearInterval(interval)
    document.getElementById("start").disabled = false;

}
function reset(){
    hour =00;
    minute =00;
    seconds=00;
    miliseconds=00;
    hourHeading.innerHTML = hour;
    minHeading.innerHTML= minute;
    secHeading.innerHTML= seconds;
    miliHeading.innerHTML= miliseconds;
    stop()
}


function lapstop() {
    lap_stop = document.getElementById("lapstop").disabled=true;
  
      }   
function laptimer(){
    var laps = document.getElementById("lap")
        laps.innerHTML +=  "<div> "
         + hourHeading.innerHTML +
         " " + minHeading.innerHTML + " " +
          secHeading.innerHTML + " " +
          miliHeading.innerHTML +        " "  + "</div>";
          ;
}