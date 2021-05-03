describe('toBeTruthy matcher', () => {
  it('shoud validate truthy values', () => {
    const caseNumber = 1;
    const caseText = 'TaxIT';
    const caseTrue = true;
    expect(caseNumber).toBeTruthy();
    expect(caseText).toBeTruthy();
    expect(caseTrue).toBeTruthy();
  });

  it('shoud not validate not truthy values', () => {
    const caseUndefined = undefined;
    const caseNaN = NaN;
    const caseZero = 0;
    const caseEmpty = '';
    const caseNull = null;

    expect(caseUndefined).not.toBeTruthy();
    expect(caseNaN).not.toBeTruthy();
    expect(caseZero).not.toBeTruthy();
    expect(caseEmpty).not.toBeTruthy();
    expect(caseNull).not.toBeTruthy();
  });
});
