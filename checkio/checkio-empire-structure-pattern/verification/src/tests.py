TESTS = {
    "Rank_01": [
        {
            "input": (42, '12a0b3e4'),
            "answer": True,
            "explanation": [
                "      42",
                "00101010",
                "12a0b3e4",
                "DDLDLDLD",
                "VVVVVVVV"]
        },

        {
            "input": (101, 'ab23b4zz'),
            "answer": False,
            "explanation": [
                "     101",
                "01100101",
                "ab23b4zz",
                "LLDDLDLL",
                "XVXVXXXV"]
        },
        {
            "input": (0, '478103487120470129'),
            "answer": True,
            "explanation": [
                "                 0",
                "000000000000000000",
                "478103487120470129",
                "DDDDDDDDDDDDDDDDDD",
                "VVVVVVVVVVVVVVVVVV"]},
        {
            "input": (127, 'Checkio'),
            "answer": True,
            "explanation": [
                "    127",
                "1111111",
                "Сheckio",
                "LLLLLLL",
                "VVVVVVV"]},
        {
            "input": (8, 'a'),
            "answer": False,
            "explanation": [
                "   8",
                "1000",
                "   a",
                "XXXL",
                "XXXX"]},

        {
            "input": (7, 'Hello'),
            "answer": False,
            "explanation": [
                "    7",
                "00111",
                "Hello",
                "LLLLL",
                "XXVVV"]},

        {
            "input": (5, 'H2O'),
            "answer": True,
            "explanation": [
                "  5",
                "101",
                "H2O",
                "LDL",
                "VVV"]},

        {
            "input": (42, 'C2H5OH'),
            "answer": False,
            "explanation": [
                "    42",
                "101010",
                "C2H5OH",
                "LDLDLL",
                "VVVVVX"]},
        {
            "input": (0, '0'),
            "answer": True,
            "explanation": [
                "0",
                "0",
                "0",
                "D",
                "V"]},
        {
            "input": (3, 'a'),
            "answer": False,
            "explanation": [
                " 3",
                "11",
                " a",
                "XL",
                "XV"]},


        {
            "input": (0, '012345678901234567890'),
            "answer": True,
            "explanation": [
                "                    0",
                "000000000000000000000",
                "012345678901234567890",
                "DDDDDDDDDDDDDDDDDDDDD",
                "VVVVVVVVVVVVVVVVVVVVV"]},

        {
            "input": (1, 'A'),
            "answer": True,
            "explanation": [
                "1",
                "1",
                "A",
                "L",
                "V"]},

        {
            "input": (1, '1'),
            "answer": False,
            "explanation": [
                "1",
                "1",
                "1",
                "D",
                "X"]},

        {
            "input": (1, 'z'),
            "answer": True,
            "explanation": [
                "1",
                "1",
                "z",
                "L",
                "V"]},

        {
            "input": (2147483647, 'LoremIpsumDoLorsiTametConsectet'),
            "answer": True,
            "explanation": [
                "                     2147483647",
                "1111111111111111111111111111111",
                "LoremIpsumDoLorsiTametConsectet",
                "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
                "VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"]},
        {
            "input": (31, 'LoremIpsumDoLorsiTametConsectet'),
            "answer": False,
            "explanation": [
                "    127",
                "1111111",
                " length",
                "XLLLLLL",
                "XVVVVVV"]},
        {
            "input": (1, 'LoremIpsumDoLorsiTametConsectet'),
            "answer": False,
            "explanation": [
                "                              1",
                "0000000000000000000000000000001",
                "LoremIpsumDoLorsiTametConsectet",
                "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL",
                "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXV"]},

        {
            "input": (2147483647, 'Loremipsumdolorsitametconsecte9'),
            "answer": False,
            "explanation": [
                "                     2147483647",
                "1111111111111111111111111111111",
                "Loremipsumdolorsitametconsecte9",
                "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLD",
                "VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX"]},

        {
            "input": (682, 'a9z1b2c4d6'),
            "answer": True,
            "explanation": [
                "       682",
                "1010101010",
                "a9z1b2c4d6",
                "LDLDLDLDLD",
                "VVVVVVVVVV"]},
        {
            "input": (2730, '9z1b2c4d6a7Z'),
            "answer": False,
            "explanation": [
                "        2730",
                "101010101010",
                "9z1b2c4d6a7Z",
                "DLDLDLDLDLDL",
                "XXXXXXXXXXXX"]},
        {
            "input": (1024, 'I0000000000'),
            "answer": True,
            "explanation": [
                "       1024",
                "10000000000",
                "I0000000000",
                "LDDDDDDDDDD",
                "VVVVVVVVVVV"]},
        {
            "input": (67108865, 'a2345678901234567890123456z'),
            "answer": True,
            "explanation": [
                "                   67108865",
                "100000000000000000000000001",
                "a2345678901234567890123456z",
                "LDDDDDDDDDDDDDDDDDDDDDDDDDL",
                "VVVVVVVVVVVVVVVVVVVVVVVVVVV"]},

        {
            "input": (1000, 'OneThousand'),
            "answer": False,
            "explanation": [
                "       1000",
                "01111101000",
                "OneThousand",
                "LLLLLLLLLLL",
                "XVVVVVXVXXX"]},
        {
            "input": (4096, 'C3PO'),
            "answer": False,
            "explanation": [
                "         4096",
                "1000000000000",
                "         C3PO",
                "XXXXXXXXXLDLL",
                "XXXXXXXXXVVXX"]},
    ],
    "Rank_02": [
        {
            "input": [1823, 'CheckiO', 3],
            "answer": True,
            "explanation": ['   1823', '2111112', 'CheckiO', 'VVVVVVV'],
        },
        {
            "input": [1904, 'CheckiO', 3],
            "answer": False,
            "explanation": ['   1904',
                            '2121112',
                            'CheckiO',
                            'VVXVVVV'],
        },
        {
            "input": [66431, '9z1b2c4d6a7Z', 3],
            "answer": True,
            "explanation": ['       66431', '010101010102', '9z1b2c4d6a7Z', 'VVVVVVVVVVVV'],
        },
        {
            "input": [70076, '9z1b2c4d6a7Z', 3],
            "answer": False,
            "explanation": ['       70076', '010120010102', '9z1b2c4d6a7Z', 'VVVVXXVVVVVV'],
        },
        {
            "input": [1330776, '123LoremIpsum123', 3],
            "answer": True,
            "explanation": ['         1330776', '0002111121111000', '123LoremIpsum123',
                            'VVVVVVVVVVVVVVVV'],
        },
        {
            "input": [2541865828331, 'a2345678901234567890123456Z', 3],
            "answer": True,
            "explanation": ['              2541865828331', '100000000000000000000000002',
                            'a2345678901234567890123456Z', 'VVVVVVVVVVVVVVVVVVVVVVVVVVV'],
        },
        {
            "input": [3106724901455, 'a2345678901234567890123456Z', 3],
            "answer": False,
            "explanation": ['              3106724901455', '102000000000000000000020002',
                            'a2345678901234567890123456Z', 'VVXVVVVVVVVVVVVVVVVVVVXVVVV'],
        },
        {
            "input": [2186, 'ABCDEFG', 3],
            "answer": True,
            "explanation": ['   2186', '2222222', 'ABCDEFG', 'VVVVVVV'],
        },
        {
            "input": [43928, 'ABC000DEFG', 3],
            "answer": False,
            "explanation": ['     43928', '2020020222', 'ABC000DEFG', 'VXVVVXXVVV'],
        },
    ],
    "Rank_03": [
        {
            "input": [39294315, 'Kill Them ALL', 4],
            "answer": False,
            "explanation": ['     39294315', '2111321111223', 'Kill Them ALL', 'VVVVVVVVVXVVX'],
        },
        {
            "input": [29, 'aXz', 4],
            "answer": False,
            "explanation": [' 29', '131', 'aXz', 'VXV'],
        },

        {
            "input": [39294442, 'Feed Them ALL', 4],
            "answer": True,
            "explanation": ['     39294442', '2111321113222', 'Feed Them ALL', 'VVVVVVVVVVVVV'],
        },
        {
            "input": [357333, 'Take 1 mine', 4],
            "answer": False,
            "explanation": ['     357333', '01113033111', 'Take 1 mine', 'XVVVVVVXVVV'],
        },
        {
            "input": [2930682794, 'DO NOT TAKE THIS', 4],
            "answer": True,
            "explanation": ['      2930682794', '2232223222232222', 'DO NOT TAKE THIS',
                            'VVVVVVVVVVVVVVVV'],
        },
        {
            "input": [2385166685525, 'C3PO and 300 spartans', 4],
            "answer": True,
            "explanation": ['        2385166685525', '202231113000311111111',
                            'C3PO and 300 spartans', 'VVVVVVVVVVVVVVVVVVVVV'],
        },
        {
            "input": [939413, '101 Dalmatian', 4],
            "answer": False,
            "explanation": ['       939413', '0003211112111', '101 Dalmatian', 'VVVVVVVVVXVVV'],
        },
    ]
}
