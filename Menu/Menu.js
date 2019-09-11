/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

function menuComponent(menuInfo) {
  let header = document.createElement("div");
  let menu = document.createElement("div");
  let unorderedList = document.createElement("ul");
  let listItems = document.createElement("li");
  let openButton = document.createElement("button");

  //structure
  header.appendChild(openButton);
  header.appendChild(menu);
  menu.appendChild(unorderedList);
  unorderedList.appendChild(listItems);
  


  //set the content 
 

listItems.textContent = menuItems;


//styles
header.classList.add('menu-button');
menu.classList.add('menu');
unorderedList.classList.add('ul');
listItems.classList.add('li');
openButton.classList.add('menu--open');

//event handlers

header.addEventListener('click', (e) => {
  buttonOpen.classList.toggle('.menu--open');
  listItems.classList.toggle('li');
})




return menu;
  
}

let parent = document.querySelector('.menu-button');
menuItems.forEach((menu) => {
  parent.appendChild(menuComponent(menu));
})

console.log(parent);
