// document.addEventListener("scroll", () => {
//     const cars = document.querySelectorAll(".car");
//     const viewportHeight = window.innerHeight;
  
//     cars.forEach(car => {
//       const carPosition = car.getBoundingClientRect().top;
  
//       // Trigger animation if the car is within the viewport
//       if (carPosition < viewportHeight * 0.5 && carPosition > 0) {
//         car.classList.add("animate");
//       } else {
//         car.classList.remove("animate");
//       }
//     });
//   });
  



document.addEventListener("DOMContentLoaded", () => {
  // Ensure the first car always has the animate class on page load
  const firstCar = document.querySelector(".car");
  if (firstCar) {
    firstCar.classList.add("animate");
  }
});

let lastScrollTop = 0; // Variable to track the last scroll position


document.addEventListener("scroll", () => {
  const cars = document.querySelectorAll(".car");
  const viewportHeight = window.innerHeight;

  // Get the current scroll position
  const currentScrollTop = window.scrollY;

  cars.forEach((car, index) => {
    const carPositionTop = car.getBoundingClientRect().top;
    const carPositionBottom = car.getBoundingClientRect().bottom;

    // Scroll Down: Trigger animation if the car is in the viewport
    if (currentScrollTop > lastScrollTop && carPositionTop < viewportHeight * 0.5 && carPositionBottom > 0) {
      car.classList.add("animate");
    }

    // Scroll Up: Reverse animation if the car is leaving the viewport (except for the first car)
    if (currentScrollTop < lastScrollTop && index !== 0 && carPositionBottom > viewportHeight * 0.8) {
      car.classList.remove("animate");
    }
  });

  // Update the last scroll position
  lastScrollTop = currentScrollTop;
});


// script.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});
document.querySelectorAll('.nav-links li a').forEach(link => {
  link.addEventListener('click', function (e) {
    const parent = this.parentElement;
    if (parent.querySelector('.dropdown-menu')) {
      e.preventDefault(); // Prevent navigation for dropdown parent links
      parent.classList.toggle('show'); // Toggle dropdown visibility
    }
  });
});

function closeMenu() {
  const nav = document.querySelector('.nav');
  nav.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
  });
});

function navigateToPage(location) {
  window.location.href = location; // Replace "book.html" with your target page
}

