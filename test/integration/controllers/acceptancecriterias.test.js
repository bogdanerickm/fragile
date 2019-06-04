/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable require-yield */

const request = require("co-supertest");

describe("acceptance criteria Controller Integration", function() {
  before(function(){
    const body = {
      accepted: true,
      description: "has to be on markdown"
    };
    request("http://localhost:1337")
      .post("/acceptancecriteria")
      .send(body)
      .expect(200)
      .end();
  })

  it("GET /acceptancecriteria should return 200 status code", function*() {
    yield request("http://localhost:1337")
      .get("/acceptancecriteria")
      .expect(200)
      .end();
  });

  it("POST /acceptancecriteria should return 200 status code", function*() {
    const body = {
      accepted: true,
      description: "has to be on markdown"
    };
    yield request("http://localhost:1337")
      .post("/acceptancecriteria")
      .send(body)
      .expect(200)
      .end();
  });

  it("GET /acceptancecriteria/:id should return 200 status code", function*() {
    yield request("http://localhost:1337")
      .get("/acceptancecriteria/1")
      .expect(200)
      .end();
  });

  it("GET /acceptancecriteria/count should return 200 status code", function*() {
    yield request("http://localhost:1337")
      .get("/acceptancecriteria/count")
      .expect(200)
      .end();
  });
});
