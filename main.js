"use strict";
var WIDTH, HEIGHT, canvas, context;
var radius, maxRad, minRad, upBtn, dnBtn;
var thing;
var drawX, drawY;

function putPoint(e) {
    context.beginPath();
    radius = parseInt(document.getElementById("rad").innerHTML);
    context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2);
    context.closePath();
    context.lineWidth = parseInt(radius / 5);
    context.strokeStyle = document.getElementById("colorList").value;
    context.stroke();
    var filler = document.getElementById("fillList").value;
    if (filler === "nofilll")
        return;
    if (filler === "equalss")
        filler = document.getElementById("colorList").value;
    context.fillStyle = filler;
    context.fill();
}

function formatInteger(val,len) {
    var result = "" + val;
    var reslen = result.length;
    for (var i = 0; i < len - reslen; i++) {
        result = "0" + result;
    }
    return result;
}

function incRad(e) {
    radius = parseInt(document.getElementById("rad").innerHTML.trim());
    if (radius >= maxRad)
        return;
    document.getElementById("rad").innerHTML = formatInteger(radius + 1, 2);
}

function decRad(e) {
    radius = parseInt(document.getElementById("rad").innerHTML.trim());
    if (radius <= minRad)
        return;
    document.getElementById("rad").innerHTML = formatInteger(radius - 1, 2);
}

function init() {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    maxRad = 25;
    minRad = 1;
    
    canvas = document.getElementById('canvas');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    context = canvas.getContext('2d');
    
    canvas.addEventListener('mousedown',putPoint);
    
    upBtn = document.getElementById("incRad");
    dnBtn = document.getElementById("decRad");
    upBtn.addEventListener('click',incRad);
    dnBtn.addEventListener('click',decRad);
    
    //thing = new Thing(10,20);
}









window.onload = init;