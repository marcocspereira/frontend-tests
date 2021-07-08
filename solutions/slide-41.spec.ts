import { Calculator } from './calculator';

// introducing async calls

describe('Async calls', () => {
  let calc: Calculator;

  beforeEach(() => {
    calc = new Calculator();
  });

  it('should work with async/await', async () => {
    const result = await calc.delayedSum(2, 3);
    expect(result).toEqual(5);
  });

  it('should work with expectAsync', async () => {
    const aPromise = calc.delayedSum(2, 3);
    await expectAsync(aPromise).toBeResolved();
    await expectAsync(aPromise).toBeResolvedTo(5);
  });

  it('should reject when at least one param is 0', async () => {
    const aPromise = calc.delayedSum(2, 0);
    await expectAsync(aPromise).toBeRejected();
    await expectAsync(aPromise).toBeRejectedWith(
      jasmine.stringMatching('do not accept')
    );
  });
});
