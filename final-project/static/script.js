var now = new Date()
var hours = now.getHours()

function greeting(hours) {
    var greetingEl = document.getElementById("greeting");
    if (!greetingEl) return;
    if (hours < 5 || hours >= 20) {
        greetingEl.innerHTML = "Good night!";
    } else if (hours < 12) {
        greetingEl.innerHTML = "Good morning!";
    } else if (hours < 18) {
        greetingEl.innerHTML = "Good afternoon!";
    } else {
        greetingEl.innerHTML = "Good evening!";
    }
}

greeting(hours);

function addYear() {
    var copyYearEl = document.getElementById("copyYear");
    if (!copyYearEl) return;
    var currentYear = new Date().getFullYear();
    copyYearEl.innerHTML = "&copy; " + currentYear + " MonoMuse. All rights reserved.";
}

addYear();

function activeNav() {
    const navLinks = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

activeNav();

if (typeof $ !== 'undefined') {
    $("#readLessButton").click(function(){
        $("#introLong").hide();
        $("#readLessButton").hide();
        $("#readMoreButton").show();
    });

    $("#readMoreButton").click(function(){
        $("#introLong").show();
        $("#readLessButton").show();
        $("#readMoreButton").hide();
    });
}

function showPurchaseForm(dateValue) {
    var formEl = document.getElementById("purchaseForm");
    var dateInput = document.getElementById("visitDate");
    if (formEl) {
        formEl.style.display = "block";
        if (dateInput && dateValue) {
            dateInput.value = dateValue;
        }
        updatePrice();
        formEl.scrollIntoView({ behavior: 'smooth' });
    }
}

function updatePrice() {
    var quantityEl = document.getElementById("numTickets");
    var priceEl = document.getElementById("totalPrice");
    if (!quantityEl || !priceEl) return;

    var quantity = parseInt(quantityEl.value) || 1;
    if (quantity < 1) quantity = 1;
    if (quantity > 10) quantity = 10;

    var pricePerTicket = 18;
    var total = quantity * pricePerTicket;
    priceEl.innerHTML = "$" + total;
}

function submitOrder() {
    var visitDate = document.getElementById("visitDate");
    var ticketType = document.getElementById("ticketType");
    var numTickets = document.getElementById("numTickets");
    var email = document.getElementById("custEmail");
    var zipCode = document.getElementById("zipCode");

    if (!visitDate || !ticketType || !numTickets || !email) return;

    if (visitDate.value === "" || numTickets.value === "" || email.value === "") {
        alert("Please fill in all required fields.");
        return;
    }

    var qty = parseInt(numTickets.value);
    if (isNaN(qty) || qty < 1 || qty > 10) {
        alert("Please enter a ticket quantity between 1 and 10.");
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (zipCode && zipCode.value !== "") {
        var zipRegex = /^\d{5}$/;
        if (!zipRegex.test(zipCode.value)) {
            alert("Zip code must be a five-digit number.");
            return;
        }
    }

    var total = qty * 18;
    var typeLabel = ticketType.options[ticketType.selectedIndex].text;

    var confirmEl = document.getElementById("confirmDetails");
    if (confirmEl) {
        confirmEl.innerHTML = "<strong>Date:</strong> " + visitDate.value +
            "<br><strong>Ticket Type:</strong> " + typeLabel +
            "<br><strong>Quantity:</strong> " + qty +
            "<br><strong>Total Cost:</strong> $" + total +
            "<br><strong>Confirmation Email:</strong> " + email.value;
    }

    document.getElementById("purchaseForm").style.display = "none";
    document.getElementById("confirmationPage").style.display = "block";
    document.getElementById("confirmationPage").scrollIntoView({ behavior: 'smooth' });
}

function toggleNav() {
    var navBar = document.querySelector(".nav_bar");
    if (navBar.classList.contains("responsive")) {
        navBar.classList.remove("responsive");
    } else {
        navBar.classList.add("responsive");
    }
}

var currentSlide = 0;

function changeSlide(direction) {
    var slides = document.querySelectorAll(".slide");
    var counter = document.getElementById("slideCounter");
    if (slides.length === 0) return;

    // Remove active class from current slide
    slides[currentSlide].classList.remove("active-slide");

    // Calculate new index (wrap around)
    currentSlide = currentSlide + direction;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;

    // Add active class to new slide
    slides[currentSlide].classList.add("active-slide");

    // Update counter text
    if (counter) {
        counter.innerHTML = (currentSlide + 1) + " / " + slides.length;
    }
}

var mapEl = document.getElementById("map");
if (mapEl) {
    var map = L.map('map').setView([40.4406, -79.9959], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([40.4406, -79.9959]).addTo(map)
        .bindPopup('<strong>MonoMuse</strong><br>4400 Forbes Ave<br>Pittsburgh, PA 15213')
        .openPopup();
}