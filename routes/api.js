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
      if(puzzle){
        return res.json(solver.solve(puzzle))
      }else{
        return res.json({ error: 'Required field missing' })
      }
    });
};
