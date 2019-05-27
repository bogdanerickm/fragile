const request = require("co-supertest");

describe("userStory Controller Integration", function() {
  describe("GET /userstories", function() {
    it("should return 200 status code", function*() {
      yield request(strapi.config.url)
        .get("/userstories")
        .expect(200)
        .expect('Content-Type", /json/')
        .end();
    });
  });
});
