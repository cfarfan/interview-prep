/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  const directed = {};
  const undirected = {};
  console.log(connections);
  for (let i = 0; i < n - 1; i++) {
    const [a, b] = connections[i];
    (directed[a] = directed[a] ? directed[a] : new Set()).add(b);
    (undirected[a] = undirected[a] ? undirected[a] : []).push(b);
    (undirected[b] = undirected[b] ? undirected[b] : []).push(a);
  }

  let counter = 0;
  let visited = new Set();
  const dfs = (city, adjCities) => {
    if (visited.has(city)) return;

    visited.add(city);
    adjCities.forEach((adjCity) => {
      if (
        !visited.has(adjCity) &&
        directed[city] &&
        directed[city].has(adjCity)
      ) {
        counter++;
      }
      dfs(adjCity, undirected[adjCity]);
    });
  };

  dfs(0, undirected[0]);
  return counter;
};
