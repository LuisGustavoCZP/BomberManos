INSERT INTO skills (name, type, description, price, delay, cost) VALUES
    ('Inteligente', 1, 'Aumenta em 50% o ganho de experiência.', NULL, NULL, NULL),
    ('Ligeirinho', 1, 'Aumenta em 25% a velocidade de movimento.', NULL, NULL, NULL);

INSERT INTO skill_effects (skill_id, level, effect_id) VALUES
    (1, 1, 1),
    (2, 1, 2);