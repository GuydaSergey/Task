"""
TESTS is a dict with all you tests.
Keys for this will be categories' names.
Each test is dict with
    "input" -- input data for user function
    "answer" -- your right answer
    "explanation" -- not necessary key, it's using for additional info in animation.
"""

TESTS = {
    "Basics": [
        {
            "input": [['X', 'Z'], ['Z', 'X']],
            "answer": True,
        },
        {
            "input": [['X', 'Z', 'X'], ['Z', 'X', 'Z'], ['X', 'Z', 'X']],
            "answer": True,
        },
        {
            "input": [['X', 'Z', 'X', 'Z'], ['Z', 'X', 'Z', 'X']],
            "answer": True,
        },
        {
            "input": [['X', 'X'], ['X', 'X']],
            "answer": False,
        },
        {
            "input": [['X', 'Z', 'X'], ['Z', 'Z', 'Z'], ['X', 'Z', 'X']],
            "answer": False,
        },
        {
            "input": [['X', 'Z', 'X', 'Z'], ['X', 'Z', 'X', 'Z']],
            "answer": False,
        },
    ],
    "Extra": [
        {
            "input": [['X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
                      ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X'],
                      ['X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
                      ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X'],
                      ['X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
                      ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X'],
                      ['X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
                      ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X'],
                      ['X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
                      ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X'],
                      ['X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
                      ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X']],
            "answer": True,
        },
        {
            "input": [['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'], ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
                      ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'], ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
                      ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'], ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
                      ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'], ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
                      ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z']],
            "answer": False,
        },
        {
            "input": [['Z', 'X', 'Z', 'X', 'X', 'X', 'Z', 'Z', 'X', 'X'],
                      ['Z', 'Z', 'X', 'Z', 'Z', 'X', 'X', 'Z', 'X', 'X'],
                      ['X', 'Z', 'Z', 'X', 'Z', 'Z', 'X', 'X', 'X', 'X'],
                      ['X', 'X', 'X', 'X', 'Z', 'Z', 'X', 'Z', 'Z', 'X'],
                      ['Z', 'Z', 'Z', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'X'],
                      ['Z', 'X', 'Z', 'X', 'Z', 'X', 'X', 'Z', 'X', 'X'],
                      ['X', 'Z', 'X', 'X', 'X', 'X', 'X', 'X', 'Z', 'Z'],
                      ['Z', 'Z', 'Z', 'Z', 'Z', 'X', 'X', 'X', 'X', 'X'],
                      ['X', 'X', 'X', 'Z', 'Z', 'Z', 'X', 'X', 'X', 'Z'],
                      ['Z', 'X', 'X', 'X', 'Z', 'X', 'Z', 'Z', 'X', 'Z']],
            "answer": False,
        },
        {
            "input": [['X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
                      ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X'],
                      ['X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
                      ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X'],
                      ['X', 'Z', 'X', 'Z', 'Z', 'Z', 'X', 'Z', 'X', 'Z'],
                      ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X'],
                      ['X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
                      ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X'],
                      ['X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
                      ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X'],
                      ['X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z'],
                      ['Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X', 'Z', 'X']],
            "answer": False,
        },
        {
            "input": [['Z', 'X'], ['X', 'Z'], ['Z', 'X'], ['X', 'Z'], ['Z', 'X'], ['X', 'Z'], ['Z', 'X'], ['X', 'Z']],
            "answer": True,
        },
    ]
}
