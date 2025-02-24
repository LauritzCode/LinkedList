export class linkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = node;
    }
  }

  prepend(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      node.nextNode = this.head;
      this.head = node;
    }
  }

  size() {
    if (this.head === null) return 0;
    let amount = 1;
    let currentNode = this.head;
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      amount++;
    }
    return amount;
  }

  returnHead() {
    if (this.head === null) return "No head found";
    else {
      const head = this.head;
      return head.value;
    }
  }

  tail() {
    const head = this.head;
    if (head === null) return "No tail, no head";
    else if (head.nextNode === null) return head.value;
    else {
      let currentNode = head.nextNode;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      return currentNode.value;
    }
  }

  at(index) {
    let int = 0;
    let currentNode = this.head;
    if (index < 0) return "not found";

    while (int < index) {
      currentNode = currentNode.nextNode;
      int++;
      if (currentNode === null) return "Index is larger than list";
    }
    return currentNode;
  }

  pop() {
    let currentNode = this.head;
    if (currentNode === null) return "List is empty!";
    if (this.head.nextNode === null) {
      this.head = null;
      return "Item popped";
    }
    while (currentNode.nextNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = null;
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let currentNode = this.head;
    if (currentNode === null) return "No items in list";
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) return index;
      currentNode = currentNode.nextNode;
      index++;
    }
    return "Item not found";
  }

  toString() {
    let currentNode = this.head;
    let result = "";
    while (currentNode !== null) {
      result += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    result += "null.";
    return result;
  }

  insertAt(value, index) {
    let int = 1;
    let currentNode = this.head;

    if (index === 0) {
      this.prepend(value);
      return;
    }

    while (int < index) {
      if (currentNode.nextNode === null) {
        currentNode.nextNode = new Node(null);
      }

      currentNode = currentNode.nextNode;
      int++;
    }

    let newNode = new Node(value);
    newNode.nextNode = currentNode.nextNode;
    currentNode.nextNode = newNode;
  }

  removeAt(index) {
    let currentNode = this.head;
    let int = 1;

    if (currentNode === null) return "List is already empty";

    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }

    while (int < index) {
      if (currentNode.nextNode === null) return "Nothing to remove";
      currentNode = currentNode.nextNode;
      int++;
    }

    if (currentNode.nextNode !== null)
      currentNode.nextNode = currentNode.nextNode.nextNode;
  }
}

export class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
