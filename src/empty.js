export class Empty {
  /**
   * Gets indexes of empty values in an array. An empty value is null, undefined, empty string or an array with a length of zero.
   * 
   * @param {Array} array The array to measure the emptiness of.
   * @param {Array.<number>} index An array containing the actual index of the array. This is used for the recursive call and is most likely not needed on the initial call.
   * @returns {Array} An array containing indexes of empty values.
   */
  getIndexes(array, index = []) {
    index.push(0)
		if (!array.length) return index
    let result = []
    while (index[index.length - 1] < array.length) {
      let i = index[index.length - 1]
      if (Array.isArray(array[i])) {
        result.push.apply(result, [this.getIndexes(array[i], [...index])])
      } else if (!array.length || [null, undefined, ''].includes(array[i])) {
        result.push.apply(result, [[...index]])
      }
      index[index.length - 1]++
    }
    index.pop()
    return result
  }
}
