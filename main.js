/**********************************************
  Function: addToDiv
  Purpose: return the div based on the item category
  Parameters: item.category from groceries.json
**********************************************/
function addToDiv(category) {
  switch (category) {
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

/**********************************************
  Function: pickIcon
  Purpose: select which svg to display based on the category of the item
  Parameters: item.category from groceries.json
**********************************************/
function pickIcon(category) {
  switch (category) {
    case "fruit":
      return "<img src='img/fruit.svg' alt='Fruit Category Icon' class='listView'>";
      break;
    case "beverage":
      return "<img src='img/beverage.svg' alt='Beverage Category Icon' class='listView'>";
      break;
    case "pasta":
      return "<img src='img/pasta.svg' alt='Pasta Category Icon' class='listView'>";
      break;
    case "dessert":
      return "<img src='img/dessert.svg' alt='Dessert Category Icon' class='listView'>";
      break;
    case "dairy":
      return "<img src='img/dairy.svg' alt='Dairy Category Icon' class='listView'>";
      break;
    default:
      return "_";
      break;

  }
}

//variables for view toggle
var settings = document.getElementsByName('view_option');
var category = settings[0];
var list = settings[1];
var categoryStyle = document.getElementsByClassName('category');

/**********************************************
  Function: toggleCategories
  Purpose: toggle the display style of elements with the class category
  Parameters: new display style as string
**********************************************/
function toggleCategories(sett) {
  for (var i = 0; i < categoryStyle.length; i++) {
    categoryStyle[i].style.display = sett;

  }
}

//variable for flagging if category-1 or list-2
//default is 1 will be updated by changeSettings function
var currentView = 1;

/**********************************************
  Function: changeSettings
  Purpose: toggle view settings between cateogry and list
  Parameters: int representing which format to use
  1- category 2-list
**********************************************/
function changeSettings(format) {
  switch (format) {
    case 1:
      document.getElementById('list').style.display = "none";
      toggleCategories('flex');
      currentView = 1;
      break;
    case 2:
      toggleCategories("none");
      document.getElementById('list').style.display = "inline-block";
      currentView = 2;
      break;
    default:
      break;
  }
}


//variables for sorting into categories
var nSpan;
var curCat;
var curGroup;
var idItem;

/**********************************************

Purpose: iterate through JSON array of grocery info
creating elements and sorting into corresponding dibs

**********************************************/
for (var i = 0; i < groceries.length; i++) {
  item = groceries[i];
  nSpan = document.createElement('span');
  curCat = item.category;
  curGroup = "item_" + item.category;
  curText = item.brand + ", " + item.type + " " + item.item + " (" + item.qty + ")";
  idItem = i + "_" + item.category;
  nSpan.innerHTML = " <input type='checkbox' onclick='checkIt(" + i + ")' class='" + curGroup + ' item_' + i + "' id='" + idItem + " '> " + "<label for='" + i + "_" + item.category + "'>" + pickIcon(item.category) + curText + "</label>";
  addToDiv(item.category).appendChild(nSpan);
  duplicate = nSpan.cloneNode(true);
  document.getElementById("list").appendChild(duplicate);
}

/**********************************************
  Function: checkIt
  Purpose: updated the hidden list when the displayed one is changed
  uses the global variable currentView
  Parameters: id number of item being updated
**********************************************/
function checkIt(iNum) {
  var itemId = 'item_' + iNum;
  
  switch (currentView) {
    case 1:
      document.getElementById('list').getElementsByClassName(itemId)[0].checked = document.getElementById('categoryContainer').getElementsByClassName(itemId)[0].checked;
      break;
    case 2:
      document.getElementById('categoryContainer').getElementsByClassName(itemId)[0].checked = document.getElementById('list').getElementsByClassName(itemId)[0].checked;
      break;
    default:
      break;
  }

}
