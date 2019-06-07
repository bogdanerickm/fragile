/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable require-yield */
const request = require("co-supertest");

describe("Project Controller Integration", function() {
  it("GET /projects should return 200 status code", function*() {
    return request("http://localhost:1337")
      .get("/projects")
      .expect(200)
      .end();
  });

  it("POST /projects should return 200 status code", function*() {
    const body = {
      "name": "FrAgile",
      "description": "A great API",
      "start_date": "07-06-2019",
      "end_date": "07-06-2019"
    }
    return request("http://localhost:1337")
      .post("/projects")
      .send(body)
      .expect(200)
      .end();
  });

  it("GET /projects/:id should return 200 status code", function*() {
    return request("http://localhost:1337")
      .get("/projects/3")
      .expect(200)
      .end();
  });

  it("GET /projects/count should return 200 status code", function*() {
    return request("http://localhost:1337")
      .get("/projects/count")
      .expect(200)
      .end();
  });
});
