Do you know that linear algebra is very useful for the calculation of movement of our forces?
So take your pens and algebra books and learn, learn, learn.

In mathematics, particularly in linear algebra, a skew-symmetric matrix(also known as an antisymmetric or antimetric) 
is a square matrix <strong>A</strong> whose transpose is also its negative.
This means it satisfies the equation A=-A<sup>T</sup>.
If the entry in the i-th row and j-th column is a<sub>ij</sub>, i.e.
A=(a<sub>ij</sub>) then the symmetric condition becomes a<sub>ij</sub>=-a<sub>ji</sub>.

You should determine whether the specified square matrix is skew-symmetric or not.

You can find more details on Skew-symmetric matrices on its [Wikipedia page](http://en.wikipedia.org/wiki/Skew-symmetric_matrix).

**Input:** A square matrix as a list of lists with integers. 

**Output:** If the matrix is skew-symmetric or not as a boolean.

**Example:**

```python
is_skew_symmetric([
    [ 0,  1,  2],
    [-1,  0,  1],
    [-2, -1,  0]]) == True
is_skew_symmetric([
    [ 0,  1, 2],
    [-1,  1, 1],
    [-2, -1, 0]]) == False
is_skew_symmetric([
    [ 0,  1, 2],
    [-1,  0, 1],
    [-3, -1, 0]]) == False
```

**How it is used:**

Skew-symmetric matrices can be useful for the cross product, 
an operation in mathematics used in the calculation of movement of military forces.
Matrixes are basis for the linear algebra and vector graphics.

**Precondition:**
```python
0 < len(matrix)
```

