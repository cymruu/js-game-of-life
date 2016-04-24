'use strict'
class GameOfLife {
  /** init local variables **/
  constructor(size, cells, steps) {
    this.results = [];
    this.tickCounter = 0;
    this.size = size||10;
    this.steps = steps||[1];

    this.cells = new Array(size);
    for (let i = 0; i < size; i++) {
      this.cells[i] = new Array(size);
      this.cells[i].fill(0);
    }
    for(let i in cells){
      let cell = cells[i];
      this.cells[cell[0]][cell[1]]=1;
    }
    return this.simulate(Math.max(...this.steps));
  }
  /** return array of values of neighbors of given position **/
  getNeighbors(cell){
    let neighbors = [];
    let x = Number(cell[0]);
    let y = Number(cell[1]);
    for (let i = Math.max(0, x-1); i <= Math.min(x+1, this.size-1); i++) {
      for(let j = Math.max(0, y-1); j <= Math.min(y+1, this.size-1); j++){
        if(i==x&&j==y){continue;}
            neighbors.push(this.cells[i][j]);
      }
    }
    return neighbors;
  }
  /** returns number  of alive neighbors */
  analyseNeighbors(neighbors){
    let alive = 0;
    let dead = 0;
    for(let i in neighbors){
      let neighbor = neighbors[i];
      (neighbor==1)?alive++:dead++;
    }
    return alive;
  }
  /** calculate next positions of alive cells */
  tick(){
    this.tickCounter++;
    var newGeneration = this.cells.map((a)=>{
      return a;
    });
    var newGeneration = JSON.parse(JSON.stringify(this.cells)); //hack
    for(let i in this.cells){
      for(let j in this.cells[i]){
        let cell = this.cells[i][j];
        let neighbors = this.getNeighbors([i,j]);
        let alive = this.analyseNeighbors(neighbors);
        if(cell==0&&alive==3){newGeneration[i][j]=1}
        if(cell&&!(alive==2||alive==3)){
          newGeneration[i][j]=0;
        }
      }
    }
    this.cells = newGeneration;
  }
  simulate(n){
    let i = 0;
    while(i<=n){
      // this.render();
      if(this.steps.indexOf(i)>-1){this.results.push(this.cells);}
      this.tick();
      i++;
    }
    return this.getResponse();
  }
  render(){
    console.log(this.tickCounter, this.cells);
  }
  getResponse(){
    let response = [];
    for(let i in this.results){
      response[i]=[]
      for(let j in this.results[i]){
        for(let k in this.results[i][j]){
          if(this.results[i][j][k])response[i].push([Number(j),Number(k)]);
        }
      }
    }
    return response;
  }
}

module.exports = GameOfLife;
