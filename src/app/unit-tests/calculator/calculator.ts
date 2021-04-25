export class Calculator {
  constructor() {}

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

  factorial(val: number): number {
    if (val < 0) {
      throw new Error('Please provide a number >= 0');
    } else if (val == 1 || val == 0) {
      return 1;
    } else {
      return val * this.factorial(val - 1);
    }
  }
}
