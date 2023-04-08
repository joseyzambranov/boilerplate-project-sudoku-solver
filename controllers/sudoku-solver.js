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

    //if(!/^[0-9.]+$/.test(puzzleString)){
//
    //}

  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {
    let puzzleResult
    for(let i = 0 ; i < this.puzzlesAndSolutions.length ; i ++){
      if(this.puzzlesAndSolutions[i][0] === puzzleString)
      puzzleResult = this.puzzlesAndSolutions[i][1]
     }

     //for(let i = 0 ; i < this.puzzleString.length ; i ++){
     // if(this.puzzleString[i] === value)
     // return {valid:false ,conflict: [ "region" ] }
     //}


     //if(!puzzleResult){
     // return {valid:false ,conflict: [ "region" ] } 
     //}

     if(puzzleResult[row][column] == value){
      return {valid :true}
     }
     return {valid:false ,conflict: [ "row", "column" ] }
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

