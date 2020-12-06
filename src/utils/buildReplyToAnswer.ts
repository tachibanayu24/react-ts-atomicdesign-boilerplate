const REPLIES_TO_CORRECT = ["Correct!", "Exactly!", "Genius!", "That's great."];
const REPLIES_TO_INCORRECT = ["Incorrect", "Nice try!", "Hmmm...", "Wrong"];

const getRandomItem = (array: string[]) =>
  array[Math.floor(Math.random() * array.length)];

/**
 * Return a reply to a answer at random
 * @param isCorrect
 * @return reply to answet
 */
export const buildReplyToAnswer = (isCorrect?: boolean) => {
  if (isCorrect === null) return null;

  return isCorrect
    ? getRandomItem(REPLIES_TO_CORRECT)
    : getRandomItem(REPLIES_TO_INCORRECT);
};
