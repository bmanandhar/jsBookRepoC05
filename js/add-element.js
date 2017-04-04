// Page 223

// Creat a new element and store it in a variable.
var newEl = document.createElement('li');

// Creat a text node and store it in a variable.
var newText = document.createTextNode('quinoa');

// Atach the new text node to the new element.
newEl.appendChild(newText);

// Find the position wherere the new element should be added.
var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position.
position.appendChild(newEl);
