/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    let pointerA = headA;
    let pointerB = headB;
    while (pointerA !== pointerB) {
        pointerA = pointerA === null ? headA : pointerA.next;
        pointerB = pointerB === null ? headB : pointerB.next;
    }
    return pointerA;
};