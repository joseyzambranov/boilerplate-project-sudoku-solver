'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      let {puzzle , coordinate , value} = req.body;
      let colIndex = coordinate.charCodeAt(0)-65;
      let rowIndex = parseInt(coordinate.charAt(1)-1);
      let result = solver.solve(puzzle)
      console.log(result[rowIndex][colIndex])
      if(result[rowIndex][colIndex] === value){
        return res.json({valid :true})
       }
       return res.json({valid :false})
      
    });
    
  app.route('/api/solve')
    .post((req, res) => {
      let puzzle = req.body.puzzle
      if(!puzzle){
        return res.json({ error: 'Required field missing' })
      }

      let validate = solver.validate(puzzle)

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
