export const caloricDemand = (gender: string | undefined, weight: number, height: number, age: number) => {
  if (gender === 'Kobieta') {
    return Math.round(655.1 + 9.567 * weight + 1.85 * height - 4.68 * age);
  } else {
    return Math.round(66.47 + 13.7 * weight + 5 * height - 6.76 * age);
  }
};
