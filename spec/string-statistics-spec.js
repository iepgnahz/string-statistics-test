require('should');
const stringStatistics = require('../src/string-statistics');

describe('string_statistics', function () {

  const input = "I have an apple 0123456789 @#$%";
  const expectedResult = { letter: 12, number: 10, space: 5, special_characters: 4 };

  it('统计出字符串中字母、空格、数字和其他字符的个数', function () {

    const result = stringStatistics(input);
    result.should.eql(expectedResult);
  });
});