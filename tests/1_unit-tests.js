const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
let solver;

suite('Unit Tests', () => {
      test('Logic handles a valid puzzle string of 81 characters', () => {
        const validPuzzle = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
        solver = new Solver();
        let expected = true;
        assert.equal(solver.validate(validPuzzle), expected);
      });
      test('Logic handles a puzzle string with invalid characters (not 1-9 or .)', () => {
        const validPuzzle = 'xxi';
        solver = new Solver();
        let expected = 'Invalid characters in puzzle';
        assert.equal(solver.validate(validPuzzle), expected);
      });

      test('Logic handles a puzzle string that is not 81 characters in length', () => {
        const validPuzzle = '12345678945678912378912345623456789156789123489123456734567891267891234591234567';
        solver = new Solver();
        let expected = 'Expected puzzle to be 81 characters long';
        assert.equal(solver.validate(validPuzzle), expected);
      });  
      test('Logic handles a valid row placement', () => {
        const puzzleString = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
        const row = 0;
        const column = 5;
        const value = '7';
        solver = new Solver();
        let expected = true;
        assert.equal(solver.checkRowPlacement(puzzleString, row, column, value), expected);
      });  

      test('Logic handles an invalid row placement', () => {
        const puzzleString = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
        const row = 0;
        const column = 5;
        const value = '1';
        solver = new Solver();
        let expected = false;
        assert.equal(solver.checkRowPlacement(puzzleString, row, column, value), expected);
      });
      test('Logic handles a valid column placement', () => {
        const puzzleString = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
        const row = 0;
        const column = 0;
        const value = '7';
        solver = new Solver();
        let expected = true;
        assert.equal(solver.checkColPlacement(puzzleString, row, column, value), expected);
      });  
      test('Logic handles an invalid column placement', () => {
        const puzzleString = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
        const row = 0;
        const column = 0;
        const value = '1';
        solver = new Solver();
        let expected = false;
        assert.equal(solver.checkColPlacement(puzzleString, row, column, value), expected);
      });  
      test('Logic handles a valid region (3x3 grid) placement', () => {
        const puzzleString = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
        const row = 0;
        const column = 0;
        const value = '7';
        solver = new Solver();
        let expected = true;
        assert.equal(solver.checkRegionPlacement(puzzleString, row, column, value), expected);
      });  
      test('Logic handles an invalid region (3x3 grid) placement', () => {
        const puzzleString = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
        const row = 0;
        const column = 0;
        const value = '9';
        solver = new Solver();
        let expected = false;
        assert.equal(solver.checkRegionPlacement(puzzleString, row, column, value), expected);
      });  
      test('Valid puzzle strings pass the solver', () => {
        let puzzle = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..' , 
        solver = new Solver();
        let expected = true;
        assert.equal(solver.validate(puzzle), expected);

      });  
      test('Invalid puzzle strings fail the solver', () => {
        let puzzle = '1.9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..' , 
        solver = new Solver();
        let expected = false;
        assert.equal(solver.solve(puzzle), expected);
      });  
      test('Solver returns the expected solution for an incomplete puzzle', () => {
        let puzzle = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..' , 
        solver = new Solver();
        let expected = "769235418851496372432178956174569283395842761628713549283657194516924837947381625";
        assert.equal(solver.solve(puzzle), expected);
      });  

});
