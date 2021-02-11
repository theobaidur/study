const G = {
  s: [1, 2],
  1: [3],
  2: [3, 4],
  3: [2, 5],
  4: [],
  5: []
}

const G1 = {
  1: [2, 3],
  2: [4, 5],
  3: [],
  4: [],
  5: []
}

const G2 = {
  s: {v: 5, p: [[a, 1], [g, 10]]},
  a: {v: 3, p: [[b, 2], [c, 1]]},
  b: {v: 4, p: [[d, 5]]},
  c: {v: 2, p: [[d, 3], [g, 4]]},
  d: {v: 6, p: [[g, 2]]},
  g: {v: 0, p: []},
}


const bfs = (graph, start)=>{
  const queue = [];
  const visited = [];
  queue.unshift(start);
  visited.push(start);
  while(queue.length){
    const c = queue.shift();
    const neighbors = graph[c];
    for(const x of neighbors){
      if(visited.indexOf(x) === -1){
        visited.push(x);      
        queue.unshift(x);      
      }
    }
  }
}

const dfs = (graph, start)=>{
  const visited = [];
  const stack = [];
  stack.push(start);
  while(stack.length){
    const c = stack.pop();
    visited.push(c);
    const neighbors = graph[c];
    for(const x of neighbors){
      if(visited.indexOf(x) === -1){
        stack.push(x);
      }
    }
  }
  console.log(visited);
}

const aStar = (graph, goal, start)=>{
  const paths = [];
  const {v, p} = graph[start];
}

bfs(G, 's');
dfs(G1, 1);
aStar(G2, 'g', 's');