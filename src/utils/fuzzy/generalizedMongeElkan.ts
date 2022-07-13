import jaroWinkler from "@utils/fuzzy/jaroWinkler";

// https://www.researchgate.net/publication/221629015_Generalized_Mongue-Elkan_Method_for_Approximate_Text_String_Comparison
const generalizedMongeElkan = (
  string: string[],
  query: string[],
  m: number = 5,
  similarity = jaroWinkler
) => {
  let sum = 0;
  const cached_length_string = string.length;
  const cached_length_query = query.length;

  for (let i = 0; i < cached_length_string; ++i) {
    let max_similarity = Number.NEGATIVE_INFINITY;

    for (let j = 0; j < cached_length_query; ++j) {
      max_similarity = Math.max(
        max_similarity,
        similarity(string[i], query[j])
      );
    }

    sum += max_similarity ** m;
  }

  return (sum / cached_length_string) ** (1 / m);
};

export default generalizedMongeElkan;
