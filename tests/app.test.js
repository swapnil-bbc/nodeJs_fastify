const { expect, test } = require('@jest/globals');
const { describe, it } = require('@jest/globals');
// const { startApp }  = require("./helper");
const {build} =  require("../app");
const app = build();

describe('Contest Api',() => {
    it("default root route", async () => {
    const res = await app.inject({
        url: "/",
    });
    expect(res.json()).toEqual({ "hello": 'world from fastify' });
    });

    it("GET /getContest responds 200", async () => {
        const response = await app.inject({
            method: 'GET',
            url: '/getContest'
        });
        expect(response.statusCode).toBe(200);	
    });
});
