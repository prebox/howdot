import { Deep } from './deep.js'
import { Empty } from './empty.js'

export default class How {
  static deep = new Deep()
  static empty = new Empty()

  /**
   * Gets the depth of an array.
   * 
   * @param {Array} array The array to measure the depth of.
   * @returns {number} A number representing the depth of the array. Returns zero if input is not of type array.
   */
  static deepIs(array) {
    return this.deep.getDepth(array)
  }

  /**
   * Gets indexes of empty values in an array. An empty value is null, undefined, an empty string or an array with a length of zero.
   * 
   * @param {Array} array The array to measure the emptiness of.
   * @returns {Array} An array containing indexes of empty values.
   */
  static emptyIs(array) {
    return this.empty.getIndexes(array)
  }
}
