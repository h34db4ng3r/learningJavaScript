var hotItems = document.querySelectorAll('li.hot'); // Store NodeList in array

if(hotItems.length > 0) {                           // if hoteItems contains items

    for (var i = 0; i < hotItems.length; i++) {     // for loop that iterates trought the items
        hotItems[i].className = 'cool';             // changes the classname to cool
    }
}