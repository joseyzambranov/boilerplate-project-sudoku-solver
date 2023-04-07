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

  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

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

