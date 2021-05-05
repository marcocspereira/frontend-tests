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

  upCounter(): void {
    this.counter++;
  }

  downCounter(): void {
    this.counter--;
  }

  /**
   * 
   * Equation: ax^2 + bx + c = 0
   * @param a coefficient
   * @param b coefficient
   * @param c coefficient
   * @returns an array with numeric values for x1 and x2
   */
  generalQuadraticEquation(a: number, b: number, c: number): Array<number> {
    if (a === 0) {
      throw new Error('Coefficient -a- cannot be 0');
    }

    // x = (-b +- sqrt(b^2 - 4ac))/ (2a)
    const root = Math.sqrt(this.subtract(Math.pow(b, 2), this.multiply(4, this.multiply(a, c))));
    const denominator = this.multiply(2, a);

    const x1 = this.divide(this.sum(-b, root), denominator);
    const x2 = this.divide(this.sum(-b, -root), denominator);

    return [x1, x2]

  }
}
