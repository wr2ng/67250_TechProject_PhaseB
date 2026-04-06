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
    const navLinks = document.querySelectorAll("nav li a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
}

activeNav();