import logger from './sandbox';

logger('something');



/**
 * A typical pattern to mimic classical inheritance in js is as follows
 *
 * function Mammal(legs) {
 *   this.nmbrOfLegs = legs;
 * }
 *
 * Mammal.prototype.walk = function() {
 *   return 'Walking with ' + this.nmbrOfLegs + ' legs';
 * }
 *
 * function Person(name, age) {
 *  this.name = name;
 *  this.age = age;
 *  Mammal.call(this, 2);
 * }
 *
 * Person.prototype = new Mammal(); //or in Node land `utils.inherit(Person, Mammal)`;
 *
 * Person.prototype.speak = function() {
 *  return 'I\'m ' + this.name + ' and I\'m ' + this.age + ' years old';
 * }
 *
 * var dfp = new Person('David', 8000);
 * console.log(dfp.speak());
 * console.log(dfp.walk());
 *
 * How do we do this more cleanly in es6???
 */


