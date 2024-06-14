const { request } = require('express');

describe('register methods', () => {
    beforeEach(() => {
        expect(request.baseUrl).toBe("/register");
    });
    test('Check request type is POST', async () => {
        expect(request.method).toEqual("POST");
    });
    test('Check req.body fields are not empty or undefined', async () => {
        expect(request.body).notEqual("");
        expect(request.body).notEqual(undefined);
    });
});