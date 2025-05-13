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

const orders = [];

menuAll.addEventListener("click", () => {
  showAllMenu();
  hideProducts();
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
});

menuChicken.addEventListener("click", () => {
  containerChicken.classList.remove("d-none");
  containerBurgers.classList.add("d-none");
  containerPotato.classList.add("d-none");

  hideProducts();
});

menuPotato.addEventListener("click", () => {
  containerPotato.classList.remove("d-none");
  containerChicken.classList.add("d-none");
  containerBurgers.classList.add("d-none");

  hideProducts();
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

    console.log(product);

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

      console.log(product.size);
      if (!product.size) {
        alert("Choose your size");
        return;
      }

      modalBody.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-danger"> ${product.name} </h5>
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

{
  /* <form action="/signUp" method="get">
<h5 class="card-title text-danger">Purchase Form</h5>
      <label class="form-label" for="fullName">Full name:</label>
<input class="form-control" type="text" id="fullName" name="fullName" required />

<label class="form-label mt-3" for="city">Choose your city:</label>
<select class="form-select" id="city" name="city" required>
<option value="Dnipro">Dnipro</option>
<option value="Kyiv">Kyiv</option>
<option value="Lviv">Lviv</option>
<option value="Odessa">Odessa</option>
</select>

<label class="form-label mt-3" for="post">Choose your post:</label>
<select class="form-select" id="post" name="post" required>
<option value="Post_1">Post_1</option>
<option value="Post_2">Post_2</option>
<option value="Post_3">Post_3</option>
<option value="Post_4">Post_4</option>
</select>

<div>
<p class = "mt-3">Select payment method:</p>
<div>
<input
  type="radio"
  name="payment"
  value="pre-payment"
  id="pre-payment"
  required
/>
<label class="form-label " for="pre-payment">Pre-payment</label>
</div>
<div>
<input
  type="radio"
  name="payment"
  value="post-payment"
  id="post-payment"
  required
/>
<label class="form-label " for="post-payment">Post-payment</label>
</div>
</div>

</form> */
}
