/**
 * - serve para verificar se um valor é de um dado tipo
 * - pode ser utilizado para comparar valores reais ou valores utilizados em spies
 * - é util para verificar se um método foi chamado com um dado argumento de determinado tipo, sem importar com o valor real
 */

xdescribe('jasmine.any', () => {
    it('should validate the params value type', () => {
        const example1 = jasmine.createSpyObj('example', ['first', 'second']);

        example1.first(10);
        example1.second('10');

        expect(example1.first).toHaveBeenCalledWith(jasmine.any(Number));
        expect(example1.second).toHaveBeenCalledWith(jasmine.any(String));
    });
});