xdescribe('toBeUndefined matcher', () => {
  it('shoud validate undefined values', () => {
    const caseUndefined = undefined;
    expect(caseUndefined).toBeUndefined();
  });

  it('shoud not validate false negatives', () => {
    const caseFalse = false;
    const caseNull = null;

    expect(caseFalse).not.toBeUndefined();
    expect(caseNull).not.toBeUndefined();
  });
});
