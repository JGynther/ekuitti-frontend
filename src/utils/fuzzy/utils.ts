const splitToTokens = (string: string) => {
  // prettier-ignore
  const separators = ["(", ")", "[", "]", "{", "}", "=", "-", "/", "\\", ".", ",", ":", ";"];
  return splitMultipleSeparators(string, separators);
};

const splitMultipleSeparators = (string: string, separators: string[]) => {
  const len = separators.length;
  for (let i = 0; i < len; ++i) {
    string = string.replaceAll(separators[i], " ");
  }
  return string.split(" ");
};

export { splitToTokens, splitMultipleSeparators };
