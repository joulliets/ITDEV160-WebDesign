// greeting message
var user = 'Jouliet';
var salutation = 'Hello, '
var greeting = salutation + " " + user;
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//Prices
var price = 1350;
var studentDiscount = .20;
var studentPrice = price - (price * studentDiscount);
var priceEl = document.getElementById('price');
var studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);