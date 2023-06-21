const superstest = require("supertest")
const app = require("../app")

test("POST -> '/api/v1/books', should return status code 201 ", async()=>{

    const body = {
        name:"como ganar amigos e influir en los demas",
        category:"ayuda personal"
    }
    const res = await superstest(app)
        .post('/api/v1/books')
        .send(body)

    expect(res.status).toBe(201)
    expect(res.body.name).toBe(body.name)
})