const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor (data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor () {
    this.data = null
  }
  root() {
    return this.data
  }

  add(data) {
    if (!this.data) {
      this.data = new Node(data)
      return this.data
    }
    let node = this.data
    let newNode = new Node(data)
    while (node) {
      if (data > node.data) {
        if (!node.right) {
          break
        }
        node = node.right
      } else {
        if (!node.left) {
          break
        }
        node = node.left
      }
    }
    if (data > node.data) {
      node.right = newNode
    } else {
      node.left = newNode   
    }
  }

  has(data) {
    if (data === this.data.data) {
      return true
    }
    let result = ""
    recurs(this.data)
    function recurs(trees) {
      if (data > trees.data) {
        if (trees.right) {
          if (data !== trees.right.data) {
            return recurs(trees.right)      
          } 
            return result = true 
        } 
        return result = false
      } else {
        if (trees.left) {
          if (data !== trees.left.data) {
            return recurs(trees.left)      
          }
        } else {
          return result = false
        }
        return result = true
      }
    }
    return result
  }

  find(data) {
    if (data === this.data.data) {
      return this.data
    } 
    let result
    recurs(this.data)
    function recurs(trees) {
      if (data > trees.data) {
        if (trees.right) {
          if (data !== trees.right.data) {
            return recurs(trees.right)      
          } 
            return result = trees.right
        } 
        return result = null
      } else {
        if (trees.left) {
          if (data !== trees.left.data) {
            return recurs(trees.left)      
          }
        } else {
          return result = null
        }
        return result = trees.left
      }
    }
    return result
  }

  remove(data) {
    // if (!this.data) {
    //   return null
    // }
    // let result
    // recurs(this.data)
    // function recurs(trees) {
    //   if (data === trees.data) {
    //     let min = trees.left.right
    //         while(min.left) {
    //           min = min.left
    //         }
    //     min.left = trees.left
    //     min.right = trees.right
    //     trees.left = min
    //     return min = null
    //   }
    //   if (data > trees.data) {
    //     if (trees.right) {
    //       if (data !== trees.right.data) {
    //         return recurs(trees.right)      
    //       } else {
    //         if (!trees.right.left && !trees.right.right) {
    //           return trees.right = null
    //         } 
              
    //         else if (!trees.right.left){
    //           trees.right = trees.right.right
    //           return trees
    //         } 
              
    //         else if (!trees.right.right) {
    //           trees.right = trees.right.left
    //           return trees
    //         }
    //         let min = trees.right.right
    //         while(min.left) {
    //           min = min.left
    //         }
    //         min.left = trees.right.left
    //         min.right = trees.right.right
    //         trees.left = min
    //         min = null  
    //         }
    //         return result = trees.right
    //     } 
    //     return result = null
    //   } else {
    //     if (trees.left) {
    //       if (data !== trees.left.data) {
    //         return recurs(trees.left)      
    //       } else {
    //         if (!trees.left.left && !trees.left.right) {
    //           return trees.left = null
    //         } 
              
    //         else if (!trees.left.left){
    //           trees.left = trees.left.right
    //           return trees
    //         } 
              
    //         else if (!trees.left.right) {
    //           trees.left = trees.left.left
    //           return trees
    //         }
              
    //         let min = trees.left.right
    //         while(min.left) {
    //           min = min.left
    //         }
    //         min.left = trees.left.left
    //         min.right = trees.left.right
    //         trees.left = min
    //         return min = null 
    //         }
    //       }
    //       return result = null
    //     }
    // }
    // return result
  }

  min() {
    if (!this.data) {
      return null
    }
    const arr = []
    arr.push(this.data.data)
    if (this.data.left) {
      arr.push(this.data.left.data)
      recurs(this.data.left.left)
    }
    function recurs(data) {
      if (data) {
        arr.push(data.data)
        return recurs(data.left)
      }
      return 
    }
    const result = Math.min(...arr)
    return result
  }

  max() {
    if (!this.data) {
      return null
    }
    const arr = []
    arr.push(this.data.data)
    if (this.data.right) {
      arr.push(this.data.right.data)
      recurs(this.data.right.right)
    }
    function recurs(data) {
      if (data) {
        arr.push(data.data)
        return recurs(data.right)
      }
      return 
    }
    const result = Math.max(...arr)
    return result
  }
}

module.exports = {
  BinarySearchTree
};