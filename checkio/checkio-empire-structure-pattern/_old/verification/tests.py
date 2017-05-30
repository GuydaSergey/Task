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
            "input": [42, '12a0b3e4'],
            "answer": True,
            "explanation": [
                "      42",
                "00101010",
                "12a0b3e4",
                "DDLDLDLD",
                "VVVVVVVV"]
        },

        {
            "input": [101, 'ab23b4zz'],
            "answer": False,
            "explanation": [
                "     101",
                "01100101",
                "ab23b4zz",
                "LLDDLDLL",
                "XVXVXXXV"]
        },
        {
            "input": [0, '478103487120470129'],
            "answer": True,
            "explanation": [
                "                 0",
                "000000000000000000",
                "478103487120470129",
                "DDDDDDDDDDDDDDDDDD",
                "VVVVVVVVVVVVVVVVVV"]},
        {
            "input": [127, 'Checkio'],
            "answer": True,
            "explanation": [
                "    127",
                "1111111",
                "Сheckio",
                "LLLLLLL",
                "VVVVVVV"]},
        {
            "input": [8, 'a'],
            "answer": False,
            "explanation": [
                "   8",
                "1000",
                "   a",
                "XXXL",
                "XXXX"]},

        {
            "input": [7, 'Hello'],
            "answer": False,
            "explanation": [
                "    7",
                "00111",
                "Hello",
                "LLLLL",
                "XXVVV"]},

        {
            "input": [5, 'H2O'],
            "answer": True,
            "explanation": [
                "  5",
                "101",
                "H2O",
                "LDL",
                "VVV"]},

        {
            "input": [42, 'C2H5OH'],
            "answer": False,
            "explanation": [
                "    42",
                "101010",
                "C2H5OH",
                "LDLDLL",
                "VVVVVX"]},

    ],
    "Edge": [
        {
            "input": [0, '0'],
            "answer": True,
            "explanation": [
                "0",
                "0",
                "0",
                "D",
                "V"]},
        {
            "input": [3, 'a'],
            "answer": False,
            "explanation": [
                " 3",
                "11",
                " a",
                "XL",
                "XV"]},


        {
            "input": [0, '012345678901234567890'],
            "answer": True,
            "explanation": [
                "                    0",
                "000000000000000000000",
                "012345678901234567890",
                "DDDDDDDDDDDDDDDDDDDDD",
                "VVVVVVVVVVVVVVVVVVVVV"]},

        {
            "input": [1, 'A'],
            "answer": True,
            "explanation": [
                "1",
                "1",
                "A",
                "L",
                "V"]},

        {
            "input": [1, '1'],
            "answer": False,
            "explanation": [
                "1",
                "1",
                "1",
                "D",
                "X"]},

        {
            "input": [1, 'z'],
            "answer": True,
            "explanation": [
                "1",
                "1",
                "z",
                "L",
                "V"]},

        {
            "input": [2147483647, 'LoremIpsumDoLorsiTametConsectet'],
            "answer": True,
            "explanation": [
                "                     2147483647",
                "1111111111111111111111111111111",
                "LoremIpsumDoLorsiTametConsectet",
                "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
                "VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"]},
        {
            "input": [31, 'LoremIpsumDoLorsiTametConsectet'],
            "answer": False,
            "explanation": [
                "    127",
                "1111111",
                " length",
                "XLLLLLL",
                "XVVVVVV"]},
        {
            "input": [1, 'LoremIpsumDoLorsiTametConsectet'],
            "answer": False,
            "explanation": [
                "                              1",
                "0000000000000000000000000000001",
                "LoremIpsumDoLorsiTametConsectet",
                "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
                "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXV"]},

        {
            "input": [2147483647, 'Loremipsumdolorsitametconsecte9'],
            "answer": False,
            "explanation": [
                "                     2147483647",
                "1111111111111111111111111111111",
                "Loremipsumdolorsitametconsecte9",
                "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLD",
                "VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX"]},



    ],
    "Extra": [
        {
            "input": [682, 'a9z1b2c4d6'],
            "answer": True,
            "explanation": [
                "       682",
                "1010101010",
                "a9z1b2c4d6",
                "LDLDLDLDLD",
                "VVVVVVVVVV"]},
        {
            "input": [2730, '9z1b2c4d6a7Z'],
            "answer": False,
            "explanation": [
                "        2730",
                "101010101010",
                "9z1b2c4d6a7Z",
                "DLDLDLDLDLDL",
                "XXXXXXXXXXXX"]},
        {
            "input": [1024, 'I0000000000'],
            "answer": True,
            "explanation": [
                "       1024",
                "10000000000",
                "I0000000000",
                "LDDDDDDDDDD",
                "VVVVVVVVVVV"]},
        {
            "input": [67108865, 'a2345678901234567890123456z'],
            "answer": True,
            "explanation": [
                "                   67108865",
                "100000000000000000000000001",
                "a2345678901234567890123456z",
                "LDDDDDDDDDDDDDDDDDDDDDDDDDL",
                "VVVVVVVVVVVVVVVVVVVVVVVVVVV"]},

        {
            "input": [1000, 'OneThousand'],
            "answer": False,
            "explanation": [
                "       1000",
                "01111101000",
                "OneThousand",
                "LLLLLLLLLLL",
                "XVVVVVXVXXX"]},
        {
            "input": [4096, 'C3PO'],
            "answer": False,
            "explanation": [
                "         4096",
                "1000000000000",
                "         C3PO",
                "XXXXXXXXXLDLL",
                "XXXXXXXXXVVXX"]},
    ]
}
