import wineData from "../data/Wine-Data.json";

//Filter the required data (Alcohol and Magnesium):

export const getBarchartData = () => {
  const alcohol = [...new Set(wineData.map((item) => item["Alcohol"]))].sort(); // Alcohol categories
  const minMagnesium = alcohol.map((item) => {
    const magnesiumValues = wineData
      .filter((wine) => wine["Alcohol"] === item)
      .map((wine) => wine["Magnesium"]);
    return Math.min(...magnesiumValues); // Minimum Magnesium value for each alcohol category
  });
  return { alcohol, minMagnesium };
};
