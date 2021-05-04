xdescribe('toMatch matcher', () => {
  it('shoud validate with a string', () => {
    const text = 'Jasmine';
    expect(text).toMatch('Jasmine');
  });

  it('shoud validate with regular expressions', () => {
    const text = 'Jasmine';
    const postcode = '1070-100';
    // i to use case-insensitive mode, otherwise fails for this scenario
    expect(text).toMatch(/jasmine/i);
    expect(postcode).toMatch(/^\d{4}-\d{3}$/);
  });
});
