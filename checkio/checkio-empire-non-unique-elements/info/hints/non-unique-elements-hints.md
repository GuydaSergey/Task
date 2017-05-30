## I have no idea how to start solving this mission

Python lists have an useful method for this mission. --
[count(element)](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists).

##I need some help to proceed with the mission

Don't remove elements from the list which you iterate as it can have unpredictable results.
Also, don't forget that your function should return the result, not print.

## I am gone half way through. Need help!

You can create a new empty list like so: `result = []`, and append it with non-unique elements.

## I am stuck. I need a small hint.

`for el in array:`, `data.count` and `result.append` are all that are you need for this mission.

## I tried all I could. Nothing works. SOS.

Just try the method and statements from the last hint.

```python
for el in data:
    if data.count(el) > 1:
        result.append(el)
```
