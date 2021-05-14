describe('toEqual matcher', () => {
  it('shoud validate primitive data type, such boolean', () => {
    expect(true).toEqual(true);
  });

  it('shoud validate primitive data type, such string', () => {
    expect('TaxIt').toEqual('TaxIt');
  });

  it('shoud validate an object', () => {
    const obj1 = { val: true };
    const obj2 = { val: true };
    expect(obj1).toEqual(obj2);
  });
});
