export module BinaryTrees {
    export class TreeNode {
        data: any;
        left: TreeNode | null;
        right: TreeNode | null;
        constructor(item) {
            this.data = item;
            this.left = this.right = null;
        }

    }
    export function CreateTree(queue:any[]):TreeNode
    {
        let root:TreeNode;
        let currentLevel =0;
        let currentNode = [];
        let nodeQueue =[]
        for (let i=0;i<queue.length;i++) {
            if(i==0)
            {
                root = new TreeNode(queue[i]);
                currentNode[0] = root;
            }
            else{
                currentNode = nodeQueue.splice(0,1);
            }
            if(queue[2*i+1])
            {
                currentNode[0].left = new TreeNode(queue[2*i+1])
                nodeQueue.push(currentNode[0].left)
            }
            if(queue[2*i+2])
            {
                currentNode[0].right = new TreeNode(queue[2*i+2])
                nodeQueue.push(currentNode[0].right)
            }
            currentLevel++;
        }
        return root;
    }

}


