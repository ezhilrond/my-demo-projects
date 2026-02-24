const cars = [
  {
    id: 1,
    name: "BMW X5",
    price: 7000,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54c"
  },
  {
    id: 2,
    name: "Audi A6",
    price: 6500,
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6a1"
  },
  {
    id: 3,
    name: "Mercedes C-Class",
    price: 7500,
    image: "https://images.unsplash.com/photo-1617814065894-9c4c2b5c9f1a"
  }
];

const carList = document.getElementById("carList");
let selectedCar = null;

cars.forEach(car => {
  carList.innerHTML += `
    <div class="car-card">
      <img src="${car.image}" alt="${car.name}">
      <div class="car-content">
        <h3>${car.name}</h3>
        <p class="price">₹${car.price} / day</p>
        <button onclick="openModal(${car.id})">Book Now</button>
      </div>
    </div>
  `;
});

function openModal(id) {
  selectedCar = cars.find(car => car.id === id);
  document.getElementById("bookingModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("bookingModal").style.display = "none";
}

function confirmBooking() {
  const name = document.getElementById("customerName").value;
  const email = document.getElementById("customerEmail").value;
  const pickupDate = document.getElementById("pickupDate").value;
  const pickupTime = document.getElementById("pickupTime").value;
  const returnDate = document.getElementById("returnDate").value;

  if (!name || !email || !pickupDate || !pickupTime || !returnDate) {
    alert("Please fill all fields!");
    return;
  }

  alert(`
Booking Confirmed!
Car: ${selectedCar.name}
Pickup: ${pickupDate} at ${pickupTime}
Return: ${returnDate}
  `);

  closeModal();
}

function scrollToCars() {
  window.scrollTo({ top: 200, behavior: 'smooth' });
}