
//Simple Recursive approach

const connect = function(root) {
 construct(root);
        return root;
    }
   function construct( root) 
    {
        if(root==null)
        {
            return;
        }
        if(root.left!=null)
        {
            root.left.next=root.right;
        }
        if(root.right!=null)
        {
            root.right.next=(root.next==null?null:root.next.left);
        }
        construct(root.left);
        construct(root.right);
    }


/*
Success
Details 
Runtime: 96 ms, faster than 76.45% of JavaScript online submissions for Populating Next Right Pointers in Each Node.
Memory Usage: 45.9 MB, less than 11.38% of JavaScript online submissions for Populating Next Right Pointers in Each Node.
*/
