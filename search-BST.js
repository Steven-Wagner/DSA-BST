const BinarySearchTree = require('./binaryTree');

function main() {
    const BST = new BinarySearchTree();

    const newData = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];4

    const commandStructure = new BinarySearchTree()

    const commandStructureData = [['Captain Picard', 5], ['Comander Riker', 3], ['Commander Data', 6], ['Lt. Cmdr. Worf', 2], ['Lt. Cmdr. LaForge', 4], ['Lt. Cmdr. Crusher', 8], ['Lieutenant security-officer', 1], ['Lieutenant Selar', 7]]

    seedBinary(BST, newData);

    seedBinary(commandStructure, commandStructureData);

    console.log(BST);
    console.log(commandStructure);

    console.log(commandStructure.find(1))

    commandStructure.remove(5)

    console.log(commandStructure);

    // console.log(BST.inOrder());
    // console.log(BST.postOrder());
    // console.log(BST.preOrder());


}

const seedBinary = function(searchTree, data) {
    data.forEach(item => {
        if (!item[1]) {
            searchTree.insert(item, item);
        }
        else {
            console.log(item)
            searchTree.insert(item[1], item[0]);
        }
    })
}

main();