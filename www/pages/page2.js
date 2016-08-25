exports.create = function() {

	
var page2 = new tabris.Page({
    title: "2. Wiki",
    topLevel: true
});

var returnObject;


var textView2 = tabris.create("TextView", {
    font: "24px",
    layoutData: { centerX: 0, top: 10 },
    text: "Hier kannst du auf Wikipedia nachschlagen wenn du ein Wort suchst."
}).appendTo(page2);

var input1 = new tabris.TextInput({
    layoutData: { top: 100, left: "20%", right: "20%" },
    message: "Wikipedia Suche"

}).on("accept", function(widget, text) {
    new tabris.Button({
        layoutData: { centerX: 0, top: 140 },
        text: "Ergebnisse"
    }).on("select", function() {

        var textView3 = new tabris.TextView({
            layoutData: { left: 10, right: 10, top: "prev() 10" },
            text: input1.get("text")
        }).appendTo(page2);

        var xhr = new tabris.XMLHttpRequest();
        xhr.onreadystatechange = function() {

            if (xhr.readyState === xhr.DONE) {
                returnObject = JSON.parse(xhr.responseText);
                textView3.set("text", returnObject[9].length);
                
            }
        };
        xhr.open("GET", "http://de.wiktionary.org/w/api.php?action=opensearch&search=" + input1.get("text") + "&limit=100");
        xhr.send();

    }).appendTo(page2);

}).appendTo(page2);

return page2;
};