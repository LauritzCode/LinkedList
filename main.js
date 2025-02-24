import { linkedList, Node } from "./index.js";

const list = new linkedList();

list.append("index one");
list.append("index two");
list.append("index three");
list.append("index four");
list.append("index five");
list.append("index six");

console.log(list.toString());

list.removeAt(2);
console.log(list.toString());
