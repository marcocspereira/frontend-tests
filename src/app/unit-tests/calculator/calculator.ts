export class Calculator {
  counter: number;
  constructor() {
    this.counter = 0;
  }

  sum(val1: number, val2: number): number {
    return val1 + val2;
  }

  subtract(val1: number, val2: number): number {
    return val1 - val2;
  }

  multiply(val1: number, val2: number): number {
    return val1 * val2;
  }

  divide(val1: number, val2: number): number {
    return val1 / val2;
  }

  rectangleArea(width: number, length: number): number {
    if (width <= 0 || length <= 0) {
      throw new Error('Please provide width and length >= 0');
    }
    return width * length;
  }

  factorial(val: number): number {
    if (val < 0) {
      throw new Error('Please provide a number >= 0');
    } else if (val == 1 || val == 0) {
      return 1;
    } else {
      return val * this.factorial(val - 1);
    }
  }

  upCounter() {
    this.counter++;
  }

  downCounter() {
    this.counter--;
  }
}
