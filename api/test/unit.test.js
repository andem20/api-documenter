process.env.NODE_ENV = 'test';

describe('Unit tests', () => {
    test('Hashing string', () => {
        const string = 'stringforhashing';
        const salt = '0123456789101213';
        const hash = generateHash(string, salt); // SHA-512
        const expected = '5c381e5dca8375839877f59a39f44e7c93abb8a06f8493636d8fd963389b755007a45d117ec0e1dc3f5ea8bdd74ce77e5fd149c50e5622cdff6e610abffdfb24';
        expect(hash).toBe(expected);
    });

    test('Generate salt', () => {
        const salt = generateSalt();
        expect(salt).toMatch(/[0-9a-fA-F]{16}/);
    });

    test('Generate token', () => {
        const data = {
            id: '6172ed9f31e883c9bcf55aac', 
            email: 'some@email.com'
        }

        const token = createToken(data);

        expect(token).toMatch(/[0-9a-fA-F]/);
    });
});