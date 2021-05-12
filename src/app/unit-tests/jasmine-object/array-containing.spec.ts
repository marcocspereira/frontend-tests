/**
 * - serve para verificar se determinados valores existem num array
 * - recebe como parâmetro o array com os valores a serem verificados
 */

/**
describe('jasmine.arrayContaining', () => {
    it('should validate if a given key:value pair exists', () => {
        const array = [10, 20, 30, 40, 50];

        expect(array).toEqual(jasmine.arrayContaining([10]));
        expect(array).toEqual(jasmine.arrayContaining([20, 30, 40]));
        expect(array).not.toEqual(jasmine.arrayContaining([69]));
    });
});
 */
