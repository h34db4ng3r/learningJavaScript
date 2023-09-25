var elUsername = document.getElementById('username');   // get username input
var elMsg = document.getElementById('feedback');        // get feedback element

function checkUsername(minLength) {                     // declare function
    if (elUsername.value.length < minLength) {          // if username to short
        // set the error message
        elMsg.textContent = 'Username must be ' + minLength + ' characters or more';
    } else {                                            // Otherwise
        elMsg.innerHTML = '';                           // Clear msg
    }
}

elUsername.addEventListener('blur', function() {        // when it loses focus
    checkUsername(5);                                   // pass arguments here
}, false);