let loginBtn = document.getElementById("user");
let login = document.querySelector(".login-container");

loginBtn.addEventListener("click",function(){
   login.classList.toggle("active");
   nav.classList.remove("active");
   airtime.classList.remove("active");
    data.classList.remove("active");
    school.classList.remove("active");
    utility.classList.remove("active");
    submitBtn.innerHTML = 'Login';
    login.style.background = '#fff';
});

let bar = document.getElementById("menu-btn");
let nav = document.getElementById("sidebar");

bar.addEventListener("click",function(){
    nav.classList.toggle("active");
    login.classList.remove("active");
    airtime.classList.remove("active");
    data.classList.remove("active");
    school.classList.remove("active");
    utility.classList.remove("active");
 });


 let close1 = document.getElementById("close-menu");
 close1.addEventListener("click",function(){
    nav.classList.remove("active");
 });

 
 let close2 = document.getElementById("close-menu2");
 close2.addEventListener("click",function(){
    login.classList.remove("active");
    
 });

 window.addEventListener("scroll",function(){
    login.classList.remove("active");
    nav.classList.remove("active");
    airtime.classList.remove("active");
    data.classList.remove("active");
    school.classList.remove("active");
    utility.classList.remove("active");
 });

 window.addEventListener("dblclick",function(){
    login.classList.remove("active");
    nav.classList.remove("active");
    airtime.classList.remove("active");
    data.classList.remove("active");
    school.classList.remove("active");
    utility.classList.remove("active");
 });
 document.addEventListener("DOMContentLoaded", function () {
   const headings = [
       "Fast & Secure Online Payments",
       "Send Money Anywhere, Anytime",
       "The Easiest Way to Pay Bills Online"
   ];

   const texts = [
       "Pay for airtime, school fees, and other bills instantly.",
       "Experience seamless transactions with zero hassle.",
       "Safe, quick, and reliable online payments at your fingertips."
   ];

   const bgElements = document.querySelectorAll(".hero-bg");
   const headingEl = document.getElementById("hero-heading");
   const textEl = document.getElementById("hero-text");

   let index = 0;

   function changeText() {
       // Fade out current text
       headingEl.classList.add("fade-out");
       textEl.classList.add("fade-out");

       setTimeout(() => {
           // Update index
           index = (index + 1) % headings.length;

           // Update text content
           headingEl.textContent = headings[index];
           textEl.textContent = texts[index];

           // Remove 'active' from all backgrounds and set the new one
           bgElements.forEach(bg => bg.classList.remove("active"));
           bgElements[index].classList.add("active");

           // Fade in text
           headingEl.classList.remove("fade-out");
           textEl.classList.remove("fade-out");
       }, 1000); // Match the animation duration
   }

   setInterval(changeText, 4000);
});

let pay =  document.getElementById('pay');
let hero = document.querySelector('.hero'); // Change this to target the .hero class
let start = document.getElementById('cta-btn');
let cards = document.querySelectorAll('.card');

start.addEventListener("click", function() {
   hero.classList.toggle("hide");
   start.style.display ="none";
   pay.classList.toggle("active");
});

let airtime = document.getElementById('air');
let button1 = document.getElementById('btn1');

let data = document.getElementById('air2');
let button2 = document.getElementById('btn2');


let school = document.getElementById('air3');
let button3 = document.getElementById('btn3');


let utility = document.getElementById('air4');
let button4 = document.getElementById('btn4');

button1.addEventListener("click", function() {
   airtime.classList.toggle("active");
    data.classList.remove("active");
    school.classList.remove("active");
    utility.classList.remove("active");
});

button2.addEventListener("click", function() {
   data.classList.toggle("active");
   airtime.classList.remove("active");
    school.classList.remove("active");
    utility.classList.remove("active");
});

button3.addEventListener("click", function() {
   school.classList.toggle("active");
   airtime.classList.remove("active");
    data.classList.remove("active");
    utility.classList.remove("active");
});

button4.addEventListener("click", function() {
   utility.classList.toggle("active");
   airtime.classList.remove("active");
    data.classList.remove("active");
    school.classList.remove("active");
});

// login handling

const loginInput = document.getElementById('username');
const submitBtn = document.getElementById('submit');
const greetings = document.getElementById('user');

submitBtn.addEventListener('click', () => {
   const userInput = loginInput.value.trim();

   if (userInput === '') {
      greetings.innerHTML = '<i class="fas fa-sign-in-alt"> Login here';
   } else {
      login.style.background = '#333';
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin">';
      setTimeout(() => {
         greetings.innerHTML = `<i class="fas fa-sign-out-alt" style= "margin-left:10rem"> &nbsp;Hello,&nbsp;  ${userInput} !`;
         login.classList.remove('active');
        
      }, 3000); // 3-second delay
   }
});


document.addEventListener("DOMContentLoaded", function () {
   function revealOnScroll() {
       let reveals = document.querySelectorAll(".reveal");
       reveals.forEach((element) => {
           let windowHeight = window.innerHeight;
           let elementTop = element.getBoundingClientRect().top;
           let revealPoint = 100;

           if (elementTop < windowHeight - revealPoint) {
               element.classList.add("active");
           }
       });
   }

   window.addEventListener("scroll", revealOnScroll);
   revealOnScroll(); // Run once on load in case elements are already in view
});
let deferredPrompt;

// Listen for the beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); // Prevent the default browser prompt
    deferredPrompt = event; // Store the event for later use

    // Show custom install button
    const installButton = document.getElementById('install-btn');
    installButton.style.display = 'block'; // Make button visible

    installButton.addEventListener('click', () => {
        installButton.style.display = 'none'; // Hide button after click

        // Show the install prompt
        deferredPrompt.prompt();

        // Handle user's choice
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                alert('Thank you for installing M-Virtual Payments!');
            } else {
                alert('You can install the app anytime from the browser menu.');
            }
            deferredPrompt = null; // Clear the prompt variable
        });
    });
});

// Hide button if app is already installed
window.addEventListener('appinstalled', () => {
    console.log('M-Virtual Payments has been installed.');
    document.getElementById('install-btn').style.display = 'none';
});
