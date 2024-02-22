const { welcome, add, subtract, multiply, divide } = require('../routes/handlers');

describe('Test Handlers', function () {
    test('Welcome route test', () => {
        const req = {};
        const res = {
            json: function (data) {
                this.text = JSON.stringify(data);
            }
        };

        welcome(req, res);

        expect(JSON.parse(res.text)).toEqual({ message: "Bienvenue dans l'API d'une calculatrice !" });
    });

    test('Add route test', () => {
        const req = { body: { a: 5, b: 3 } };
        const res = {
            json: function (data) {
                this.text = JSON.stringify(data);
            }
        };

        add(req, res);

        expect(JSON.parse(res.text)).toEqual({ result: 8 });
    });

    test('Subtract route test', () => {
        const req = { body: { a: 10, b: 3 } };
        const res = {
            json: function (data) {
                this.text = JSON.stringify(data);
            }
        };

        subtract(req, res);

        expect(JSON.parse(res.text)).toEqual({ result: 7 });
    });

    test('Multiply route test', () => {
        const req = { body: { a: 4, b: 6 } };
        const res = {
            json: function (data) {
                this.text = JSON.stringify(data);
            }
        };

        multiply(req, res);

        expect(JSON.parse(res.text)).toEqual({ result: 24 });
    });

    test('Divide route test', () => {
        const req = { body: { a: 20, b: 4 } };
        const res = {
            json: function (data) {
                this.text = JSON.stringify(data);
            }
        };

        divide(req, res);

        expect(JSON.parse(res.text)).toEqual({ result: 5 });
    });

    test('Divide by zero test', () => {
        const req = { body: { a: 10, b: 0 } };
        const res = {
            status: function (statusCode) {
                this.statusCode = statusCode;
                return this;
            },
            json: function (data) {
                this.text = JSON.stringify(data);
            }
        };

        divide(req, res);

        expect(res.statusCode).toBe(400);
        expect(JSON.parse(res.text)).toEqual({ error: "La division par zéro n'est pas autorisée" });
    });
});
