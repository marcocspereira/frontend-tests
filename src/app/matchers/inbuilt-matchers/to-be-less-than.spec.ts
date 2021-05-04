xdescribe('toBeLessThan matcher', () => {
  it('shoud validate a smaller value as number', () => {
    const casePi = 3.1415;

    expect(casePi).toBeLessThan(4);
  });

  it('shoud validate a smaller value as string', () => {
    const casePi = '3.1415';

    expect(casePi).toBeLessThan(4);
  });
});
