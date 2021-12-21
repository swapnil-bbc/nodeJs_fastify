const { expect, test } = require('@jest/globals');
const { describe, it } = require('@jest/globals');
const { string } = require('yargs');
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

    it("POST /createContest responds 200", async () => {
        const userPayload = {
            "name": "photo contest",
            "description" :"abc",
            "start_time" :"2021-12-10 11:20:29abc",
            "end_time" :"2021/12/10",
            "minimum_image_count" :2,
            "maximum_image_count" :5,
            "social_share_message" :"Social Msg",
        };
        expect(typeof userPayload.name).toBe("string");
        expect(typeof userPayload.description).toBe("string");
        expect(typeof userPayload.start_time).toBe("string");
        expect(typeof userPayload.end_time).toBe("string");
        expect(typeof userPayload.minimum_image_count).toBe("string");
        expect(typeof userPayload.maximum_image_count).toBe("number");
        expect(typeof userPayload.social_share_message).toBe("string");
        const response = await app.inject({
            method: 'POST',
            url: '/createContest',
            headers: {
				Accept: 'application/json'
			},
            payload: userPayload
        });
        console.log("Response  ==> ",response);
        console.log("Payload response ==> ",response.payload['name']);
        // console.log("Payload Response ==> ",response.payload);
        expect(response.headers['content-type']).toMatch(/json/);
		expect(response.statusCode).toBe(200);
    });
});
