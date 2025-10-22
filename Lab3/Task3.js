const productConfig = {
  productId: "LAP-PRO-101",
  basePrice: 1200,
  taxRate: 0.1,
  currentPrice: 1080,
  features: ["i7 Processor", "16GB RAM", "512GB SSD"],
  variants: [1080, 999, 1150],
};

const { productId, basePrice: MSRP, currentPrice } = productConfig;

console.log(`Product ID: ${productId}`);
console.log(`MSRP: $${MSRP}`);
console.log(`Current Price: $${currentPrice}`);

const [main, ...rest] = productConfig.features;
console.log(`Main Feature: ${main}`);
console.log(`Other Features: ${rest}`);

const productSummary = { ...productConfig, inStock: true };

console.log(productSummary);
