var elements = document.getElementsByClassName('hot');  // Find hot items

if (elements.length > 2){                               // If three or more are found

    var el = elements[2];                               // select the third one from elements
    el.className = 'cool';                              // update classname to cool
}