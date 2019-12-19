import { getProductInfo } from '../greenfieldAPI/index.js';

export const removeHTMLTags = str => {
  return str.replace(/(<([^>]+)>)/gi, '');
};
export const formatDate = date => {
  return new Date(date).toLocaleDateString("en-US", {
    dateStyle: "long"
  })
}
export const isValidEmail = emailAddress => {
  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress));
};
export const getTotalRatings = ratings => {
  const RatingsWithoutAverage = { ...ratings, average: 0 };
  return Object.values(RatingsWithoutAverage).reduce((acc, curr) => {
    if (curr !== undefined) return acc + curr;
    else return acc;
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

  if (isNaN(average)) {
    return 0;
  } else {
    return average;
  }
};

export const getProductsInfo = ids => {
  let productsPromises = ids.map((id) => {
    return getProductInfo(id);
  });
  return Promise.all(productsPromises)
  .then(results => {
    let products = results.map((result) => {
      return result.data;
    })
    return products;
  })
  .catch(error => console.error(error));
};

export const combineProductFeatures = (mainFeatures, comparedFeatures) => {
  let combined = {};
  for (let main of mainFeatures) {
    if (combined[main.feature] === undefined) {

      combined[main.feature] = {
        feature: main.feature,
        mainValue: main.value,
        comparedValue: null
      }

      for (let compared of comparedFeatures) {
        if (compared.feature === main.feature) {
          combined[main.feature].comparedValue = compared.value;
          break;
        }
      }
    }
  }
  
  for (let compared of comparedFeatures) {
    if (combined[compared.feature]) {
      continue;
    }
    combined[compared.feature] = {
      feature: compared.feature,
      mainValue: null,
      comparedValue: compared.value
    }
  }
  return combined;
}