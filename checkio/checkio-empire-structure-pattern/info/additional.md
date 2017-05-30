**Rank 2**:
 
In default pattern level (level = 2) we using binary form.
If the patter level equals 3, then convert the integer pattern into ternary numeral system (base 3).
**0 is a digit, 1 is a lowercase letter, 2 is an uppercase letter.**

_Precondition rank 2:_

`structure` matches by `"\A[a-zA-Z0-9]{1, 32}\Z"` regexp expression. 

`pattern_level ∈ {2, 3}`


**Rank 3**: If the pattern level equals 4, then convert the integer pattern into
Quaternary numeral system (base 4). 
**0 is a digit, 1 is a lowercase letter, 2 is an uppercase letter, 3 is a whitespace.**

_Precondition rank 3:_

`structure` matches by `"\A[ a-zA-Z0-9]{1, 32}\Z"` regexp expression. 

`pattern_level ∈ {2, 3, 4}`
