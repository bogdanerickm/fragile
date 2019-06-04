/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable require-yield */
const request = require("co-supertest");
const strapi = require("strapi");

describe("Sprint Controller Integration", function() {
  before(async function(){
    const body = {
      number: "1",
      from_date: "31-05-2016",
      to_date: "31-05-2016"
    };
    request("http://localhost:1337")
      .post("/sprints")
      .send(body)
      .expect(200)
      .end();
  })

  it("GET /sprints should return 200 status code", function*() {
    yield request("http://localhost:1337")
      .get("/sprints")
      .expect(200)
      .end();
  });

  it("POST /sprints should return 200 status code", function*() {
    const body = {
      number: "1",
      from_date: "31-05-2016",
      to_date: "31-05-2016"
    };
    yield request("http://localhost:1337")
      .post("/sprints")
      .send(body)
      .expect(200)
      .end();
  });

  it("GET sprints/:id should return 200 status code", function*() {
    yield request("http://localhost:1337")
      .get("/sprints/1")
      .expect(200)
      .end();
  });

  it("PUT /sprints/1 should return 200 status code", function*() {
    const body = {
      "number": 5,
      "from_date": "31-05-2019",
      "to_date": "07-06-2019"
    }
    yield request("http://localhost:1337")
      .put("/sprints/1")
      .send(body)
      .expect(200)
      .end();
  });
});
