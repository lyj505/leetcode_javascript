
const listNode = require('./node-list');

const list = new listNode.LList();
list.quickInit([1, 2, 3, 4, 5]);

//head ->1 ->2 ->3 ->4
// list.insert('1', 'head');
// list.insert('2', '1');
// list.insert('3', '2');
// list.insert('4', '3');
// list.insert('5', '4');


// list.display();

//remove

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */



//wrong method
let removeNthFromEnd = function (head, n) {
    let prevNode = findEl(head, n);
    if (!(prevNode.next == null)) {
        // console.log(prevNode.next)
        // console.log('---移除--- 上面的元素');
        // console.log(prevNode.next.next)
        prevNode.next = prevNode.next.next;
    }
    return head
};

const findEl = function (head, n) {
    let i = 0;
    let currNode = head;
    while (currNode.next && (n != i - 1)) {
        currNode = currNode.next;
        i++;
    }
    return currNode;
}



removeNthFromEnd = function (head, n) {

    //head 2

    // head ---> 1 -----> 2 -----> 3 ------> 4 ------> 5
    //step1        //  current         runnner
    //step2                    current          runnner       
    //step3                             current          runnner       
    //step4                                     current          runnner 
    //                                                    remove

    let current = head;

    let runner = head;
    for (let i = 0; i < n; i++) {
        runner = runner.next;
    }
    if (runner == null) {
        return current.next;
    }


    while (runner.next != null) {
        current = current.next;
        runner = runner.next;
    }

    current.next = current.next.next;

    return head;
}

removeNthFromEnd(list.head, 2);
list.display();
