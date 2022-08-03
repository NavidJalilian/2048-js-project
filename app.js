import Grid from "./Grid.js";
const gameBoard = document.querySelector(".game-board");
const grid = new Grid(gameBoard);
// grid.randomEmtyCell().tile=new Tile(gameBoard);
console.log(grid.randomEmptyCell());
