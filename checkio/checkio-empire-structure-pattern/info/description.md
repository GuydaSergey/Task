You are given a pattern as a positive integer and you are also given a row structure as a word.
For comparison, the recognition system should convert the integer pattern into binary form. It needs to append zeros to left to match the structure length and compare this combination with the structure.

**1 is a letter and 0 is a digit.**

If the pattern and the structure match, then return True, else return False. 
If the pattern is longer than a given structure, then they are not a match (Example: 8 = 1000 and "a").

Here's an example: the given pattern is 42 and the structure is "12a0b3e4". 
42 == 101010 in binary form, but this is not long enough to match the structure. 
Append zeroes to the left to get "00101010". Now compare the two:

```
      42 == 00101010
12a0b3e4 == DDLDLDLD
--------------------
    True    VVVVVVVV
```

Here's one more example -- 101 and "ab23b4zz":

```
     101 == 01100101
ab23b4zz == LLDDLDLL
--------------------
   False    XVXVXXXV
```
