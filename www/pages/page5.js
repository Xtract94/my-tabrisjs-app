exports.create = function() {

	
var page5 = new tabris.Page({
    title: "5. Rechner mit Buttons",
    topLevel: true
});

var d = new tabris.TextView({
    layoutData: { top: 50, left: "20%", right: "20%" },
    font: "30px",
    editable: "true",
    text: "0"
}).appendTo(page5);

var currentNumber = 0;
var previousNumber = 0;
var operator;
var result = 0;
var result2 = 0;
var afterDot = 0;


var button1 = new tabris.Button({
    left: 30,
    top: 150,
    width: 70,
    height: 50,
    text: "1"
}).on("select", function() {
    enterDigit(button1.get("text"))
}).appendTo(page5);

var button2 = new tabris.Button({
    left: 100,
    top: 150,
    width: 70,
    height: 50,
    text: "2"
}).on("select", function() {
    enterDigit(button2.get("text"))
}).appendTo(page5);

var button3 = new tabris.Button({
    left: 170,
    top: 150,
    width: 70,
    height: 50,
    text: "3"
}).on("select", function() {
    enterDigit(button3.get("text"))
}).appendTo(page5);

var buttonplus = new tabris.Button({
    left: 240,
    top: 150,
    width: 70,
    height: 50,
    text: "+"
}).on("select", function() {
    operatorEntered("+")
}).appendTo(page5);

var button4 = new tabris.Button({
    left: 30,
    top: 200,
    width: 70,
    height: 50,
    text: "4"
}).on("select", function() {
    enterDigit(button4.get("text"))
}).appendTo(page5);

var button5 = new tabris.Button({
    left: 100,
    top: 200,
    width: 70,
    height: 50,
    text: "5"
}).on("select", function() {
    enterDigit(button5.get("text"))
}).appendTo(page5);

var button6 = new tabris.Button({
    left: 170,
    top: 200,
    width: 70,
    height: 50,
    text: "6"
}).on("select", function() {
    enterDigit(button6.get("text"))
}).appendTo(page5);

var buttonminus = new tabris.Button({
    left: 240,
    top: 200,
    width: 70,
    height: 50,
    text: "-"
}).on("select", function() {
    operatorEntered("-")
}).appendTo(page5);

var button7 = new tabris.Button({
    left: 30,
    top: 250,
    width: 70,
    height: 50,
    text: "7"
}).on("select", function() {
    enterDigit(button7.get("text"))
}).appendTo(page5);

var button8 = new tabris.Button({
    left: 100,
    top: 250,
    width: 70,
    height: 50,
    text: "8"
}).on("select", function() {
    enterDigit(button8.get("text"))
}).appendTo(page5);

var button9 = new tabris.Button({
    left: 170,
    top: 250,
    width: 70,
    height: 50,
    text: "9"
}).on("select", function() {
    enterDigit(button9.get("text"))
}).appendTo(page5);

var buttonmult = new tabris.Button({
    left: 240,
    top: 250,
    width: 70,
    height: 50,
    text: "*"
}).on("select", function() {
    operatorEntered("*")
}).appendTo(page5);


var button0 = new tabris.Button({
    left: 30,
    top: 300,
    width: 140,
    height: 50,
    text: "0"
}).on("select", function() {
    enterDigit(button0.get("text"))
}).appendTo(page5);

var buttonDot = new tabris.Button({
    left: 170,
    top: 300,
    width: 70,
    height: 50,
    text: "."
}).on("select", function() {
    afterDot = afterDot + 1;
}).appendTo(page5);

var buttondiv = new tabris.Button({
    left: 240,
    top: 300,
    width: 70,
    height: 50,
    text: "/"
}).on("select", function() {
    operatorEntered("/")
}).appendTo(page5);



var buttongleich = new tabris.Button({
    left: 30,
    top: 350,
    width: 280,
    height: 50,
    text: "="
}).on("select", function() {
    solvePressed()
}).appendTo(page5);



function enterDigit(digit) {
    if (afterDot > 0) {currentNumber = currentNumber + digit * Math.pow(10, (-afterDot));
    d.set("text", currentNumber);
    afterDot = afterDot + 1;
    
}
    else {currentNumber = currentNumber * 10 + digit * 1;
    d.set("text", currentNumber);}
}
function operatorEntered(op) {
    operator = op;
    if (result != 0) {
    	previousNumber = result;
    	currentNumber = 0;
    	afterDot = 0
    } 
    	else {previousNumber = currentNumber;
    	currentNumber = 0;
    	afterDot = 0} 
}

function solvePressed() {
    if (operator == "+") {
        result = previousNumber + currentNumber;
    }
    if (operator == "-") {
        result = previousNumber - currentNumber;
    }
    if (operator == "*") {
        result = previousNumber * currentNumber;
    }
    if (operator == "/" ) {
        result = previousNumber / currentNumber;
    }

    
    d.set("text", result);
    currentNumber = 0;
    previousNumber = 0;
    operator = '';
    afterDot = 0;
}
return page5;
};