// page 215
<<<<<<< HEAD
var itemTwo = document.getElementById('two')  // Get second list itemTwo
=======
var itemTwo = document.getElementById('two'  // Get second list itemTwo
>>>>>>> bb39f9a6764a760c77c4bbef9a79f5409de5cb06

var elText = itemTwo.firstChild.nodeValue;   // Get its text content;

elText = elTextReplace('pine nuts', 'kale'); // Change pine nuts to kale

itemTwo.firstChild.nodeValue = elText        // Update the list item
