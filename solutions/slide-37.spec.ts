import { Calculator } from './calculator';
// to introduce spyOn

describe('Calculator', () => {
  let calc: Calculator;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('generalQuadraticEquation', () => {
    // with dependency
    it('should calculate the equation', () => {
      const result = calc.generalQuadraticEquation(1, -1, -12);
      expect(result).toEqual([4, -3]);
    });

    it('should throw an error when coefficient -a- is 0', () => {
      const result = () => {
        calc.generalQuadraticEquation(0, -1, -12);
      };
      expect(result).toThrowError('Coefficient -a- cannot be 0');
    });

    it('should apply spies to simple operations when calculating general quadratic equation', () => {
      const sumSpy = spyOn(calc, 'sum');
      const subtractSpy = spyOn(calc, 'subtract');
      const divideSpy = spyOn(calc, 'divide');
      calc.generalQuadraticEquation(1, -1, -12);
      expect(sumSpy).toHaveBeenCalled();
      expect(subtractSpy).toHaveBeenCalledWith(1, -48);
      expect(divideSpy).toHaveBeenCalledTimes(2);
    });

    it('should allow to test to run the real multiply operation', () => {
      const sumSpy = spyOn(calc, 'sum');
      const subtractSpy = spyOn(calc, 'subtract');
      const divideSpy = spyOn(calc, 'divide');
      spyOn(calc, 'multiply').and.callThrough();
      calc.generalQuadraticEquation(1, -1, -12);
      expect(sumSpy).toHaveBeenCalled();
      expect(subtractSpy).toHaveBeenCalledWith(1, -48);
      expect(divideSpy).toHaveBeenCalledTimes(2);
    });
  });
});
