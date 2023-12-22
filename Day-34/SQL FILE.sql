CREATE TABLE [CompanyDrives] (
  [RowId] INT,
  [Course] VARCHAR(45),
  [DriveName] VARCHAR(45),
  [CompanyName] VARCHAR(45),
  [Ctc] INT
)
GO

CREATE TABLE [users] (
  [UserId] INT,
  [FullName] VARCHAR(45),
  [Email] VARCHR(45),
  [Mobile] INT(10),
  [Course] VARCHAR(45),
  [CurrentCity] VARCHAR(45),
  [UserType] VARCHAR(45)
)
GO

CREATE TABLE [Attendence] (
  [EntryId] INT,
  [Date] Date,
  [UserId] INT,
  [Status] VARCHAR(45)
)
GO

CREATE TABLE [Tasks] (
  [RowId] INT,
  [TaskName] VARCHAR(45),
  [TaskURL] VARCHAR(100),
  [TaskDate] Date,
  [TaskDeadLine] Date,
  [UserId] INT
)
GO

CREATE TABLE [StudentsActivatedCourse] (
  [EntryId] INT,
  [UserId] INT,
  [CourseName] VARCHAR(45)
)
GO

CREATE TABLE [CodeKata] (
  [id] INT,
  [UserId] INT,
  [TotalSubmissions] INT,
  [geekCoins] INT,
  [Rank] INT,
  [DateWithScore] INT
)
GO

CREATE TABLE [Query] (
  [UserId] INT,
  [Topic] VARCHAR(45),
  [Doubt] VARCHAR(100),
  [Explain] VARCHAR(200),
  [CreatedTime] DateTime
)
GO

ALTER TABLE [users] ADD FOREIGN KEY ([UserId]) REFERENCES [Query] ([UserId])
GO

ALTER TABLE [users] ADD FOREIGN KEY ([UserId]) REFERENCES [StudentsActivatedCourse] ([UserId])
GO

ALTER TABLE [users] ADD FOREIGN KEY ([UserId]) REFERENCES [CodeKata] ([UserId])
GO

ALTER TABLE [users] ADD FOREIGN KEY ([UserId]) REFERENCES [Tasks] ([UserId])
GO

ALTER TABLE [users] ADD FOREIGN KEY ([Course]) REFERENCES [CompanyDrives] ([Course])
GO

ALTER TABLE [users] ADD FOREIGN KEY ([UserId]) REFERENCES [Attendence] ([UserId])
GO
