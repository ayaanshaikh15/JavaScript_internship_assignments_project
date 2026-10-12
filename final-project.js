// Final Project: 

console.log("--- Initializing Inventory System ---");


const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];


for (let attempt = 1; attempt <= 3; attempt++) {
  let name = prompt("Enter product name:");
  let price = Number(prompt("Enter product price:"));

  if (!name || isNaN(price) || price <= 0) {
    console.log("Invalid input, try again.");
    continue;
  }

  inventory.push({ name: name, price: price });
  console.log('[Prompt executed: User adds "' + name + '" at "$' + price + '"]');
  break;
}


function getCategory(price) {
  let level;
  if (price < 100) {
    level = 1;
  } else if (price < 500) {
    level = 2;
  } else {
    level = 3;
  }

  switch (level) {
    case 1:
      return "Budget";
    case 2:
      return "Standard";
    default:
      return "Premium";
  }
}


function getTotal(items) {
  let total = 0;
  items.forEach(item => {
    total += item.price;
  });
  return total;
}

const addTax = (amount, taxPercent = 10) => amount + amount * taxPercent / 100;


console.log("--- Processing Inventory Roster (forEach) ---");
inventory.forEach(function (item) {
  console.log("* Item: " + item.name + " (₹" + item.price + ") -> Category: " + getCategory(item.price));
});

console.log("--- Financial Analytics ---");
const total = getTotal(inventory);
console.log("Total Inventory Value: ₹" + total);

const affordable = inventory.filter(item => item.price < 200).map(item => item.name);
console.log("Filtered Affordable Items (Under ₹200):", affordable);

const report = inventory.map(item => item.name.toUpperCase() + ": ₹" + item.price);
console.log("Formatted Report List:", report);

console.log("Total with 10% tax: ₹" + addTax(total));
