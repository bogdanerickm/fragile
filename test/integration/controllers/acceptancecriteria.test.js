const request = require("co-supertest");

describe("acceptance criteria Controller Integration", function() {
  describe("GET /acceptancecriterias", function() {
    it("should return 200 status code", function*() {
      yield request(strapi.config.url)
        .get("/acceptancecriterias")
        .expect(200)
        .expect('Content-Type", /json/')
        .end();
    });
  });
});
