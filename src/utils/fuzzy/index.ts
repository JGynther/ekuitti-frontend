import generalizedMongueElkan from "@utils/fuzzy/generalizedMongueElkan";

const find = (string: string[], query: string, n: number = 10) => {
  const scores = string.map((s) => {
    return { string: s, score: score(s, query) };
  });
  const sorted = scores.sort((a, b) => b.score - a.score);
  return sorted.slice(0, n);
};

const score = (string: string, query: string) => {
  const tokensString = splitToTokens(string);
  const tokensQuery = splitToTokens(query);
  return generalizedMongueElkan(tokensString, tokensQuery);
};

const splitToTokens = (string: string) => {
  return string.split(" ");
};

const fuzzy = {
  find: find,
  score: score,
};

export default fuzzy;
export { score, find };
