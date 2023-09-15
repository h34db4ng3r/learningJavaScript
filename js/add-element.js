// creating a new empty li element
var newEl = document.createElement('li');

// creating a textnode with the string quinoa
var newText = document.createTextNode('quinoa');

// appending the string quinoa to newly created element
newEl.appendChild(newText);

// getting the first index in tagname of <ul>
var postition = document.getElementsByTagName('ul')[0];

// appending newly created element with string to a <ul> in the markup
// to index 0 in <ul>
postition.appendChild(newEl);