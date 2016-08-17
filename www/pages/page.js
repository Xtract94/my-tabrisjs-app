exports.create = function() {

	
var page = new tabris.Page({
    title: "1. Multifunktions-App",
    topLevel: true
});

var textView = tabris.create("TextView", {
    font: "24px",
    layoutData: { centerX: 0, top: 150 },
    text: "Hallo mach doch erstmal ein Bild von dir."
}).appendTo(page);

var button92 = tabris.create("Button", {
    layoutData: { width: 150, height: 150, top: 10, right: 10 },
    text: "Hier drücken"
}).appendTo(page).on("select", function() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        targetWidth: 1024,
        targetHeight: 1024,
        destinationType: window.Camera.DestinationType.FILE_URI
    });

    function onSuccess(imageUrl) {
        button92.dispose();
        var imageView = tabris.create("ImageView", {
            layoutData: { width: 100, height: 100, top: 10, right: 10 }
        }).appendTo(page);
        imageView.set("image", { src: imageUrl });

        textView.set("text", "Sehr schön! Du weißt wie man Fotos macht. Dann lass uns jetzt mal richtig loslegen. ");
        var button90 = tabris.create("Button", {
            layoutData: { width: 150, height: 150, top: 250, centerX: 0 },
            text: "Fortfahren"
        }).appendTo(page).on("select", function() { page2.open(); });
    }

    function onFail(message) {
        console.log("Camera failed because: " + message);
    }
});

return page;

};