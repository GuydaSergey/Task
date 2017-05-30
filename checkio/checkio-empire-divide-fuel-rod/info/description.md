Our goal is to divide the fuel rod in several pieces. The length of the rod is **N** meters.
All of the parts should have integer lengths (1, 2, 3 .. meters, but not 1.2).

You should divide the fuel rod so that the lengths form
a consecutive fragment of [the Triangular numbers](http://en.wikipedia.org/wiki/Triangular_number)
series with the maximum quantity (fragment's length).
The parts should have different lengths (no repeating).
For example: **64** should divided at **15, 21, 28**,
because **28, 36** is shorter and **1, 3, 15, 45** is not a consecutive fragment.

You are given the length of the fuel rod (N).
You should return a list of lengths (integers) for the parts in ascending order.
If it's not possible and the problem does not have a solution, then you should return an empty list.

```
64  ================================================================
28  ----------------------------
21  ---------------------
15  ---------------

371 =====================================
91  ---------
78  --------
66  -------
55  ------
45  -----
36  ----
```
