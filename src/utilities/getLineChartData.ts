import wineData from "../data/Wine-Data.json";

//Filter the required data (Flavanoids and Ash):

export const getLineChartData = () => {
  const flavanoids = wineData.map((item: any) => item["Flavanoids"]); // Flavanoids
  const ash = wineData.map((item: any) => item["Ash"]); // Ash
  return { flavanoids, ash };
};
