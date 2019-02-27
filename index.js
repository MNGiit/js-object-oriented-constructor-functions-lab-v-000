function Scooter () {
  
}

Scooter constructor
should create a new scooter with three properties ‣
ReferenceError: Scooter is not defined
    at Context.<anonymous> (test/indexTest.js:6:20)let samson = new Scooter(2015, "red", "swoosh");
expect(samson).to.be.an.instanceof(Scooter);
expect(samson.year).to.equal(2015);
expect(samson.color).to.equal("red");
expect(samson.model).to.equal("swoosh");