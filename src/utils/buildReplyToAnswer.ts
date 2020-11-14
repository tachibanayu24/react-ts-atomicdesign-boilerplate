import { ResolvePlugin } from "webpack";

const REPLIES_TO_CORRECT = ["Correct!", "Exactly!", "Genius!", "That's great."];
const REPLIES_TO_INCORRECT = ["Incorrect", "Nice try!", "Hmmm...", "Wrong"];

export const buildReplyToAnswer = (isCorrect?: boolean) => {
  console.log("buildReplyToAnswer");
  console.log(isCorrect);
  if (isCorrect === null) return null;

  return isCorrect
    ? REPLIES_TO_CORRECT[Math.floor(Math.random() * REPLIES_TO_CORRECT.length)]
    : REPLIES_TO_INCORRECT[
        Math.floor(Math.random() * REPLIES_TO_INCORRECT.length)
      ];
};
