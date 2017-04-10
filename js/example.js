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
