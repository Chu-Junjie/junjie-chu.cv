-- Original SQL from CP2404 Practical 8 submission by Junjie Chu.
-- Source: CP2404 Practical 8, Prac8_JunjieChu.docx; SQL-10, SQL-21, SQL-23.
-- These are library coursework queries, not FlyHigh airline queries.
-- Original result screenshots accompany the submission; queries were not rerun here.

-- SQL-10
SELECT Book_Num, Count(*) AS "Times Checked Out"
FROM CHECKOUT
GROUP BY Book_Num
ORDER BY Count(*) DESC, Book_Num DESC;

-- SQL-21
SELECT Pat_ID, Pat_LName, Count(Check_Num) AS "NUM CHECKOUTS", Count(DISTINCT Book_Num) AS "NUM DIFFERENT BOOKS"
FROM PATRON JOIN CHECKOUT USING (Pat_ID)
GROUP BY Pat_ID, Pat_LName
HAVING Count(Check_Num) >= 3
ORDER BY Count(DISTINCT Book_Num) DESC, Count(Check_Num) DESC, Pat_ID ASC;

-- SQL-23
SELECT Pat_ID, Round(Avg(datediff(Check_In_Date, Check_Out_Date)), 2) AS "Average Days Kept"
FROM CHECKOUT
GROUP BY Pat_ID
HAVING Count(Check_Num) >= 3
ORDER BY Avg(datediff(Check_In_Date, Check_Out_Date)) DESC;
