const inventory = [
  { id: 101, name: "Laptop Pro", price: 1200, isDiscounted: true },
  { id: 102, name: "Mechanical Keyboard", price: 120, isDiscounted: false },
  { id: 103, name: "4K Monitor", price: 450, isDiscounted: true },
  { id: 104, name: "Webcam HD", price: 50, isDiscounted: false },
  { id: 105, name: "Gaming Mouse", price: 75, isDiscounted: true },
];

const discountedItems = inventory.filter((item) => item.isDiscounted);
console.log("Discounted Items:", discountedItems);

const promoTags = discountedItems.map((item) => `${item.name} - ON SALE!`);
console.log("Promotional Tags:", promoTags);

// normally would think like this:
// const totalValue = inventory.reduce(
//   (total, item) => {
//     if (item.isDiscounted) {
//       total.DiscountedSum += item.price;
//     } else {
//       total.unDiscountedSum += item.price;
//     }
//     return total;
//   },
//   { DiscountedSum: 0, unDiscountedSum: 0 }
// );

//To actually do it properly, we can do it like this:
const totalValue = inventory.reduce(
  (t, { price, isDiscounted }) => (
    (t[isDiscounted ? "discounted" : "full"] += price), t
  ),
  { discounted: 0, full: 0 }
);

console.log("Total Value:", totalValue);
