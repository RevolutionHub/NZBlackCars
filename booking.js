function navigateToPage() {
  window.location.href = "booking.html"; // Replace "book.html" with your target page
}
let currentStep = 1;

function nextStep() {
	goToStep(currentStep + 1);
}

function goToStep(step) {
	if (step < 1 || step > 5) return; // Ensure step is within bounds

	// Hide current step
	document.getElementById(`step${currentStep}`).classList.remove("active");

	// Set the current step to the new step
	currentStep = step;

	// Show the selected step
	document.getElementById(`step${currentStep}`).classList.add("active");

	// Update step header
	const steps = document.querySelectorAll(".step-header div");
	steps.forEach((stepDiv, index) => {
		if (index === currentStep - 1) {
			stepDiv.classList.add("active");
		} else {
			stepDiv.classList.remove("active");
		}
	});
}
const formData = {};

// Function to handle Step 1 submission
function submitStep1() {
  // Collect Step 1 details
  formData.firstName = document.querySelector('#step1 input[type="text"]').value;
  formData.lastName = document.querySelector('#step1 .flex-item:nth-child(2) input').value;
  formData.fullname = formData.firstName + formData.lastName;
  formData.email = document.querySelector('#step1 input[type="email"]').value;
  formData.phone = document.querySelector('#step1 input[type="tel"]').value;
  formData.pickupLocation = document.querySelector('#step1 input[placeholder=""]').value;
  formData.pickupDate = document.querySelector('#step1 input[type="date"]').value;
  formData.pickupTime = document.querySelector('#step1 input[type="time"]').value;
  formData.pickupdatetime = formData.pickupDate + " " + formData.pickupTime;
  formData.dropoffLocation = document.querySelector('#step1 input[placeholder=""]').value;
  formData.dropoffDate = document.querySelector('#step1 .flex-row:nth-child(6) .flex-item:nth-child(1) input').value;
  formData.dropoffTime = document.querySelector('#step1 .flex-row:nth-child(6) .flex-item:nth-child(2) input').value;
  formData.dropoffdatetime = formData.dropoffDate + " " + formData.dropoffTime;
 

  // Proceed to Step 2
  nextStep();
}

// Function to handle Step 2 selection
function selectVehicle(selectedCar,imgsrc) {
  // Collect Step 2 details from the selected car
  formData.vehicleName = selectedCar.querySelector('h3').innerText;
  formData.seats = selectedCar.querySelector('p:nth-child(2)').innerText;
  formData.fuel = selectedCar.querySelector('p:nth-child(3)').innerText;
  formData.price = selectedCar.querySelector('p:nth-child(4)').innerText;
  formData.dynamicsrc = imgsrc;
  const length = Object.keys(formData).length;
    
  if(length > 5){
  // Proceed to Step 3 and populate data
 
  populateStep3();
  nextStep();
  }
  else{
    alert("Please fill step 1 request form.");
  }
}

// Function to populate Step 3
function populateStep3() {
  // Fill vehicle details
  document.querySelector('#step3 .image-section').innerHTML = `<img src="${formData.dynamicsrc}" alt="Car Image" style="width: 100%; border-radius: 5px;">`;
  document.querySelector('#step3 .car-details-inline .callname').innerHTML = `${formData.vehicleName}`;
  document.querySelector('#step3 .car-details-inline .seats').innerHTML = `<i class="fa fa-users"></i> ${formData.seats}`;
  document.querySelector('#step3 .car-details-inline .petrol').innerHTML = `<i class="fas fa-gas-pump"></i> ${formData.fuel}`;

  // Fill user details
  document.querySelector('#step3 .rate-section .fullname').innerHTML = `<strong style="color: #c6925f;">Full Name:</strong> ${formData.firstName} ${formData.lastName}`;
  document.querySelector('#step3 .rate-section .email').innerHTML = `<strong style="color: #c6925f;">Email:</strong> ${formData.email}`;
  document.querySelector('#step3 .rate-section .phone').innerHTML = `<strong style="color: #c6925f;">Phone:</strong> ${formData.phone}`;

  // Fill additional details
  document.querySelector('#step3 .rate-section .pickup').innerHTML = `<strong style="color: #c6925f;">Pickup Location:</strong> ${formData.pickupLocation}`;
  document.querySelector('#step3 .rate-section .pickupdatetime').innerHTML = `<strong style="color: #c6925f;">Pickup Date & Time:</strong> ${formData.pickupDate} ${formData.pickupTime}`;
  document.querySelector('#step3 .rate-section .return').innerHTML = `<strong style="color: #c6925f;">Return Location:</strong> ${formData.dropoffLocation}`;
  document.querySelector('#step3 .rate-section .returndatetime').innerHTML = `<strong style="color: #c6925f;">Return Date & Time:</strong> ${formData.dropoffDate} ${formData.dropoffTime}`;
  document.querySelector('#step3 .rate-section .price').innerHTML = `$ ${formData.price}`;
}

// script.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});
function closeMenu() {
  const nav = document.querySelector('.nav');
  nav.classList.remove('active');
}

//quote form on click submit event
document.getElementById('bookingdetails').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

   // Send the form data to Google Apps Script using Fetch API
  fetch('https://script.google.com/macros/s/AKfycbwJ3MVSBqetVDHA2om1eoo0btkOmGEDvLR0rnocA4WXDRCMHULKiBnfoQgZofrbyP5RsA/exec', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
      },
      body: JSON.stringify(formData), // Use FormData directly
  })
  .then(response => response.json())
  .then(data => {
    console.log("Success:", data);
    document.getElementById('successfullydone').style.display = 'block';
    document.getElementById('bookingdetails').style.display = 'none';
  })
  .catch(error => {
    console.error("Error:", error);
    document.getElementById('successfullydone').style.display = 'block';
    document.getElementById('bookingdetails').style.display = 'none';
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
