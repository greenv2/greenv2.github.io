function addToDiv(category){
  switch(category){
    case "fruit":
      return document.getElementById('fruit');
      break;
    case "beverage":
      return document.getElementById('beverage');
      break;
    case "pasta":
      return document.getElementById('pasta');
      break;
    case "dessert":
      return document.getElementById('dessert');
      break;
    case "dairy":
      return document.getElementById('dairy');
      break;
    default:
      document.getElementById('other').style.display = "flex";
      return document.getElementById('other');
      break;

  }
}


//iterate through JSON array of grocery info
var fruLst = document.getElementById('fruit');
var bevLst = document.getElementById('beverage');
var desLst= document.getElementById('dessert');
var daiLst = document.getElementById('dairy');
var pasLst = document.getElementById('pasta');
var pasLst = document.getElementById('pasta');
var add;
var nSpan;
var nLabel;
var curCat;
var curGroup;
var nLabel;

for (var i=0; i< groceries.length; i++){
  item = groceries[i];
  nSpan = document.createElement('span');
  //nLabel = document.createElement('p');
  curCat = item.category;
  curGroup = "item_" + item.category;
  curText = item.type + " " + item.item + ", " + item.brand + " ("+ item.qty +")" ;
  nSpan.innerHTML="<input type='checkbox' class='"+ curGroup + "'> "+curText;
  //node = document.createTextNode(item.category + "  " +item.item);

  //nSpan.appendChild(add);
///  nSpan.appendChild(nLabel);


  // nSpan.innerHTML = item.category + "  " +item.item;
  //add.appendChild(node);
  addToDiv(item.category).appendChild(nSpan);
  duplicate = nSpan.cloneNode(true);
  document.getElementById("list").appendChild(duplicate);
  document.getElementById("list").appendChild(document.createElement('br'));
}






// var item;
// var add;
// var node;
// var icon;
//
// for (var i=0; i< groceries.length; i++){
//   item = groceries[i];
//   console.log(item.category + "  " +item.item);
//   icon = document.createElement('svg');
//   icon.innerHTML= selectSVG(groceries[i].category);
//   add = document.createElement('Li');
//   node = document.createTextNode(item.category + "  " +item.item);
//   add.appendChild(icon);
//   add.appendChild(node);
//   glist.appendChild(add);
// }

// for (var i=0; i< groceries.length; i++){
//   item = groceries[i];
//   nSpan = document.createElement('span');
//   add = document.createElement('input');
//   add.setAttribute("class", ("item_" + groceries[i].category));
//   add.setAttribute("type", "radio");
//   //add.setAttribute("content", "uhhhhh");
//   add.setAttribute("name", groceries[i].category);
//   nLabel = document.createElement('p');
//   nLabel.innerHTML="im dying";
//   //node = document.createTextNode(item.category + "  " +item.item);
//
//   nSpan.appendChild(add);
//   nSpan.appendChild(nLabel);
//
//
//   // nSpan.innerHTML = item.category + "  " +item.item;
//   //add.appendChild(node);
//   addToDiv(groceries[i].category).appendChild(nSpan);
// }














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
