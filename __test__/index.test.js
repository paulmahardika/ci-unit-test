const calculate = require('../index');

describe('#calculate', () => {
  it('should return 4', () => {
    const result = calculate(2, 2);

    expect(result).toEqual(4);
  });
});
