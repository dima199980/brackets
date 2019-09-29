function check(str, bracketsConfig) {

  const strElements = str.split("");
  let result;

  while (strElements.length > 0) {

    result = false;

    for (let i = 0, strLength = strElements.length; i < strLength; i++) {

      for (let j = 0, bracketConfLength = bracketsConfig.length; j < bracketConfLength; j++)

        if (strElements[i] === bracketsConfig[j][0] && strElements[i + 1] === bracketsConfig[j][1]) {

          strElements.splice(i, 2);
          result = true;
        }
    }
    if (!result) break;
  }
  
  return result;
}

module.exports = {
  check
}