const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container img", {
  duration: 1000,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content h3", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__content .about__grid", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".real-estate-options", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".search__container", {
  ...scrollRevealOption,
  delay: 2000,
});

// contact container
ScrollReveal().reveal(".contact__image img", {
  ...scrollRevealOption,
  origin: "left",
});

// Initialize Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  navigation: {
      nextEl: '#swiper-button-next',
      prevEl: '#swiper-button-prev',
  },
});

// Event listeners for custom navigation buttons
document.getElementById('swiper-button-next').addEventListener('click', () => {
  swiper.slideNext();
});

document.getElementById('swiper-button-prev').addEventListener('click', () => {
  swiper.slidePrev();
});

function openForm() {
  document.getElementById("popupForm").style.display = "block";
}
function openAgent() {
  document.getElementById("AgentForm").style.display = "block";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

function closeAgent() {
  document.getElementById("AgentForm").style.display = "none";
}

function showLoginForm() {
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
}

function showRegisterForm() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
}

function validateForm() {
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var age = document.getElementById("age").value;
  var phoneno = document.getElementById("phone").value;
  if (!name || !password || !email || !age || !phoneno) {
    errorMessage.textContent = "All fields are required.";
    return false;
}

  // Name validation: Should not be empty
  if (name.trim() === "") {
      alert("Name is required.");
      return false; // Prevent form submission
  }

  // Email validation: Simple regex pattern for email format
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false; // Prevent form submission
  }

  // Password validation: At least 6 characters
  if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false; // Prevent form submission
  }

  var phonePattern = /^[0-9]{10}$/;
            if (!phonePattern.test(phoneno)) {
                errorMessage.textContent = "Phone number must be 10 digits.";
                return false;
            }

  // If all checks pass, allow the form to be submitted
  return true;
}

document.querySelector('.search-form').addEventListener('submit', function(event) {
  event.preventDefault();
  let query = document.getElementById('search-input').value;
  let propertyType = document.getElementById('property-type').value;
  let maxBudget = document.getElementById('max-budget').value;
  let postedBy = document.getElementById('posted-by').value;
  let bedrooms = document.getElementById('bedrooms').value;

  // Construct search query or filter parameters
  let searchParams = new URLSearchParams({
      query: query,
      propertyType: propertyType,
      maxBudget: maxBudget,
      postedBy: postedBy,
      bedrooms: bedrooms
  });

  // Redirect to search results page or perform AJAX request
  window.location.href = `/search?${searchParams.toString()}`;
});
