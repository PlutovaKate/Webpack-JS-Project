import { Product } from "./product";
import "./styles.scss";

const menuAll = document.querySelector("#menu-all");
const menuBurgers = document.querySelector("#menu-burgers");
const menuChicken = document.querySelector("#menu-chicken");
const menuPotato = document.querySelector("#menu-potato");
const menuOrders = document.querySelector("#menu-orders");

const containerBurgers = document.querySelector("#container-burgers");
const containerChicken = document.querySelector("#container-chicken");
const containerPotato = document.querySelector("#container-potato");

const cardCheeseBurger = document.querySelector("#card-cheeseBurger");
const cardHamBurger = document.querySelector("#card-hamBurger");
const cardTastyJunior = document.querySelector("#card-tastyJunior");
const cardChickenRoll = document.querySelector("#card-chickenRoll");
const cardMcChicken = document.querySelector("#card-mcChicken");
const cardMcNuggets = document.querySelector("#card-mcNuggets");
const cardFrenchFries = document.querySelector("#card-frenchFries");
const cardPotatoDips = document.querySelector("#card-potatoDips");
const cardRusticPotato = document.querySelector("#card-rusticPotato");

const cheeseBurger = document.querySelector("#cheeseBurger");
const hamBurger = document.querySelector("#hamBurger");
const tastyJunior = document.querySelector("#tastyJunior");
const chickenRoll = document.querySelector("#chickenRoll");
const mcChicken = document.querySelector("#mcChicken");
const mcNuggets = document.querySelector("#mcNuggets");
const frenchFries = document.querySelector("#frenchFries");
const potatoDips = document.querySelector("#potatoDips");
const rusticPotato = document.querySelector("#rusticPotato");

const allBtnCancel = document.querySelectorAll(".btnCancel");
const allBtnAdd = document.querySelectorAll(".btnAdd");
const btnSaveModal = document.querySelector(".btnSaveModal");
const formContainer = document.querySelector("#form-container");
const form = document.querySelector("#form");
const orderList = document.querySelector("#orderList");

const orders = [];

const alert = document.querySelector("#alert");

function showAlert() {
  alert.classList.remove("d-none");
}

function hideOrderList() {
  orderList.classList.add("d-none");
}

menuAll.addEventListener("click", () => {
  showAllMenu();
  hideProducts();
  hideOrderList();
});

function showAllMenu() {
  containerPotato.classList.remove("d-none");
  containerChicken.classList.remove("d-none");
  containerBurgers.classList.remove("d-none");
}

menuBurgers.addEventListener("click", () => {
  containerBurgers.classList.remove("d-none");
  containerChicken.classList.add("d-none");
  containerPotato.classList.add("d-none");

  hideProducts();
  hideOrderList();
});

menuChicken.addEventListener("click", () => {
  containerChicken.classList.remove("d-none");
  containerBurgers.classList.add("d-none");
  containerPotato.classList.add("d-none");

  hideProducts();
  hideOrderList();
});

menuPotato.addEventListener("click", () => {
  containerPotato.classList.remove("d-none");
  containerChicken.classList.add("d-none");
  containerBurgers.classList.add("d-none");

  hideProducts();
  hideOrderList();
});

function hideMenu() {
  containerBurgers.classList.add("d-none");
  containerChicken.classList.add("d-none");
  containerPotato.classList.add("d-none");
}

cheeseBurger.addEventListener("click", () => {
  cardCheeseBurger.classList.remove("d-none");
  hideMenu();
});

hamBurger.addEventListener("click", () => {
  cardHamBurger.classList.remove("d-none");
  hideMenu();
});

tastyJunior.addEventListener("click", () => {
  cardTastyJunior.classList.remove("d-none");
  hideMenu();
});

chickenRoll.addEventListener("click", () => {
  cardChickenRoll.classList.remove("d-none");
  hideMenu();
});

mcChicken.addEventListener("click", () => {
  cardMcChicken.classList.remove("d-none");
  hideMenu();
});

mcNuggets.addEventListener("click", () => {
  cardMcNuggets.classList.remove("d-none");
  hideMenu();
});

frenchFries.addEventListener("click", () => {
  cardFrenchFries.classList.remove("d-none");
  hideMenu();
});

potatoDips.addEventListener("click", () => {
  cardPotatoDips.classList.remove("d-none");
  hideMenu();
});

rusticPotato.addEventListener("click", () => {
  cardRusticPotato.classList.remove("d-none");
  hideMenu();
});

function hideProducts() {
  cardCheeseBurger.classList.add("d-none");
  cardHamBurger.classList.add("d-none");
  cardTastyJunior.classList.add("d-none");
  cardChickenRoll.classList.add("d-none");
  cardMcChicken.classList.add("d-none");
  cardMcNuggets.classList.add("d-none");
  cardFrenchFries.classList.add("d-none");
  cardPotatoDips.classList.add("d-none");
  cardRusticPotato.classList.add("d-none");
}

allBtnCancel.forEach((btnCancel) => {
  btnCancel.addEventListener("click", () => {
    showAllMenu();
    hideProducts();
  });
});

allBtnAdd.forEach((btnAdd) => {
  btnAdd.addEventListener("click", (event) => {
    const card = event.target.closest(".container");
    const productName = card.dataset.productName || "Product";

    const sizeInput = card.querySelector('input[type="radio"]:checked');
    let size;

    if (sizeInput) {
      switch (sizeInput.value) {
        case "small":
          size = Product.SIZE_SMALL;
          break;
        case "medium":
          size = Product.SIZE_MEDIUM;
          break;
        case "large":
          size = Product.SIZE_LARGE;
          break;
      }
    }

    const product = new Product(size, productName);

    const mayo = card.querySelector('[data-topping^="toppingMayo"]');
    const sauce = card.querySelector('[data-topping^="toppingSauce"]');

    if (mayo && mayo.checked) product.addTopping(Product.TOPPING_MAYO);
    if (sauce && sauce.checked) product.addTopping(Product.TOPPING_SAUCE);

    orders.push(product);

    renderModal();
  });
});

function renderModal() {
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = "";

  orders.forEach(() => {
    orders.forEach((product) => {
      const toppingsList =
        product.toppings
          .map((t) => (t === Product.TOPPING_MAYO ? "Mayo" : "Sauce"))
          .join(", ") || "No toppings";

      modalBody.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-danger"> ${product.name} </h5>
        <img src="https://s7d1.scene7.com/is/image/mcdonalds/nav_BKFT_Muffin_Roll:category-panel-left-desktop"/>
               <p class="card-text"><strong>Size: </strong> ${
                 product.size.size
               }</p>
        <p class="card-text"><strong>Toppings: </strong>${toppingsList}</p>
  <p class="card-text "><strong>Total price: ${product.calculatePrice()} UAH </strong></p>
        
      </div>
    </div>
        `;
    });
  });
}

btnSaveModal.addEventListener("click", () => {
  formContainer.classList.remove("d-none");
  hideProducts();
});

const today = new Date().toLocaleString("en", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

const dateToday = document.querySelector(".date-today");
dateToday.textContent = `Date: ${today}`;

const orderKey = `Order_${today}`;

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  form.classList.add("d-none");
  showAllMenu();
  showAlert();

  const formData = new FormData(form);

  const values = {
    fullName: formData.get("fullName"),
    city: formData.get("city"),
    post: formData.get("post"),
    payment: formData.get("payment"),
    date: today,
    comment: formData.get("comment"),

    products: orders.map((product) => ({
      name: product.name,
      size: product.size.size,
      price: product.calculatePrice(),
    })),
  };

  localStorage.setItem(orderKey, JSON.stringify(values));

  form.reset();
  orders.length = 0;
}

menuOrders.addEventListener("click", makeListOfOrders);

function makeListOfOrders() {
  hideMenu();
  orderList.classList.remove("d-none");
  orderList.innerHTML = ``;

  const orderButtons = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key.startsWith("Order_")) continue;

    const orderData = JSON.parse(localStorage.getItem(key));
    const orderIndex = i;

    orderList.innerHTML += `
    <div class="col">
      <div class="card h-100 border-danger">
        <div class="card-body">
          <h5 class="card-title">${orderData.date}</h5>
          <p class="card-text short-info">
            ${orderData.products
              .map(
                (product) =>
                  `Product: ${product.name}<br>Size: ${product.size}<br>Price: ${product.price} UAH`
              )
              .join("<hr>")}
          </p>
  
          <div class="more-info d-none mt-2">
            <p><strong>Full name:</strong> ${orderData.fullName}</p>
            <p><strong>City:</strong> ${orderData.city}</p>
            <p><strong>Post:</strong> ${orderData.post}</p>
            <p><strong>Payment:</strong> ${orderData.payment}</p>
            <p><strong>Comment:</strong> ${
              orderData.comment || "No comment"
            }</p>
          </div>
  
          <button class="btn btn-warning btnMoreInfoOrder" data-order-index="${orderIndex}">More info...</button>
          <button class="btn btn-danger btnDeleteOrder" data-key="${key}">Delete</button>
        </div>
      </div>
    </div>`;

    orderButtons.push({ key, orderData, index: orderIndex });
  }

  const AllBtnMoreInfoOrder = document.querySelectorAll(".btnMoreInfoOrder");

  AllBtnMoreInfoOrder.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      const moreInfoBlock = card.querySelector(".more-info");

      moreInfoBlock.classList.toggle("d-none");

      btn.textContent = moreInfoBlock.classList.contains("d-none")
        ? "More info..."
        : "Hide info";
    });
  });

  const allBtnDeleteOrder = document.querySelectorAll(".btnDeleteOrder");

  allBtnDeleteOrder.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.key;
      localStorage.removeItem(key);
      makeListOfOrders();
    });
  });
}
