class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _NodeQ(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }

    dequeue() {
        //if the queue is empty, there is nothing to return
       if (this.first === null) {
           return;
       }
       const node = this.first;
       this.first = this.first.next;
        //if this is the last item in the queue
       if (node === this.last) {
           this.last = null;
       }
       return node.value;
   }

   queueLength() {
       let length = 0;
       let node = this.first;

       while (node) {
           length++;
           node = node.next;
       }

       return length;
   }
}

class _NodeQ {
    constructor(value) {
        this.value=value;
        this.next=null;
    }
}