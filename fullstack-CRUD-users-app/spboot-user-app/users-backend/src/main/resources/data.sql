INSERT INTO roles (name) 
VALUES 
('ROLE_USER'),
('ROLE_ADMIN');

INSERT INTO users (name, lastname, email, created_at, username, password) 
VALUES 
('Eduardo', 'Cristóbal', 'ecristobale1@ecris4tobale.ecristobale', '2025-02-15 16:50:12.646', 'username', 'password'),
('Admin', 'JohnDoe', 'ecristobale1@ecrist3obale.ecristobale', '2025-02-15 16:52:12.646', 'admin', '123456'),
('Ecristobale', 'Doe', 'ecristobale@ecristobale.ecristobale', '2025-02-15 16:54:12.646', 'ecristobale', 'estoesunapwd'),
('Ecristobale1', 'Doe1', 'ecristobale1@ecristobale.ecristobale', '2025-02-16 16:50:42.646', 'ecristobale1', 'estoesunapwd'),
('Ecristobale2', 'Doe2', 'ecristobale2@ecristobale.ecristobale', '2025-02-16 16:55:32.646', 'ecristobale2', 'estoesunapwd'),
('Ecristobale3', 'Doe3', 'ecristobale3@ecristobale.ecristobale', '2025-02-16 17:50:12.646', 'ecristobale3', 'estoesunapwd'),
('Ecristobale4', 'Doe4', 'ecristobale4@ecristobale.ecristobale', '2025-02-17 18:50:12.646', 'ecristobale4', 'estoesunapwd'),
('Ecristobale4', 'Doe5', 'ecristobale5@ecristobale.ecristobale', '2025-02-17 19:50:12.646', 'ecristobale5', 'estoesunapwd'),
('Ecristobale4', 'Doe6', 'ecristobale6@ecristobale.ecristobale', '2025-02-18 16:50:12.646', 'ecristobale6', 'estoesunapwd'),
('Ecristobale4', 'Doe7', 'ecristobale7@ecristobale.ecristobale', '2025-02-18 12:50:12.646', 'ecristobale7', 'estoesunapwd'),
('Ecristobale4', 'Doe8', 'ecristobale8@ecristobale.ecristobale', '2025-02-18 18:50:12.646', 'ecristobale8', 'estoesunapwd'),
('Ecristobale4', 'Doe9', 'ecristobale9@ecristobale.ecristobale', '2025-02-19 19:50:12.646', 'ecristobale9', 'estoesunapwd'),
('Ecristobale4', 'Doe10', 'ecristobale10@ecristobale.ecristobale', '2025-02-19 15:51:12.646', 'ecristobale10', 'estoesunapwd'),
('Ecristobale4', 'Doe11', 'ecristobale11@ecristobale.ecristobale', '2025-02-19 16:52:12.646', 'ecristobale11', 'estoesunapwd'),
('Ecristobale4', 'Doe12', 'ecristobale12@ecristobale.ecristobale', '2025-02-19 18:53:12.646', 'ecristobale12', 'estoesunapwd');

INSERT INTO users_roles (user_id, role_id) 
VALUES 
(1, 1),
(2, 1),
(2, 2);
