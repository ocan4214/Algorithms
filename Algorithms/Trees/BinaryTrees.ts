

class TreeNode {
    data: any;
    left: TreeNode | null ;
    right: TreeNode | null;
    constructor(item)
    {
        this.data = item;
        this.left = this.right =null;
    }
}