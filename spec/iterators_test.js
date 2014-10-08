var expect = require('chai').expect;
var Iterators = require('../iterators');

describe('Iterators', function () {
  describe('#max', function () {

    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67, 34];
    });

    it('should return the maximum in an array', function () {
      expect(Iterators.max(myArr)).to.equal(67);
    });
    it('should return -Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    });
  });

  describe('#min', function () {

    // neccesary to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67, 34];
    });

    it('should return the minimum in an array', function () {
      expect(Iterators.min(myArr)).to.equal(22);
    });
    it('should return -Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.min(myArr)).to.equal(Infinity);
    });
  });


  describe('#each', function () {
    var friends;

    beforeEach(function () {
      friends = ["tim", "fred", "joe"];
    });

    var result = [];
    it('should upper case all strings', function () {
      Iterators.each(friends, function(elem){
          result.push(elem.toUpperCase());
      });

      expect(result).to.deep.equal(["TIM", "FRED", "JOE"]);
    });

  }); // end #each
  describe('#map', function () {
    var food;


    beforeEach(function() {
      food = ["taco", "apple", "tomatoe"];
    });


      it('should upper case all strings', function() {

        function uppercase (elem){
          return elem.toUpperCase();
        }

        expect(Iterators.map(food, uppercase)).to.eql(["TACO", "APPLE", "TOMATOE"]);
      });


  });

  describe('#filter', function () {
    var music;


    beforeEach(function() {
      music = ["jass", "punk", "rock"];
    });

      it('should remove punk', function() {

        var betterMusic = function(genre){
          if (genre == "punk") {
            return false;
          } else {
            return true;
          }
        };

        expect(Iterators.filter(music, betterMusic)).to.eql(["jass", "rock"]);
      });

  });
}); // end Iterators