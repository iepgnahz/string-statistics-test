function stringStatistics(string) {
  //在这里写入代码
  const statistics = { letter: 0, number: 0, space: 0, special_characters: 0 };
  const characters = string.split('');

  characters.forEach(function(char) {
    _parseCharacter(char, statistics);
  });

  return statistics;
}

function _parseCharacter(char, statistics) {
  if (_isLetter(char)) {
    statistics.letter ++;
    return
  }
  if (_isNumber(char)) {
    statistics.number ++;
    return
  }
  if (_isSpace(char)) {
    statistics.space ++;
    return
  }
  statistics.special_characters ++;
}

function _isLetter(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

function _isNumber(char) {
  return char >= '0' && char <= '9';
}

function _isSpace(char) {
  return char === ' ';
}

module.exports = stringStatistics;
