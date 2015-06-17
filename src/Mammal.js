class Mammal {
  constructor(legs) {
    this.nmbrOfLegs = legs
  }
  walk() {
    return `I walk with ${this.nmbrOfLegs} legs`;
  }
};

export default Mammal;
