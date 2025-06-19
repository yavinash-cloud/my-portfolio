export const getYearsOfExperience = () => {
  const start = new Date("2019-03-01");
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();

  // If current month is before March, subtract 1
  if (now.getMonth() < 2) {
    years -= 1;
  }

  return years;
};
