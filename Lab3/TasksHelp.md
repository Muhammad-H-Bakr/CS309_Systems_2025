## **🌟 Task 1: Product Screening and Tagging (Map & Filter)**

### **The Scenario**

You manage a product catalog. You need to identify products that are currently **on sale** (discounted) and create promotional tags for them.

### **The Data**

const inventory \= \[  
  { id: 101, name: 'Laptop Pro', price: 1200, isDiscounted: true },  
  { id: 102, name: 'Mechanical Keyboard', price: 120, isDiscounted: false },  
  { id: 103, name: '4K Monitor', price: 450, isDiscounted: true },  
  { id: 104, name: 'Webcam HD', price: 50, isDiscounted: false },  
  { id: 105, name: 'Gaming Mouse', price: 75, isDiscounted: true },  
\];

### **The Tasks**

1. **Filter Discounted Items:** Use the **filter()** method to create a new array containing only the products where isDiscounted is true.  
2. **Generate Promo Tags:** Use the **map()** method on the filtered array to create a new array of strings. Each string should be a tag in the format: "\[Name\] \- ON SALE\!".

### **Expected Output**

\[  
  "Laptop Pro \- ON SALE\!",  
  "4K Monitor \- ON SALE\!",  
  "Gaming Mouse \- ON SALE\!"  
\]

---

## **📝 Task 2: Inventory Valuation and Categorization (Reduce & ForEach)**

### **The Scenario**

You need to calculate the **total value** of the stock and then count how many products fall into different **price categories**.

### **The Data**

(Using the same inventory data from Task 1, but assume you've added a quantity field for this task.)

const inventory \= \[  
  { id: 101, name: 'Laptop Pro', price: 1200, quantity: 5 },  
  { id: 102, name: 'Mechanical Keyboard', price: 120, quantity: 20 },  
  { id: 103, name: '4K Monitor', price: 450, quantity: 10 },  
  { id: 104, name: 'Webcam HD', price: 50, quantity: 50 },  
  { id: 105, name: 'Gaming Mouse', price: 75, quantity: 30 },  
\];

### **The Tasks**

1. **Calculate Total Inventory Value:** Use the **reduce()** method to find the sum of the **total value** for all products: (price \* quantity).  
2. **Count Price Categories:** Use the **forEach()** method to iterate over the array and create an object that counts products based on their price: **'Low'** (), **'Medium'** ( and ), **'High'** ().

### **Expected Output**

1. **Total Inventory Value:** 1200\*5 \+ 120\*20 \+ 450\*10 \+ 50\*50 \+ 75\*30 \= 6000 \+ 2400 \+ 4500 \+ 2500 \+ 2250 \= 17650  
2. **Price Category Counts:**  
   JavaScript  
   {  
     "Low": 2,     // Webcam HD, Gaming Mouse  
     "Medium": 2,  // Mechanical Keyboard, 4K Monitor  
     "High": 1     // Laptop Pro  
   }

---

## **🚀 Task 3: Product Configuration and Key Extraction (Destructuring & Spread)**

### **The Scenario**

You are setting up a product configuration page. You need to quickly extract key IDs and the best price options, and merge base product data with its feature list.

### **The Data**

(A new object combining product data for this task.)

const productConfig \= {  
  productId: 'LAP-PRO-101',  
  basePrice: 1200,  
  taxRate: 0.1,  
  currentPrice: 1080,  
  features: \['i7 Processor', '16GB RAM', '512GB SSD'\],  
  variants: \[1080, 999, 1150\]  
};

### **The Tasks**

1. **Destructure Prices:** Extract **productId**, **currentPrice**, and rename **basePrice** to **MSRP** using **object destructuring**.  
2. **Destructure Features:** Extract the most important feature (mainFeature) and collect the rest of the features into an array (otherFeatures) using **array destructuring and the rest operator (...)**.  
3. **Merge Data:** Create a new productSummary object by combining the properties of productConfig with a new inStock property using the **spread operator (...)**.

### **Expected Output**

1. productId: 'LAP-PRO-101'  
2. MSRP: 1200  
3. mainFeature: 'i7 Processor'  
4. otherFeatures: \['16GB RAM', '512GB SSD'\]  
5. productSummary object:  
   JavaScript  
   {  
     productId: 'LAP-PRO-101',  
     basePrice: 1200,  
     taxRate: 0.1,  
     currentPrice: 1080,  
     features: \['i7 Processor', '16GB RAM', '512GB SSD'\],  
     variants: \[1080, 999, 1150\],  
     inStock: true   
   }

   (Note: You must define inStock: true while merging).

---

## 

## **🔄 Task 4: Prioritization and Mapping (Sort & Array to Object)**

### **The Scenario**

You have a list of new feature requests with their priority levels. You need to sort them for the development team and then convert the list into a quick-access map.

### **The Data**

const featureRequests \= \[  
  { ticket: 'FEAT-002', description: 'Enable dark mode', priority: 2 },  
  { ticket: 'FEAT-001', description: 'Add cart persistence', priority: 1 },  
  { ticket: 'FEAT-004', description: 'Improve search speed', priority: 4 },  
  { ticket: 'FEAT-003', description: 'Fix checkout bug', priority: 3 }  
\];

### **The Tasks**

1. **Sort Requests:** Use the **sort()** method to sort the featureRequests array based on the **priority** property, from **lowest** (highest importance) to **highest** (lowest importance).  
2. **Array to Object Map:** Convert the **sorted** featureRequests array into a new requestMap **object**. The **ticket** IDs should be the **keys** and the **description** should be the **values**.

### **Expected Output**

1. featureRequests (after sorting):  
   JavaScript  
   \[  
     { ticket: 'FEAT-001', description: 'Add cart persistence', priority: 1 },  
     { ticket: 'FEAT-002', description: 'Enable dark mode', priority: 2 },  
     { ticket: 'FEAT-003', description: 'Fix checkout bug', priority: 3 },  
     { ticket: 'FEAT-004', description: 'Improve search speed', priority: 4 }  
   \]  
2. requestMap:  
   JavaScript  
   {  
     'FEAT-001': 'Add cart persistence',  
     'FEAT-002': 'Enable dark mode',  
     'FEAT-003': 'Fix checkout bug',  
     'FEAT-004': 'Improve search speed'  
   }

---

## **🔑 Task 5: Inventory Cleanup and Inversion (Object Keys, Values, Entries)**

### **The Scenario**

You have a finalized list of active product IDs and their current stock counts (from an object). You need to generate separate lists for the IDs and the counts, and then prepare the data for transfer by converting it into an array of key/value pairs.

### **The Data**

const finalStockLevels \= {  
  'LAP-PRO-101': 10,  
  'KBD-MECH-102': 50,  
  'MON-4K-103': 25,  
  'MSE-GAM-105': 80  
};

### **The Tasks**

1. **Extract IDs:** Use **Object.keys()** to create an array containing only the product IDs (the keys).  
2. **Extract Counts:** Use **Object.values()** to create an array containing only the stock counts (the values).  
3. **Object to Array Pairs:** Use **Object.entries()** to convert the finalStockLevels object into an array of arrays (an array of key-value pairs).

### **Expected Output**

1. productIDs: \['LAP-PRO-101', 'KBD-MECH-102', 'MON-4K-103', 'MSE-GAM-105'\]  
2. stockCounts: \[10, 50, 25, 80\]  
3. stockEntries:  
   JavaScript  
   \[  
     \['LAP-PRO-101', 10\],  
     \['KBD-MECH-102', 50\],  
     \['MON-4K-103', 25\],  
     \['MSE-GAM-105', 80\]  
   \]  
