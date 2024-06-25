const bTree = "A(B(F,G),C(D,E))"

let preOrder: Array<string> = []
const walkTree = (tempTree: string): void => {
  if (tempTree.length == 1) {
    preOrder.push(tempTree); // returns a node
    return;
  }

  let newTempTree = tempTree.substring(1, tempTree.length - 1); // Remove only the first node
  if (newTempTree[0] == ",")
    newTempTree = tempTree.substring(1, tempTree.length - 1); // Remove initial comma
  if (newTempTree[0] == "(" && newTempTree[tempTree.length - 1] == ")")
    newTempTree = tempTree.substring(1, tempTree.length - 2); // Remove parenthesis

  let open = 0; // To count "(" and ")"s
  Array(newTempTree).map((char, idx) => {
    if (char == "(")
      open++;
    if (char == ")")
      open--;

    if (char == "," && open == 0) { // if theres a comma and it is not inside any (), split the
      walkTree(tempTree.substring(0, idx - 1));
      walkTree(tempTree.substring(idx + 1, tempTree.length - 1));
    }
  })

  return;
}