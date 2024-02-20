const {welcome, add} = require('../routes/handlers');
describe('Test Handlers', function () {

    test('Welcome route test', () => {
        const req = {  };

        const res = { text: '',
            send: function(input) { this.text = input; }
        };
        welcome(req, res);
        
        expect(res.text).toEqual("Welcome to the default route");
    });

    test('Add route test', () => {
        const req = { params: { a: 5, b: 3 } };

        const res = { text: '',
            send: function(input) { this.text = input; }
        };
        add(req, res);
        
        expect(res.text).toEqual("8");
    });
});