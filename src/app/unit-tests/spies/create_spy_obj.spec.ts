xdescribe('createSpyObj', () => {
    it('should test an object with a set of spies', () => {
        const TaxAuthority = jasmine.createSpyObj('TaxAuthority', ['irs', 'iva', 'irc']);
        TaxAuthority.irs();
        TaxAuthority.iva(23);
        TaxAuthority.irc.and.returnValue(10);

        expect(TaxAuthority.irs).toHaveBeenCalled();
        expect(TaxAuthority.iva).toHaveBeenCalledWith(23);
        expect(TaxAuthority.irc(1, 1, 1)).toEqual(10);
    });
});