$( function() {
    $( "#check-in" ).datepicker();
    $( "#check-out" ).datepicker();
    $( "#tabs" ).tabs();
} );


const flightBtn = document.querySelector('.flightBtn');
const hotelBtn = document.querySelector('.hotelBtn');
const cabBtn = document.querySelector('.cabBtn');
const busBtn = document.querySelector('.busBtn');
const flight = document.getElementById('flight');
const hotel = document.getElementById('hotel');
const cab = document.getElementById('cab');
const bus = document.getElementById('bus');



flightBtn.addEventListener('click', () => {
    flight.classList.add('active');
    hotel.classList.remove('active'),
    cab.classList.remove('active'),
    bus.classList.remove('active')
});
hotelBtn.addEventListener('click', () => {
    hotel.classList.add('active');
    flight.classList.remove('active'),
    cab.classList.remove('active'),
    bus.classList.remove('active')
});
cabBtn.addEventListener('click', () => {
    cab.classList.add('active');
    flight.classList.remove('active'),
    hotel.classList.remove('active'),
    bus.classList.remove('active')
});
busBtn.addEventListener('click', () => {
    bus.classList.add('active');
    flight.classList.remove('active'),
    hotel.classList.remove('active'),
    cab.classList.remove('active')
});
