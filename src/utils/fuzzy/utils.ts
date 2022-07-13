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

const highlightedString = (string: string, matching: boolean[]) => {
  let highlighted = "";
  let open = false;

  for (let i = 0; i < string.length; ++i) {
    if (matching[i] && !open) {
      open = true;
      highlighted += "<b>";
    }

    if (!matching[i] && open) {
      open = false;
      highlighted += "</b>";
    }

    highlighted += string[i];
  }

  return highlighted;
};

export { splitToTokens, splitMultipleSeparators, highlightedString };
