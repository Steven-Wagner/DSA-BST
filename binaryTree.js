const Queue = require('./queue');

class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    inOrder(values=[]) {
        if (this.left) {
            values = this.left.inOrder(values);
        }
        values.push(this.value);

        if (this.right) {
            values = this.right.inOrder(values);
        }
        return values;
    }
    
    postOrder(values=[]) {
        if (this.left) {
            values = this.left.postOrder(values);
        }

        if (this.right) {
            values = this.right.postOrder(values);
        }
        values.push(this.value);
        return values;
    }
    
    preOrder(values=[]) {
        values.push(this.value);
        if (this.left) {
            values = this.left.preOrder(values);
        }

        if (this.right) {
            values = this.right.preOrder(values);
        }
        return values;
    }

    bfs(values=[]) {
        const queue = new Queue();

        while (queue.length) {
            const node = queue.dequeue(); //remove from the queue
            values.push(node.value); // add that value from the queue to an array

            if (node.left) {
                queue.enqueue(node.left); //add left child to the queue
            }

            if (node.right) {
                queue.enqueue(node.right); // add right child to the queue
            }
        }

        return values;
    }

    insert(key, value) {
        if (this.key == null) {
            this.key = key;
            this.value = value;
        }
        else if (key < this.key) {
            if (this.left == null) {
                this.left = new BinarySearchTree(key, value, this);
            }
            else {
                this.left.insert(key, value);
            }
        }
        else {
            if (this.right == null) {
                this.right = new BinarySearchTree(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }

    find(key) {
        if (this.key == key) {
            return this.value;
        }
        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        else if (key > this.key && this.right) {
            return this.right.find(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    remove(key) {
        if (this.key == key) {
            if (this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            else if (this.left) {
                this._replaceWith(this.left);
            }
            else if (this.right) {
                this._replaceWith(this.right);
            }

            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }

    _replaceWith(node) {
        if (this.parent) {
            if (this == this.parent.left) {
                this.parent.left = node;
            }
            else if (this == this.parent.right) {
                this.parent.right = node;
            }

            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    _findMin() {
        if (!this.left) {
            return this;
        }
        return this.left._findMin();
    }
}

module.exports = BinarySearchTree;