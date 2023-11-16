
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");


const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 390) {
      current = section.getAttribute('id');
    }
  })

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.classList.contains(current)) {
      link.classList.add('active');
    }
  })
})


const navMenu = document.getElementById("nav-menu");

navLinks.forEach((n) => n.addEventListener("click", () => { navMenu.classList.remove("show") }));


const copy = document.getElementById("copy");
copy.addEventListener("click", () => {
  navigator.clipboard.writeText("himavarshithreddy@gmail.com");
  copy.innerHTML = "copied";
  setTimeout(() => {
    copy.innerHTML = null;
  }, 1000);
});

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});


sr.reveal(".home-title", {});
sr.reveal(".button", { delay: 10 });
sr.reveal(".home-img", { delay: 10 });
sr.reveal(".home-social-icon", { interval: 10 });


sr.reveal(".about-img", {});
sr.reveal(".about-subtitle", { delay: 10 });
sr.reveal(".about-text", { delay: 10 });






sr.reveal(".project-img", { interval: 10 });




var messageArr = ["Tech Enthusiast", "Web Developer"];
var currentMessageIndex = 0;
var textPosition = 0;
var speed = 100;
var delayBetweenMessages = 250; 

var jobTitleElement = document.querySelector("#jobTitle");
var placeholder = document.createElement('span');
placeholder.innerHTML = '&nbsp;'; 
jobTitleElement.appendChild(placeholder);

typewriter = () => {
    var currentMessage = messageArr[currentMessageIndex];
    var displayedText = currentMessage.substring(0, textPosition);
    
   
    jobTitleElement.replaceChild(document.createTextNode(displayedText), jobTitleElement.firstChild);

    if (textPosition < currentMessage.length) {
        textPosition++;
        setTimeout(typewriter, speed);
    } else {
        
        setTimeout(backspace, delayBetweenMessages);
    }
}

backspace = () => {
    var currentMessage = messageArr[currentMessageIndex];
    var displayedText = currentMessage.substring(0, textPosition);

    jobTitleElement.replaceChild(document.createTextNode(displayedText), jobTitleElement.firstChild);

    if (textPosition > 0) {
        textPosition--;
        setTimeout(backspace, speed);
    } else {
      
        jobTitleElement.replaceChild(document.createTextNode('\u00A0'), jobTitleElement.firstChild); // Use a non-breaking space
        textPosition = 0;
        currentMessageIndex = (currentMessageIndex + 1) % messageArr.length;
        setTimeout(typewriter, delayBetweenMessages);
    }
}

window.addEventListener("load", typewriter);

