/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable require-yield */

const request = require("co-supertest");
const strapi = require("strapi");

describe("Project Controller Integration", function() {
  before(async function(){
    const body = {
      name: "FrAgile",
      description: "has to be on markdown",
      start_date: "25-05-1994",
      end_date: "25-05-1994"
    };
    request("http://localhost:1337")
      .post("/projects")
      .send(body)
      .expect(200)
      .end();
  })

  it("GET /projects should return 200 status code", function*() {
    yield request("http://localhost:1337")
      .get("/projects")
      .expect(200)
      .end();
  });

  it("POST /projects should return 200 status code", function*() {
    const body = {
      name: "FrAgile",
      description: "has to be on markdown",
      start_date: "25-05-1994",
      end_date: "25-05-1994"
    };
    yield request("http://localhost:1337")
      .post("/projects")
      .send(body)
      .expect(200)
      .end();
  });

  it("POST /projects without end_date should return 200 status code", function*() {
    const body = {
      name: "FrAgile",
      description: "has to be on markdown",
      start_date: "25-05-1994"
    };
    yield request("http://localhost:1337")
      .post("/projects")
      .send(body)
      .expect(200)
      .end();
  });

  it("GET /projects/:id should return 200 status code", function*() {
    yield request("http://localhost:1337")
      .get("/projects/1")
      .expect(200)
      .end();
  });

  it("GET /projects/count should return 200 status code", function*() {
    yield request("http://localhost:1337")
      .get("/projects/count")
      .expect(200)
      .end();
  });
});
