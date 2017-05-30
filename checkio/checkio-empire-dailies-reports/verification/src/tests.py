TESTS = {
    "Level_1": [
        {
            "input": ['2015-01-01 A1,B2\n2015-01-05 C3,C2,C1\n2015-02-01 B4\n2015-01-03 Z9,Z9', '2015-01-01',
                      '2015-01-31'],
            "answer": 540,
        },
        {
            "input": ['2000-02-02 Z2,Z1\n2000-02-01 Z2,Z1\n2000-02-03 Z2,Z1', '2000-02-04', '2000-02-28'],
            "answer": 0,
        },
        {
            "input": ['2999-12-31 Z9,A1', '2000-01-01', '2999-12-31'],
            "answer": 235,
        },
        {
            "input": [
                "\n".join(
                    ['2001-03-09 M7,S7,O1', '2002-03-09 H5,M1', '2003-03-09 W9,Y8,G8,X4,T5,J8', '2004-03-09 X4,O7,A6',
                     '2005-03-09 I3,M9,T9,W3,D8,N4,M7,Z7,F9,D6', '2006-03-09 W3', '2007-03-09 G3,P2',
                     '2008-03-09 T3,Q5', '2009-03-09 F7,A1,N4,I8,H5,O5,O8,T2', '2010-03-09 N7,L7,S1,W6']),
                "2003-01-01",
                "2005-01-01"],
            "answer": 1319,
        },
        {
            "input": [
                "\n".join(['2010-03-09 Y5', '2001-03-09 Q5,K9,M5,F9,T8,B9,J7,D2,G7',
                           '2003-03-09 C3,J4,Z1,H3,K9,I3,Y3,F1,E4,Z3', '2002-03-09 O9',
                           '2004-03-09 V3,Z7,R8,R2,Y8,K7,Y7,L6,Q8,N8', '2006-03-09 A3,S5,O7,B9,X6,V4,I9,I6,S6',
                           '2008-03-09 R2,F3,F1,W5', '2005-03-09 I5,Q9,D4,M1,L8,B9', '2007-03-09 N5,G9,X1',
                           '2009-03-09 S2,G7,R3,Y1']),
                "2003-03-09",
                "2005-03-09"],
            "answer": 3266,
        },
        {
            "input": [
                "\n".join(
                    ['2010-11-22 P5,L3', '2001-11-22 D3,M1,S7,P8,X7,J5,G9', '2003-11-22 H6,V4,Y4,O2,L5,K4,A3,K5,Q7,D2',
                     '2002-11-22 H1,E1,P7,H7,K2', '2004-11-22 W6,C3,A7,H5,J3,U7,X5,V6',
                     '2006-11-22 N7,J9,I8,A3,P8,I3,D7,Q1,W4', '2008-11-22 X6,V8,T5,J2,L9,L1,L7,U9,A8,H6',
                     '2005-11-22 F4,H1,U5,U3,X5,T6,J3,P7', '2007-11-22 A1,Z5,P6,K9,U4,R9,I1,V5,U5',
                     '2009-11-22 R8,J4,D9,G2,Y8']),
                "2010-11-22",
                "2011-11-22"],
            "answer": 242,
        },
    ]
}