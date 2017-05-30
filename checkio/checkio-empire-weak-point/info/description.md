The durability map is represented as a matrix with digits. Each number is the durability measurement for the cell.
To find the weakest point we should find the weakest row and column. 
The weakest point is placed in the intersection of these rows and columns. 
Row (column) durability is a sum of cell durability in that row (column). 
You should find coordinates of the weakest point (row, column). 
The first row (column) is 0th row (column). If a section has several equal weak points, then choose the top left point.

```
    20  30  22  19  25
  |---|---|---|-*-|---|
27| 7 | 2 | 7 | 3 | 8 |
  |---|---|---|-*-|---|
23| 2 | 9 | 4 | 1 | 7 |
  |---|---|---|-*-|---|
23| 3 | 8 | 6 | 2 | 4 |
  |---|---|---|-*-|---|
19* 2 * 5 * 2 **9** 1 *
  |---|---|---|-*-|---|
26| 6 | 6 | 5 | 4 | 5 |
  |---|---|---|-*-|---|
  
  Weak point (3, 3)

    20  29  19  19  25
  |---|---|-*-|-*-|---|
27| 7 | 2 | 7 | 3 | 8 |
  |---|---|-*-|-*-|---|
19* 2 * 8 **1** 1 * 7 *
  |---|---|-*-|-*-|---|
23| 3 | 8 | 6 | 2 | 4 |
  |---|---|-*-|-*-|---|
19* 2 * 5 * 2 * 9 * 1 *
  |---|---|-*-|-*-|---|
26| 6 | 6 | 5 | 4 | 5 |
  |---|---|-*-|-*-|---|

  Weak point (1, 2)
```
