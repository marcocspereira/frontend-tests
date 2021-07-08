import { Calculator } from './calculator';
/**
 * to introduce:
 *  - .and.returnValue()
 *  - .and.returnValues()
 *  - .and.callFake()
 */

describe('Calculator', () => {
  let calc: Calculator;

  beforeAll(() => {
    calc = new Calculator();
    spyOn(calc, 'sum').withArgs(1, 2).and.returnValue(20);
    spyOn(calc, 'subtract').and.returnValues(4, 8);
    spyOn(calc, 'multiply').and.callFake((first, second) => {
      let result = 0;
      for (let i = 0; i < first; i++) {
        result += second;
      }
      console.log(`${first} * ${second} = ${result}`);
      return result;
    });
  });

  it('should return a fake value for -sum- method', () => {
    expect(calc.sum(1, 2)).toEqual(20);
    expect(calc.sum(1, 2)).toBeDefined();
  });

  it('should return fake values first 2 calls to -subtract- method', () => {
    expect(calc.subtract(14, 12)).toEqual(4);
    expect(calc.subtract(155, 22)).toEqual(8);
    expect(calc.subtract(155, 221)).toBeUndefined();
  });

  it('should call a fake implementation when calculating a multiplication', () => {
    expect(calc.multiply(3, 2)).toEqual(6);
  });
});
