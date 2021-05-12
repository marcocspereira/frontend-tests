import { Calculator } from '../calculator/calculator';

/**
describe('createSpy', () => {

    it('should test a bare spy', () => {
        const rectangleArea = jasmine.createSpy("rectangleArea").and.returnValue(4);
        rectangleArea(1, 1);

        expect(rectangleArea).toHaveBeenCalled();
        expect(rectangleArea(1, 1)).toEqual(4);
    });

    it('should test a bare spy with a known object', () => {
        const calc: Calculator = new Calculator();
        calc.sum = jasmine.createSpy().and.returnValue(4);
        const result = calc.sum(1, 1);

        expect(calc.sum).toHaveBeenCalled();
        expect(result).toEqual(4);
    });

    it('should test a bare spy with fake implementation', () => {
        const rectangleArea = jasmine.createSpy("rectangleArea").and.callFake((w, l) => {
            return w * l;
        })
        const result = rectangleArea(2, 3);

        expect(rectangleArea).toHaveBeenCalled();
        expect(result).toEqual(6);
    });
});
*/
