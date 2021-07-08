import { Calculator } from './calculator';
// to introduce spyOn

describe('Calculator', () => {
  let calc: Calculator;

  beforeEach(() => {
    calc = new Calculator();
  });

  // now with spies
  describe('simple operations with spies', () => {
    beforeEach(() => {
      spyOn(calc, 'sum');
      spyOn(calc, 'subtract');
      spyOn(calc, 'multiply');
      spyOn(calc, 'divide');
    });

    it('should call simple operations as undefined as default', () => {
      expect(calc.sum(1, 1)).toBeUndefined();
      expect(calc.subtract(1, 1)).toBeUndefined();
      expect(calc.multiply(1, 1)).toBeUndefined();
      expect(calc.divide(1, 1)).toBeUndefined();
    });

    it('should certify that simple operations have been called', () => {
      calc.sum(1, 1);
      calc.subtract(1, 1);
      calc.divide(1, 1);
      calc.divide(1, 1);
      expect(calc.sum).toHaveBeenCalled();
      expect(calc.subtract).toHaveBeenCalledWith(1, 1);
      expect(calc.divide).toHaveBeenCalledTimes(2);
    });
  });
});
