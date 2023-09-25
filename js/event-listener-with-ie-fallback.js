
var elUsername = document.getElementById('username');       // Get username input
var elMsg = document.getElementById('feedback');            // get feedback element

function checkUsername(minLength) {                         // Declare function
    if (elUsername.value.length < minLength ) {      // if username to short
        elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';      // set message
} else {                                                    // otherwise
        elMsg.innerHTML = '';                               // clear this stuff
    }
}

if (elUsername.addEventListener) {                          // if event listener supported
    elUsername.addEventListener('blur', function(){         // when username loses focus
        checkUsername(5);                                    // call checkUsername
    }, false);                                              // capture during bubble phase
} else {                                                    // otherwise
    elUsername.attachEvent('onblur', function(){            // IE fallback: onblur
        checkUsername(5);                                   // call checkusername

    });
}
