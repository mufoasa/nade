// Menu Data
const menuItems = [
  // Starters

  {
    name: "Chicken Wings",
    description: "Crispy wings with choice of sauce",
    price: 150,
    category: "starters",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "Mozzarella Sticks",
    description: "Golden fried mozzarella with marinara",
    price: 450,
    category: "starters",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "Nachos Supreme",
    description: "Loaded nachos with cheese and toppings",
    price: 600,
    category: "starters",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  // Burgers
  {
    name: "Classic Burger",
    description: "Beef patty, lettuce, tomato, special sauce",
    price: 700,
    category: "burgers",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "Bacon Cheeseburger",
    description: "Double beef, bacon, cheddar, BBQ sauce",
    price: 850,
    category: "burgers",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "Chicken Burger",
    description: "Grilled chicken breast with fresh veggies",
    price: 750,
    category: "burgers",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "Veggie Burger",
    description: "Plant-based patty with avocado",
    price: 700,
    category: "burgers",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  // Pizza
  {
    name: "Margherita Pizza",
    description: "Classic tomato sauce, mozzarella, basil",
    price: 800,
    category: "pizza",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "Pepperoni Pizza",
    description: "Tomato sauce, mozzarella, pepperoni",
    price: 900,
    category: "pizza",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "BBQ Chicken Pizza",
    description: "BBQ sauce, chicken, onions, cheese",
    price: 1000,
    category: "pizza",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "Vegetarian Pizza",
    description: "Mixed vegetables, olives, feta cheese",
    price: 950,
    category: "pizza",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  // Pasta
  {
    name: "Carbonara",
    description: "Creamy sauce with bacon and parmesan",
    price: 850,
    category: "pasta",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "Bolognese",
    description: "Traditional meat sauce with spaghetti",
    price: 800,
    category: "pasta",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "Alfredo",
    description: "Rich cream sauce with chicken",
    price: 900,
    category: "pasta",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  // Sandwiches
  {
    name: "Club Sandwich",
    description: "Triple-decker with chicken, bacon, egg",
    price: 650,
    category: "sandwiches",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "BLT Sandwich",
    description: "Bacon, lettuce, tomato on toasted bread",
    price: 550,
    category: "sandwiches",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "Grilled Cheese",
    description: "Three cheese blend on sourdough",
    price: 500,
    category: "sandwiches",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  // Snacks
  {
    name: "French Fries",
    description: "Crispy golden fries with dipping sauce",
    price: 300,
    category: "snacks",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "Onion Rings",
    description: "Beer-battered onion rings",
    price: 350,
    category: "snacks",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "Popcorn Chicken",
    description: "Bite-sized crispy chicken pieces",
    price: 400,
    category: "snacks",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  // Desserts
  {
    name: "Chocolate Brownie",
    description: "Warm brownie with ice cream",
    price: 450,
    category: "desserts",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "Cheesecake",
    description: "New York style with berry sauce",
    price: 500,
    category: "desserts",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "Ice Cream Sundae",
    description: "Three scoops with toppings",
    price: 400,
    category: "desserts",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  // Hot Drinks
  {
    name: "Espresso",
    description: "Strong Italian coffee",
    price: 200,
    category: "hot-drinks",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "Cappuccino",
    description: "Espresso with steamed milk foam",
    price: 250,
    category: "hot-drinks",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "Hot Chocolate",
    description: "Rich chocolate with whipped cream",
    price: 300,
    category: "hot-drinks",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  // Cold Drinks
  {
    name: "Coca Cola",
    description: "Classic refreshing cola",
    price: 200,
    category: "cold-drinks",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "Fresh Orange Juice",
    description: "Freshly squeezed oranges",
    price: 350,
    category: "cold-drinks",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "Iced Coffee",
    description: "Cold brew with ice",
    price: 300,
    category: "cold-drinks",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "Lemonade",
    description: "Homemade fresh lemonade",
    price: 250,
    category: "cold-drinks",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  // Energy Drinks
  {
    name: "Red Bull",
    description: "Original energy drink",
    price: 300,
    category: "energy-drinks",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "Monster Energy",
    description: "High energy boost",
    price: 350,
    category: "energy-drinks",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
  {
    name: "G Fuel",
    description: "Gaming energy formula",
    price: 400,
    category: "energy-drinks",
    image: "https://i.imgur.com/SHUwr1h.png",
  },
]

// Function to render menu items
function renderMenuItems(category = "all") {
  const menuGrid = document.getElementById("menuGrid")

  if (!menuGrid) return

  // Filter items based on category
  const filteredItems = category === "all" ? menuItems : menuItems.filter((item) => item.category === category)

  // Generate HTML for menu items
 // Generate HTML for menu items
  menuGrid.innerHTML = filteredItems
    .map(
      (item) => `
        <div class="menu-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3>${item.name}</h3>
                    <span class="menu-price">${item.price} Den</span>
                </div>
                <p>${item.description}</p>
            </div>
        </div>
    `,
    )
    .join("")
}

// Menu filter functionality
document.addEventListener("DOMContentLoaded", () => {
  const menuGrid = document.getElementById("menuGrid")
  if (menuGrid) {
    // Initial render of all menu items
    renderMenuItems()

    // Menu filter buttons
    const filterButtons = document.querySelectorAll(".filter-btn")
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"))
        // Add active class to clicked button
        this.classList.add("active")
        // Filter menu items
        const category = this.getAttribute("data-category")
        renderMenuItems(category)
      })
    })
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const navMenu = document.getElementById("navMenu")

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-menu a")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu) {
        navMenu.classList.remove("active")
      }
    })
  })

  // Contact form submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Thank you for your message! We will contact you soon.")
      contactForm.reset()
    })
  }

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})
