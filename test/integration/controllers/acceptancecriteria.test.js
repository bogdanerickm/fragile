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
});
