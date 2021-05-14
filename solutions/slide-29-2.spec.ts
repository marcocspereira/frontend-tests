/**
 * TODO: run this suite and update the spec accordingly
 */

describe('toBe matcher', () => {
  it('shoud validate primitive data type, such boolean', () => {
    expect(true).toBe(true);
  });

  it('shoud validate primitive data type, such string', () => {
    expect('TaxIt').toBe('TaxIt');
  });

  it('shoud validate an object', () => {
    const obj1 = { val: true };
    const obj2 = { val: true };
    expect(obj1).toEqual(obj2);
    // or
    // expect(obj1).not.toBe(obj2);
  });
});
