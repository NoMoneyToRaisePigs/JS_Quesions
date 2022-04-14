function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

var upnode3 = new ListNode(4,null)
var upnode2 = new ListNode(6,upnode3)
var upnode1 = new ListNode(5, upnode2)

var downnode5 = new ListNode(1,null)
var downnode4 = new ListNode(2,downnode5)
var downnode3 = new ListNode(3,downnode4)
var downnode2 = new ListNode(2,downnode3)
var downnode1 = new ListNode(1, downnode2)

var pnode6 = new ListNode(1,null)
var pnode5 = new ListNode(2,pnode6)
var pnode4 = new ListNode(3, pnode5)
var pnode3 = new ListNode(3,pnode4)
var pnode2 = new ListNode(2,pnode3)
var pnode1 = new ListNode(1, pnode2)

var ppnode4 = new ListNode(1, null)
var ppnode3 = new ListNode(2,ppnode4)
var ppnode2 = new ListNode(1,ppnode3)
var ppnode1 = new ListNode(1, ppnode2)


function palindromeString(s) {
   let arr = [...s];

   while (arr.length > 1) { 
       let head = arr.shift();
       let tail = arr.pop();
   
       if (head != tail) { 
           return false;
       }
   }

   return true;
}

function plindromeLinkedList(head) { 
   if (!head.next) return true;
   if (head.next && !head.next.next) return head.val == head.next.val;


   let node = head;
   let slow = node.next;
   let fast = node.next.next;

   while (fast && fast.next) { 
      slow = slow.next;
      fast = fast.next.next;
   }

   let reversed = reverseLinkedList(slow);

   while (reversed && head) { 
      if (reversed.val != head.val) { 
         return false;
      }

      reversed = reversed.next;
      head = head.next;
   }

   return true;
}

function printListNode(node) { 
   if (!node) return;
   console.log(node.val);
   printListNode(node.next);
}

function reverseLinkedList(node) { 
   let prev = null
   let current = node;
   let next = node;

   while (next) { 
     
      next = next.next;
      current.next = prev;
      prev = current;
      current = next;
   }

   return prev;
}

var list2_3 = new ListNode(5,null)
var list2_2 = new ListNode(3,list2_3)
var list2_1 = new ListNode(1, list2_2)

var list1_3 = new ListNode(4, null)
var list1_2 = new ListNode(2, list1_3)
var list1_1 = new ListNode(1, list1_2)

var mergeTwoLists = function(list1, list2) { 
   let head = new ListNode(0);
   
   let current = head;
   
   while (list1 && list2) {
      if (list1.val >= list2.val) {
         current.next = list2;
         list2 = list2.next;
      }
      else {
         current.next = list1;
         list1 = list1.next;
      }
      
      current = current.next;
   }

   while (list1) { 
      current.next = list1;
      list1 = list1.next;
      current = current.next;
   }

   while (list2) { 
      current.next = list2;
      list2 = list2.next;
      current = current.next;
   }      
     
   return head.next;
};

var gfHead = new ListNode(0)

var mergeTwoListsRecurion = function (list1, list2, head = new ListNode(0)) { 
   if (!list1 && !list2) return null;

   let current = head; 

   if (list1 && list2) {
      if (list1.val >= list2.val) {
         current.next = list2;
         return mergeTwoListsRecurion(list1, list2.next, current.next);
      }
      else {
         current.next = list1;
         return mergeTwoListsRecurion(list1.next, list2, current.next);
      }     
   }
   else if (list1) { 
      current.next = list1;
      return mergeTwoListsRecurion(list1.next, list2, current.next);
   }
   else if (list2) { 
      current.next = list2;
      return mergeTwoListsRecurion(list1, list2.next, current.next);
   } 
   
   return current;
};

var mergeTwoListsV2 = function(list1, list2, head = new ListNode(0)) {

   if (!list1 && !list2) return null;

   if (list1 && list2) {
      if (list1.val >= list2.val) {
         head.next = list2;
         head = mergeTwoListsV2(list1, list2.next, head.next)
      }
      else {
         head.next = list1;
         head = mergeTwoListsV2(list1.next, list2, head.next)
      }
   }

   if (list1 && !list2) { 
      head = list1.next;
      head = mergeTwoListsV2(list1.next, list2, head.next);
   }

   if (!list1 && list2) { 
      head = list2.next;
      head = mergeTwoListsV2(list1, list2.next, head.next);
   }         

   return head;
};


var mergeTwoListsV3 = function(list1, list2) {



};