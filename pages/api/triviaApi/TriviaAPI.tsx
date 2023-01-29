export const getQuestions = async (
  amount: number,
  difficulty: string,
  category: string
) => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${category}&type=multiple`
  );
  const data = await response.json();
  return data;
};

export const getAllCategories = async () => {
  const response = await fetch("https://opentdb.com/api_category.php");
  const data = await response.json();
  return data;
};
