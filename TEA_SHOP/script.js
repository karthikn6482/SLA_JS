const Menu = document.getElementById("menu");
const Categories = document.getElementById("categories");

Menu.addEventListener("click", () => {
  Menu.style.display = "none";
  Categories.style.display = "block";
});

const TeaBtn = document.getElementById("tea");
const TeaItems = document.getElementById("tea_list");
TeaItems.style.display = "none";
TeaBtn.addEventListener("click", () => {
  TeaBtn.style.display = "none";
  TeaItems.style.display = "block";
});

const CoffeeBtn = document.getElementById("coffee");
const CoffeeItems = document.getElementById("coffee_list");
CoffeeItems.style.display = "none";
CoffeeBtn.addEventListener("click", () => {
  CoffeeBtn.style.display = "none";
  CoffeeItems.style.display = "block";
});

const JuiceBtn = document.getElementById("juice");
const JuiceItems = document.getElementById("juice_list");
JuiceItems.style.display = "none";
JuiceBtn.addEventListener("click", () => {
  JuiceBtn.style.display = "none";
  JuiceItems.style.display = "block";
});

const orderTitle = document.getElementById("order_title");
const orderImage = document.getElementById("order_image");
const bill = document.getElementById("bill");
const payBtn = document.getElementById("payment");
const cancelBtn = document.getElementById("cancel");

bill.style.display = "none";
payBtn.style.display = "none";
cancelBtn.style.display = "none";

let total = 0;

const GreenTea = document.getElementById("green_tea");
GreenTea.addEventListener("click", () => {
  orderTitle.textContent = "Green Tea added to order ₹25";
  orderImage.src = "assets/Green Tea.jpg";
  orderImage.style.display = "block";
  bill.style.display = "block";
  payBtn.style.display = "block";
  cancelBtn.style.display = "block";
  total += 25;
  bill.textContent = "Total Bill: ₹" + total;
});

const GingerTea = document.getElementById("ginger_tea");
GingerTea.addEventListener("click", () => {
  orderTitle.textContent = "Ginger Tea added to order ₹30";
  orderImage.src = "assets/Masala Tea.jfif";
  orderImage.style.display = "block";
  bill.style.display = "block";
  payBtn.style.display = "block";
  cancelBtn.style.display = "block";
  total += 30;
  bill.textContent = "Total Bill: ₹" + total;
});

const ColdCoffee = document.getElementById("cold_coffee");
ColdCoffee.addEventListener("click", () => {
  orderTitle.textContent = "Cold Coffee added to order ₹50";
  orderImage.src = "assets/Cold coffee.jfif";
  orderImage.style.display = "block";
  bill.style.display = "block";
  payBtn.style.display = "block";
  cancelBtn.style.display = "block";
  total += 50;
  bill.textContent = "Total Bill: ₹" + total;
});

const HotCoffee = document.getElementById("hot_coffee");
HotCoffee.addEventListener("click", () => {
  orderTitle.textContent = "Hot Coffee added to order ₹35";
  orderImage.src = "assets/Hot coffee.jfif";
  orderImage.style.display = "block";
  bill.style.display = "block";
  payBtn.style.display = "block";
  cancelBtn.style.display = "block";
  total += 35;
  bill.textContent = "Total Bill: ₹" + total;
});

const AppleJuice = document.getElementById("apple_juice");
AppleJuice.addEventListener("click", () => {
  orderTitle.textContent = "Apple Juice added to order ₹45";
  orderImage.src = "assets/Apple juice.jfif";
  orderImage.style.display = "block";
  bill.style.display = "block";
  payBtn.style.display = "block";
  cancelBtn.style.display = "block";
  total += 45;
  bill.textContent = "Total Bill: ₹" + total;
});

const OrangeJuice = document.getElementById("orange_juice");
OrangeJuice.addEventListener("click", () => {
  orderTitle.textContent = "Orange Juice added to order ₹40";
  orderImage.src = "assets/Orange juice.jfif";
  orderImage.style.display = "block";
  bill.style.display = "block";
  payBtn.style.display = "block";
  cancelBtn.style.display = "block";
  total += 40;
  bill.textContent = "Total Bill: ₹" + total;
});

payBtn.addEventListener("click", () => {
  orderTitle.textContent = "Payment Successful! Total Paid ₹" + total;
  orderImage.style.display = "none";
  bill.style.display = "none";
  payBtn.style.display = "none";
  cancelBtn.style.display = "none";
  total = 0;
});

cancelBtn.addEventListener("click", () => {
  orderTitle.textContent = "Order Cancelled ❌";
  orderImage.style.display = "none";
  bill.style.display = "none";
  payBtn.style.display = "none";
  cancelBtn.style.display = "none";
  total = 0;
});
