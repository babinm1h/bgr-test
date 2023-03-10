export const formatDate = (num: number) => {
  const date = new Date(num * 1000);
  return date.toLocaleDateString("ru");
};
