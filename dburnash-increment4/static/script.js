/* var x = 5
var y = 7
var z = x + y
console.log(z)

var A = "Hello "
var B = "world!"
var C = A + B
console.log(C)

function sumnPrint(x1, x2) {
    var sum = x1 + x2
    console.log(sum)
}
sumnPrint(x, y)
sumnPrint(A, B)

if (C.length > z) {
    console.log(C)
} else if (C.length < z) {
    console.log(z)
} else {
    console.log("good job!")
}

L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(list) {
    list.forEach(element => {
        if (element === "Banana") {
           alert("Found the banana!")
        }
    });
} */

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

// When the "Read Less" button is clicked
$("#readLessButton").click(function(){
    $("#introLong").hide(); // Hide the long introduction text
    $("#readLessButton").hide(); // Hide the "Read Less" button itself
    $("#readMoreButton").show(); // Show the "Read More" button
});

// When the "Read More" button is clicked
$("#readMoreButton").click(function(){
    $("#introLong").show(); // Show the long introduction text
    $("#readLessButton").show(); // Show the "Read Less" button
    $("#readMoreButton").hide(); // Hide the "Read More" button
});

function showPurchaseForm(date) {
    var formEl = document.getElementById("purchaseForm");
    var dateEl = document.getElementById("selectedDate");
    if (formEl) {
        formEl.style.display = "block";
        dateEl.innerHTML = "Selected Date: <strong>" + date + "</strong>";
    }
}

function submitOrder() {
    var name = document.getElementById("custName");
    var email = document.getElementById("custEmail");
    var tickets = document.getElementById("numTickets");
 
    if (!name || !email || !tickets) return;
    if (name.value === "" || email.value === "" || tickets.value === "") {
        alert("Please fill in all required fields.");
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Redirecting to payment system.");
}