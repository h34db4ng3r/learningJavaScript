/* The script is placed inside an immediately infoked function expression
which helps protect the scope of variables */

(function() {
    // PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS

    // create a hotel object using object literal syntax

    var hotel = {
        name: 'park',
        roomRate: 240, //amount in dollaz
        discount: 15, //percentage discount
        offerPrice: function() {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    };

    // write out the hotel name, standard rate, and the special rate
    var hotelName, roomRate, specialRate;        // declare variables

    hotelName = document.getElementById('hotelName'); // get the elements
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;                                 // write hotel name
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);             // write room rate
    specialRate.textContent = '$' + hotel.offerPrice();     // write offer price

    // PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
    var expiryMsg;
    var today;
    var elEnds;

    function offerExpires(today) {
        // Declare variables within the function for local scope
        var weekFromToday, day, date, month, year, dayNames, monthNames;

        // Add 7 days time (added in milliseconds)
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

        // create arrays to hold the names of days / months
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        // Collect the parts of the date to show on the page
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        // Create the message
        expiryMsg = 'Offer expires next ';
        expiryMsg += day + ' <br /> (' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
        }

    today = new Date();                                 // Put today's date in variable
    elEnds = document.getElementById('offerEnds');      // Get the offerEnds element
    elEnds.innerHTML = offerExpires(today);             // Add the expiry message


}());