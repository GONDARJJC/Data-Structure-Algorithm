const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}

// 广度优先
function bfs(node, nodelist) {
  if (node) {
    nodelist.push(node)
    while (nodelist.length !== 0) {
      node = nodelist.shift()
      console.log(node.value)
      if (node.left) nodelist.push(node.left)
      if (node.right) nodelist.push(node.right)
    }
  }
}
bfs(tree, [])
console.log('==============');
// 深度优先
function dfs(node, nodelist) {
  if (node) {
    nodelist.push(node)
    while (nodelist.length !== 0) {
      node = nodelist.pop()
      console.log(node.value)
      if (node.left) nodelist.push(node.left)
      if (node.right) nodelist.push(node.right)
    }
  }
}
dfs(tree, [])
