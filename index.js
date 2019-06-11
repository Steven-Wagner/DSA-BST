const BinarySearchTree = require('./binaryTree');

const main = function() {
    const BST = new BinarySearchTree();
    const firstBST = new BinarySearchTree();
    const secondBST = new BinarySearchTree();

    const BSTSeedData = [3,1,4,6,9,2,5,7]

    const firstBSTData = [3, 5, 4, 6, 1, 0, 2];

    const secondBSTData = [3, 1, 5, 2, 4, 6, 0, 7,10]

    seedBinary(BST, BSTSeedData);

    seedBinary(firstBST, firstBSTData);
    seedBinary(secondBST, secondBSTData);

    console.log(BST);

    console.log(heightOfTree(BST));

    console.log(checkBST(BST));

    // console.log(thirdLargest(BST));

    console.log(treesEqual(firstBST, secondBST));
}

//what does this function do?
//Sums up the values of all nodes in the tree

const heightOfTree = function(tree) {

    if(!tree) return 0;
    var leftHeight = heightOfTree(tree.left);
    var rightHeight = heightOfTree(tree.right);
 
    return Math.max(leftHeight, rightHeight) + 1;
}

const seedBinary = function(searchTree, data) {
    data.forEach(item => {
        searchTree.insert(item, item);
    })
}

const checkBST = function(tree) {
    if (!tree) {
        return true;
    }

    if (tree.left && tree.left > tree.value) {
        return false;
    }
    
    if (tree.right && tree.right.value < tree.value) {
        return false;
    }

    if (!checkBST(tree.right) || !checkBST(tree.left)) {
        return false;
    }

    return true;

}

const thirdLargest = function(tree, count = 0, value) {
    if (tree.right) {
        thirdLargest(tree.right, count, value)
    }
    if (count = 3) {
        value = tree.value;
    }
    count++
    if (tree.left) {
        count++
        thirdLargest(tree.left, count, value)
    }

    return value
}

const treesEqual = function(tree1, tree2) {
    if (!tree1 && !tree2) {
        return true
    }

    if (tree1.value !== tree2.value) {
        return false
    }

    if ((!tree1.right || !tree2.right) && (tree1.right || tree2.right)) {
        return false;
    } 
    if ((!tree1.left || !tree2.left) && (tree1.left || tree2.left)) {
        return false;
    } 

    let equalRight = true;
    let equalLeft =true;

    if (tree1.right && tree2.right) {
        equalRight = treesEqual(tree1.right, tree2.right)
    }
    if (tree1.left && tree2.left) {
        equalLeft = treesEqual(tree1.left, tree2.left)
    }
    if (equalLeft === false || equalRight === false) {
        return false
    }

    return true
}

main();