// 模拟二叉树
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


// 模拟dom结构
let tree = {
  value: 0,
  children: [{
    value: 11,
    children: [{
      value: 21,
      children: [{
        value: 31,
        children: []
      }, {
        value: 32,
        children: []
      }, {
        value: 33,
        children: []
      }]
    }, {
      value: 22,
      children: []
    }]
  }, {
    value: 12,
    children: [{
      value: 23,
      children: []
    }, {
      value: 24,
      children: []
    }]
  }, {
    value: 13,
    children: []
  }]
}

// 递归的深度优先
function dgdfs(node, action) {
  if (!node || !node.children) return
  action(node.value)
  node.children.forEach(element => {
    dgdfs(element, action)
  });
}
dgdfs(tree, console.log)

// 深度优先
function dfs(node) {
  let res = []
  if (node) {
    let queue = []
    queue.push(node)
    while (queue.length !== 0) {
      let Item = queue.pop()
      res.push(Item)
      let List = Item.children
      for (let i = List.length - 1; i >= 0; i--) {
        queue.push(List[i])
      }
    }
  }
  return res
}
dfs(tree)

// 广度优先
// 注意，广度优先是没有递归算法的
function bfs(node) {
  let res = []
  if (node) {
    let queue = []
    queue.push(node)
    while (queue.length !== 0) {
      let Item = queue.shift()
      res.push(Item)
      let List = Item.children
      for (let i = 0; i < List.length; i++) {
        queue.push(List[i])
      }
    }
  }
  return res
}
bfs(tree)