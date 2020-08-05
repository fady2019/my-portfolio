$(document).ready(function(){
    let paths = document.querySelectorAll("svg path");

    paths.forEach( e => {
        e.style.strokeDasharray = e.getTotalLength() + "px";
        e.style.strokeDashoffset = e.getTotalLength() + "px";
    })
})
