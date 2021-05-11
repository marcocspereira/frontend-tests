/**
describe('toContain matcher', () => {
  it('shoud validate with a string', () => {
    const text = 'TaxIT Porto';
    expect(text).toContain('Porto');
    expect(text).not.toContain('Viseu');
  });

  it('shoud validate with an array', () => {
    const array = ['lopes', 'da', 'silva'];
    expect(array).toContain('silva');
    expect(array).not.toContain('do');
  });
});
*/
