const { JsonWebTokenError } = require("jsonwebtoken");
const request = require("supertest");

const app = require("../app");

describe("api test suite", () => {
   
    test("GET /",(done)=>{
        request(app).get("/")
                    .expect('Content-Type', /json/)
                    .expect(200)
                    // .expect(res.body.todo.length).toEqual(3)
                    .end((err, res)=>{
                        if(err) return done(err);
                        
                        return done();
                    })
    });

    test("GET / checking the data", async () => {
        const response = await request(app).get("/");
        //const data = response.JSON();
        //console.log(data);
        expect(response.statusCode).toBe(200);
        expect(response.body.Dummy_Doctors_List).toBeDefined();
        expect(response.body.Dummy_Doctors_List[0].Name).toEqual("Sam");
    });

    test("POST /login need to get 200 status code", () => {
        const data = {
            email: "test1@gmail.com",
            password: "test1"
        };
        const payload = JSON.stringify(data);
        const response = request(app).post("/login").send(payload).set("Content-Type", "application/json");
        expect(response.status).toBe(200);
        //const data = response.JSON();
        //console.log(data);
        //firstName: "Sandeep",
        //lastName: "Pabbu",
        
        
    });
});