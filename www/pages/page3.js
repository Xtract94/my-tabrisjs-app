exports.create = function() {

	
var page3 = new tabris.Page({
    title: "3. Browse",
    topLevel: true
});
var urlInput = new tabris.TextInput({
    layoutData: { left: 8, right: 8, top: 8 },
    message: "Url (z.B: https://www.google.de)",
    }).on("accept", loadUrl).appendTo(page3);

var webview = new tabris.WebView({
    layoutData: { left: 0, top: [urlInput, 8], right: 0, bottom: 0 }
}).appendTo(page3);

function loadUrl() {
    webview.set("url", urlInput.get("text"));
}

loadUrl();

return page3;
};