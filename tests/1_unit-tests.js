const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
let solver;

suite('Unit Tests', () => {

    test('Logic handles a valid puzzle string of 81 characters', () => {
        const validPuzzle = '123456789456789123789123456234567891567891234891234567345678912678912345912345678';
        solver = new Solver();
        assert.doesNotThrow(() => solver.validate(validPuzzle), TypeError, 'Throws TypeError');
      });

      test('Logic handles a puzzle string with invalid characters (not 1-9 or .)', () => {
        const validPuzzle = 'xii';
        solver = new Solver();
        assert.doesNotThrow(() => solver.validate(validPuzzle), TypeError, 'Throws TypeError');
      });  

      test('Logic handles a puzzle string that is not 81 characters in length', () => {
        const validPuzzle = '12345678945678912378912345623456789156789123489123456734567891267891234591234567';
        solver = new Solver();
        assert.doesNotThrow(() => solver.validate(validPuzzle), TypeError, 'Throws TypeError');
      });  
      test('Logic handles a valid row placement', () => {
        let puzzle = '12345678945678912378912345623456789156789123489123456734567891267891234591234567' , 
        coordinate = 'A1', 
        value ="7";
        solver = new Solver();
        assert.doesNotThrow(() => solver.checkRowPlacement(puzzle,coordinate,value), TypeError, 'Throws TypeError');
      });  
      test('Logic handles an invalid row placement', () => {
        solver = new Solver();
        assert.doesNotThrow(() => solver.checkRowPlacement(puzzle,coordinate,value), TypeError, 'Throws TypeError');
      });  
      test('Logic handles a valid column placement', () => {
        let puzzle = '12345678945678912378912345623456789156789123489123456734567891267891234591234567' , 
        coordinate = 'A1', 
        value ="7";
        solver = new Solver();
        assert.doesNotThrow(() => solver.checkColPlacement(puzzle,coordinate,value), TypeError, 'Throws TypeError');
      });  
      test('Logic handles an invalid column placement', () => {
        solver = new Solver();
        assert.doesNotThrow(() => solver.checkColPlacement(puzzle,coordinate,value), TypeError, 'Throws TypeError');
      });  
      test('Logic handles a valid region (3x3 grid) placement', () => {
        let puzzle = '12345678945678912378912345623456789156789123489123456734567891267891234591234567' , 
        coordinate = 'A1', 
        value ="7";
        solver = new Solver();
        assert.doesNotThrow(() => solver.checkRegionPlacement(puzzle,coordinate,value), TypeError, 'Throws TypeError');
      });  
      test('Logic handles an invalid region (3x3 grid) placement', () => {
        solver = new Solver();
        assert.doesNotThrow(() => solver.checkRegionPlacement(puzzle,coordinate,value), TypeError, 'Throws TypeError');
      });  
      test('Valid puzzle strings pass the solver', () => {
        let puzzle = '12345678945678912378912345623456789156789123489123456734567891267891234591234567' , 
        coordinate = 'A1', 
        value ="7";
        solver = new Solver();
        assert.doesNotThrow(() => solver.validate(puzzle), TypeError, 'Throws TypeError');
      });  
      test('Invalid puzzle strings fail the solver', () => {
        let puzzle = '1234567894567891237891234kju3456789156789123489123456734567891267891234591234567' , 
        coordinate = 'A1', 
        value ="7";
        solver = new Solver();
        assert.doesNotThrow(() => solver.validate(puzzle), TypeError, 'Throws TypeError');
      });  
      test('Solver returns the expected solution for an incomplete puzzle', () => {
        let puzzle = '12345678945678912378912345623456789156789123489123456734567891267891234591234567' , 
        coordinate = 'A1', 
        value ="7";
        solver = new Solver();
        assert.doesNotThrow(() => solver.solve(puzzle), TypeError, 'Throws TypeError');
      });  

});
