const request = require("co-supertest");

describe("acceptance criteria Controller Integration", function() {
  describe("GET /acceptancecriteria", function() {
    it("should return 200 status code", function*() {
      yield request("http://localhost:1337")
        .get("/acceptancecriteria")
        .expect(200)
        .end();
    });
  });

  describe("POST /acceptancecriteria", function() {
    it("should return 200 status code", function*() {
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
  });

  describe("GET /acceptancecriteria/:id", function() {
    it("should return 200 status code", function*() {
      yield request("http://localhost:1337")
        .get("/acceptancecriteria/3")
        .expect(200)
        .end();
    });
  });

  describe("GET /acceptancecriteria/count", function() {
    it("should return 200 status code", function*() {
      yield request("http://localhost:1337")
        .get("/acceptancecriteria/count")
        .expect(200)
        .end();
    });
  });
});
