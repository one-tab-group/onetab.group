export const sequentialPromise = async (tasks: Function[]) => {
  const results = []
  for (const task of tasks) {
    results.push(await task())
  }
  return results
}
