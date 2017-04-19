// Page 240

// Adding items to start and end of list
var list = document.getElementByTagName('ul')[0];  // Get the <ul> element

// Add new items to end of list
var newItemLast = document.createElement('li');    // Create element
var newTextLast = document.createNode('cream');    // Create text node
newItemLast.appendChild(newTextLast);              // Add text node to element
list.appendChild(newItemLast);                     // Add element end of list

// Add new items to start of list
var newItemFirst = document.createElement('li');   // Create element
var newTextFirst = document.createTextNode('kale');// Create text node
newTextLast.appendChild(newTextLast);              // Add text node to element
list.insertBofore(newItemFirst, list.firstChild);  // Add element to list

var listItems = document.querySelectorAll('li');   // All <li> elements

// Add a class of cool to all list items
var i;                                             // Counter variable
for (i = 0; i < listItems.length; i++) {           // Loop through elements
  listItems[i].className = 'cool';                 // Change class to cool
}

// Add number of items in the list to the heading
var heading = document.querySelector('h2');        // h2 element
var headingText = heading.firstChild.nodeValue;    // h2 text
var totalItems = listItems.length;                 // No. of <list> elements
var newHeading = headingText + '<span>' + totalItems + '</span>'; // Content
heading.textContent = newHeading;                  // Update h2
