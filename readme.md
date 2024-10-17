-place players to the grid (random position for both players)
-stop game after google will take necessary points
-google must jump to empty cell (if player is in the cell - jump to other cell)

- Create classes:
--Position (информационный эксперт/создатель (GRASP))
--Google (информационный эксперт/создатель (GRASP))
  --Settings (DI)
  --GridSettings (DI)
  --Player (like Google)
  
  
// new Game(new Settings(new GridSettings()))