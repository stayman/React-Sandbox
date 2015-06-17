import logger from './sandbox';

$(() => {
  let self = this;
  let $container1 = $('.container-1');
  let $container2 = $('.container-2');
  $container1.text('Container 1');
  $container2.text('Container 2');
  $('body').css('backgroundColor', 'goldenrod');
  //$('body').css('backgroundColor', 'lavenderblush');
  $container1.on('click', () => {
    if(this === self) {
      console.log('maintained scope');
    } else if (this === $container1[0]) {
      console.log('scope re-defined');
    }
  });

  $container2.on('click', function() {
    if(this === self) {
      console.log('maintained scope');
    } else if (this === $container2[0]) {
      console.log('scope re-defined');
    }
  });
});


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
