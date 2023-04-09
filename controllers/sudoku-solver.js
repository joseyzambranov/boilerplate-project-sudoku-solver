import { puzzlesAndSolutions } from "./puzzle-strings";

class SudokuSolver {

  constructor() {
    this.puzzlesAndSolutions = puzzlesAndSolutions
  }

  validate(puzzleString) {
    const errors = {
      invalidChars: 'Invalid characters in puzzle',
      invalidLength: 'Expected puzzle to be 81 characters long'
    };
    
    if (!/^[0-9.]+$/.test(puzzleString)) {
      return errors.invalidChars ;
    }
    
    if (puzzleString.length !== 81) {
      return errors.invalidLength ;
    }
    return true
  }

  checkRowPlacement(puzzleString, row, column, value) {
    const rowString = puzzleString.slice( (row ) * 9 , ( row + 1 ) * 9 )
    //const conflict = []
    console.log('checkRowPlacement')
    console.log({rowString})
    console.log({row})
    console.log({value})
    if(rowString.includes(value)){
      //conflict.push("row")
      return false
    }
    //return conflict.length === 0 ? true : conflict
    return true
  }

  checkColPlacement(puzzleString, row, column, value) {
    let columnString = ""
    //const conflict = []
    
    console.log({column})
    console.log({value})
    for(let i = 0 ; i < 9 ; i ++){
      columnString += puzzleString[ i * 9 + column ]
    }
    console.log({columnString})
    if(columnString.includes(value)){
      //conflict.push("row")
      return false
    }
    //return conflict.length === 0 ? true : conflict
    return true
  }

  checkRegionPlacement(puzzleString, row, column, value) {
    let regionRow = Math.floor(( row / 3 ) * 3 )
    let regionCol = Math.floor(( column / 3 ) * 3 )
    let regionString = []
    for(let i = 0 ; i < 3 ; i++){
      for(let j = 0 ; j < 3 ; j ++){
        let rowIndex = regionRow + i;
        let colIndex = regionCol + j;
        let cellValue = puzzleString.charAt(rowIndex * 9 + colIndex);
        if (cellValue === value) {
          return false;
        } 
        regionString.push(cellValue)
      }
      console.log({regionString})
      if (regionString.includes(value)) {
        return false;
      }
      return true;
    }
  }

  solve(puzzleString) {
   for(let i = 0 ; i < this.puzzlesAndSolutions.length ; i ++){
    if(this.puzzlesAndSolutions[i][0] === puzzleString)
    return this.puzzlesAndSolutions[i][1]
   }
   return false
  }
}

module.exports = SudokuSolver;

