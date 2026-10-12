const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

const form = document.getElementById('inventory-form');
const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const inventoryList = document.getElementById('inventory-list');
const itemCount = document.getElementById('item-count');
const totalValue = document.getElementById('total-value');
const taxedTotal = document.getElementById('taxed-total');
const affordableCount = document.getElementById('affordable-count');
const affordableItems = document.getElementById('affordable-items');
const reportList = document.getElementById('report-list');

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
      return { label: 'Budget', className: 'badge-budget' };
    case 2:
      return { label: 'Standard', className: 'badge-standard' };
    default:
      return { label: 'Premium', className: 'badge-premium' };
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

function renderInventory() {
  inventoryList.innerHTML = '';

  inventory.forEach(function (item) {
    const category = getCategory(item.price);
    const card = document.createElement('div');
    card.className = 'item-card';

    const info = document.createElement('div');
    info.innerHTML = `
      <h3>${item.name}</h3>
      <div class="item-meta">₹${item.price.toFixed(2)}</div>
    `;

    const badge = document.createElement('span');
    badge.className = `badge ${category.className}`;
    badge.textContent = category.label;

    card.appendChild(info);
    card.appendChild(badge);
    inventoryList.appendChild(card);
  });

  const total = getTotal(inventory);
  const affordable = inventory.filter(item => item.price < 200).map(item => item.name);
  const report = inventory.map(item => item.name.toUpperCase() + ': ₹' + item.price);

  itemCount.textContent = inventory.length;
  totalValue.textContent = '₹' + total.toFixed(2);
  taxedTotal.textContent = '₹' + addTax(total).toFixed(2);
  affordableCount.textContent = affordable.length;

  affordableItems.innerHTML = affordable.length
    ? affordable.map(name => `<li>${name}</li>`).join('')
    : '<li>No affordable items yet.</li>';

  reportList.innerHTML = report.length
    ? report.map(entry => `<li>${entry}</li>`).join('')
    : '<li>No inventory items yet.</li>';
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  let name = productNameInput.value.trim();
  let price = Number(productPriceInput.value);

  if (!name || isNaN(price) || price <= 0) {
    alert('Please enter a valid product name and price.');
    return;
  }

  inventory.push({ name: name, price: price });
  form.reset();
  productNameInput.focus();
  renderInventory();
});

renderInventory();
