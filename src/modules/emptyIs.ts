function emptyIs(array: Array<any>, index: Array<number> = []) {
  index.push(0)
  if (!array.length) return index
  let result: Array<number> = []
  while (index[index.length - 1] < array.length) {
    let config: Array<any> = [null, undefined, '']
    let i = index[index.length - 1]
    if (Array.isArray(array[i])) {
      result.push.apply(result, emptyIs(array[i], [...index]))
    } else if (!array.length || config.includes(array[i])) {
      result.push.apply(result, [...index])
    }
    index[index.length - 1]++
  }
  index.pop()
  return result
}

export default emptyIs
