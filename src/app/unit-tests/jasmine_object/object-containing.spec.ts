/**
 * - serve para verificar se determinada chave ou valor existe num objecto
 * - recebe como parâmetro o bloco a ser verificado no objecto
 */

xdescribe('jasmine.objectContaining', () => {
    it('should validate if a given key:value pair exists', () => {
        const person = { name: 'Eusebio', birthYear: 1942 };

        expect(person).toEqual(jasmine.objectContaining({ name: 'Eusebio' }));
        expect(person).toEqual(jasmine.objectContaining({ birthYear: 1942 }));
        expect(person).toEqual(jasmine.objectContaining({ name: 'Eusebio', birthYear: 1942 }));
    });
});