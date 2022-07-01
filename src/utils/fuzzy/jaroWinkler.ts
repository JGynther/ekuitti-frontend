// https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance#Jaro%E2%80%93Winkler_similarity
const jaroWinkler = (string: string, query: string, p: number = 0.1) => {
  // P should not exceed 0.25
  p = Math.min(0.25, p);

  const jaro_score = jaro(string, query);
  const min_len = Math.min(string.length, query.length);

  let prefix = 0;

  for (let i = 0; i < min_len; ++i) {
    if (string[i] !== query[i]) break;
    ++prefix;
  }

  // Prefix should not exceed 4
  prefix = Math.min(4, prefix);

  return jaro_score + prefix * p * (1 - jaro_score);
};

// Jaro similarity between 2 strings
// More: https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance#Jaro_similarity
const jaro = (string: string, query: string) => {
  const len_s1 = string.length;
  const len_s2 = query.length;

  const max_len = Math.max(len_s1, len_s2);
  const max_dist = Math.floor(max_len / 2) - 1;

  let matching = 0;
  const matching_s1 = Array(len_s1).fill(false);
  const matching_s2 = Array(len_s2).fill(false);

  for (let i = 0; i < len_s1; ++i) {
    // Define start and end to iterate minimal amount per char
    // Also avoids checking max distance conditionally
    const start = Math.max(0, i - max_dist);
    const end = Math.min(len_s2, i + max_dist + 1);

    for (let j = start; j < end; ++j) {
      if (matching_s2[j]) continue;
      if (string[i] !== query[j]) continue;

      matching_s1[i] = matching_s2[j] = true;
      ++matching;
      break;
    }
  }

  if (matching === 0) return 0.0;

  let transpositions = 0;
  let k = 0;

  for (let i = 0; i < len_s1; ++i) {
    if (!matching_s1[i]) continue;
    while (!matching_s2[k]) ++k;
    if (string[i] !== query[k]) ++transpositions;
    ++k;
  }

  transpositions /= 2;

  return (
    (matching / len_s1 +
      matching / len_s2 +
      (matching - transpositions) / matching) /
    3
  );
};

export default jaroWinkler;
export { jaro };
