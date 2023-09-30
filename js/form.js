var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint; // declare variables
elForm =          document.getElementById('formSignup');          // store elements
elSelectPackage = document.getElementById('package');
elPackageHint =   document.getElementById('packageHint');
elTerms =         document.getElementById('terms');
elTermsHint =     document.getElementById('termsHint');

function packageHint() {    // declare function
    var pack = this.options[this.selectedIndex].value;    // get selected option
    if (pack == 'monthly') {                              // if monthly pack is chosen
        elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';    // do this
    } else {                                        // otherwise
        elPackageHint.innerHTML = 'Wise choice!';   // do this
    }
}

function checkTerms(event) {        // declare function
    if (!elTerms.checked) {         // if terms are not checked
        elTermsHint.innerHTML = 'You must agree to the terms.';    // do this
        event.preventDefault();                                    //don't submit the form
    }
}

elForm.addEventListener('submit', checkTerms, false);           // event listener, checking if terms are valid
elSelectPackage.addEventListener('change', packageHint, false); // event listener, shows message that corresponds to the package selected