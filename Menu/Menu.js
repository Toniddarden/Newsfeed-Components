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

function createMenu(itemsArray) {

  const body = document.querySelector('.menu-button');
  const menu = document.createElement('div');
  const unorderedList = document.createElement('ul');

  body.append(menu);
  menu.className = 'menu';
  menu.appendChild(unorderedList);



  addMenuItems(itemsArray);



  menu.addEventListener('click', (e) => {
    unorderedList.classList.toggle('ul');
    listItem.classList.toggle('li');
    listItem.classList.toggle('li');
  })

  //styles
  body.classList.add('menu-button');
  menu.classList.add('menu');
  unorderedList.classList.add('ul');
 
  


}

function addMenuItems(itemsArray) {
  let parent = document.querySelector('.menu-button');
  let ul = document.querySelector('ul'); 

  for (let i = 0; i < itemsArray.length; i++) {
    const label = itemsArray[i];
    const listItem = document.createElement('li');
    listItem.append(label);
    ul.append(listItem);
  }

}

createMenu(menuItems);
// addMenuItems(menuItems);

// let parent = document.querySelector('.menu-button');
// menuItems.forEach((menu) => {
//   // !
//   //parent.appendChild(menuComponent(menu));
// });

// console.log(parent);

let menuButton = document.querySelector('.menu-button');
menuItems.appendChild(createMenu(itemsArray));
