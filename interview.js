function iv_elementNode(value, children) { 
   this.value = value;
   this.children = children;
}

var iv_level2_3 = new iv_elementNode(23, null);
var iv_level2_2 = new iv_elementNode(22, null);
var iv_level2_1 = new iv_elementNode(21, null);
var iv_level1_3 = new iv_elementNode(13, [iv_level2_3]);
var iv_level1_2 = new iv_elementNode(12, null);
var iv_level1_1 = new iv_elementNode(11, [iv_level2_1, iv_level2_2]);
var iv_nodeHead = new iv_elementNode(1, [iv_level1_1, iv_level1_2, iv_level1_3]);

function iv_broadFirstNodes(head) { 
   let queue = [head];

   while (queue.length) { 
      let node = queue.shift();
      console.log(node.value);

      if (node.children) { 
         queue = queue.concat(node.children);
      }
   }
}

function iv_depthFirstNodes(head) { 
   if (!head) return;

   if (head.children) {
      for (let node of head.children) {
         iv_depthFirstNodes(node);
      }
   }

   console.log(head.value);   
}

function deepTraversal(node) {
   let nodes = []
   if (node != null) {
      nodes.push[node]
      let childrens = node.children

      for (let i = 0; i < childrens.length; i++)
         deepTraversal(childrens[i])
   }
   
   return nodes
}

function wideTraversal(node) {
   let nodes = [];
   let i = 0;
   
   if (node != null) {
      nodes.push(node)
      wideTraversal(node.nextElementSibling)
      node = nodes[i++]
      wideTraversal(node.firstElementChild)
   }

   return nodes
}