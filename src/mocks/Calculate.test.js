import calculate from '../logic/calculate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}
describe('calculate', () => {
  it('should set object properties to null if button is AC', () => {
    expect(calculate({}, 'AC')).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  it('should return true if number range is valid', () => {
    expect(isNumber('0')).toBe(true);
    expect(isNumber('1')).toBe(true);
    expect(isNumber('2')).toBe(true);
    expect(isNumber('3')).toBe(true);
    expect(isNumber('4')).toBe(true);
    expect(isNumber('5')).toBe(true);
    expect(isNumber('6')).toBe(true);
    expect(isNumber('7')).toBe(true);
    expect(isNumber('8')).toBe(true);
    expect(isNumber('9')).toBe(true);
  });
  it('should return false if not a valid number', () => {
    expect(isNumber('a')).toBe(false);
  });
  it('should set next to null if button is AC', () => {
    expect(calculate({ next: '1' }, 'AC')).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  it('should return an empty object if button and next are 0', () => {
    expect(calculate({ next: '0' }, '0')).toEqual({});
  });
  it('should return an empty object if button equals . and total includes .', () => {
    expect(calculate({ total: '1.' }, '.')).toEqual({});
  });
  it('should add if button equals + and total and next exist', () => {
    expect(calculate({ total: '1', next: '2', operation: '+' }, '=')).toEqual({
      total: '3',
      next: null,
      operation: null,
    });
  });
  it('should subtract if button equals - and total and next exist', () => {
    expect(calculate({ total: '1', next: '2', operation: '-' }, '=')).toEqual({
      total: '-1',
      next: null,
      operation: null,
    });
  });
  it('should multiply if button equals x and total and next exist', () => {
    expect(calculate({ total: '10', next: '7', operation: 'x' }, '=')).toEqual({
      total: '70',
      next: null,
      operation: null,
    });
  });
  it('should divide if button equals ÷ and total and next exist', () => {
    expect(calculate({ total: '100', next: '3', operation: '÷' }, '=')).toEqual(
      {
        total: '33.33333333333333333333',
        next: null,
        operation: null,
      },
    );
  });
  it('should return a negative number if number is positive and button equals +/-', () => {
    expect(calculate({ total: '1' }, '+/-')).toEqual({
      total: '-1',
    });
  });
});
