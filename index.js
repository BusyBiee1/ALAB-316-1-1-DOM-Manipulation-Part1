//

//
// 1. Select and cache the <main> element in a variable named mainEl.
 const mainEl = document.querySelector('main');

// 2. Set the background color of mainEl to the value stored in 
// the --main-bg CSS custom property. 
// Hint: Assign a string that uses the CSS var() function like 
// this: 'var(--main-bg)'.
 mainEl.style.backgroundColor = 'var(--main-bg)';

// 3. Set the content of mainEl to <h1>DOM Manipulation</h1>. 
// There are a variety of ways to do this; pick 
// whichever one that you think works best in this situation.

////---const h1 = document.createElement('h1');
////---h1.textContent = 'DOM Manipulation';
////---mainEl.appendChild(h1);
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

// 4. Add a class of flex-ctr to mainEl. 
// Hint: Use the Element.classList API.
mainEl.classList.add('flex-ctr');
///

///////////////////////////////////////////////////

// Part 2: Creating a Menu Bar
// Next, create a blank menu bar that we can use to later add 
// some interactivity to the page:
// Select and cache the <nav id="top-menu"> element in a 
// variable named topMenuEl.
const topMenuEl = document.getElementById('top-menu');

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = '100%';

// Set the background color of topMenuEl to the value 
// stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-ctr');

//////////////////////////////////////////////////

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' } ,
    { text: 'catalog', href: '/catalog' } ,
    { text: 'orders', href: '/orders' } ,
    { text: 'account', href: '/account'}
];

// Iterate over the entire menuLinks array and 
// for each "link" object: Create an <a> element.
//const topMenuEl = document.getElementById('top-menu');
menuLinks.forEach ((link) => {
//  link.innerHTML = (`<a href=${item(1).innerHTML}</a>`)  
//    topMenuEl.innerHTML += `<a href="${link.href}">${link.text}</a>`;
    topMenuEl.innerHTML += `<a href="${link.href}">${link.text}</a>`;
}) 


////---const h1 = document.createElement('h1');
////---h1.textContent = 'DOM Manipulation';
////---mainEl.appendChild(h1);
//mainEl.innerHTML = '<h1>DOM Manipulation</h1>';


// On the new element, add an href attribute 
// with its value set to the href property 
// of the "link" object.

// Set the new element's content to the 
// value of the text property of the "link" object.

// Append the new element to the topMenuEl element.
