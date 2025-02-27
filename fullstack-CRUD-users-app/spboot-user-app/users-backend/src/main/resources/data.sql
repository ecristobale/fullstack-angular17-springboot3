INSERT INTO roles (name) 
VALUES 
('ROLE_USER'),
('ROLE_ADMIN');

-- 12345
INSERT INTO users (name, lastname, email, created_at, username, password) 
VALUES 
('Eduardo', 'Cristóbal', 'ecristobale1@ecris4tobale.ecristobale', '2025-02-15 16:50:12.646', 'username', '$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS'),
('Admin', 'JohnDoe', 'ecristobale1@ecrist3obale.ecristobale', '2025-02-15 16:52:12.646', 'admin', '$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS'),
('Ecristobale', 'Doe', 'ecristobale@ecristobale.ecristobale', '2025-02-15 16:54:12.646', 'ecristobale', '$2a$10$UTwy8smnrANKfDdLgc8pR.IWz1PgOqinrT01BsbGZuSmzcjToOnQ2'),
('Ecristobale1', 'Doe1', 'ecristobale1@ecristobale.ecristobale', '2025-02-16 16:50:42.646', 'ecristobale1', '$2a$10$UTwy8smnrANKfDdLgc8pR.IWz1PgOqinrT01BsbGZuSmzcjToOnQ2'),
('Ecristobale2', 'Doe2', 'ecristobale2@ecristobale.ecristobale', '2025-02-16 16:55:32.646', 'ecristobale2', '$2a$10$UTwy8smnrANKfDdLgc8pR.IWz1PgOqinrT01BsbGZuSmzcjToOnQ2'),
('Ecristobale3', 'Doe3', 'ecristobale3@ecristobale.ecristobale', '2025-02-16 17:50:12.646', 'ecristobale3', '$2a$10$UTwy8smnrANKfDdLgc8pR.IWz1PgOqinrT01BsbGZuSmzcjToOnQ2'),
('Ecristobale4', 'Doe4', 'ecristobale4@ecristobale.ecristobale', '2025-02-17 18:50:12.646', 'ecristobale4', '$2a$10$UTwy8smnrANKfDdLgc8pR.IWz1PgOqinrT01BsbGZuSmzcjToOnQ2'),
('Ecristobale4', 'Doe5', 'ecristobale5@ecristobale.ecristobale', '2025-02-17 19:50:12.646', 'ecristobale5', '$2a$10$UTwy8smnrANKfDdLgc8pR.IWz1PgOqinrT01BsbGZuSmzcjToOnQ2'),
('Ecristobale4', 'Doe6', 'ecristobale6@ecristobale.ecristobale', '2025-02-18 16:50:12.646', 'ecristobale6', '$2a$10$UTwy8smnrANKfDdLgc8pR.IWz1PgOqinrT01BsbGZuSmzcjToOnQ2'),
('Ecristobale4', 'Doe7', 'ecristobale7@ecristobale.ecristobale', '2025-02-18 12:50:12.646', 'ecristobale7', '$2a$10$UTwy8smnrANKfDdLgc8pR.IWz1PgOqinrT01BsbGZuSmzcjToOnQ2'),
('Ecristobale4', 'Doe8', 'ecristobale8@ecristobale.ecristobale', '2025-02-18 18:50:12.646', 'ecristobale8', '$2a$10$UTwy8smnrANKfDdLgc8pR.IWz1PgOqinrT01BsbGZuSmzcjToOnQ2'),
('Ecristobale4', 'Doe9', 'ecristobale9@ecristobale.ecristobale', '2025-02-19 19:50:12.646', 'ecristobale9', '$2a$10$UTwy8smnrANKfDdLgc8pR.IWz1PgOqinrT01BsbGZuSmzcjToOnQ2'),
('Ecristobale4', 'Doe10', 'ecristobale10@ecristobale.ecristobale', '2025-02-19 15:51:12.646', 'ecristobale10', '$2a$10$UTwy8smnrANKfDdLgc8pR.IWz1PgOqinrT01BsbGZuSmzcjToOnQ2'),
('Ecristobale4', 'Doe11', 'ecristobale11@ecristobale.ecristobale', '2025-02-19 16:52:12.646', 'ecristobale11', '$2a$10$UTwy8smnrANKfDdLgc8pR.IWz1PgOqinrT01BsbGZuSmzcjToOnQ2'),
('Ecristobale4', 'Doe12', 'ecristobale12@ecristobale.ecristobale', '2025-02-19 18:53:12.646', 'ecristobale12', '$2a$10$UTwy8smnrANKfDdLgc8pR.IWz1PgOqinrT01BsbGZuSmzcjToOnQ2');

INSERT INTO users_roles (user_id, role_id) 
VALUES 
(1, 1),
(2, 1),
(2, 2),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1);
