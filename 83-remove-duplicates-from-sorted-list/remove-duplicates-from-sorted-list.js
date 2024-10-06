/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head === null) return head
    let current = head
    while(current.next){
        let check = current.next
        if(current.val === check.val){
            current.next = check.next
        }else{
            current = check
        }
    }
    return head
};