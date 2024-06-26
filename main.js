"use strict";
class NodeObj {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
function buildTree(input) {
    let index = 0;
    function parseNode() {
        if (index >= input.length || input[index] === "," || input[index] === ")") {
            return null;
        }
        // Extract the node value
        let value = "";
        while (index < input.length && !["(", ",", ")"].includes(input[index])) {
            value += input[index++];
        }
        const node = new NodeObj(value);
        // Parse left child
        if (index < input.length && input[index] === "(") {
            index++; // Skip '('
            node.left = parseNode();
            index++; // Skip ',' after left child
            node.right = parseNode();
            index++; // Skip ')' after right child
        }
        return node;
    }
    return parseNode();
}
// Example usage:
const input = "A(B(F,G),C(D,E))";
const root = buildTree(input.split(" ").join());
console.log(JSON.stringify(root, null, 2));
