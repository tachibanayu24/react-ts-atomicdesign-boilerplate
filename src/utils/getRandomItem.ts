/**
 * Return a random one item from the param array
 * @param array
 */
export const getRandomItem = (array: string[]): string =>
  array[Math.floor(Math.random() * array.length)];
