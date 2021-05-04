xdescribe('toBeDefined matcher', () => {
  it('shoud validate any defined value', () => {
    const num = 10;
    expect(num).toBeDefined();

    expect(NaN).toBeDefined();
    expect(null).toBeDefined();
  });

  it('shoud not validate undefined', () => {
    // const implicityUndefined;
    const explicitlyUndefined = undefined;

    // expect(implicityUndefined).not.toBeDefined();
    expect(explicitlyUndefined).not.toBeDefined();
  });
});
