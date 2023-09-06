/* The script is placed inside an immediately infoked function expression
which helps protect the scope of variables */

(function() {
    // PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS

    // create a hotel object using object literal syntax

    var hotel = {
        name: 'park',
        roomRate: 240, //amount in dollaz
        discount: 15, //percentage discount
        offerPrice() {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    }

    // write out the hotel name, standard rate, and the special rate
    var hotelName, roomRate, specialRate;        // declare variables

    hotelName = document.getElementById('hotelName'); // get the elements
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;                                 // write hotel name
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);             // write room rate
    specialRate.textContent = '$' + hotel.specialRate.offerPrice();     // write offer price

    // PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER

})