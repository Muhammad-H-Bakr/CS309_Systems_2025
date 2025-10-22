const inventory = [
  { id: 101, name: "Laptop Pro", price: 1200, quantity: 5 },
  { id: 102, name: "Mechanical Keyboard", price: 120, quantity: 20 },
  { id: 103, name: "4K Monitor", price: 450, quantity: 10 },
  { id: 104, name: "Webcam HD", price: 50, quantity: 50 },
  { id: 105, name: "Gaming Mouse", price: 75, quantity: 30 },
];

const totalInventoryValue = inventory.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

console.log("Total Inventory Value:", totalInventoryValue);

const categories = {};

inventory.forEach((item) => {
  if (item.price >= 500) {
    categories["High"] = categories["High"] ? categories["High"] + 1 : 1;
  } else if (item.price >= 100) {
    categories["Medium"] = categories["Medium"] ? categories["Medium"] + 1 : 1;
  } else {
    categories["Low"] = categories["Low"] ? categories["Low"] + 1 : 1;
  }
});

console.log("Price Categories:", categories);
