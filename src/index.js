import "./styles.scss";

const menuAll = document.querySelector("#menu-all");
const menuBurgers = document.querySelector("#menu-burgers");
const menuChicken = document.querySelector("#menu-chicken");
const menuPotato = document.querySelector("#menu-potato");
const menuOrders = document.querySelector("#menu-orders");

const containerBurgers = document.querySelector("#container-burgers");
const containerChicken = document.querySelector("#container-chicken");
const containerPotato = document.querySelector("#container-potato");

const orders = [];

menuAll.addEventListener("click", () => {
  containerPotato.classList.remove("d-none");
  containerChicken.classList.remove("d-none");
  containerBurgers.classList.remove("d-none");
});

menuBurgers.addEventListener("click", () => {
  containerBurgers.classList.remove("d-none");
  containerChicken.classList.add("d-none");
  containerPotato.classList.add("d-none");
});

menuChicken.addEventListener("click", () => {
  containerChicken.classList.remove("d-none");
  containerBurgers.classList.add("d-none");
  containerPotato.classList.add("d-none");
});

menuPotato.addEventListener("click", () => {
  containerPotato.classList.remove("d-none");
  containerChicken.classList.add("d-none");
  containerBurgers.classList.add("d-none");
});
