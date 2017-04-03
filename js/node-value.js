// page 215
var itemTwo = document.getElementById('two')  // Get second list itemTwo

var elText = itemTwo.firstChild.nodeValue;   // Get its text content;

elText = elTextReplace('pine nuts', 'kale'); // Change pine nuts to kale

itemTwo.firstChild.nodeValue = elText        // Update the list item
