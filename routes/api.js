'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      //const {puzzle} = res.body
      //console.log(res.body)

    });
    
  app.route('/api/solve')
    .post((req, res) => {
      let puzzle = req.body.puzzle
      if(!puzzle){
        return res.json({ error: 'Required field missing' })
      }
      //if(solver.validate(puzzle)){
      //  return res.json( solver.solve(puzzle))
      //}
      //return res.json(solver.validate(puzzle) );
      //const errors = {
      //  invalidChars: 'Invalid characters in puzzle',
      //  invalidLength: 'Expected puzzle to be 81 characters long'
      //};
      
      //if (!/^[0-9.]+$/.test(puzzle)) {
      //  return res.json({"error" : errors.invalidChars}) ;
      //}
      //
      //if (puzzle.length !== 81) {
      //  return res.json({"error" : errors.invalidLength})  ;
      //}

      let validate = solver.validate(puzzle)

      console.log(validate)

      if(validate != true){
        return res.json( { error : validate } )
      }

      let result = solver.solve(puzzle)
      if(!result){
        return res.json( { error: 'Puzzle cannot be solved' } )  
      }
      return res.json( { solution : result } )
    });
};
