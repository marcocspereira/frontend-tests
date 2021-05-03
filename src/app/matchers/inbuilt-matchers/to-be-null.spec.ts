describe('toBeNull matcher', () => {
  it('shoud validate null value', () => {
    const caseNull = null;
    expect(caseNull).toBeNull();
  });

  it('shoud not validate not null values', () => {
    const caseUndefined = undefined;
    const caseNaN = NaN;
    const caseText = 'TaxIT';

    expect(caseUndefined).not.toBeNull();
    expect(caseNaN).not.toBeNull();
    expect(caseText).not.toBeNull();
  });
});
