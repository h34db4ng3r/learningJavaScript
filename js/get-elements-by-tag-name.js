var elements = document.getElementsByTagName('li');     // find <li> items

if (elements.length > 0) {                              // if num of elements is 1 or above

    var el = elements[0];                               // declares a variable with the value at index 0 in elements
    el.className ='cool';                               // changes the className ( html attribute gets updated to class="cool")
}