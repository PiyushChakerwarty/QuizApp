use quizapp;

CREATE TABLE user(
	id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(50) NOT NULL,
    schoolName VARCHAR(50) NULL DEFAULT NULL,
    grade INT NULL DEFAULT NULL,
    email VARCHAR(50) NOT NULL,
    passwordHash VARCHAR(64) NOT NULL,
    confrimPassHash VARCHAR(64) NOT NULL
);

CREATE TABLE test(
	test_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    subjectName VARCHAR(50) NOT NULL,
    questions JSON NOT NULL,
    answer CHAR(2) NULL
)AUTO_INCREMENT = 1001;