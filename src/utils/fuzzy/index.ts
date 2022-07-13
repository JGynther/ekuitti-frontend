import type { Find, Search, Single } from "@typings/fuzzy";
import { splitToTokens, highlightedString } from "@utils/fuzzy/utils";
import generalizedMongeElkan from "@utils/fuzzy/generalizedMongeElkan";

const find = ({ data, query, n = 10, threshold = 0.5, key }: Find) => {
  const scores =
    key === undefined
      ? score({ data, query, threshold })
      : score({ data, query, key, threshold });

  const sorted = scores.sort((a, b) => b.score - a.score);

  return sorted.slice(0, n);
};

const score = ({ data, query, key, threshold = 0.5 }: Search) => {
  const queryCached = splitToTokens(query.toLowerCase().trim());
  const length = data.length;
  const scores = [];

  for (let i = 0; i < length; ++i) {
    const original = key ? data[i][key] : data[i];
    const string = original.toLowerCase();
    const score = single({ string, query: queryCached, isCached: true });

    if (score < threshold) continue;

    scores.push({
      string: original,
      score,
      _index: i,
      meta: key && data[i].meta,
    });
  }

  return scores;
};

const single = ({ string, query, isCached }: Single) => {
  const tokensString = splitToTokens(string.trim());
  const tokensQuery = isCached ? query : splitToTokens(query.trim());
  return generalizedMongeElkan(tokensString, tokensQuery);
};

const highlight = (string: string, query: string) => {
  // Searching is case insensitive
  const matchS = string.toLowerCase().trim();
  let matchQ = query.toLowerCase().trim();

  // An array of booleans to determine characters to be highlighted
  const matching = Array(string.length).fill(false);

  // Prioritze matching substrings over characters
  matchQ.split(" ").forEach((q) => {
    const index = matchS.search(q);
    if (index === -1) return;
    for (let i = index; i < index + q.length; ++i) matching[i] = true;
    matchQ = matchQ.replace(q, "");
  });

  // Find matching characters
  for (let i = 0; i < query.length; ++i) {
    for (let j = 0; j < string.length; ++j) {
      if (matching[j]) continue;
      if (matchS[j] !== matchQ[i]) continue;
      matching[j] = true;
      break;
    }
  }

  return highlightedString(string, matching);
};

const fuzzy = {
  find: find,
  score: score,
  single: single,
  highlight: highlight,
};

export default fuzzy;
export { find, score, single, highlight };
