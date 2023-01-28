const bfs = (n, adjList) => {
	res = [];
	vis = Array(n).fill(0);
	// queue
	q = [];
	q.push(0);
	while (q.length != 0) {
		// console.log('q:', q);
		f = q[0];
		q.shift();
		vis[f] = 1;
		res.push(f);
		for (let i = 0; i < adjList[f].length; i++) {
			// console.log(adjList[f][i]);
            if (vis[adjList[f][i]] == 0) {
				q.push(adjList[f][i]);
			}
		}
	}
	return res;
};

const solve = (start, adjList, vis, res) => {
    vis[start] = 1;
    res.push(start);
    for(let i = 0; i < adjList[start].length; i++){
        if(!vis[adjList[start][i]]){
            solve(adjList[start][i], adjList, vis, res);
        }
    }
}

const dfs = (n, adjList) => {
    vis = Array(n).fill(0);
    // pass as object
    start = 0
    res = []
    solve(start, adjList, vis, res);
    return res
}

// main

// q = [1, 2, 3]
// q.shift()
// console.log(q);
n = 5;
adjList = [[1, 2, 3], [0], [0, 3, 4], [0, 2, 4], [2, 4]];
res = bfs(n, adjList);
// console.log(res);
res1 = dfs(n, adjList);
console.log(res1);
