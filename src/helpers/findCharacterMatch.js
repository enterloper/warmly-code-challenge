const findCharacterMatch = (value, options = []) => {
  if (!value) return options;
  const regex1 = RegExp(`${value}*`, "i");
  const output = options.filter((option) => {
    const match = regex1.exec(option);
    if (match && match[0]) {
      return match[0] && match[0].length === value.length;
    }
    return false;
  });

  return output;
};

export default findCharacterMatch;
/** needed tests
 * check for match
 * check against lowercase
 * check against uppercase
 * check against mixed case
 */
