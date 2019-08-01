


class Node {
    constructor(element) {
        this.element = element;   //当前节点的元素
        this.next = null;         //下一个节点链接
        this.previous = null;     //上一个节点链接
    }
}

class LList {
    constructor() {
        this.head = new Node('head');     //头节点
    }


    quickInit(nodeArray) {
        nodeArray = ['head', ...nodeArray];
        nodeArray.some((curNode, k) => {
            if (k == nodeArray.length) {
                return true;
            }
            const next = nodeArray[k + 1];
            this.insert(next, curNode);
        })
    }
    /**
     * 查找节点
     * @param  {Any} 查找的元素 
     */
    find(item) {
        //找不到返回head 元素
        let currNode = this.head;
        while (currNode.next && currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    /**
     * 插入节点
     * @param  {Any} newElement
     * @param  {Any} item
     */
    insert(newElement, item) {
        let newNode = new Node(newElement);
        let currNode = this.find(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
    }

    /**
     * 删除节点
     * @param  {Any} item
     */
    remove(item) {
        let prevNode = this.findPrev(item);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    }

    /**
     * 找到上一个节点 (???TODO:)
     * @param  {Any} item
     */
    findPrev(item) {
        let currNode = this.head;
        while (!(currNode.next == null) && (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    /**
     * 显示链表
     */
    display() {
        let currNode = this.head;
        let size = 0;
        while (!(currNode.next == null)) {
            size++;
            // console.log('链表元素')
            console.log()
            console.log(currNode.element);
            currNode = currNode.next;
        }
        console.log('---last----el', currNode.element)
        console.log('size------->', size);
    }
}

// const listLL = new LList();
// listLL.quickInit([1, 2, 3, 4])
// // listLL.insert('1', 'head');
// // listLL.insert('2', '1');
// // listLL.insert('3', '2');
// // listLL.insert('4', '3');
// listLL.display();

module.exports = {
    LList
}