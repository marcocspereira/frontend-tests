/**
 * - serve para verificar se um objeto ou variável é diferente de null ou undefined
 * - não verifica o tipo de objecto ou variável
 * - pode ser utilizado em spies para certificar que um dado valor foi passado como parâmetro
 */

/**
describe('jasmine.anything', () => {
    it('should validate the params value type', () => {
        const example1 = jasmine.createSpyObj('example', ['first', 'second']);
        const example2 = jasmine.createSpy('third').and.returnValue(4);

        example1.first(10);
        example1.second('10');
        example2(10);

        expect(example1.first).toHaveBeenCalledWith(jasmine.anything());
        expect(example1.second).toHaveBeenCalledWith(jasmine.anything());
        expect(example2).toEqual(jasmine.anything());
    });
});
*/
