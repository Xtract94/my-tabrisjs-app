var page = tabris.create("Page", {
  title: "Cats",
  topLevel: true
});
 
var textView = tabris.create("TextView", {
  font: "24px",
  layoutData: {centerX: 0, top: 100},
  text: "Hello World"
})

var image = tabris.create("ImageView", { image: "C:\Users\pkessler\Documents\my-tabrisjs-app\hund-step1-deco.png"})

.appendTo(page);
 
page.open();
