**Precondition:**
```python
0 < len(matrix) <= 10
all(len(row) == len(matrix) for row in matrix)
all(all(0 < x < 10 for x in row) for row in matrix)
```