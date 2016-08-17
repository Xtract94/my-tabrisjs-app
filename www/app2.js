
tabris.create("Drawer").append(tabris.create("PageSelector"));

var page = require("./pages/page");
	page.create().open();
var page2 = require("./pages/page2");									
	page2.create();
	
var page3 = require("./pages/page3");
	page3.create();
	
var page4 = require("./pages/page4");
	page4.create();

var page5 = require("./pages/page5");
	page5.create();

/*var page6 = require("./pages/page6");
	page6.create();*/