// Toggle Menu for Smaller Screens
document.querySelector('.menu').addEventListener('click', () => {
    const menu = document.querySelector('.menu-nav');
    menu.classList.toggle('visible');
  });
  
  // Search Functionality
  document.querySelector('.search-section button').addEventListener('click', () => {
    const searchInput = document.querySelector('.search-section input').value.trim();
    if (searchInput) {
      alert(`Searching for: ${searchInput}`);
      // You can redirect the user to a search page if needed:
      // window.location.href = `/search?q=${searchInput}`;
    } else {
      alert('Please enter a search term!');
    }
  });
  
  // Dropdown for Country Selection (if required)
  const countrySelector = document.querySelector('.right-section span');
  countrySelector.addEventListener('click', () => {
    alert('Select your country from the dropdown!');
    // Implement country dropdown functionality here
  });
  
  // Wishlist and Cart Alerts
  document.querySelectorAll('.right-section img').forEach((icon, index) => {
    icon.addEventListener('click', () => {
      if (index === 0) {
        alert('Redirecting to Login/Signup...');
      } else if (index === 1) {
        alert('Opening Wishlist...');
      } else if (index === 2) {
        alert('Opening Cart...');
      }
    });
  });
  
  // Adjust Menu Visibility on Window Resize
  window.addEventListener('resize', () => {
    const menu = document.querySelector('.menu-nav');
    if (window.innerWidth > 768) {
      menu.classList.remove('visible');
    }
  });
  
  let currentSlide = 0;

  function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
  
    currentSlide += direction;
  
    if (currentSlide < 0) {
      currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
      currentSlide = 0;
    }
  
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  
  window.onload = function() {
    // Automatically slide every 3 seconds
    setInterval(() => changeSlide(1), 3000);
  };
  const carouselSlides = document.getElementById("carouselSlides");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  
  let currentIndex = 0;
  const totalSlides = document.querySelectorAll(".carousel-slides .slide").length;
  
  function showSlide(index) {
    const slideWidth = document.querySelector(".slide").clientWidth;
    carouselSlides.style.transform = `translateX(-${index * slideWidth}px)`;
  }
  
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  });
  
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  });
  
  // Make it responsive on resize
  window.addEventListener("resize", () => {
    showSlide(currentIndex);
  });
  
  // Auto-slide (optional)
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }, 5000);
  document.addEventListener("DOMContentLoaded", () => {
    const categoryItems = document.querySelectorAll(".category-item");
    const button = document.querySelector(".view-all-btn");
  
    // Add a delay effect to each card
    categoryItems.forEach((item, index) => {
      item.style.animation = `fadeIn 0.5s ease ${index * 0.2}s forwards`;
    });
  
    // Button hover animation (pulse effect)
    button.addEventListener("mouseenter", () => {
      button.style.animation = "pulse 0.5s ease infinite";
    });
  
    button.addEventListener("mouseleave", () => {
      button.style.animation = "none";
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");
  
    // Add fade-in animation with delay
    galleryItems.forEach((item, index) => {
      item.style.animation = `fadeIn 0.5s ease ${index * 0.2}s forwards`;
    });
  });
  
  
  