const strapi = require("strapi");
const request = require("co-supertest");

describe("userStory Controller Integration", function() {
  describe("GET /userstories", function() {
    it("should return 200 status code", function*() {
      return request("http://localhost:1337")
        .get("/userstories")
        .expect(200)
        .end();
    });
  });

  describe("POST /userstories", function() {
    it("should return 200 status code", function*() {
      const body = {
        title: "[Proj 002] make readme.md",
        description: "add readme to repo in github"
      };
      return request("http://localhost:1337")
        .post("/userstories")
        .send(body)
        .expect(200)
        .end();
    });
  });

  describe("GET /userstories/:id", function() {
    it("should return 200 status code", function*() {
      yield request("http://localhost:1337")
        .get("/userstories/3")
        .expect(200)
        .end();
    });
  });

  describe("GET /userstories/count", function() {
    it("should return 200 status code", function*() {
      yield request("http://localhost:1337")
        .get("/userstories/count")
        .expect(200)
        .end();
    });
  });
});
