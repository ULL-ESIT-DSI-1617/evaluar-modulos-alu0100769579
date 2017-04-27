"use strict";
require("should");

var Shape = require('../shapesarea.js');
var Triangle = require('../triangle.js');
var Square = require('../square.js');
var Rectangle = require('../rectangle.js');

describe("getArea", function() {
  it("must compute the triangle area correctly. Shape object", function() {
    let a = new Shape({ width: 100, height: 50 }, 'Triangle');
    let s = a.getArea();
    s.should.equal(2500);
  })
  it("must compute the triangle area correctly. Triangle object", function() {
    let a = new Triangle({ width: 100, height: 50 });
    let s = a.getArea();
    s.should.equal(2500);
  })
});
