# Linked List Implementation in JavaScript

This is a **basic implementation of a Linked List in JavaScript**, built purely for **learning and practice**. It's meant to help understand **how linked lists work under the hood**.

## 📌 What This Project Covers

This project includes:
- A `LinkedList` class with methods to manipulate nodes
- A `Node` class representing individual elements in the list
- Core linked list functionality like adding, removing, and finding nodes
- Extra credit features like inserting at a specific index and handling out-of-bounds scenarios

## 🚀 Features & Methods Implemented

- `append(value)`: Adds a new node to the **end** of the list.
- `prepend(value)`: Adds a new node to the **start** of the list.
- `size()`: Returns the total number of nodes.
- `head()`: Returns the **first node**.
- `tail()`: Returns the **last node**.
- `at(index)`: Returns the node at a given index.
- `pop()`: Removes the **last element**.
- `contains(value)`: Checks if a given value exists in the list.
- `find(value)`: Returns the index of a value (or `null` if not found).
- `toString()`: Prints the linked list in a readable format.
- `insertAt(value, index)`: Inserts a node at a specific index, even if the index is beyond the current list size.
- `removeAt(index)`: Removes a node at a specific index without breaking the list.

## 🛠️ I guess if you'd like to give it a whirl, just do this: 

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-username/linked-list-js.git
cd linked-list-js
```

### **2️⃣ Run It in a Browser**
Make sure your `index.html` includes:
```html
<script type="module" src="./main.js"></script>
```
Then open the file in a browser (or use Live Server in VS Code).

### **3️⃣ Run It in Node.js**
If you're using Node.js, make sure your `package.json` includes:
```json
{
  "type": "module"
}
```
Then run:
```bash
node main.js
```

## 📝 What I Learned

This was a **great exercise** in understanding:
- The importance of **edge cases** (empty list, single-node list, large indexes)
- JavaScript’s **garbage collection** (removing a node means just unlinking it - crazy I know)
- How to **traverse a list efficiently** using loops

## 🔥 Challenges Faced
Some tricky parts included:
- Making sure **insertAt() doesn’t break the list** when inserting at a large index
- Avoiding **off-by-one errors** when finding previous nodes
- Handling **JavaScript’s garbage collection** correctly instead of manually deleting nodes

---

This is a **pure learning project**, so feel free to fork it, break it, fix it, and experiment! If you have suggestions, drop them in an issue or PR. 😃

