exports.create = function() {

	
var page6 = new tabris.Page({
    title: "6. Barcode-Scanner",
    topLevel: true
});


  new tabris.Button({
    layoutData: {left: 10, top: 10, right: 10},
    text: "Scan Barcode"
  }).on("select", scanBarcode)
  .appendTo(page6);

  var resultView = new tabris.TextView({
	    layoutData: {top: "prev() 20", left: 20, right: 20},
	    markupEnabled: true
	  }).appendTo(page6);

	  function scanBarcode() {
	    cordova.plugins.barcodeScanner.scan(function(result) {
	    	var blah = result;
	    	resultView.set("text", result.text);
/*	      resultView.set("text", result.cancelled ?
	                             "<b>Scan cancelled</b>" :
	                             "<b>Scan result:</b> " + result.text + " (" + result.format + ")");
	                             */
	    }, function(error) {
	      resultView.set("text", "<b>Error:</b> " + error);
	    });
	  }
	

return page6;
}