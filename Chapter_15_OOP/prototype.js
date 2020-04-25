/**
 * Javascript implements the Object class using a __prototype__ found
 * on each class
 * 
 * The __prototype__ provides the base functions for each class
 * 
 * Type Classname.prototype to see an object's prototytpe
 */

/**
 * B4 the class keyword to create classes one would have to define a
 * constructor function (just as you would in java) and then add
 * methods to the prototype for that 
 * 
 *  function Classname(*add fields*) {
 *      //set fields
 *  }
 * 
 * To manually add to a user defined prototype, 
 *  Classname.prototype.methodname = function() {
 *  }
 */

/**
 * Prototypal Inheritance
 * 
 * to inherit from prototype:
 * 
 * Parentclass.call(this, *fields*)
 * 
 */