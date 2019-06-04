/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable require-yield */

const request = require("co-supertest");
const strapi = require("strapi");

describe("userStory Controller Integration", function() {
  before(async function(){
    const body = {
      title: "[Proj 002] make readme.md",
      description: "add readme to repo in github"
    };
    request("http://localhost:1337")
      .post("/userstories")
      .send(body)
      .end();
  })

  it("GET /userstories should return 200 status code", function*() {
    yield request("http://localhost:1337")
      .get("/userstories")
      .expect(200)
      .end();
  });

  it("POST /userstories should return 200 status code", function*() {
    const body = {
      title: "[Proj 002] make readme.md",
      description: "add readme to repo in github"
    };
    yield request("http://localhost:1337")
      .post("/userstories")
      .send(body)
      .expect(200)
      .end();
  });

  it("GET /userstories/:id should return 200 status code", function*() {
    yield request("http://localhost:1337")
      .get("/userstories/1")
      .expect(200)
      .end();
  });

  it("GET /userstories/count should return 200 status code", function*() {
    yield request("http://localhost:1337")
      .get("/userstories/count")
      .expect(200)
      .end();
  });

  it("POST userstories with story points should return 200 status code with valid story points", function*() {
    const body = {
      title: "[Proj 002] make readme.md",
      description: "add readme to repo in github",
      story_points: 3
    };
    yield request("http://localhost:1337")
      .post("/userstories")
      .send(body)
      .expect(200)
      .end();
  })

  it("POST userstories with story points should return 400 status code with invalid story points", function*() {
    const body = {
      title: "[Proj 002] make readme.md",
      description: "add readme to repo in github",
      story_points: 4
    };
    yield request("http://localhost:1337")
      .post("/userstories")
      .send(body)
      .expect(400)
      .end();
  });

  it("PUT userstories with story points should return 200 status code with valid story points", function*() {
    const body = {
      title: "[Proj 002] make readme.md",
      description: "add readme to repo in github",
      story_points: 3
    };
    yield request("http://localhost:1337")
      .put("/userstories/2")
      .send(body)
      .expect(200)
      .end();
  });


  it("PUT userstories with story points should return 400 status code with invalid story points", function*() {
    const body = {
      title: "[Proj 002] make readme.md",
      description: "add readme to repo in github",
      story_points: 4
    };
    yield request("http://localhost:1337")
      .put("/userstories/2")
      .send(body)
      .expect(400)
      .end();
  });
});
