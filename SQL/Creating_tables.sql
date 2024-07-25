-- CREATE TABLE banks (
-- 	id SERIAL PRIMARY KEY,
-- 	name_eng VARCHAR(35),
-- 	name_local VARCHAR(35),
-- 	country VARCHAR(35)
-- );

-- INSERT INTO banks (name_eng, name_local , country)
-- VALUES ('Bank Hapoalim', 'בנק הפועלים', 'Israel');

-- CREATE TABLE credit_companies (
-- 	id SERIAL PRIMARY KEY,
-- 	name_eng VARCHAR(35),
-- 	name_local VARCHAR(35),
-- 	country VARCHAR(35)
-- );

-- INSERT INTO credit_companies (name_eng, name_local , country)
-- VALUES ('Cal Company', 'חברת כאל', 'Israel'),
-- 	('Isracard', 'ישראכרט', 'Israel');

-- CREATE TABLE accounts (
-- 	id SERIAL PRIMARY KEY,
-- 	account_name VARCHAR(35),
-- 	date_of_opening DATE,
-- 	currency VARCHAR(3),
-- 	bank_id INTEGER,
-- 	CONSTRAINT bank_id
--       FOREIGN KEY(id) 
-- 	  REFERENCES banks(id)
-- 	  ON DELETE CASCADE
-- );

-- INSERT INTO accounts (account_name, date_of_opening, currency, bank_id)
-- VALUES ('12-729-89489', '21.05.2024', 'NIS', 1);


-- CREATE TABLE account_incomes (
-- 	id SERIAL PRIMARY KEY,
-- 	date DATE,
-- 	action_eng VARCHAR(30),
-- 	action_local VARCHAR(30),
-- 	details_eng VARCHAR(50),
-- 	details_local VARCHAR(50),
-- 	reference VARCHAR(20),
-- 	income_value FLOAT(4),
-- 	value_date DATE,
-- 	in_favor_of_eng VARCHAR(20),
-- 	in_favor_of_local VARCHAR(20),
-- 	for_eng VARCHAR(20),
-- 	for_local VARCHAR(20),
-- 	account_id INTEGER,
-- 	CONSTRAINT account_id
--       FOREIGN KEY(id) 
-- 	  REFERENCES accounts(id)
-- 	  ON DELETE CASCADE
-- );

-- CREATE TABLE account_outcomes (
-- 	id SERIAL PRIMARY KEY,
-- 	date DATE,
-- 	action_eng VARCHAR(30),
-- 	action_local VARCHAR(30),
-- 	details_eng VARCHAR(50),
-- 	details_local VARCHAR(50),
-- 	reference VARCHAR(20),
-- 	outcome_value FLOAT(4),
-- 	value_date DATE,
-- 	in_favor_of_eng VARCHAR(20),
-- 	in_favor_of_local VARCHAR(20),
-- 	for_eng VARCHAR(20),
-- 	for_local VARCHAR(20),
-- 	account_id INTEGER,
-- 	CONSTRAINT account_id
--       FOREIGN KEY(id) 
-- 	  REFERENCES accounts(id)
-- 	  ON DELETE CASCADE
-- );