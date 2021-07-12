var request = require("request");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;

describe("Teste API login",function(){
    // a funcao it eh o que vamos testar realmente, neste caso o endpoint /cards,
    // que deve retornar no maximo 100 cartas
    it("Login user",function(done){


      request.get(
        {
          url :"http://localhost:3333/user/email41"
        },
        function(error, response, body){
  
          // precisamos converter o retorno para um objeto json
          var _body = {};
          try{
            _body = JSON.parse(body);
          }
          catch(e){
            _body = {};
          }  
          
          expect(response.statusCode).to.equal(200);
          if( _body.should.have.property('user') ){
            expect(_body.cards).to.h
          }
  
          done(); // avisamos o test runner que acabamos a validacao e ja pode proseeguir
        }
      );
    });
});
  