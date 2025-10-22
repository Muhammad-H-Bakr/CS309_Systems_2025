## **💻 Array Manipulation Tools**

Arrays are lists of things (like products or scores). The following methods are the workhorses for handling arrays.

### **1\. The Big Three: map, filter, and reduce**

These three functions are fundamental to modern JavaScript and are often chained together.

| Tool | Analogy | What It Does | When to Use It (Task 1, 2\) |
| :---- | :---- | :---- | :---- |
| **.filter()** | A **Sieve** | Creates a **new array** containing only the items that pass a specific test (or condition). It always returns a subset of the original items. | To select all **discounted products** or all **passing students**. |
| **.map()** | A **Conveyor Belt Transformer** | Creates a **new array** where every item from the original array is transformed (or changed) into a new value. The new array always has the **same number of items**. | To convert a product object into a simple **promo tag string** (e.g., 'Laptop Pro'  'Laptop Pro \- ON SALE\!'). |
| **.reduce()** | A **Blender** | Boils down (or aggregates) an entire array into a single value (like a number, an object, or a single string). It uses an **accumulator** to hold the running result. | To calculate the **sum of all ages** or the **total inventory value**. It can also build a complex object, like counting color frequencies. |

### **2\. Iteration and Sorting**

| Tool | Analogy | What It Does | When to Use It (Task 2, 4\) |
| :---- | :---- | :---- | :---- |
| **.forEach()** | A **Simple Iterator** | Executes a function for **every item** in the array. Unlike map or filter, it doesn't create a new array or return a value. Its purpose is usually to cause a **side effect**, like logging or modifying an external object. | To iterate through products and **tally up the counts** in an outside price category object. |
| **.sort()** | A **Librarian** | Rearranges the elements of an array *in place* (it modifies the original array). For numbers and custom objects, you must provide a **comparison function** to tell it how to order the items. | To order a list of feature requests by **lowest priority number**. |

---

## **🧩 Object & Array Structure Tools**

These methods help you take things apart (destructuring) or change the structure of your data.

### **3\. Destructuring and Spreading (Task 3\)**

| Tool | Syntax | What It Does | Use Case |
| :---- | :---- | :---- | :---- |
| **Object Destructuring** | const { id, price: P } \= obj; | Allows you to **pull out specific properties** from an object and assign them to local variables with a single line. You can also **rename** the variables (e.g., price: P). | Quickly getting the id and renaming basePrice to MSRP from a product configuration. |
| **Array Destructuring** | const \[first, ...rest\] \= arr; | Allows you to **pull out elements** from an array based on their position. The **rest operator (...)** collects all remaining elements into a new array. | Getting the mainFeature and collecting all otherFeatures into a new array. |
| **Spread Operator** | const newObj \= { ...old, ...add }; | **Copies** all properties from one object (or elements from one array) into another array or object. It's used for merging or creating copies. | Combining productConfig and adding the inStock: true property to create a **merged productSummary object**. |

### **4\. Conversion Between Objects and Arrays (Task 4, 5\)**

These methods help convert between object format (key-value pairs) and array format (lists).

| Tool | Input Type | Output Type | When to Use It |
| :---- | :---- | :---- | :---- |
| **Object.keys()** | Object | Array of strings (keys) | To get a simple list of all **product IDs** (keys) from a stock level map. |
| **Object.values()** | Object | Array of values | To get a simple list of all **stock counts** (values) from a stock level map. |
| **Object.entries()** | Object | Array of arrays (pairs) | To convert an object into a structured array, where each element is an array containing \[key, value\]—perfect for data transfer. |
| **Array.reduce() (as a converter)** | Array | Object | A common way to convert a list of objects (like featureRequests) into a quick-access map (where the key is the ticket ID). |

