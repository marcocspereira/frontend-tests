xdescribe('toBeFalsy matcher', () => {
  it('shoud validate falsy values', () => {
    const caseUndefined = undefined;
    const caseNaN = NaN;
    const caseZero = 0;
    const caseEmpty = '';
    const caseNull = null;

    expect(caseUndefined).toBeFalsy();
    expect(caseNaN).toBeFalsy();
    expect(caseZero).toBeFalsy();
    expect(caseEmpty).toBeFalsy();
    expect(caseNull).toBeFalsy();
  });

  it('shoud not validate not falsy values', () => {
    const caseNumber = 1;
    const caseText = 'TaxIT';
    const caseTrue = true;
    expect(caseNumber).not.toBeFalsy();
    expect(caseText).not.toBeFalsy();
    expect(caseTrue).not.toBeFalsy();
  });
});
