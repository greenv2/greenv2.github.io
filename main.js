function selectSVG(category){
  switch(category){
    case "fruit":
      return "svg/fruit.svg";
      break;
    case "beverage":
      return "_";
      break;
    case "pasta":
      return "_";
      break;
    case "dessert":
      return "_";
      break;
    case "dairy":
      return "_";
      break;
    default:
      return "_";
      break;

  }
}


//iterate through JSON array of grocery info
var glist = document.getElementById('glist');
var item;
var add;
var node;
var icon;

for (var i=0; i< groceries.length; i++){
  item = groceries[i];
  console.log(item.category + "  " +item.item);
  icon = document.createElement('svg');
  icon.innerHTML= selectSVG(groceries[i].category);
  add = document.createElement('Li');
  node = document.createTextNode(item.category + "  " +item.item);
  add.appendChild(icon);
  add.appendChild(node);
  glist.appendChild(add);
}






















//
// var content;
//
//
// function readTextFile(file)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 alert(allText);
//             }
//         }
//     }
//     rawFile.send(null);
// }
//
//
// readTextFile("groceries.json")
// // $.getJSON( ".../groceries.json", function( groceries ) {
// //     console.log( "JSON Data received, name is " + groceries);
// // });
// //
// //
// // var i = 0;
// //var arg = groceries.json;
// //var tData = JSON.parse(groceries);
// //var json = require('./groceries.json');
// //console.log(groceries);
//
// // for (var i=0; i< tData.length; i++){
// //   console.log("qooooo");
// // }
