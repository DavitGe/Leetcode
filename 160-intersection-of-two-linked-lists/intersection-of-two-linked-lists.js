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
    let p = headA;
    let q = headB;
    
    while(p!=q && ( p.next || q.next)){
        if(p.next == null) p = headB;
        else   p=p.next;
        if(q.next == null) q= headA;
        else q=q.next;
      
        
    }
    // console.log(q.val)
    if(p==q) return p;
};