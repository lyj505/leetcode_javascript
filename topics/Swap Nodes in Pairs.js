// Given a linked list, swap every two adjacent nodes and return its head.

// You may not modify the values in the list's nodes, only nodes itself may be changed.

//Given 1->2->3->4, you should return the list as 2->1->4->3.


/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
// function Node(val) {
//     this.val = val;
//     this.next = null;
// }

function Node(element) {
    this.element = element;   //当前节点的元素
    this.next = null;         //下一个节点链接
    this.previous = null;     //上一个节点链接
}

const find = function (item) {
    var currNode = this.head;
    console.log(currNode)
    while (currNode.next && currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

const insert = function (newElement, item) {
    var newNode = new Node(newElement);
    var currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
}

const display = function () {
    var currNode = this.head;
    while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

const findPrev = function (item) {
    var currNode = this.head;
    while (!(currNode.next == null) && (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}

//删除节点

const remove = function (item) {
    var prevNode = this.findPrev(item);
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
    }
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

//链表类
function LList() {
    this.head = new Node('head');     //头节点
    this.find = find;                   //查找节点
    this.insert = insert;               //插入节点
    this.remove = remove;               //删除节点
    this.findPrev = findPrev;           //查找前一个节点
    this.display = display;             //显示链表
}

var fruits = new LList();
fruits.insert('1', 'head');
fruits.insert('2', '1');
fruits.insert('3', '2');
fruits.insert('4', '3');


// /** swap nodes invalid
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var swapPairs = function (head) {
//     if (!head || !head.next) return head;
//     var v1 = head, v2 = head.next, v3 = v2.next;
//     v2.next = v1;
//     v1.next = swapPairs(v3);
//     return v2;
// };

// console.log(fruits.display());
// const a = swapPairs(fruits); //  [2,1,4,3]
// // console.log(a.display());
// console.log(fruits.display());