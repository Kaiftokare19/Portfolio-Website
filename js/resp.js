burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')

burger.addEventListener('click', () => {
  rightnav.classList.toggle('v-class-resp')
  navList.classList.toggle('v-class-resp')
  navbar.classList.toggle('h-nav-resp')
})

//For 3D Animations
const cube = document.querySelector('.cube');
let isSpinning = false;

function toggleSpin() {
  isSpinning = !isSpinning;
  cube.classList.toggle('spinning');
}

// Add mouse control
let startX, startY, isDragging = false;
let currentRotation = { x: 0, y: 0 };

document.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  startY = e.clientY;
  if (isSpinning) {
    toggleSpin();
  }
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const deltaX = e.clientX - startX;
  const deltaY = e.clientY - startY;

  currentRotation.x += deltaY * 0.5;
  currentRotation.y += deltaX * 0.5;

  cube.style.transform = `translateZ(-100px) rotateX(${currentRotation.x}deg) rotateY(${currentRotation.y}deg)`;

  startX = e.clientX;
  startY = e.clientY;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

//For read-more toggle 
function toggleText() {
  let moreText = document.querySelector(".more-text");
  let readMore = document.querySelector(".read-more");

  if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "inline";
      readMore.textContent = " Read Less";
  } else {
      moreText.style.display = "none";
      readMore.textContent = " Read More";
  }
}


//For Effect
function createTrail(e) {
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1',
    '#96CEB4', '#FFEEAD', '#D4A5A5'
  ];

  const trail = document.createElement('div');
  trail.className = 'cursor-trail';
  trail.style.left = e.clientX - 10 + 'px';
  trail.style.top = e.clientY - 10 + 'px';
  trail.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  document.body.appendChild(trail);

  // Animate and remove the trail
  let scale = 1;
  const animate = () => {
    scale -= 0.02;
    trail.style.transform = `scale(${scale})`;
    trail.style.opacity = scale;

    if (scale > 0) {
      requestAnimationFrame(animate);
    } else {
      trail.remove();
    }
  };

  requestAnimationFrame(animate);
}

// Throttle function to limit the number of trail elements
function throttle(func, limit) {
  let inThrottle;
  return function (e) {
    if (!inThrottle) {
      func(e);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Add mousemove event listener with throttling
document.addEventListener('mousemove', throttle(createTrail, 20));


//Contact Us Section
// Smooth scroll for navigation
document.querySelector('.nav-contact-btn').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#contact').scrollIntoView({
    behavior: 'smooth'
  });
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const toast = document.getElementById('toast');
  toast.classList.add('show');

  // Reset form
  this.reset();

  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
});

//Searching
function searchGoogle() {
  // Get the search query
  const query = document.getElementById("searchQuery").value.trim();

  // Check if the query is not empty
  if (query) {
    // Redirect to Google search with the query
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  } else {
    alert("Please enter something to search!");
  }
}

document.querySelector(".navbar").style.backgroundImage = "url('https://source.unsplash.com/1600x900/?city')";

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".image-track");
  const images = track.innerHTML;
  track.innerHTML += images; // Duplicate images for seamless loop
});

document.addEventListener("DOMContentLoaded", function () {
  const chatbotButton = document.getElementById("chatbot-button");
  const chatbot = document.getElementById("chatbot");

  chatbotButton.addEventListener("click", function () {
    chatbot.classList.toggle("hidden");
  });
});
