const {request} = require('express');

describe('register methods', () => {
    beforeEach(() => {
        expect(request.baseUrl).toBe("/register");
    });
    test('Check request type is POST', async () => {
        expect(request.method).toEqual("POST");
    });
});