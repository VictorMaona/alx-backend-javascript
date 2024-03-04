export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* no-unused-vars eslint-disable */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }
  /* enable no-unused-vars for eslint */

  return [task, task2];
}
