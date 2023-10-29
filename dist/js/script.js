// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Dark Mode
const darkToggle = document.querySelector('#dark-light');
const html = document.querySelector('html')

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark'
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light'
    }
});

//  Pindah posisi toggle
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }



// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik diluar hamburger
// window.addEventListener('click', function (e) {
//     if (e.target != hamburger && e.target != navMenu) {
//       hamburger.classList.remove("hamburger-active");
//       navMenu.classList.add("hidden");
//     }
//   });


//Typed Text
const typedTextSpan = document.querySelector("#typed-text");
const cursorSpan = document.querySelector("#cursor");

const textArray = ["Junior Mobile Developer", "Tech Enthusiast"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

//FILTER TABS SKILL

const skillsBtn = document.querySelectorAll(".skillsTab-btn");
const skillItem = document.querySelectorAll(".items-skill");

let activeBtn = "tech";

showSkillsItem(activeBtn);

skillsBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    resetActiveBtn();
    showSkillsItem(btn.id);
    btn.classList.add("active-btn");
  });
});

function resetActiveBtn() {
  skillsBtn.forEach((btn) => {
    btn.classList.remove("active-btn");
  });
}

function showSkillsItem(newMenuBtn) {
  activeBtn = newMenuBtn;
  skillItem.forEach((item) => {
    if (item.classList.contains(activeBtn)) {
      item.style.display = "grid";
    } else {
      item.style.display = "none";
    }
  });
}

//FILTER TABS PROJECT

const projectsBtn = document.querySelectorAll(".projectsTab-btn");
const projectItem = document.querySelectorAll(".items-project");

let activePBtn = "website";

showProjectsItem(activePBtn);

projectsBtn.forEach((btnP) => {
  btnP.addEventListener("click", () => {
    resetActiveBtnP();
    showProjectsItem(btnP.id);
    btnP.classList.add("active-btn");
  });
});

function resetActiveBtnP() {
  projectsBtn.forEach((btnP) => {
    btnP.classList.remove("active-btn");
  });
}

function showProjectsItem(newMenuBtn) {
  activePBtn = newMenuBtn;
  projectItem.forEach((item) => {
    if (item.classList.contains(activePBtn)) {
      item.style.display = "grid";
    } else {
      item.style.display = "none";
    }
  });
}

// Modal
const x = document.getElementsByTagName('BODY')[0] // Select body tag because of disable scroll when modal is active
const modal = document.getElementById('modal') // modal
const modalBtn = document.getElementById('modal-button') // launch modal button
const modalClose = document.getElementsByClassName('modal-close') // close modal button

// Open modal
modalBtn.onclick = function () {
        modal.style.display = "flex"; // Show modal
        x.style.overflow = "hidden"; //Disable scroll on body
}

// Select and trigger all close buttons
for (var i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener('click', function () {
        modal.style.display = "none"; // Hide modal
        x.style.overflow = "auto"; // Active scroll on body
    })
}

// Close modal when click away from modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Hide modal
        x.style.overflow = "auto"; // Active scroll on body
    }
}

// contact validation
function validForm(){
  // alert("HAYOOO")

  var name = document.custom_form.name;
  var email = document.custom_form.email;
  var message = document.custom_form.message;

  if(name.value == "" ){
    name.nextElementSibling.style.display = "block";
    name.style.border = "1px solid #f00";
    return false
  } else {
    name.nextElementSibling.style.display = "none";
    name.style.border = "1px solid transparent";
  }
  if(!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) || email.value == "" ){
    email.nextElementSibling.style.display = "block";
    email.style.border = "1px solid #f00";
    return false
  } else {
    email.nextElementSibling.style.display = "none";
    email.style.border = "1px solid transparent";
  }
  if(message.value == "" ){
    message.nextElementSibling.style.display = "block";
    message.style.border = "1px solid #f00";
    return false
  } else {
    message.nextElementSibling.style.display = "none";
    message.style.border = "1px solid transparent";
  }
}