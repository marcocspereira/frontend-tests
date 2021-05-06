/**
 * - serve para verificar uma substring dentro de outra string
 * - também é valido com RegEx
 * - pode ser utilizado com spies
 * - recebe como parâmetro a substring ou RegEx a validar no teste
 */

xdescribe('jasmine.stringMatching', () => {
    let text: any;

    beforeAll(() => {
        text = jasmine.createSpy('textFunction');
    });

    it('should validate through a substring if a given spy was called with a certain string', () => {
        text('TaxIT is here');

        expect(text).toHaveBeenCalledWith(jasmine.stringMatching('TaxIT'));
    });

    it('should validate through a RegEx if a given spy was called with a given string', () => {
        text('TaxIT is here');

        expect(text).toHaveBeenCalledWith(jasmine.stringMatching(/taxit/i));
    });

    it('should validate through a substring if a given spy was called with a given string', () => {
        expect('TaxIT is here').toEqual(jasmine.stringMatching('TaxIT'));
    });

});