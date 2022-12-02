const request = require("supertest");
const { response } = require("../app");

const app = require("../app");

describe("api test suite", () => {
  test("GET /", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200)
      // .expect(res.body.todo.length).toEqual(3)
      .end((err, res) => {
        if (err) return done(err);

        return done();
      });
  });

  test("POST /signup trying to create a doctor account and need to get 200 status code on successfull account creation", () => {
    const data = {
      email: "sandeep1@gmail.com",
      password: "sandeep1",
      firstName: "Sandeep1",
      lastName: "Pabbu1",
      qualification: "Physician",
      speciality: "Dermotology",
      experience: 5,
    };
    const payload = JSON.stringify(data);
    request(app)
      .post("/signup")
      .send(payload)
      .set("Content-Type", "application/json")
      .then((response) => {
        expect(response.status).toEqual(200);
      });
  });
});
