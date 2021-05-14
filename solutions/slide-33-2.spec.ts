// to introduce afterEach

import { Calculator } from './calculator';

describe('Calculator', () => {
  let calc: Calculator = new Calculator();
  afterEach(() => {
    calc.counter = 0;
  });
  describe('when calc an addition', () => {
    it('should be able to calculate sum of two numbers', () => {
      expect(calc.sum(1, 2)).toEqual(3);
    });
  });

  describe('when calc a subtraction', () => {
    it('should be able to calculate subtract of two numbers', () => {
      expect(calc.subtract(3, 2)).toEqual(1);
    });
  });

  describe('when calc a multiplication', () => {
    it('should be able to calculate multiply of two numbers', () => {
      expect(calc.multiply(2, 3)).toEqual(6);
    });

    it('should be able to return a positive output when 2 negative inputs are provided', () => {
      expect(calc.multiply(-2, -3)).toBeGreaterThan(0);
    });
  });

  describe('when calc a division', () => {
    it('should be able to calculate division of two numbers', () => {
      expect(calc.divide(6, 3)).toEqual(2);
    });

    it('should return a NaN when 0 / 0', () => {
      expect(calc.divide(0, 0)).toBeNaN();
    });
  });

  describe('when calc a factorial', () => {
    it('should be able to calculate factorial of a number', () => {
      expect(calc.factorial(5)).toEqual(120);
    });

    it('should throw an error when a negative number is provided', () => {
      const negativeInput = () => calc.factorial(-1);
      expect(negativeInput).toThrowError('Please provide a number >= 0');
      /**
       * Usar diretamente o .toThrowError(...) ou .toThrow(...) vai falhar
       * porque estas funções vão tentar invocar diretamente o método.
       *
       * Como tal temos que usar uma função, pois de outra forma o erro já terá
       * sido lançado fora do scope
       */
    });
  });

  describe('counter property', () => {
    it('should increment when hit upCounter', () => {
      calc.upCounter();
      expect(calc.counter).toBe(1);
    });

    it('should decrement when hit downCounter', () => {
      calc.downCounter();
      expect(calc.counter).toBe(-1);
    });
  });
});
