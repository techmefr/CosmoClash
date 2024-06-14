const { request, response } = require('express');
const { mysql } = require('mysql2');

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
    test('Check req.body keys are (username, email, password)', async () => {
        expect(Object.keys(request.body)).toBe(["username", "email", "password"]);
    })
    test('Check req.body values are not null or undefined', async () => {
        const values = [];
        for (const [key, value] of Object.entries(request.body)) {
            if(value !== undefined && value !== "") {
                values.push(true);
            } else {
                values.push(false);
            }
        }
        expect(values).equal([true, true, true]);
        expect(values).notEqual([false, false, false]);
        expect(values).notEqual([true, true, false]);
        expect(values).notEqual([false, true, false]);
        expect(values).notEqual([false, false, true]);
        expect(values).notEqual([false, true, true]);
        expect(values).notEqual([true, false, false]);
    });
    test('Check that the new user is sent to database', async () => {
        expect(response.statusCode).toBe(201)
        let hasUser = false;
        userModel.findAll().then(data => hasUser = !!data)
            .catch(err => hasUser = false);
        expect(hasUser).toBeTruthy();
    });
    test('Check that the password entered in database is of type bcrypt', async () => {
        let isBcrypt = false;
        userModel.findByEmail(request.body.email).then(data => {
            isBcrypt = new RegExp(/^\$2[ayb]\$.{56}$/).test(data.password);
        })
        expect(isBcrypt).toBeTruthy();
    });
});