// introduce the problem to share state between tests

import { Calculator } from './calculator';

describe('Calculator', () => {
  let calc: Calculator;

  describe('counter property', () => {
    /**
     * Ao fazer desta forma, como partilhamos a instância de calc entre testes,
     * vai haver alteração e partilha de estados.
     * VAI DAR ERRO UM DELES
     */
    calc = new Calculator();
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
