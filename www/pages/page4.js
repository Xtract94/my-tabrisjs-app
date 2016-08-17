exports.create = function() {

	
var page4 = new tabris.Page({
    title: "4. Rechner mit Eingabefeld",
    topLevel: true
});

var a = new tabris.TextInput({
    layoutData: { top: 200, left: "20%", right: "20%" },
    message: "Zahl 1",
    editable: true,
    keyboard: "number"
}).appendTo(page4);

var b = new tabris.TextInput({
        layoutData: { top: 250, left: "20%", right: "20%" },
        message: "Zahl 2",
        editable: true,
        keyboard: "number"
}).appendTo(page4);

var c = new tabris.TextView({
    layoutData: { top: 20, left: "20%", right: "20%" },
    font: "50px",
    editable: "true"
}).appendTo(page4);

var Buttonadd = new tabris.Button({
    left: 50,
    top: 300,
    width: 70,
    height: 50,
    text: "+"
}).appendTo(page4);

var Buttonrest = new tabris.Button({
    left: 120,
    top: 300,
    width: 70,
    height: 50,
    text: "-"
}).appendTo(page4);

var Buttonmult2 = new tabris.Button({
    left: 190,
    top: 300,
    width: 70,
    height: 50,
    text: "*"
}).appendTo(page4);

var Buttondiv2 = new tabris.Button({
    left: 260,
    top: 300,
    width: 70,
    height: 50,
    text: "/"
}).appendTo(page4);

var Buttonrefresh = new tabris.Button({
    centerX: 0,
    top: 400,
    width: 120,
    height: 80,
    text: "Neu Laden"
}).appendTo(page4);

Buttonadd.on("select", function() {
    c.set("text", parseFloat(a.get("text")) + parseFloat(b.get("text")))
});

Buttonrest.on("select", function() {
    c.set("text", parseFloat(a.get("text")) - parseFloat(b.get("text")))
});

Buttonmult2.on("select", function() {
    c.set("text", parseFloat(a.get("text")) * parseFloat(b.get("text")))
});

Buttondiv2.on("select", function() {
    c.set("text", parseFloat(a.get("text")) / parseFloat(b.get("text")))
});

return page4;

};