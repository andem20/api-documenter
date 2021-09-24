-- CREATE TABLES --

CREATE TABLE request_type (
    id UUID PRIMARY KEY,
    name VARCHAR(10) NOT NULL
);

CREATE TABLE api_route (
    id UUID PRIMARY KEY,
    request_type_id UUID REFERENCES request_type(id),
    details TEXT NOT NULL,
    response_example TEXT NOT NULL
);

-- INSERT DATA --
INSERT INTO request_type
VALUES 
    ('75a7ee98-3317-4c64-9292-cc9aeb43f36d', 'GET'),
    ('7f23e698-26fc-4d4c-9177-7234e68cc36c', 'POST'),
    ('85e35693-1650-4e3c-af88-62e5a7dabf5e', 'PUT'),
    ('f6573144-2d91-4e44-9dec-e8837aa8cb96', 'DELETE');

INSERT INTO api_route
VALUES 
    ('5b626638-bdc9-4333-a2a9-7d35c33fa74e', '75a7ee98-3317-4c64-9292-cc9aeb43f36d', 'Gets something', '{test: "test"}'),
    ('d5750b5e-ca41-4b71-8f94-efd3fec643c2', '7f23e698-26fc-4d4c-9177-7234e68cc36c', 'Posts something', '{test: "test"}'),
    ('b4ced3cc-8c60-41d7-872a-7eee7a58f84d', '85e35693-1650-4e3c-af88-62e5a7dabf5e', 'Update something', '{test: "test"}'),
    ('868618b3-a459-4932-ab98-5a261bf4aa86', 'f6573144-2d91-4e44-9dec-e8837aa8cb96', 'Delete something', '{test: "test"}');

SELECT request.name, route.details, route.response_example 
FROM api_route AS route
INNER JOIN request_type AS request ON route.request_type_id = request.id;