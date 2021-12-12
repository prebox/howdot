export class Deep {
  /**
   * A fast method for obtaining the depth of an array.
   * 
   * @param {Array} array The array to measure the depth of.
   * @returns {number} A number representing the depth of the array.
   */
  getDepth(array) {
    if (Array.isArray(array)) {
      return 1 + array.reduce(function (max, item) {
        return Math.max(max, item ? this.getDepth(item) : 0)
      }.bind(this), 0)
    } else {
      return 0
    }
  }
}