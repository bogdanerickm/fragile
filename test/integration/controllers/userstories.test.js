const strapi = require("strapi");
const request = require("co-supertest");

describe("userStory Controller Integration", function() {
  describe("GET /userstories", function() {
    it("should return 200 status code", function*() {
      yield request("http://localhost:1337")
        .get("/userstories")
        .expect(200)
        .end();
    });
  });

  describe("GET /userstories/:id", function() {
    it("should return 200 status code", function*() {
      yield request("http://localhost:1337")
        .get("/userstories/1")
        .expect(200)
        .end();
    });
  });
});
