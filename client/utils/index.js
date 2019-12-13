export const removeHTMLTags = str => {
  return str.replace(/(<([^>]+)>)/gi, '');
};

export const getTotalRatings = ratings => {
  return Object.values(ratings).reduce((acc, curr) => {
    if (curr !== undefined) return acc + curr;
  });
};

export const getAverageRating = ratings => {
  const oneCount = ratings[1] || 0;
  const twoCount = ratings[2] || 0;
  const threeCount = ratings[3] || 0;
  const fourCount = ratings[4] || 0;
  const fiveCount = ratings[5] || 0;
  const sum = oneCount + twoCount + threeCount + fourCount + fiveCount;

  const average = (
    (oneCount + twoCount * 2 + threeCount * 3 + fourCount * 4 + fiveCount * 5) /
    sum
  ).toFixed(2);

  return {
    ...ratings,
    average
  };
};
