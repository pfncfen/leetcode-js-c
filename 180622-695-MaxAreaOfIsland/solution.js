/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
   var height = grid.length, width = grid[0].length, maxArea = 0, curArea = 0;
   var visited = new Array();
   for(var index = 0; index < height; index++) {
     visited.push(new Array(width).fill(0))
   }
   function visit(a, b) {
      visited[a][b] = 1
      curArea ++
   }
   function visitAround(a, b) {
     if(grid[a][b] && !visited[a][b]) {
       visit(a, b)
       if(a - 1 >= 0) visitAround(a-1,b)
       if(a + 1 < height) visitAround(a+1,b)
       if(b - 1 >= 0) visitAround(a,b - 1)
       if(b + 1 < width) visitAround(a, b+1)
     }else {
       return
     }
   }
   function measureArea(a, b) {
     visitAround(a,b)
   }
   for(var i = 0; i < height; i++) {
     for(var j = 0; j < width; j++){
       if(grid[i][j] && !visited[i][j]) {
         measureArea(i,j)
         if(curArea > maxArea) maxArea = curArea
         curArea = 0
       }
     }
   }
   console.log(maxArea)
   return maxArea
};


var test1 =
[[0,0,0,0,0,0,0,0]]
maxAreaOfIsland(test1)
