'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      const conflict = []
      let {puzzle , coordinate , value} = req.body;

      if(!puzzle || !coordinate || !value){
        return res.json({ error: 'Required field(s) missing' })
      }

      let coordinateRegex = /^[A-I][1-9]$/;

      if (!coordinateRegex.test(coordinate)) {
        return res.json({ error: 'Invalid coordinate' });
      }

      let valueRegex = /^[1-9]$/;

      if (!valueRegex.test(value)) {
        return res.json({ error: 'Invalid value' });
      }
      let rowIndex = coordinate.charCodeAt(0)-65;
      let colIndex = parseInt(coordinate.charAt(1)-1);
      
      let validate = solver.validate(puzzle)
      if(validate != true){
        return res.json( { error : validate } )
      }

      let result = solver.solve(puzzle)

      if (puzzle.charAt(rowIndex * 9 + colIndex) === value) {
        return res.json({valid: true});
      }
      let currentValue = puzzle[rowIndex * 9 + colIndex];

      if (result[rowIndex][colIndex] == value) {
        return res.json({ valid: true });
      } else if (currentValue != '.' && currentValue == value) {
        return res.json({ valid: false, conflict: conflict });
      }
       let validRow = solver.checkRowPlacement(puzzle,rowIndex,colIndex,value)
      
       if(!validRow){
         conflict.push("row")
       }
       let validColumn = solver.checkColPlacement(puzzle,rowIndex,colIndex,value)
       if(!validColumn){
         conflict.push("column")
       }
       let validRegion = solver.checkRegionPlacement(puzzle,rowIndex,colIndex,value)
       if(!validRegion){
         conflict.push("region")
       }
       if (conflict.length > 0) {
        return res.json({ valid: false, conflict });
      } else {
        return res.json({ valid: true });
      }
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
