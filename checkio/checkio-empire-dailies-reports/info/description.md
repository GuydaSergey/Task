Ingots in each consignment are numbered in the row from A1 to Z9 as
A1, A2,..., A9, B1, B2, ..., Z9. Each consignment are marked by the last ingots in it.
So you can define the quantity of ingots by marks.
Each daily report written as consignments of marks in string separated by commas.
So you can count the total quantity of ingots for a day.

The full report contain daily reports for several days.
Each report is given with a date in the next format:
`YYYY-MM-DD`, where YYYY is year, MM is month, DD is day.
Date and report are separated by whitespace. Each date-report are placed on separated lines.

You are given a full report as a multiline text and two dates.
You should calculate the total quantity ingots for the days between given dates (**including**).

For example you are given the next full report and dates:

```
2015-01-01 A1,B2
2015-01-05 C3,C2,C1
2015-02-01 B4
2015-01-03 Z9,Z9

From: 2015-01-01
To:   2015-01-31
```

For these dates we see three "good" days: 2015-01-01, 2015-01-03, 2015-01-05.
- 2015-01-01 == 1 + 11 == 12
- 2015-01-03 == 21 + 20 + 19 == 60
- 2015-01-05 == 234 + 234 == 468

So the result is 540.
