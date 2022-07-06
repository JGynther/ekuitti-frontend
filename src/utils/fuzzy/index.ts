import type { Find, Search, Single } from "@typings/fuzzy";
import { splitToTokens } from "@utils/fuzzy/utils";
import generalizedMongueElkan from "@utils/fuzzy/generalizedMongueElkan";

const find = ({ data, query, n = 10, threshold = 0.5, key }: Find) => {
  const scores =
    key === undefined
      ? score({ data, query, threshold })
      : score({ data, query, key, threshold });

  const sorted = scores.sort((a, b) => b.score - a.score);

  return sorted.slice(0, n);
};

const score = ({ data, query, key, threshold = 0.5 }: Search) => {
  const queryCached = splitToTokens(query.toLowerCase());
  const length = data.length;
  const scores = [];

  for (let i = 0; i < length; ++i) {
    let string = key ? data[i][key] : data[i];
    string = string.toLowerCase();
    const score = single({ string, query: queryCached, isCached: true });

    if (score < threshold) continue;

    scores.push({ string, score, _index: i, meta: key && data[i].meta });
  }

  return scores;
};

const single = ({ string, query, isCached }: Single) => {
  const tokensString = splitToTokens(string.trim());
  const tokensQuery = isCached ? query : splitToTokens(query.trim());
  return generalizedMongueElkan(tokensString, tokensQuery);
};

const fuzzy = {
  find: find,
  score: score,
  single: single,
};

export default fuzzy;
export { find, score, single };
