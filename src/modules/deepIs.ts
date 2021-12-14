function deepIs(array:Array<any>): number {
  if (Array.isArray(array)) {
    return 1 + array.reduce(function (max: number, item: Array<any>) {
      return Math.max(max, item ? deepIs(item) : 0)
    }, 0)
  } else {
    return 0
  }
}

export default deepIs
