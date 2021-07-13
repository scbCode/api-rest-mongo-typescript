import * as chai from 'chai';
import { request, expect } from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe("User Test",function  ()  {
   this.timeout(10000);
   it('POST/USER/', async  () => {
      const res = await request('http://localhost:3333').post("/register") .send({
        nome: "esteve",
        email: "esteve5@gmail.com",
        senha: "1234567"
      })
      expect(res.status).to.equal(201);
    });
    it('GET/USER/', async  () => {
      const res = await request('http://localhost:3333').get("/user/esteve4@gmail.com") 
      expect(res.status).to.equal(200);
      expect(res.body).to.have.a.property('user')
      expect(res.body).to.have.deep.nested.property('user.email')
    });
});