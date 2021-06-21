// Created by Giacomo Schiavo, Updated by Max Angelo Perin

alert("Simple Symbol Recognizer\nRecognizes two different symbols (like ᜊ and ᜀ) using knn algorithm\nPress OK for the instructions!");
alert("TODO list (if you want that this works):\n1. Create a Training Set:\n-->Draw a ᜀ/ᜊ and then add it with the button(you need about 50-100 examples)\n p.s. draw the symbols alternately ;)\n\n2. Press that big beautiful TRAIN button (it will not knock you down...maybe)\n3. Draw an ᜀ or ᜊ symbol and press that TEST button and watch the console\n4. If the prediction is correct, well done! Otherwise you need to add more examples and the you can reTRAIN and reTEST ;)");

/* DRAWING STUFF */
var canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;
canvas = document.getElementById('can');
function init() {
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    w = canvas.width;
    h = canvas.height;
    ctx.fillRect(0, 0, w, h);

    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e, false);
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e, false);
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e, false);
    }, false);
    canvas.addEventListener("touchmove", function (e) {
        findxy('move', e, true);
    }, false);
    canvas.addEventListener("touchstart", function (e) {
        findxy('down', e, true);
    }, false);
    canvas.addEventListener("touchend", function (e) {
        findxy('up', e, true);
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e, false);
    }, false);
}

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
}


function findxy(res, e, isTouch) {
    if (res == 'down') {
        if (!isTouch){
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
        }else{
            prevX = currX;
            prevY = currY;
            currX = e.touches[0].clientX - canvas.offsetLeft;
            currY = e.touches[0].clientY - canvas.offsetTop;
        }
        flag = true;
        dot_flag = true;
    if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            if(!isTouch){
                prevX = currX;
                prevY = currY;
                currX = e.clientX - canvas.offsetLeft;
                currY = e.clientY - canvas.offsetTop;
            }else{
                prevX = currX;
                prevY = currY;
                currX = e.touches[0].clientX - canvas.offsetLeft;
                currY = e.touches[0].clientY - canvas.offsetTop;
            }
            draw();
        }
    }
}


/* KNN CLASS */
class KNN{
    constructor(fts, lbs){
        this.fts = fts;
        this.lbs = lbs;
        console.log("Allenato!");
    }

    guess(img){
        let min = this.calcDistanza(img, this.fts[0]);
        let index = 0;
        for ( let i = 0; i < this.fts.length; i++){
            let dist = this.calcDistanza(img, this.fts[i]);
            //console.log("Distanza: " + dist);
            if (dist < min){
                //console.log("Distanza minima: " + dist);
                min = dist;
                index = i;
            }
        }
        return this.lbs[index];
    }

    calcDistanza(input, example){
        let sum = 0;
        for (let i = 0; i < input.length; i++){
            sum += Math.pow((input[i] - example[i]), 2);
        }
        return Math.sqrt(sum);
    }
}

/* SOME KIND OF MAIN(?) AND EVENT'S METHODS (OF THE BUTTON, OF COURSE)*/
let training_set = [];
let clf;
function erase() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, w, h);
}

function add(){
    let data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    training_set.push(getImage_data(data));
    //console.log(getImage_data(data));
    cambia_simbolo();
    erase();
}

function train(){
    clf = new KNN(training_set, getLabels());
    console.log("Ready to test");
}

function test(){
    let data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    console.log("Attempt: " + converti(clf.guess(getImage_data(data))));
}

function getImage_data(data){
    //per un immmagine
    var img = [];
    for (let j = 0; j < canvas.height; j++){
        var cont = 0;
        for (let i = 0; i < canvas.width * 4; i += 4){
            if(data[i + 4 * j * canvas.width] < 255)
                cont++;
        }
        img.push(cont);
    }
    return img;
}
//[0, 1, 0, 1, ...]
function getLabels(){
    let lbs = [];
    for (let i = 0; i < training_set.length; i++){
        if (i % 2 === 0){
            lbs.push(0);
        }else{
            lbs.push(1);
        }
    }
    return lbs;
}

function converti(x){
    if (x == 1){
        return "ᜊ";
    }else{
        return "ᜀ";
    }
}
let cont = 0;
function cambia_simbolo(){
    let p = document.getElementById("simb");
    if (p.innerHTML == "Draw a ᜀ, Examples: " + cont){    
        cont++;
        p.innerHTML = "Draw a ᜊ, Examples: " + cont;
    }else{
        cont++;
        p.innerHTML = "Draw a ᜀ, Examples: " + cont;
        }
}

//document.addEventListener("keypress", add);

let result_p = document.getElementById("result");
result_p = "ciao";